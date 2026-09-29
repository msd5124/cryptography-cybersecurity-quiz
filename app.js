const pages = {
  landing: document.getElementById('landingPage'),
  registration: document.getElementById('registrationPage'),
  quiz: document.getElementById('quizPage'),
  result: document.getElementById('resultPage'),
  review: document.getElementById('reviewPage')
};

const getStartedBtn = document.getElementById('getStartedBtn');
const registrationForm = document.getElementById('registrationForm');
const registrationError = document.getElementById('registrationError');
const quizForm = document.getElementById('quizForm');
const answerCount = document.getElementById('answerCount');
const progressText = document.getElementById('progressText');
const progressBar = document.getElementById('progressBar');

let participant = { name: '', registerNumber: '' };
let quizQuestions = [];
let submittedAnswers = {};

function showPage(page) {
  Object.values(pages).forEach(p => p.classList.remove('active'));
  pages[page].classList.add('active');
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function shuffle(array) {
  const a = [...array];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function usedRegisters() {
  try { return JSON.parse(localStorage.getItem('quizUsedRegisters') || '[]'); }
  catch { return []; }
}

function registerAsUsed(reg) {
  const list = usedRegisters();
  if (!list.includes(reg)) list.push(reg);
  localStorage.setItem('quizUsedRegisters', JSON.stringify(list));
}

getStartedBtn.addEventListener('click', () => {
  registrationError.textContent = '';
  showPage('registration');
  document.getElementById('studentName').focus();
});

registrationForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('studentName').value.trim();
  const reg = document.getElementById('registerNumber').value.trim();

  if (!name) {
    registrationError.textContent = 'Please enter your name.';
    return;
  }
  if (!/^[0-9]+$/.test(reg)) {
    registrationError.textContent = 'Register number must contain numbers only.';
    return;
  }
  if (usedRegisters().includes(reg)) {
    registrationError.textContent = 'This register number has already completed the quiz on this browser.';
    return;
  }

  participant = { name, registerNumber: reg };
  registerAsUsed(reg);
  submittedAnswers = {};
  buildQuiz();
  showPage('quiz');
});

function buildQuiz() {
  quizQuestions = shuffle(QUESTIONS).map(q => ({
    ...q,
    shuffledOptions: shuffle(q.options.map((text, originalIndex) => ({ text, originalIndex })))
  }));

  quizForm.innerHTML = quizQuestions.map((q, index) => `
    <article class="question-card">
      <div class="question-top">
        <div class="q-number">${index + 1}</div>
        <div style="flex:1">
          <div class="question-text">${escapeHtml(q.question)}</div>
          <div class="options">
            ${q.shuffledOptions.map((opt, optIndex) => `
              <label class="option">
                <input type="radio" name="q-${index}" value="${opt.originalIndex}">
                <span>${String.fromCharCode(65 + optIndex)}. ${escapeHtml(opt.text)}</span>
              </label>
            `).join('')}
          </div>
        </div>
      </div>
    </article>
  `).join('');
  updateProgress();
}

quizForm.addEventListener('change', updateProgress);

function updateProgress() {
  const answered = quizQuestions.reduce((n, _, i) => n + (quizForm.querySelector(`input[name="q-${i}"]:checked`) ? 1 : 0), 0);
  answerCount.textContent = `${answered} / ${quizQuestions.length} answered`;
  progressText.textContent = `${answered} / ${quizQuestions.length}`;
  progressBar.style.width = `${(answered / quizQuestions.length) * 100}%`;
}

quizForm.addEventListener('submit', (e) => {
  e.preventDefault();
  submittedAnswers = {};
  quizQuestions.forEach((q, i) => {
    const selected = quizForm.querySelector(`input[name="q-${i}"]:checked`);
    submittedAnswers[q.id] = selected ? Number(selected.value) : null;
  });

  const score = quizQuestions.reduce((sum, q) => sum + (submittedAnswers[q.id] === q.correctIndex ? 1 : 0), 0);
  renderResult(score);
  showPage('result');
});

function renderResult(score) {
  document.getElementById('scoreNumber').textContent = score;
  document.querySelector('.score-ring').style.setProperty('--score', `${(score / 20) * 100}%`);
  document.getElementById('resultName').textContent = participant.name;
  document.getElementById('resultRegister').textContent = participant.registerNumber;
  document.getElementById('resultStudent').textContent = `${participant.name} · Register No. ${participant.registerNumber}`;
  document.getElementById('scoreMessage').textContent =
    score === 20 ? 'Perfect score!' : score >= 15 ? 'Excellent work!' : score >= 10 ? 'Good attempt!' : 'Keep practising!';
  document.getElementById('reviewScore').textContent = `${score} / 20`;
}

document.getElementById('viewAnswersBtn').addEventListener('click', () => {
  renderReview();
  showPage('review');
});

document.getElementById('backToResultBtn').addEventListener('click', () => showPage('result'));

function renderReview() {
  const wrong = quizQuestions.filter(q => submittedAnswers[q.id] !== q.correctIndex);
  const reviewList = document.getElementById('reviewList');

  if (!wrong.length) {
    reviewList.innerHTML = `<div class="review-empty"><strong>Excellent!</strong><br>You answered all 20 questions correctly.</div>`;
    return;
  }

  reviewList.innerHTML = wrong.map((q, i) => {
    const selected = submittedAnswers[q.id];
    const yourAnswer = selected === null ? 'Not answered' : q.options[selected];
    const correctAnswer = q.answer;
    return `
      <article class="review-item">
        <h3>${i + 1}. ${escapeHtml(q.question)}</h3>
        <div class="review-row wrong"><strong>Your answer</strong>${escapeHtml(yourAnswer)}</div>
        <div class="review-row correct"><strong>Correct answer</strong>${escapeHtml(correctAnswer)}</div>
        <div class="review-row explanation"><strong>Explanation</strong>${escapeHtml(q.explanation)}</div>
      </article>
    `;
  }).join('');
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, ch => ({
    '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#039;'
  }[ch]));
}

document.getElementById('registerNumber').addEventListener('input', (e) => {
  e.target.value = e.target.value.replace(/[^0-9]/g, '');
});

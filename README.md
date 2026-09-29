# Cryptography & Cybersecurity Quiz — Trial

## Run locally
1. Extract the ZIP.
2. Open this folder in VS Code.
3. Open Terminal.
4. Run:
   npm install
   npm start
5. Open: http://localhost:10000

## Updated flow
1. Landing page shows only QUIZ + Cryptography & Cybersecurity + GET STARTED.
2. GET STARTED opens the participant details page.
3. Participant enters only Name and numeric Register Number.
4. START QUIZ opens the 20-question quiz.
5. Questions and options are shuffled for each attempt.
6. SUBMIT QUIZ opens a separate score page.
7. VIEW ANSWERS & EXPLANATION opens a separate review page showing only incorrect/unanswered questions.

## Important trial limitation
This trial uses browser localStorage to prevent a register number from being used twice on the same browser. It is not secure for a real examination because browser storage can be cleared or changed. The production version should use a server/database to enforce one attempt per register number and keep the answer key on the server.

## V3 layout fix
The quiz page and answer-review page are explicitly forced to `display: block`.
This fixes the CSS specificity issue that caused the quiz header, question cards, and submit bar to behave like horizontal flex items and appear merged/off-screen.

## V4 visual update
The oversized QUIZ heading was removed from the landing page. The landing screen now uses a colorful purple/blue/coral gradient rather than a near-black background.

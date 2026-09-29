const QUESTIONS = [
  {
    "id": 1,
    "question": "What is the primary purpose of cryptography?",
    "answer": "Protect information from unauthorized access and modification",
    "options": [
      "Increase internet speed",
      "Protect information from unauthorized access and modification",
      "Replace computer networks",
      "Store files permanently"
    ],
    "correctIndex": 1,
    "explanation": "Cryptography provides security services that protect information against unauthorized access and alteration."
  },
  {
    "id": 2,
    "question": "Monitoring or eavesdropping without modifying resources is known as what?",
    "answer": "Passive attack",
    "options": [
      "Active attack",
      "Passive attack",
      "Physical attack",
      "Brute-force attack"
    ],
    "correctIndex": 1,
    "explanation": "A passive attack observes information without changing system resources or data."
  },
  {
    "id": 3,
    "question": "Which is an example of a substitution technique?",
    "answer": "Caesar cipher",
    "options": [
      "Rail Fence",
      "Caesar cipher",
      "Columnar Transposition",
      "Steganography"
    ],
    "correctIndex": 1,
    "explanation": "The Caesar cipher replaces each plaintext letter with another letter according to a fixed shift."
  },
  {
    "id": 4,
    "question": "The OSI Security Architecture mainly focuses on what?",
    "answer": "Attacks, mechanisms and services",
    "options": [
      "Only encryption keys",
      "Only network hardware",
      "Attacks, mechanisms and services",
      "Only operating systems"
    ],
    "correctIndex": 2,
    "explanation": "X.800/OSI Security Architecture organizes security around attacks, services and mechanisms."
  },
  {
    "id": 5,
    "question": "Which of the following is a symmetric-key algorithm?",
    "answer": "AES",
    "options": [
      "RSA",
      "AES",
      "Diffie-Hellman",
      "DSA"
    ],
    "correctIndex": 1,
    "explanation": "AES is a symmetric block cipher that uses the same secret key for encryption and decryption."
  },
  {
    "id": 6,
    "question": "What is the block size of DES?",
    "answer": "64 bits",
    "options": [
      "32 bits",
      "64 bits",
      "128 bits",
      "256 bits"
    ],
    "correctIndex": 1,
    "explanation": "DES processes data in 64-bit blocks."
  },
  {
    "id": 7,
    "question": "Which AES key size is NOT supported?",
    "answer": "512 bits",
    "options": [
      "128 bits",
      "192 bits",
      "256 bits",
      "512 bits"
    ],
    "correctIndex": 3,
    "explanation": "AES supports 128-, 192-, and 256-bit keys; 512-bit AES is not a standard AES key size."
  },
  {
    "id": 8,
    "question": "Which of the following is a stream cipher?",
    "answer": "RC4",
    "options": [
      "DES",
      "AES",
      "RC4",
      "RSA"
    ],
    "correctIndex": 2,
    "explanation": "RC4 is a stream cipher that generates a pseudorandom keystream."
  },
  {
    "id": 9,
    "question": "In RSA, for confidentiality, the message is encrypted using whose public key?",
    "answer": "Receiver's public key",
    "options": [
      "Sender's public key",
      "Receiver's public key",
      "Sender's private key",
      "A shared DES key"
    ],
    "correctIndex": 1,
    "explanation": "Encrypting with the receiver's public key allows the corresponding receiver private key to decrypt the message."
  },
  {
    "id": 10,
    "question": "What is the main purpose of Diffie-Hellman?",
    "answer": "Secure key exchange",
    "options": [
      "Data compression",
      "Secure key exchange",
      "Hashing files",
      "Digital watermarking"
    ],
    "correctIndex": 1,
    "explanation": "Diffie-Hellman allows two parties to establish a shared secret over an insecure channel."
  },
  {
    "id": 11,
    "question": "Euler's totient function φ(n) counts what?",
    "answer": "Positive integers less than n that are relatively prime to n",
    "options": [
      "All factors of n",
      "Prime numbers greater than n",
      "Positive integers less than n that are relatively prime to n",
      "All even numbers less than n"
    ],
    "correctIndex": 2,
    "explanation": "φ(n) is the number of positive integers less than n that are relatively prime to n."
  },
  {
    "id": 12,
    "question": "What is the purpose of the Chinese Remainder Theorem (CRT)?",
    "answer": "Solve simultaneous congruences with relatively prime moduli",
    "options": [
      "Generate random passwords",
      "Encrypt images",
      "Solve simultaneous congruences with relatively prime moduli",
      "Create hash functions"
    ],
    "correctIndex": 2,
    "explanation": "CRT provides a way to solve systems of congruences when the moduli are relatively prime."
  },
  {
    "id": 13,
    "question": "A Message Authentication Code (MAC) requires what?",
    "answer": "A secret key",
    "options": [
      "A secret key",
      "Only a public key",
      "No key",
      "A digital certificate only"
    ],
    "correctIndex": 0,
    "explanation": "A MAC uses a shared secret key to provide message authentication and integrity."
  },
  {
    "id": 14,
    "question": "A cryptographic hash function converts what?",
    "answer": "Variable-length input to fixed-length output",
    "options": [
      "Fixed-length input to variable-length output",
      "Variable-length input to fixed-length output",
      "Only text to images",
      "Keys to passwords"
    ],
    "correctIndex": 1,
    "explanation": "A cryptographic hash maps an input of arbitrary length to a fixed-size digest."
  },
  {
    "id": 15,
    "question": "Which mechanism provides authentication and supports non-repudiation?",
    "answer": "Digital signature",
    "options": [
      "Firewall",
      "Digital signature",
      "Compression",
      "Steganography"
    ],
    "correctIndex": 1,
    "explanation": "Digital signatures authenticate the signer and can provide non-repudiation in appropriate systems."
  },
  {
    "id": 16,
    "question": "Which system provides centralized network authentication?",
    "answer": "Kerberos",
    "options": [
      "Kerberos",
      "RC4",
      "AES",
      "Caesar cipher"
    ],
    "correctIndex": 0,
    "explanation": "Kerberos is a centralized authentication system using tickets and a trusted key distribution center."
  },
  {
    "id": 17,
    "question": "Which malware attaches to a host program and can replicate?",
    "answer": "Virus",
    "options": [
      "Worm",
      "Virus",
      "Spyware",
      "Rootkit"
    ],
    "correctIndex": 1,
    "explanation": "A virus attaches to a host file or program and can replicate when the host is executed or shared."
  },
  {
    "id": 18,
    "question": "Which tool records a user's keystrokes?",
    "answer": "Keylogger",
    "options": [
      "Firewall",
      "Keylogger",
      "Hash function",
      "Packet filter"
    ],
    "correctIndex": 1,
    "explanation": "A keylogger captures keyboard input, potentially exposing passwords and other sensitive information."
  },
  {
    "id": 19,
    "question": "SQL Injection primarily targets what?",
    "answer": "A database through malicious SQL input",
    "options": [
      "A database through malicious SQL input",
      "Only a monitor",
      "A printer driver",
      "A cryptographic key schedule"
    ],
    "correctIndex": 0,
    "explanation": "SQL injection exploits insufficiently protected application input to manipulate database queries."
  },
  {
    "id": 20,
    "question": "What attack attempts to make a service unavailable by overwhelming it with requests or traffic?",
    "answer": "DoS/DDoS",
    "options": [
      "Phishing",
      "DoS/DDoS",
      "Steganography",
      "Hash collision"
    ],
    "correctIndex": 1,
    "explanation": "Denial-of-service attacks attempt to exhaust resources so legitimate users cannot access a service."
  }
];

const questions = [
    {
        question: "Apa ibu kota Indonesia?",
        options: ["Jakarta", "Surabaya", "Bandung", "Medan"],
        correct: 0
    },
    {
        question: "Siapa penemu lampu pijar?",
        options: ["Nikola Tesla", "Thomas Edison", "Albert Einstein", "Alexander Graham Bell"],
        correct: 1
    },
    {
        question: "Planet terbesar di tata surya adalah?",
        options: ["Bumi", "Mars", "Jupiter", "Venus"],
        correct: 2
    }
];

let currentQuestion = 0;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const feedbackEl = document.getElementById('feedback');
const nextBtn = document.getElementById('nextBtn');

function loadQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = '';
    feedbackEl.textContent = '';

    q.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'btn btn-outline-secondary';
        btn.textContent = option;
        btn.onclick = () => checkAnswer(index);
        optionsEl.appendChild(btn);
    });
}

function checkAnswer(index) {
    const q = questions[currentQuestion];
    if (index === q.correct) {
        feedbackEl.textContent = 'Jawaban Benar!';
        feedbackEl.className = 'text-success';
    } else {
        feedbackEl.textContent = 'Jawaban Salah!';
        feedbackEl.className = 'text-danger';
    }
    document.querySelectorAll('#options .btn').forEach(btn => btn.disabled = true);
}

nextBtn.addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        questionEl.textContent = '🎉 Kuis Selesai!';
        optionsEl.innerHTML = '';
        feedbackEl.textContent = '';
        nextBtn.textContent = 'Ulangi Kuis';
        nextBtn.onclick = () => location.reload();
    }
});

loadQuestion();

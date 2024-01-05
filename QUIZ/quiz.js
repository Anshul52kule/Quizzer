// const quizData = [
//     {
//         question: "What is the capital of France?",
//         options: ["Berlin", "Paris", "Madrid", "Rome"],
//         correctAnswer: "Paris"
//     },
//     {
//         question: "Which planet is known as the Red Planet?",
//         options: ["Earth", "Mars", "Jupiter", "Venus"],
//         correctAnswer: "Mars"
//     },
//     {
//         question: "Who wrote 'Romeo and Juliet'?",
//         options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
//         correctAnswer: "William Shakespeare"
//     }
// ];

// let currentQuestion = 0;
// let score = 0;

// function loadQuestion() {
//     const questionElement = document.getElementById("question");
//     const optionsElement = document.getElementById("options");

//     questionElement.innerText = quizData[currentQuestion].question;

//     optionsElement.innerHTML = "";

//     quizData[currentQuestion].options.forEach((option, index) => {
//         const optionElement = document.createElement("div");
//         optionElement.classList.add("option");
//         optionElement.innerText = option;
//         optionElement.onclick = () => checkAnswer(index);
//         optionsElement.appendChild(optionElement);
//     });
// }

// function checkAnswer(optionIndex) {
//     if (quizData[currentQuestion].correctAnswer === quizData[currentQuestion].options[optionIndex]) {
//         score++;
//     }

//     if (currentQuestion < quizData.length - 1) {
//         currentQuestion++;
//         loadQuestion();
//     } else {
//         showResult();
//     }
// }

// function showResult() {
//     const resultElement = document.getElementById("result");
//     resultElement.innerText = `Your score: ${score} out of ${quizData.length}`;
// }

// function nextQuestion() {
//     if (currentQuestion < quizData.length - 1) {
//         currentQuestion++;
//         loadQuestion();
//     } else {
//         showResult();
//     }
// }

// // Initial load
// loadQuestion();

const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Paris", "Madrid", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correctAnswer: "Mars"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
        correctAnswer: "William Shakespeare"
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");

    questionElement.innerText = quizData[currentQuestion].question;

    optionsElement.innerHTML = "";

    quizData[currentQuestion].options.forEach((option, index) => {
        const optionElement = document.createElement("div");
        optionElement.classList.add("option");
        optionElement.innerText = option;
        optionElement.onclick = () => checkAnswer(index);
        optionsElement.appendChild(optionElement);
    });

    // Dynamic styling example: Change background color on each question
    document.body.style.backgroundColor = getRandomColor();
}

function checkAnswer(optionIndex) {
    if (quizData[currentQuestion].correctAnswer === quizData[currentQuestion].options[optionIndex]) {
        score++;
    }

    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const resultElement = document.getElementById("result");
    resultElement.innerText = `Your score: ${score} out of ${quizData.length}`;
}

function nextQuestion() {
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        showResult();
    }
}

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Initial load
loadQuestion();

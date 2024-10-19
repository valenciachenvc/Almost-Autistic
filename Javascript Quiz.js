const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const scoreContainer = document.getElementById('score-container');
const scoreElement = document.getElementById('score');
const backHome = document.getElementById('back-home');
let foodCounter = parseInt(localStorage.getItem('foodCounter'));

let currentQuestionIndex = 0;

const questions = [
    {
        question: "1. What is the primary goal of SDG 14?",
        answers: [
            { text: 'Reduce inequality', correct: false },
            { text: 'Protect life on land', correct: false },
            { text: 'Conserve and sustainably use the oceans, seas, and marine resources', correct: true },
            { text: 'Promote gender equality', correct: false }
        ]
    },
    {
        question: "2. Why are oceans important for regulating the Earth's climate?",
        answers: [
            { text: 'They absorb carbon dioxide', correct: true },
            { text: 'They reflect sunlight', correct: false },
            { text: 'They produce oxygen', correct: false },
            { text: 'They block ultraviolet radiation', correct: false }
        ]
    },
    {
        question: "3. What percentage of the Earth’s surface is covered by oceans?",
        answers: [
            { text: '30%', correct: false },
            { text: '50%', correct: false },
            { text: '71%', correct: true },
            { text: '90%', correct: false }
        ]
    },
    {
        question: "4. What is the main cause of coral bleaching?",
        answers: [
            { text: 'Overfishing', correct: false },
            { text: 'Climate change', correct: true },
            { text: 'Oil spills', correct: false },
            { text: 'Plastic pollution', correct: false }
        ]
    },
    {
        question: "5. Which of the following is a major threat to marine ecosystems?",
        answers: [
            { text: 'Deforestation', correct: false },
            { text: 'Plastic pollution', correct: true },
            { text: 'Desertification', correct: false },
            { text: 'Air pollution', correct: false }
        ]
    },
    {
        question: "6. Marine biodiversity contributes to which of the following?",
        answers: [
            { text: 'Tourism', correct: false },
            { text: 'Fisheries', correct: false },
            { text: 'Coastal protection', correct: false },
            { text: 'All of the above', correct: true }
        ]
    },
    {
        question: "7. What percentage of marine fish stocks were within biologically sustainable levels in 2017?",
        answers: [
            { text: '67%', correct: true },
            { text: '59%', correct: false },
            { text: '32%', correct: false },
            { text: '90%', correct: false }
        ]
    },
    {
        question: "8. What is bycatch?",
        answers: [
            { text: 'The waste produced by fish processing', correct: false },
            { text: 'Non-target species caught during fishing', correct: true },
            { text: 'Dead fish washed up on the shore', correct: false },
            { text: 'Fish farming', correct: false }
        ]
    },
    {
        question: "9. What is marine acidification?",
        answers: [
            { text: 'The process where the ocean becomes less salty', correct: false },
            { text: 'The decrease in the ocean pH due to carbon dioxide absorption', correct: true },
            { text: 'The process of increasing temperature in marine environments', correct: false },
            { text: 'The formation of coral reefs', correct: false }
        ]
    },
    {
        question: "10. How much of the ocean must be protected by 2030 according to SDG 14?",
        answers: [
            { text: '5%', correct: false },
            { text: '10%', correct: false },
            { text: '30%', correct: true },
            { text: '50%', correct: false }
        ]
    }
];

startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

function startQuiz() {
    startButton.classList.add('hide');
    backHome.classList.add('hide');
    currentQuestionIndex = 0;
    score = 0;
    questionContainer.classList.remove('hide');
    scoreContainer.classList.add('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    answerButtonsElement.classList.remove('unclickable');
    if (currentQuestionIndex >= 10) {
        startButton.classList.add('hover-effect');
        showScore();
    } else {
        showQuestion(questions[currentQuestionIndex]);
    };
}

function showQuestion(question) {
    questionElement.textContent = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        button.classList.add('btn', 'hover-effect');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(selectedButton, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (correct) {
        score++;
    }
    scoreElement.textContent = score;
    if (questions.length > currentQuestionIndex) {
        nextButton.classList.remove('hide');
    } else {
        showScore();
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
        answerButtonsElement.classList.add('unclickable');
        const buttonAnswer = document.getElementsByClassName('hover-effect');
        for (let i = 0; i < buttonAnswer.length; i++) {
            buttonAnswer[i].classList.remove('hover-effect');
        }
    } else {
        element.classList.add('wrong');
        answerButtonsElement.classList.add('unclickable');
        const buttonAnswer = document.getElementsByClassName('hover-effect');
        for (let i = 0; i < buttonAnswer.length; i++) {
            buttonAnswer[i].classList.remove('hover-effect');
        }   
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

function showScore() {
    document.getElementById('score').innerText = score;  
    questionContainer.classList.add('hide');
    nextButton.classList.add('hide');
    scoreContainer.classList.remove('hide');
    startButton.textContent = 'Restart';
    startButton.classList.remove('hide');
    backHome.classList.remove('hide');
}

function scoreAdd(){
    foodCounter += score;
    localStorage.setItem('foodCounter', foodCounter);
    document.getElementById('foodCounter').innerText = foodCounter;
};

window.onload = function() {
    document.getElementById("foodCounter").innerText = foodCounter;
    img.style.opacity = opacityValue.toFixed(1);
}
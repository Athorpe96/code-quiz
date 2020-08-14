let startButton = document.getElementById('start-btn')
let questionContainerElement = document.getElementById('question-container')
let questionElement = document.getElementById('questions')
let answerButtonsElement = document.getElementById('answer-buttons')
let timerElement = document.getElementById('timer')

var shuffledQuestions, currentQuestionIndex



function timer() {
    timer = 100
    timerElement.textContent = timer;
    interval = setInterval(function () {
        timer--;
        timerElement.textContent = timer;


        if (timer === 0) {

            timerElement.textContent = "";

        }

    }, 1000);

}



function startGame() {
    timer()
    document.getElementById('start-btn').style.display = "none";


    //console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = question.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setnextQuestion()

}
startButton.addEventListener('click', startGame)


function setnextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])

}
function showQuestion(questions) {
    questionElement.innerText = questions.questions
    questions.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innertext = answer.Text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click, selectedAnswer')
        answerButtonsElement.appendChild(button)
    })
}







let question = [
    {
        questions: "Who invented JavaScript?", answers: [
            { a: "Thomas Ford", correct: false },
            { b: "Java Script", correct: false },
            { c: "Brendan Eich", correct: true },
            { d: "Java Script", correct: false }
        ]
    }
]




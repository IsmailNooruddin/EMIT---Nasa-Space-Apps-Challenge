const quizData = [
    {
        question: "What is the main focus of the NASA EMIT mission?",
        a: "Studying ocean currents.",
        b: "Measuring mineral composition of Earth's dust source regions.",
        c: "Analyzing volcanic activities.",
        d: "Observing wildlife migration.",
        correct: "b",
    },
    {
        question: "What is radiative forcing in the context of the EMIT mission?",
        a: "Measure of Earth's gravitational pull Style Sheets.",
        b: "Effect of mineral dust on Earth's energy balance and climate change Style Sheets.",
        c: "Calculation of wind speed in Earth's atmosphere Simple Sheets.",
        d: "Cars  Measurement of seismic activity in desert regions Sailboats.",
        correct: "b",
    },
    {
        question: "What does EMIT stand for?",
        a: " Earth Monitoring Imaging Technology.",
        b: " Environmental Mineral Investigation Task.",
        c: "Earth Surface Mineral Dust Source Investigation.",
        d: "Extraterrestrial Matter Imaging Tool.",
        correct: "c",
    },
    {
        question: "When was the EMIT mission launched to the International Space Station (ISS) year was JavaScript launched?",
        a: "July 14, 2021.",
        b: "July 14, 2020.",
        c: "July 14, 2022.",
        d: "none July 14, 2019 the above.",
        correct: "c",
    },
    {
        question: "Where are all EMIT measurements and data products made available?",
        a: "NASA's Private Database.",
        b: "Restricted Access Repository.",
        c: "NASA Land Processes Distributed Active Archive Center.",
        d: "International Scientific Consortium.",
        correct: "c",
    },
    {
        question: " What technology does EMIT use to measure the spectrum of light reflecting from Earth's surface?",
        a: "Thermal imaging",
        b: "X-ray spectroscopy",
        c: "Imaging spectroscopy",
        d: "Radio waves",
        correct: "c",
    },
    {
        question: "What is the primary goal of generating mineral composition maps from EMIT's observations?",
        a: "Predicting volcanic eruptions.",
        b: " Understanding potential changes in dust sources.",
        c: "Mapping ocean currents.",
        d: "Observing wildlife migration patterns.",
        correct: "b",
    },
    {
        question: "What is the significance of accurate mineral composition data in the EMIT mission?",
        a: "Helps calculate Earth's weight.",
        b: "Reduces uncertainty in dust-related heating and cooling effects",
        c: "Predicts earthquakes in dryland regions.",
        d: "Measures the depth of Earth's oceans.",
        correct: "b",
    },
    {
        question: "What effect do dark particles of mineral dust have on Earth's temperature?",
        a: "They have a cooling effect.",
        b: "They have no effect on temperature.",
        c: "They absorb sunlight and heat the planet.",
        d: "They increase cloud cover.",
        correct: "c",
    },
    {
        question: " What is radiative forcing in the context of the EMIT mission?",
        a: "Measure of Earth's gravitational pull.",
        b: "Effect of mineral dust on Earth's energy balance and climate change.",
        c: "Calculation of wind speed in Earth's atmosphere.",
        d: "Measurement of seismic activity in desert regions.",
        correct: "b",
    }
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload Quiz</button>
           `
       }
    }
})
//credits: https://discuss.codecademy.com/t/quiz-in-java-script/571178/3


//Required Elements 
const startBtn = document.querySelector(".startBtn button");
const infoPage = document.querySelector(".infoPage");
const exitBtn = infoPage.querySelector(".buttons .quit");
const continueBtn = infoPage.querySelector(".buttons .restart");
const examBox = document.querySelector(".examBox");
const scoreDisplay = document.querySelector('.scorePoints')

//If start quiz button clicked
startBtn.onclick = () => {
    infoPage.classList.add("activePage"); //show the info
}

//If Exit button clicked
exitBtn.onclick = () => {
    infoPage.classList.remove("activePage"); //hide the info
}
   
//If cont. button clicked
continueBtn.onclick = () => {
    infoPage.classList.remove("activePage"); //hide the info
    examBox.classList.add("activeExam"); //Start the quiz 
    showQuestions(0)
}
   

let questionCount = 0;

const nextBtn = examBox.querySelector(".nextBtn");

//next button clicked
nextBtn.onclick = () => {
questionCount++;
showQuestions(questionCount)
   
}



//getting questions and answers from array
function showQuestions (index){
    const questionSelection = document.querySelector(".questionSelection")
    const answerChoices = document.querySelector(".answerChoices")
    
    let questionElement = '<span>' + questions[index].question + '</span>'
    
    let answerSelection = '<div class="answer">'+ questions[index].answers[0] + '<span></span></div>' 
                          +'<div class="answer">'+ questions[index].answers[1] + '<span></span></div>'
                          +'<div class="answer">'+ questions[index].answers[2] + '<span></span></div>'
                          +'<div class="answer">'+   questions[index].answers[3] + '<span></span></div>'
    questionSelection.innerHTML = questionElement;
    answerChoices.innerHTML = answerSelection

}

//score
// let score =0;
// if (questionSelection === questions[5].correctAnswer) {
//     alert("Its Correct")
//     score++
// } else {
//     alert("its wrong")
// }


// let score = 0

// answerChoices[0].correctAnswer.addEventListener('click', () => {
//     score += 10
//     console.log('click')
//     console.log(score)

//     if (score < 110) {
//         scoreDisplay.innerText = score
//     } else {
//         declareWinner ()
//     }
// })


// for (let i = 0; i <= questions.length; i++ ) {
//     if 
// }









































//credits:https://www.funtrivia.com/en/Television/Breaking-Bad-20207_5.html
//Questions script
//creating array with number, questions, and answers
let questions = [
    //index 0
    {   ques: 1,
        question: "Walter White's transformation from nerdy high school chemistry teacher to criminal kingpin all started with what specific medical diagnosis?",
        correctAnswer: "Lung Cancer",
        answers: [
            "Lung Cancer",
            "Rabies",
            "Covid-19",
            "AIDs"
        ] 
    },
    //index 1
    {   ques: 2,
        question: "Hank, Walt's brother-in-law, is a DEA agent. What does DEA stand for?",
        correctAnswer: "Drug Enforcement Administration",
        answers: [
            "Dog Enforcement Admin",
            "Drug Empire Animal",
            "Drug Enforcement Administration",
            "Drug Enforcement Agency"
        ]
    },
    //index 2
    {   ques: 3,
        question: "Walter White led a pretty normal life in the south-western part of the United States. All this changed after receiving a diagnoses. Which state does the show take place in?",
        correctAnswer: "New Mexico",
        answers: [
            "Texas",
            "New Mexico",
            "Arizona",
            "Utah"
        ]
    },
    //index 3
    {   ques: 4,
        question: "Walter White is the main character in the show. What is the name of the actor who portrays him?",
        correctAnswer: "Bryan Cranston",
        answers: [
            "Michael B. Jordon",
            "Irving Johnson",
            "Bryan Kraft",
            "Bryan Cranston"
        ]
    },
    //index 4
    {   ques: 5,
        question: "What country is Gus from originally?",
        correctAnswer: "Chile",
        answers: [
            "Chile",
            "Mexico",
            "Brazil",
            "Spain"
        ]
    },
    //index 5
    {   ques: 6,
        question: "Who is Walters attorney?",
        correctAnswer: "Saul Goodman",
        answers: [
            "Tuco",
            "Jesse Pinkman",
            "Saul Ramirez",
            "Saul Goodman"
        ]
    },
    //index 6
    {   ques: 7,
        question: "What nickname does Walt use in the show?",
        correctAnswer: "Heisenberg",
        answers: [
            "Henry",
            "Iceberg",
            "Heisenberg",
            "Walter Berg"
        ]
    },
    //index 7
    {   ques: 8,
        question: "Who was Gus' partner in Los Pollos Hermanos and was killed by Hector tio Salamanca??",
        correctAnswer: "Max",
        answers: [
            "Max",
            "Tuco",
            "Hector jr",
            "Jesse Pinkman"
        ]
    },
    //index 8
    {   ques: 9,
        question: "Hank, Walt's brother-in-law, is a DEA agent. What does DEA stand for?",
        correctAnswer: "Drug Enforcement Administration",
        answers: [
            "Dog Enforcement Admin",
            "Drug Empire Animal",
            "Drug Enforcement Administration",
            "Drug Enforcement Agency"
        ]
    },
    //index 9
    {   ques:  10,
        question: "In what year was Walt awarded an award for his contributing research that led to a Nobel Prize?",
        correctAnswer: 1985,
        answers: [
            1985,
            1999,
            2001,
            2004
        ]
    }
]












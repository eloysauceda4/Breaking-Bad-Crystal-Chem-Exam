const start = document.querySelector(".startBtn");
const infoPage = document.querySelector(".infoPage");
const exitBtn = infoPage.querySelector(".buttons .quit");
const continueBtn = infoPage.querySelector(".buttons .restart");
const examBox = document.querySelector(".examBox");
const correctAnswer = document.querySelector(".answer")






// //If start quiz button clicked
start.onclick = () => {
    infoPage.classList.add("activePage"); //show the page
 }

 //If Exit button clicked
 exitBtn.onclick = () => {
     infoPage.classList.remove("activePage"); //hide the page
 }
   
// //If cont. button clicked
 continueBtn.onclick = () => {
   infoPage.classList.remove("activePage"); //hide the page
    examBox.classList.add("activeExam"); //Start the quiz 
    
    showQuestions(0)
    
 }
   





let questionCount = 0

const nextBtn = examBox.querySelector(".nextBtn");


 
// //next button clicked
 nextBtn.onclick = () => {
       questionCount++
       showQuestions(questionCount)
    
   }
       
    
   






// //getting questions and answers from array
function showQuestions (index){
   const questionSelection = document.querySelector(".questionSelection")
   const answerChoices = document.querySelector(".answerChoices")
    
   let questionElement = '<span>' + questions[index].question + '</span>'
        let answerSelection = '<div class="answer">'+ questions[index].choices[0] + '<span></span></div>' 
                          +'<div class="answer">'+ questions[index].choices[1] + '<span></span></div>'
                          +'<div class="answer">'+ questions[index].choices[2] + '<span></span></div>'
                          +'<div class="answer">'+   questions[index].choices[3] + '<span></span></div>'
  questionSelection.innerHTML = questionElement;
  answerChoices.innerHTML = answerSelection

    


 }

    
    







 








































// // // //credits:https://www.funtrivia.com/en/Television/Breaking-Bad-20207_5.html
//    // credits: https://discuss.codecademy.com/t/quiz-in-java-script/571178/3 
// // // //Questions script
// // // //creating array with number, questions, and answers


    

  


// let questions = [
//     //index 0
//     {   
//         question: "Walter White's transformation from nerdy high school chemistry teacher to criminal kingpin all started with what specific medical diagnosis?",
//         answer: "Lung Cancer",
//         choices: [
//             "Lung Cancer",
//             "Rabies",
//             "Covid-19",
//             "AIDs"
//         ] 
//     },
//     //index 1
//     {   
//         question: "Hank, Walt's brother-in-law, is a DEA agent. What does DEA stand for?",
//         answer: "Drug Enforcement Administration",
//         choices: [
//             "Dog Enforcement Admin",
//             "Drug Empire Animal",
//             "Drug Enforcement Administration",
//             "Drug Enforcement Agency"
//         ]
//     },
//     //index 2
//     {   
//         question: "Walter White led a pretty normal life in the south-western part of the United States. All this changed after receiving a diagnoses. Which state does the show take place in?",
//         answer:  "New Mexico",
//         choices: [
//             "Texas",
//             "New Mexico",
//             "Arizona",
//             "Utah"
//         ]
//     },
//     //index 3
//     {   
//         question: "Walter White is the main character in the show. What is the name of the actor who portrays him?",
//         answer: "Bryan Cranston",
//         choices: [
//             "Michael B. Jordon",
//             "Irving Johnson",
//             "Bryan Kraft",
//             "Bryan Cranston"
//         ]
//     },
//     //index 4
//     {   
//         question: "What country is Gus from originally?",
//         answer: "Chile",
//         choices: [
//             "Chile",
//             "Mexico",
//             "Brazil",
//             "Spain"
//         ]
//     },
// ]


// let correctAnswer = questions[i].answer

// for (let i = 0; i < questions.length; i++) {
//     if (questions[i].answer ===  answer) {
//     } else if (questions[i].answer === "Lung Cancer") {
//         console.log(true)
//     } else if (questions[i].answer === "Drug Enforcement Administration"){
//         console.log(true)
//     } else if (questions[i].answer === "New Mexico"){
//         console.log(true)
//     } else if (questions[i].answer === "Bryan Cranston"){
//         console.log(true)
//     } else if (questions[i].answer === "Chile") {
//         console.log(true)
//     } else {
//         console.log (false)
//     }
// }

    


// let score = 0;

//  let scoreE = document.querySelector('.scorePoints')
// let answerC = document.querySelector('.answerChoices')

// answerC.addEventListener('click', (answer)=> {
//     score += 10
//     if (score < 110) {
//         scoreE.innerText = score
//     }
// })




    


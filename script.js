const beginn = document.querySelector(".startBtn");
const infoPage = document.querySelector(".infoPage");
const exitBtn = infoPage.querySelector(".buttons .quit");
const continueBtn = infoPage.querySelector(".buttons .restart");
const examBox = document.querySelector(".examBox");
const correctAnswer = document.querySelector(".answer")






// //If start quiz button clicked
beginn.onclick = () => {
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

    
    
window.onload = function(){
    document.getElementById("my_audio").onplay()
}






 








































// // // //credits:https://www.funtrivia.com/en/Television/Breaking-Bad-20207_5.html
//    // credits: https://discuss.codecademy.com/t/quiz-in-java-script/571178/3 
// // // //Questions script
// // // //creating array with number, questions, and answers


   



    


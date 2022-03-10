// // // //credits:https://www.funtrivia.com/en/Television/Breaking-Bad-20207_5.html
//    // credits: https://discuss.codecademy.com/t/quiz-in-java-script/571178/3 
// // // //Questions script
// // // //creating array with questions and answers.


    

  


let questions = [
    //index 0
    {   
        question: "Walter White's transformation from nerdy high school chemistry teacher to criminal kingpin all started with what specific medical diagnosis?",
        answer: "Lung Cancer",
        choices: [
            "Lung Cancer",
            "Rabies",
            "Covid-19",
            "AIDs"
        ] 
    },
    //index 1
    {   
        question: "Hank, Walt's brother-in-law, is a DEA agent. What does DEA stand for?",
        answer: "Drug Enforcement Administration",
        choices: [
            "Dog Enforcement Admin",
            "Drug Empire Animal",
            "Drug Enforcement Administration",
            "Drug Enforcement Agency"
        ]
    },
    //index 2
    {   
        question: "Walter White led a pretty normal life in the south-western part of the United States. All this changed after receiving a diagnoses. Which state does the show take place in?",
        answer:  "New Mexico",
        choices: [
            "Texas",
            "New Mexico",
            "Arizona",
            "Utah"
        ]
    },
    //index 3
    {   
        question: "Walter White is the main character in the show. What is the name of the actor who portrays him?",
        answer: "Bryan Cranston",
        choices: [
            "Michael B. Jordon",
            "Irving Johnson",
            "Bryan Kraft",
            "Bryan Cranston"
        ]
    },
    //index 4
    {   
        question: "What country is Gus from originally?",
        answer: "Chile",
        choices: [
            "Chile",
            "Mexico",
            "Brazil",
            "Spain"
        ]
    },
    //index 5
    {   
        question: "What color is the infamous box cutter that Gus uses to slash Victor's throat?",
        answer: "Lime Green",
        choices: [
            "Black",
            "Red",
            "Lime Green",
            "Grey"
        ] 
    },
    //index 6
    {   
        question: "Jesse Pinkman is a former student of Walter White's that he recruits to help him with his drug empire because of his experience in the illegal drug scene. What nickname does Jesse go by before he joins up with Mr. White?",
        answer: "Cap n Cook",
        choices: [
            "Cap n Cook",
            "Chef Cook",
            "Crystal Cook",
            "Chef boy"
        ]
    },
    //index 7
    {   
        question: "Who was Gus' partner in Los Pollos Hermanos and was killed by Hector Salamanca??",
        answer:  "Max",
        choices: [
            "Tuco",
            "Jesse",
            "Hector jr",
            "Max"
        ]
    },
    //index 8
    {   
        question: "In what year was Walt awarded an award for his contributing research that led to a Nobel Prize?",
        answer: "1985",
        choices: [
            "2001",
            "2004",
            "1985",
            "1999"
        ]
    },
    //index 9
    {   
        question: "After Badger's arrest, Walt hires a shady lawyer to help with the situation. What is this crooked lawyer's name?",
        choices: [
            "Saul Goodman",
            "Jesse Pinkerman",
            "Heisenberg",
            "Walt Jr"
        ]
    },
]




    


let score = 0;

 let scoreE = document.querySelector('.scorePoints')
let answerC = document.querySelector('.answerChoices')
let questionCounter = 0

answerC.addEventListener('click', (answer)=> {
    console.log(answer.target.innerText)
    if (answer.target.innerText == questions[questionCounter].answer) {
        score += 10
        scoreE.innerText = score
        questionCounter++ 
        
    }
})





const quizDB=[
    {
        question: "Q1. What is the full form of HTML?",
        a: "Heloo To My Land",
        b: "Hey Text Markup Language",
        c: "Hyper Text Makeup Language",
        d: "Hyper Text Markup Language",
        ans: "ans4"
    },
    {
        question: "Q2. What is the full form of CSS?",
        a: "Cascading Style Sheets",
        b: "Cascading Style Sheeps",
        c: "Cartoon Style Sheets",
        d: "Cascading Super Sheets",
        ans: "ans1"
    },
    {
        question: "Q3. What is the full form of WWW?",
        a: "World Wide Wheel",
        b: "World Wide Web",
        c: "World Wonder Wipe",
        d: "World Weep Web",
        ans: "ans2"
    },
    {
        question: "Q4. What is the full form of HTTP?",
        a: "Hypertext Tranfer Product",
        b: "Hypertext Transfer Protocol",
        c: "Hey Transfer Protocol",
        d: "Hypertext Test Protocol",
        ans: "ans2"
    },
    {
        question: "Q5. What is the full form of JS?",
        a: "JavaScript",
        b: "JavaSuper",
        c: "JustScript",
        d: "JordenShoes",
        ans: "ans1"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answers');

let questionCount = 0;
// .................................................SPEED VARIABLE.............................................
let speed = 2;

const loadQuestion = () => {
    
    const questionList = quizDB[questionCount];
    
    question.innerText = questionList.question;
    
    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((currAnsElem) => {
        if(currAnsElem.checked){
            answer = currAnsElem.id;
        }


    });
    return answer;

};

//.............................. FUNCTION TO CHECK CORRECT ANS AND ALTER SPEED..............................

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();

    if(checkedAnswer == quizDB[questionCount].ans ){
        speed++;                                  
    };
    questionCount++;

    if(questionCount < quizDB.length){
        loadQuestion();
    }
})

function togglePopup(){
    document.getElementById("popup").classList.toggle("active");
}
const questions = [{
    'Q': "Which type of JavaScript language is",
    'a': "Object-Oriented",
    'b': "Object-Based",
    'c': "Assembly-language",
    'd': "High-level",
    correct: "b"
},
{
    'Q': "Which one of the following also known as Conditional Expression:",
    'a': "Alternative to if-else",
    'b': "Switch statement",
    'c': "If-then-else statement",
    'd': "immediate if",
    correct: "d"
},
{
    'Q': "In JavaScript, what is a block of statement?",
    'a': "Conditional block",
    'b': "block that combines a number of statements into a single compound statement",
    'c': "both conditional block and a single statement",
    'd': "block that contains a single statement",
    correct: "b"
},
{
    'Q': "When interpreter encounters an empty statements, what it will do:",
    'a': "Shows a warning",
    'b': "Prompts to complete the statement",
    'c': "Throws an error",
    'd': "Ignores the statements",
    correct: "d"
},
{
    'Q': "The function and var are known as:",
    'a': "Keywords",
    'b': "Data types",
    'c': "Declaration statements",
    'd': "Prototypes",
    correct: "c"
},
{
    'Q': "Which of the following variables takes precedence over the others if the names are the same?",
    'a': "Global variable",
    'b': "The local element",
    'c': "The two of the above",
    'd': "None of the above",
    correct: "b"
},
{
    'Q': "Which of the following type of a variable is volatile?",
    'a': "Mutable variable",
    'b': "Dynamic variable",
    'c': "Volatile variable",
    'd': "Immutable variable",
    correct: "a"
},
{
    'Q': "In the JavaScript, which one of the following is not considered as an error:",
    'a': "Syntax error",
    'b': "Missing of semicolons",
    'c': "Division by zero",
    'd': "Missing of Bracket",
    correct: "c"
},
{
    'Q': " Which of the following number object function returns the value of the number?",
    'a': "toString()",
    'b': "valueOf()",
    'c': "toLocaleString()",
    'd': "toPrecision()",
    correct: "b"
},
{
    'Q': "Which one of the following is an ternary operator:",
    'a': "?",
    'b': ":",
    'c': "$",
    'd': "%",
    correct: "a"
},
]
let index = 0;
let total = questions.length;
let right = 0, wrong = 0;
const quesBox = document.getElementById("quebox");
const options = document.querySelectorAll(".Options");
const data = questions[index];
const loadQuestion = ()=>{
    if(index === total){
        return endQuiz();
    }
    reset();
    const data = questions[index];
    quesBox.innerText = `${index+1}) ${data.Q}`;
    options[0].nextElementSibling.innerText = data.a;
    options[1].nextElementSibling.innerText = data.b;
    options[2].nextElementSibling.innerText = data.c;
    options[3].nextElementSibling.innerText = data.d;
}
const submitQuiz = ()=>{
    const ans = getAnswer();
    if(ans === data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}
const getAnswer = () =>{
    let answer;
    options.forEach((input)=>{
        if(input.checked){
            answer = input.value;
        }
    })
    return answer;
}
const reset = ()=>{
    options.forEach((input)=>{
        if(input.checked){
            input.checked = false;
        }
    })
}
const endQuiz = ()=>{
    document.getElementById("box").innerHTML= `
    <h2>Thank You For Playing The Quiz</h2><br/>
    <h2>Your Score is : ${right} / ${total}</h2>
    <h1> ${right} / ${total}</h1>
    `
}
loadQuestion();
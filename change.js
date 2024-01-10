let questionCount=0;
let points=0;
const score=document.querySelector('.score');
const nextBtn=document.querySelector('.next-question');
const finalpoints=document.querySelector('.score-text');
const tryAgain=document.querySelector('.try-again');
const home=document.querySelector('.home');
const result=document.querySelector('.result');
const questionNumber=document.querySelector('#questionNumber');



window.onload=function(){
    score.textContent=`Score: ${points}/${questions.length}`;
    showQuestions(0);
    questionNumber.textContent=(index+1)+" of "+questions.length+" Question";
    
};
nextBtn.onclick = () =>
{
    if(questionCount<questions.length-1){
   questionCount++;
   showQuestions(questionCount);
    }
    else{
        
        console.log("Quest Done");
        ghuma();

    }
}
tryAgain.onclick= () =>{
home.classList.remove('active');
result.classList.remove('active');
questionCount=0;
points=0;
showQuestions(questionCount);
score.textContent=`Score: ${points}/${questions.length}`;


}


const optionList=document.querySelector('.option-list');
function showQuestions(index)
{
    nextBtn.classList.remove('active');
    const questionText= document.querySelector('.document-text');
    questionText.textContent=`${questions[index].numb}. ${questions[index].question}`;

    let option= `<span id="option1" class="option">${questions[index].options[0]}</span>
    <span id="option2" class="option">${questions[index].options[1]}</span>
    <span id="option3" class="option">${questions[index].options[2]}</span>
    <span id="option4" class="option">${questions[index].options[3]}</span>`;

    optionList.innerHTML=option;

    
    questionNumber.textContent=(index+1)+" of "+questions.length+" Question";

    const chooseOption=document.querySelectorAll('.option');
    for(let i=0;i<chooseOption.length;i++)
    {
        chooseOption[i].setAttribute('onclick','optionCheck(this)');
    }
}

function optionCheck(answer){
    let userAnswer=answer.textContent;
    let correctAnswer=questions[questionCount].answer;
    let allOptions=optionList.children.length;
    console.log(userAnswer);
    console.log(correctAnswer);
    if(userAnswer==correctAnswer)
    {
        points++;
        
        answer.classList.add('correct');
        score.textContent=`Score: ${points}/${questions.length}`;
    }
    else{
        answer.classList.add('incorrect');
        for(let i=0;i<allOptions;i++)
        {
            if(optionList.children[i].textContent==correctAnswer)
            {
                 optionList.children[i].setAttribute('class','option correct');
            }
        }

    }

    for(let i=0;i<allOptions;i++)
    {
        optionList.children[i].classList.add('disable');
    }
    nextBtn.classList.add('active');
}
const perValue=document.querySelector('.per');
const circularChart=document.querySelector('.progress-chart');
function ghuma(){
    
    home.classList.add('active');
    result.classList.add('active');
    finalpoints.textContent=`Your Score ${points} out of ${questions.length}`;
    let startValue=0;
    let endValue=(points/questions.length)*100;
    let speed=20;

    let value=setInterval(()=>{
          perValue.textContent=`${startValue}%`;
          circularChart.style.background=`conic-gradient(#c40094 ${startValue* 3.6}deg,rgba(255,255,255,.1) 0deg)`;
          if (startValue >= endValue) {  
            clearInterval(value);
        }
        startValue++;
    },speed);


}
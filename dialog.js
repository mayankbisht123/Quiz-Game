
window.onload = function () {
const startGame=document.querySelector('.startGame');
const guidelines=document.querySelector('.guidelines');
const exitGame=document.querySelector('.exitGame');
const main=document.querySelector('.main');
const mainContent=document.querySelector('.main-content');
const continueBtn=document.querySelector('.continueGame');

startGame.onclick = () => {
   guidelines.classList.add('active');
   main.classList.add('active');
   showQuestions(0);
}

exitGame.onclick = () =>{
    guidelines.classList.remove('active');
    main.classList.remove('active');
    body.classList.remove('active');
}

continueBtn.onclick = () =>{
    mainContent.classList.add('active');
    
}

};

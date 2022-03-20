let userName = window.prompt('Please enter your name');
let userScore = 0;
let playAgain = true;
// Your Code Here
function game(){
     
for(let i = 0; i < questions.length; i ++){
    let question = questions[i];
    let userAnswer = window.prompt(question.text); 
    if(userAnswer == question.correctAnswer){
        userScore = userScore + 10;
    }
 }

 window.alert('Your Score is ' + userScore);
}
// while (playAgain ===true){
//     game();
//     let userChoice = window.prompt('Would you like to play the game again? Answer yes or no.');
//     if(userChoice ==='yes'){
//         playAgain = true;
//     }else{
//         playAgain =false;
//         window.alert('Thanks for playing the game !')
//     }


do{
    game();
    let userChoice = window.prompt('Would you like to play the game again? Answer yes or no.');
    if (userChoice ==='yes')
         playAgain = true; //It must be a boolen variable, don't use userChoice in while condition directly.
    else{playAgain =false;
        window.alert('Thanks for playing the game !')}
    }while (playAgain)


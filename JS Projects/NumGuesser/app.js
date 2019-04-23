const min = 1;
const max = 10;

const submit = document.querySelector('#submit');
const answer = getWinningNumber(min,max);
const msg = document.getElementById('result');
const guessedInput = document.querySelector('#textInput');
let guesses = 3;
const game = document.querySelector('.card-body');

game.addEventListener('mousedown',function(e){
    if(e.target.classList.contains('play-again')){
        window.location.reload();
    }
})

submit.addEventListener('click',logic);


function showMessage(message,color){
        msg.innerHTML = message;
        msg.style.color = color;
        guessedInput.style.borderColor = color;
}

function logic(){
    const guessedNumber = parseInt(guessedInput.value);
    if(guessedNumber > 10 || guessedNumber < 1 || isNaN(guessedNumber)){
   showMessage( `Enter the valid number between ${min} & ${max}`,'red');
    }
    else if(guessedNumber === answer){
            showMessage(`Congratulations! You WON`,'green');
            playAgain();
    }
    else{
        if(guesses > 0){
        showMessage(`Wrong guess! Try again you have ${guesses} guesses left`,'red');
        guesses -= 1;
        }
        else{
            showMessage(`Game Over, The winning number is ${answer}`,'blue');
            playAgain();
        }
    }
    
}

function getWinningNumber(min,max){
    return (parseInt(Math.random()*(max-min+1)+1));
}
function playAgain(){
    guessedInput.disabled = true;
    submit.value = "Play Again";
    submit.className = "play-again";
}
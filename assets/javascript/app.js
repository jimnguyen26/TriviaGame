$(document).ready(function(){
    console.log('hello world');
});

var timeOut = 0;
var timeLeft = 30;
var timerId = setInterval(countdown, 1000);
var seconds = document.getElementById('timer');
var correctAnswer = 0;
var wrongAnswer = 0;
var timeRemaining = "";
var nflTeams = ["Cowboys", "49ers", "Broncos", "Packers"];

function countdown() {
    if (timeLeft === 0) {
        clearTimeout(timerId);
        alert('Game over!');
    } else {
        seconds.innerHTML = timeLeft + ' seconds';
        timeLeft--;
    }
};

$('#team1').on('click', function() {
if($(this).text() === correctAnswer) {
    $(this).addClass('btn-success').removeClass('btn-light');
}
    correctAnswer++;
console.log(correctAnswer);
alert('Correct!');
});

$('#team2, #team3, #team4').on('click', function(){
wrongAnswer++;
console.log(wrongAnswer);
alert('Wrong!')
});
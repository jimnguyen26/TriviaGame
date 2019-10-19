$(document).ready(function(){
    console.log('hello world');
});

var timeOut = 0;
var timeLeft = 10;
var timerId = setInterval(countdown, 1000);
var seconds = document.getElementById('timer');
var correctAnswer = 0;
var wrongAnswer = 0;
var timeRemaining = "";

var nflTeams = ["Cowboys", "49ers", "Broncos", "Packers"];

function countdown() {
    if (timeLeft === 0) {
        clearTimeout(timerId);
        // alert('Correct Answers: ' + correctAnswer + ' Wrong Answers: ' + wrongAnswer);
    } else {
        seconds.innerHTML = timeLeft + ' seconds';
        timeLeft--;
    }
};

$('#team1').on('click', function() {
    this.style.backgroundColor = "green";
    correctAnswer++;
console.log(correctAnswer);

});

$('#team2, #team3, #team4').on('click', function() {
    this.style.backgroundColor = "red";
wrongAnswer++;
console.log(wrongAnswer);
});
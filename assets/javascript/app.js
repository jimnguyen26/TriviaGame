$(document).ready(function(){
    console.log('hello world');
});

var timeLeft = 30;
var timerId = setInterval(countdown, 1000);

function countdown() {
    if (timeLeft === 0) {
        clearTimeout(timerId);
    } else {
        seconds.innerHTML = timeLeft + ' seconds';
        timeLeft--;
    }
};

var seconds = document.getElementById('timer');






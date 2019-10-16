$(document).ready(function(){
    console.log('hello world');
    
});

var timerId = setInterval(countdown, 1000);
var timeLeft = 30;
var seconds = document.getElementById('timer');

function countdown() {
    if (timeLeft === 0) {
clearTimeout(timerId);
} else {
seconds.innerHTML = timeLeft + ' seconds';
timeLeft--;
}
};







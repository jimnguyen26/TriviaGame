$(document).ready(function(){
    console.log('hello world');
});

// Variables //
var number = 15;
var intervalId;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;


// Questions Array //
var questions = [{
    question: "Which NFL team won the most championships in the 90's?",
    answerList: ["Dallas Cowboys", "San Francisco 49ers", "Denver Broncos", "Green Bay Packers"],
    answer: 0
},{
    question: "Which NBA team won the most championships in the 90's?",
    answerList: ["Houston Rockets", "Chicago Bulls", "San Antonio Spurs", "Detriot Pistons"],
    answer: 1
},{
    question: "Which MLB team won the most championships in the 90's?",
    answerList: ["Atlanta Braves", "Miami Marlins", "Tronto Blue Jays", "New York Yankees"],
    answer: 3

    
}];

// Timer //
$("#start").on("click", function() {
    $(this).hide();
    $("#time").html("<h2>Time Remaining: 15 Seconds</h2>" + "<br>");

    run();
   
    // Display questions //
    $("#questionOne").html("<h3>" + questions[0].question + "</h3>");
    $("#answerOne").html("<input type='radio' name='answer1' value='0'>" + "<label>" + questions[0].answerList[0] + "</label>"
        + "<input type='radio' name='answer1' value='1'>" + "<label>" + questions[0].answerList[1] + "</label>"
        + "<input type='radio' name='answer1' value='2'>" + "<label>" + questions[0].answerList[2] + "</label>"
        + "<input type='radio' name='answer1' value='3'>" + "<label>" + questions[0].answerList[3] + "</label><br><br>"
    );

    $("#questionTwo").html("<h3>" + questions[1].question + "</h3>");
    $("#answerTwo").html("<input type='radio' name='answer2' value='0'>" + "<label>" + questions[1].answerList[0] + "</label>"
        + "<input type='radio' name='answer2' value='1'>" + "<label>" + questions[1].answerList[1] + "</label>"
        + "<input type='radio' name='answer2' value='2'>" + "<label>" + questions[1].answerList[2] + "</label>"
        + "<input type='radio' name='answer2' value='3'>" + "<label>" + questions[1].answerList[3] + "</label><br><br>"
    );

    $("#questionThree").html("<h3>" + questions[2].question + "</h3>");
    $("#answerThree").html("<input type='radio' name='answer3' value='0'>" + "<label>" + questions[2].answerList[0] + "</label>"
        + "<input type='radio' name='answer3' value='1'>" + "<label>" + questions[2].answerList[1] + "</label>"
        + "<input type='radio' name='answer3' value='2'>" + "<label>" + questions[2].answerList[2] + "</label>"
        + "<input type='radio' name='answer3' value='3'>" + "<label>" + questions[2].answerList[3] + "</label><br><br>"
    );

    // Submit button //
    $("#submit").html("<button id='done' class='btn'>Done</button>");

    $("#done").on("click", function() {
        keepingScore();

        displayResults();
        
    });
});

// Timer //
function run() {

    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    number--;
    $("#time").html("<h2>Time Remaining: " + number + " Seconds</h2>" + "<br>");
    if (number === 0) {
        stop();
        keepingScore();
        displayResults();
    }
}

function stop() {
    clearInterval(intervalId);
}

// Function used for displaying results in terms of correct, incorrect, and unanswered --- I want to put all of these tags inside a div so that i can just hide the parent div
function displayResults() {

    $("#time").hide();
    $("#questionOne").hide();
    $("#answerOne").hide();
    $("#questionTwo").hide();
    $("#answerTwo").hide();
    $("#questionThree").hide();
    $("#answerThree").hide();


    $("#resultsMessage").html("<h3>All Done!</h3>");
    $("#correct").html("Correct Answers: " + correctAnswers);
    $("#incorrect").html("Incorrect Answers: " + incorrectAnswers);
    $("#unanswered").html("Unanswered: " + unanswered);
}

// Score Keeping // 
function keepingScore() {
    var userAnswer1 = $("input[name='answer1']:checked").val();
    var userAnswer2 = $("input[name='answer2']:checked").val();
    var userAnswer3 = $("input[name='answer3']:checked").val();

    if (userAnswer1 === undefined) {
        unanswered++;
    }
    else if (userAnswer1 == questions[0].answer) {
        correctAnswers++;
    }
    else {
        incorrectAnswers++;
    }
    
    if (userAnswer2 === undefined) {
        unanswered++;
    }
    else if (userAnswer2 == questions[1].answer) {
        correctAnswers++;
    }
    else {
        incorrectAnswers++;
    }

    if (userAnswer3 === undefined) {
        unanswered++;
    }
    else if (userAnswer3 == questions[2].answer) {
        correctAnswers++;
    }
    else {
        incorrectAnswers++;
    }
}
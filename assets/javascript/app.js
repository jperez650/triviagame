$(document).ready(function(){


var questions = [
	{question:"What color are aircraft black boxes?",
	answers:["Blue", "Black", "Bright orange", "Light pink"],
	correctAnswer:"Bright orange"},

	{question:"What do honey bees collect?",
	answers:["Sugar", "Honey", "Water", "Pollen and nectar"],
	correctAnswer:"Pollen and nectar"},

	{question:"Where did Spanish flu originate?",
	answers:["The USA", "South America", "Spain", "Portugal"],
	correctAnswer:"The USA"},

	{question:"Which country was the Caesar salad invented in?",
	answers:["Mexico", "The USA", "Greece", "Italy"],
	correctAnswer:"Mexico"},

	{question:"What nationality was Cleopatra, Queen of Egypt?",
	answers:["Egyptian", "Greek", "Turkish", "Ethiopian"],
	correctAnswer:"Greek"},

]


$(".results-div").hide()
$(".timer-div").hide()
$(".question-div").hide()
$(".message-div").hide()

//Page loads and shows title and start buttom
$("#start-button").on("click", function() {
	$("#start-button").hide()
	$(".timer-div").show()
	$(".question-div").show()
	displayingQuestions();

});

//once we click start button page shows title, timer and quesion with possible answer

//start the timer function


//dislay question and answers functions

//if the text clicked on matches the right answer =correct answer
//increment the counter
//keep track of incorrect answer
 
 var correctAnswers;
 var incorrectAnswers;
 var unanswered;
 var number = 15;
 var intervalId;


var correctAnswers = 0
var incorrectAnswers = 0 
var unanswered = 0

  function setTimer() {
      intervalId = setInterval(decrement, 1000);
    }
    function decrement() {
      number--;
      $("#timer-text").html("<h2>" + number + "</h2>");
      if (number === 0) {
        stop();
        unanswered++
        $(".question-div").hide()
        $(".message-div").show()
        $("#message-input").html("<h2>Out of time</h2>")
        $("#correct-answer").text("correc")

        console.log(unanswered)
      }
    }
    function stop() {
      clearInterval(intervalId);
    }
    setTimer();


function displayingQuestions (){
	for (var i = 0; i < questions.length; i++) {
	$("#questionArea").text(questions[i].question)
	$(".answer1").text(questions[i].answers[0])
	$(".answer2").text(questions[i].answers[1])
	$(".answer3").text(questions[i].answers[2])
	$(".answer4").text(questions[i].answers[3])



   

	}
	

}








});

//if the wrong asnwer isc chosen then we say it was wrong and show the right answer and a picture

//if the timer goes down two 0 we say no time left and show right answer and picture

//if the correct answer is picked we show it and show the picture


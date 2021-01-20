

/*************************************************
                    DOM VARIABLES 
**************************************************/

var title = $("#title").html("JavaScript Challenge");
var navBrand = $("#navBrand").html("JavaScript Challenge");
var nav1 = $("#nav1").html("View Hall of Fame");
var nav2 = $("#nav2").html("Start Over");
var nav3 = $("#nav3").html("Rules");
var main = $("#main");
var display1 = $("#display1");
var display2 = $("#display2");
var display3 = $("#display3");
var questionText = $("#prompt");
var resp1 = $("#resp1");
var resp2 = $("#resp2");
var resp3 = $("#resp3");
var resp4 = $("#resp4");
var dispTime = $("#time");
var dispScore = $("#score");
var dispResult = $("#result");


/*************************************************
                    VARIABLES AND CONSTANTS
**************************************************/


// This is all the places for the hall of fame 
const ordinalNumbers = ['1st','2nd','3rd','4th','5th','6th','7th','8th','9th','10th'];

// This is a two dimensional array the (0)initials and (1)scores in the hall of fame.  Initializes to initial and scores in the cache, if any, or all blanks and 0's.
var hallScores = getHallScores();

/*************************************************
                    HELPER FUNCTIONS
**************************************************/


// INPUT: number of integers to be in the return array
// OUTPUT: a random array from 1 to the input number
function rArray(n){
    // create an array = ['1', '2', ... ,'n'] 
    var array = [];
    for(var i=1 ; i<=n ; i++){
      array.push(i);    
    }

    // randomize that array
    var rand = [];
    while (array.length != 0) {
      let j = Math.floor(Math.random() * array.length);
      rand.push(array[j]);
      array.splice(j, 1);
    }
    return rand;
}
    



// INPUT: input is the question index
// OUTPUT: correct response
function askQuestion(i){
    // make a array of random numbers 1-length of array-1
    var numberOfoptions = questions[i].length-1;
    var randomArray = rArray(numberOfoptions);    // load prompt and options
    questionText.text(questions[i][0]);
    resp1.text(questions[i][randomArray[0]]);
    resp2.text(questions[i][randomArray[1]]);
    resp3.text(questions[i][randomArray[2]]);
    resp4.text(questions[i][randomArray[3]]);

    // return answer
    return questions[i][1];
}
    

// INPUT: (1) the user's response to a question (2) the correct response
// OUTPUT: TRUE if correct, FALSE if not
function checkResult(r, c){
    var result = false;
console.log(r);
console.log(c);    
    if (r == c) {
        result = true;
    }
    return result;            
}
    

// INPUT: none
// OUTPUT: an array of scores in the hall of fame in decending order
function getHallScores(){
    // get hallScores from cache
    var hallScores = JSON.parse(localStorage.getItem("hallScores"));
  
    // check in hallScores is null
    if (hallScores == null) {
        hallScores = [];
    }

    return hallScores;
}


// INPUT: hallScores
// OUTPUT: [array of scores in HoF (decending order), isInHoF (T/F)]
function sortScores(scores){
    for(var i=scores.length-1 ; i>=0 ; i-- ){
      for(var j=(i-1) ; j>=0 ; j--){
          if(scores[i][1] > scores[j][1]){
            var temp = scores [i];
            scores[i] = scores[j];
            scores[j] = temp;
          }
      }
    }  
    // delete scores after 10th place
    while (scores.length > 10) { scores.pop();  }

    localStorage.setItem("hallScores", JSON.stringify(scores)); 
    return scores;
}

/*************************************************
                    USER INTERACTION FUNCTIONS
**************************************************/


// DISPLAYS: the rule for the quiz
// WAITING FOR: user to push the "Begin" button
// NEXT: takeQuiz()
function init() {

    display1.show();
    display2.hide();
    display3.hide();
        
    // place eventListener on the button 
    $("#begin").on("click", function(e){
      $("#begin").off();
      takeQuiz();
    });

}


// DISPLAYS: the hall of fame
// WAITING FOR: user to push the "Take the Quiz again" button
// NEXT: takeQuiz()
function showHallofFame() {

    display3.show();
    display1.hide();
    display3.addClass("text-center");
    display3.html("<hr>");
    for(var i=hallScores.length-1 ; i>=0 ; i--){
        display3.prepend("<div class='btn btn-outline-primary' style='width: 75%; margin: 10px;'>"+ordinalNumbers[i]+" place: "+hallScores[i][0]+" ("+hallScores[i][1]+" points)</div");
    }
    display3.prepend("<hr>");

    var again = $("<button>");
    again.text("Take the quiz");
    again.addClass("btn btn-success");
    display3.append(again);
    again.on("click", function () {
        again.off();
        takeQuiz();
    });
}





// DISPLAYS: the quiz elements (question, time, score and if their answer was correct)
// WAITING FOR: time to run out
// NEXT: revealScore()
function takeQuiz() {

    display1.hide();
    display2.show();
    display3.hide();
    $("#hall").hide();

    // set time
    var time = 60;
    // set score to 0
    var score = 0;


    dispScore.text(score);
    // make trigger to count down time
    var timer = setInterval(function() {
        dispTime.text(time);
        time--; 
        if (time<0) { 
            $(".response").off();
            clearInterval(timer); 
            revealScore(score);
        }
    }, 1000);

    var j=0;
    var numberOfQuestions = questions.length;
   
    var correct = askQuestion(j++);
    $(".response").on("click", function (e) {
        var t = "#";
        t += e.target.id;

        var jQtarget = $(t);
        var userChoice = jQtarget.text();
        if (checkResult(userChoice, correct)){
            score++;
            dispResult.text("Correct!");
            jQtarget.css("color", "green");
        } else { 
            time -= 5;
            jQtarget.removeClass("btn-success");
            jQtarget.addClass("btn-danger");
            dispResult.text("Wrong!");
        }
         setTimeout(function() { 
           if (j>=numberOfQuestions) { 
               $(".response").off();
               clearInterval(timer); 
               revealScore(score);
           }
    
           correct = askQuestion(j++);
           dispScore.html(score);   
           jQtarget.removeClass("btn-danger");
           jQtarget.addClass("btn-success");
           jQtarget.css("color","white");
           dispResult.text("");

         }, 500);
    });
}


// DISPLAYS: final score and notifies user if they made it to the Hall of Fame
// WAITING FOR: user to click the "Begin" button
// NEXT: takeQuiz
function revealScore(score) {

    display1.hide();
    display2.hide();
    display3.show();
    
    // add listener to the nav2 to stop the timer and set time =0 to end while loop
    $("#nav3").on("click", function(){
        hallDisplay.hide();
        time = 60;
        $("#nav3").off();
        init();
    });
    display3.html("<h1 style='margin: 70px'>Your final score is: "+score+" points!</h1>");



    var initials = localStorage.getItem("initials");
    if (initials === null) {
        initials = prompt("Please enter your initials.");
    } else if (!confirm("Is this still "+initials+"?")) {
            initials = prompt("Please enter your initials.");
        }

    localStorage.setItem("initials", initials);
    
    var currentScore = [initials, score];



    hallScores.push(currentScore);

    hallScores = sortScores(hallScores); 

    var hallDisplay = $("#hall").html("<hr>");
    hallDisplay.show();
    hallDisplay.css("background-color: white;")
    for(var i=hallScores.length-1 ; i>=0 ; i--){
            hallDisplay.prepend("<div class='btn btn-outline-primary' style='width: 75%; margin: 10px;'>"+ordinalNumbers[i]+" place: "+hallScores[i][0]+" ("+hallScores[i][1]+" points)</div");
            if(initials == hallScores[i][0]){
                $("#hall div").first().removeClass("btn-outline-primary");
                $("#hall div").first().addClass("btn-primary");
            }
    }
    hallDisplay.prepend("<hr>");


    var again = $("<button>");
    again.text("Take the quiz again");
    again.addClass("btn btn-success");
    display3.append(again);
    again.on("click", function () {
        again.off();
        takeQuiz();
    }); 
}


$( document ).ready( init() );

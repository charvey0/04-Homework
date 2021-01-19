

/*************************************************
                    DOM VARIABLES 
**************************************************/

var title = $("#title").html("JavaScript Challenge");
//var navBar = $("#navbar");
var navBrand = $("#navBrand").html("JavaScript Challenge");
var nav1 = $("#nav1").html("View Hall of Fame");
var nav2 = $("#nav2").html("Start Over");
var nav3 = $("#nav3").html("Rules");
var main = $("#main");
var display1 = $("#display1");
var display2 = $("#display2");
var display3 = $("#display3");
var prompt = $("#prompt");
var resp1 = $("#resp1");
var resp2 = $("#resp2");
var resp3 = $("#resp3");
var resp4 = $("#resp4");
var dispTime = $("#time");
var dispScore = $("#score");
var dispResult = $("#result");

//var footer = $("#footer");
//var copyright = $("#copyright");


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


// INPUT: 
// OUTPUT: 
function sampleFunction(){
//  console.log("sampleFunction() called.");     /*
        // TODO: 
    
// */
}


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
    prompt.text(questions[i][0]);
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
    if (r == c) {
        result = true;
    }
    return result;            
}
    

// INPUT: none
// OUTPUT: an array of scores in the hall of fame in decending order
function getHallScores(){
//  console.log("getHallScores() called.");     /*
        // TODO: 
        // get hallScores from cache
    var hallScores = JSON.parse(localStorage.getItem("hallScores"));
  
        // check in hallScores is null
    if (hallScores == null) {
        hallScores = [];
    }
    return hallScores;
// */
}


// INPUT: hallScores
// OUTPUT: an array of scores in the hall of fame in decending order
function sortScores(scores){
  for(var i=scores.length-1 ; i>=0 ; i-- ){
      for(var j=(i-1) ; j>=0 ; j--){
          if(scores[i][1] > scores[j][1]){
              var temp = scores[i];
              scores[i] = scores[j];
              scores[j] = temp;
          }
      }
  }  
  while (scores.length > 10) { scores.pop();  }
  localStorage.setItem("hallScores", JSON.stringify(scores)); 
    
  return scores;
}

/*************************************************
                    USER INTERACTION FUNCTIONS
**************************************************/


// DISPLAYS:
// WAITING FOR:
// NEXT:
function sampleState() {
//  console.log("function sampleState() called;");   /*    
        // TODO:

// */
}


// DISPLAYS: the opening screen
// WAITING FOR: user to push the "Begin" button
// NEXT: takeQuiz()
function init() {
    // hide and show navs and displays 
    nav1.show();
    nav2.hide();
    nav3.hide();
    display1.show();
    display2.hide();
    display3.hide();
        
    // place eventListener on the button 
    $("#begin").on("click", function(e){
      takeQuiz();
    });
}



// DISPLAYS: the quiz elements (question, time, score and if their answer was correct)
// WAITING FOR: time to run out
// NEXT: revealScore()
function takeQuiz() {
    // hide and show navs and displays 
    nav1.hide();
    nav2.show();
    nav3.hide();
    display1.hide();
    display2.show();
    display3.hide();


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
            clearInterval(timer); 
            revealScore(score);
        }
    }, 1000);

    var i=0;
    var numberOfQuestions = questions.length;


    
    var correct = askQuestion(i++);
    $(".response").on("click", function(e) {
        var t = "#";
        t += e.target.id;

        var jQtarget = $(t);
        var userChoice = e.target.innerText;
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
          if (i>=numberOfQuestions) { 
              clearInterval(timer); 
              revealScore(score);
          }
    
          correct = askQuestion(i++);
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
    // TODO:
    // hide nav2, nav1 === show nav3
    nav1.hide();
    nav2.hide();
    nav3.show();
    display1.hide();
    display2.hide();
    display3.show();
    
    // add listener to the nav2 to stop the timer and set time =0 to end while loop
    $("#nav3").on("click", function(){
        time = 60;
        init();
    });
    display3.html("<h1 style='margin: 70px'>Your final score is: "+score+"!</h1>");

    hallScores.splice(5, 0, ["MJH", score]);

    var newHallScores = sortScores(hallScores);
    console.log(newHallScores[0][0]);

    for(var i=newHallScores.length-1 ; i>=0 ; i--){
        display3.append("<h2>"+ordinalNumbers[i]+" place: "+newHallScores[i][0]+" ("+newHallScores[i][1]+" points)</h2");
    }

//    takeQuiz();
// */
}


$( document ).ready( init() );

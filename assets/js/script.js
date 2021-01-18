

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
    
    
// INPUT: none
// OUTPUT: an array of scores in the hall of fame in decending order
function getHallScores(){
//  console.log("getHallScores() called.");     /*
        // TODO: 
        // get hallScores from cache
        // check in hallScores is null
            // if yes, set hallScores to [[''][0],[''][0],[''][0],[''][0],[''][0],[''][0],[''][0],[''][0],[''][0],[''][0]]
            // if no, load hallScores
        // return hallScores
// */
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
//  console.log("function init() called;");     /*    
        // TODO:
        // hide nav2, nav3 and show nav1 
        nav1.show();
        nav2.hide();
        nav3.hide();
        // make HTML to be inserted into <main>  USE Ajax?
        // insert HTML into <main>
        // check if user has played before
            // if yes, display "welcome back" message unhide "rules" menu item
            // if no, display "intro" message explaining rules
        // append "Begin" button to <main>
        takeQuiz();
// */
}



// DISPLAYS: the quiz elements (question, time, score and if their answer was correct)
// WAITING FOR: time to run out
// NEXT: revealScore()
function takeQuiz() {
//    console.log("function takeQuiz() called;");    /*    
    // TODO:
    // hide nav1, nav3 === show nav2
    nav1.hide();
    nav2.show();
    nav3.hide();
    // set time
    // set score to 0
    // make trigger to count down time
    // make a while time > 0 loop
        // ask a question with options as buttons
        // set event listeners to all the buttons
        // get user input
        // check to see if user input is correct
            // if yes, add one point to score
            // if no, subtract some time
        // display result    
    // end while loop
    revealScore();
// */
}


// DISPLAYS: final score and notifies user if they made it to the Hall of Fame
// WAITING FOR: user to click the "Begin" button
// NEXT: init()
function revealScore() {
//    console.log("function revealScore() called;");    /*    
    // TODO:
    // hide nav2, nav1 === show nav3
    nav1.hide();
    nav2.hide();
    nav3.show();
    // get final score
    // check if score is in the Hall of Fame
        // if yes, update HoF and get user initials
    // display HoF
    init();
// */
}


$( document).ready( init() );
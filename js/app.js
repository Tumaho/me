'use strict'
var marks = 0;
var name = prompt("What is your name?");
alert("Welcome to my personal page " + name);
FirstsQuestions();
  luckyNumber();
Cars();
function FirstsQuestions (){
var food = prompt("Am i a food lover?(y/n)(yes/no)");

if (food.toLowerCase() === "y" || food.toLowerCase() === "yes") {
    marks = marks + 1;
    alert("good this is the first correct answer!");
    
} else if (food.toLowerCase() === "no" || food.toLowerCase() === "n") {
    alert("oops , wrong one");
    
} else {
    alert("The answer must be yes/no , you have 0 mark on this question sorry :(");
    
}


var sport = prompt("Am i a Barcelona club fan?(y/n)(yes/no)");
if (sport.toLowerCase() === "yes" || sport.toLowerCase() === "y") {
    marks = marks + 1;
    alert("good job! im a great fan <3");
   
} else if (sport.toLowerCase() === "no" || sport.toLowerCase() === "n") {

    alert("dude, im the biggest fan :(");
} else {
    alert("The answer must be yes/no , you have 0 mark on this question sorry :(");
}
var animal = prompt("Am i an animal's lover?(y/n)(yes/no)");
if (animal.toLowerCase() === "yes" || animal.toLowerCase() === "y") {

    alert("nooo , i realy hates all animals :(");
} else if (animal.toLowerCase() === "no" || animal.toLowerCase() === "n") {
    marks = marks + 1;
    alert("excelent , correct answer!)");
} else {
    alert("The answer must be yes/no , you have 0 mark on this question sorry :(");
}
var movie = prompt("Do i love movies?(yes/no)(y/n)");
if (movie.toLowerCase() === "yes" || movie.toLowerCase() === "y") {
    marks = marks + 1;
    alert("yes , I'm in love with movies");
} else if (movie.toLowerCase() === "no" || movie.toLowerCase() === "n") {
    alert("sorry but I'm in love with movies dude!");
} else {
    alert("The answer must be yes/no , you have 0 mark on this question sorry :(");
}

var smoke = prompt("Am I smoker?(yes/no)(y/n)");
if (smoke.toLowerCase() === "yes" || smoke.toLowerCase() === "y") {
    marks = marks + 1;
    alert("unfortunately correct answer ");
} else if (smoke.toLowerCase() === "no" || smoke.toLowerCase() === "n") {
    alert("no I'm a smoker");
} else {
    alert("The answer must be yes/no , you have 0 mark on this question sorry :(");
}
}


function luckyNumber(){

var myNumber = 6;
for (var i = 0; i < 4; i++) {
    var numberGuessing =  prompt("Guess my lucky number");
    
    
    if (numberGuessing == 6) {
        alert("CORRECT!");
        marks = marks + 1;
        break;
        

    }
    else if (numberGuessing < 2) {
        alert("This number is too low!");

    }
    else if (numberGuessing >= 2 && numberGuessing < 6 || numberGuessing > 6 && numberGuessing <= 10) {
        alert("MAN, you so close!");

    }

    else {
        alert("This number is too high or in not valid!");
        
    }



}


}


function Cars(){
var q7 = 0;


var favCar = ["bmw", "mercedes", "opel", "nissan", "kia", "dudge", "golf", "oudi"];

for (var i = 0; i < 6; i++) {
    var bestCar = prompt("Guess what is my favorite cars type").toLowerCase();

    for (var j = 0; j < favCar.length; j++) {
        if (bestCar === favCar[j]) {
            marks = marks + 1;
            q7 = q7 + 1;
            break;

        }

    }
    if (q7 == 1) {
        break;
    }


}
}


alert("Your score is: " + marks + " out of 7 , thank you for doing this quiz " + name);

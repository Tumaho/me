'use strict'
var marks = 0;
var name = prompt("What is your name?");
alert("Welcome to my personal page " + name );



var food = prompt("Am i a food lover?(y/n)(yes/no)");

if (food.toLowerCase() === "y" || food.toLowerCase() === "yes"){
    marks= marks + 1;
    alert("good this is the first correct answer!");
    // console.log("good this is the first correct answer!");
} else if (food.toLowerCase() === "no" || food.toLowerCase() === "n"){
    alert("oops , wrong one");
    // console.log("oops , wrong one");
} else {
    alert("The answer must be yes/no , you have 0 mark on this question sorry :(");
    // console.log("The answer must be yes/no , you have 0 mark on this question sorry :(");
}


var sport = prompt("Am i a Barcelona club fan?(y/n)(yes/no)");
if (sport.toLowerCase() === "yes" || sport.toLowerCase() === "y"){
    marks= marks + 1;
    alert("good job! im a great fan <3");
    // console.log("good job! im a great fan <3");
} else if (sport.toLowerCase() === "no" || sport.toLowerCase() === "n"){
    
    alert("dude, im the biggest fan :(");
    // console.log("dude, im the biggest fan :(");
} else {
    alert("The answer must be yes/no , you have 0 mark on this question sorry :(");
    // console.log("The answer must be yes/no , you have 0 mark on this question sorry :(");
}
var animal = prompt("Am i an animal's lover?(y/n)(yes/no)");
if (animal.toLowerCase() === "yes" || animal.toLowerCase() === "y"){
    
    alert("nooo , i realy hates all animals :(");
    // console.log("nooo , i realy hates all animals :(");
} else if (animal.toLowerCase() === "no" || animal.toLowerCase() === "n"){
    marks= marks + 1;
    alert("excelent , correct answer!)");
    // console.log("excelent , correct answer!)");
} else {
    alert("The answer must be yes/no , you have 0 mark on this question sorry :(");
    // console.log("The answer must be yes/no , you have 0 mark on this question sorry :(");
}
var movie = prompt("Do i love movies?(yes/no)(y/n)");
if (movie.toLowerCase() === "yes" || movie.toLowerCase() === "y"){
marks= marks + 1;
alert("yes , I'm in love with movies");
// console.log("yes , I'm in love with movies");
} else if (movie.toLowerCase() === "no" || movie.toLowerCase() === "n"){
alert("sorry but I'm in love with movies dude!");
// console.log("sorry but I'm in love with movies dude!");
} else {
alert("The answer must be yes/no , you have 0 mark on this question sorry :(");
// console.log("The answer must be yes/no , you have 0 mark on this question sorry :(");
}

var smoke= prompt("Am I smoker?(yes/no)(y/n)");
if (smoke.toLowerCase() === "yes" || smoke.toLowerCase() === "y"){
marks= marks+ 1;
alert("unfortunately correct answer ");
// console.log("unfortunately correct answer");
} else if (smoke.toLowerCase() === "no" || smoke.toLowerCase() === "n"){
alert("no I'm a smoker");
// console.log("no I'm a smoker");
} else {
alert("The answer must be yes/no , you have 0 mark on this question sorry :(");
// console.log("The answer must be yes/no , you have 0 mark on this question sorry :(");
}

alert ("your mark is : " + marks + " out of 5 , thank you for doing this quiz my friend " + name);
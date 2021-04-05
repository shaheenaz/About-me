'use strict'
let userName = prompt ('what is your name?')
alert("welcome to my website  "+ userName)
userName = userName.toLowerCase();
console.log(userName)
let myfavMovie = prompt('Do you think I like thriller movies?')
myfavMovie = myfavMovie.toLowerCase();
console.log(myfavMovie)
switch(myfavMovie){
    case'yes':
    case'y':
        alert("fantastic, thats correct");
    break;
    case "no":
    case "n":
    alert("SORRY!! its my favorite movie genre");
    break;
    default: 
    alert("THRILLER MOVIES ARE THE BSET");

} 
let myBackground = prompt('do you think Im a programmar?')
myBackground = myBackground.toLowerCase();
console.log(myBackground)
switch(myBackground){
    case'yes':
    case'y':
        //console.log("wrong")
        alert("NOPE, unfortunately Im not yet");
    break;
    case "no":
    case "n":
        //console.log("right")
    alert("COREECT, im a lab technician");
    break;
    default:
      //  console.log("im a lab tech") 
    alert("Im A lab technician");

} 
let intoReading = prompt('do you think Im into reading?')
intoReading = intoReading.toUpperCase();
console.log(typeof intoReading)
switch(intoReading){
    case'yes':
    case'y':
        alert("CORRECT,IM into reading since i was 13 years old");
    break;
    case "no":
    case "n":
    alert("WRONG ANSWER!");
    break;
    default: 
    alert("IM INTO READING SINCE 2013");
} 
let dayNight = prompt('do you think im a night owl?')
dayNight = dayNight.toLocaleLowerCase();
//console.log(dayNight)
switch(dayNight){
    case'yes':
    case'y':
        alert("CORRECT, Im a professional NIGHT OWL");
    break;
    case "no":
    case "n":
    alert("WRONG!!");
    break;
    default: 
    alert("professional NIGHT OWL");

} 
let coffee = prompt('do you think I prefer Coffee over tea')
coffee = coffee.toLocaleLowerCase();
//console.log(coffee)
switch(dayNight){
    case'yes':
    case'y':
        alert("CORRECT OF COURSE");
    break;
    case "no":
    case "n":
    alert("WRONG, im a night owl that drinks coffee day and night");
    break;
    default: 
    alert("COFFEE LOVER");

} 



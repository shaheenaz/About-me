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
   // console.log("right i like thriller movies")
        alert("fantastic, thats correct");
    break;
    case "no":
    case "n":
       // console.log("wrong, thriller movies is my favorite genre")
    alert("SORRY!! its my favorite movie genre");
    break;
    default: 
    //console.log("i like thriller movies")
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
    //console.log("if you think im into reading you are correct")
        alert("CORRECT,IM into reading since i was 13 years old");
    break;
    case "no":
    case "n":
        //console.log("if you think im not into reading you are wrong")
           alert("WRONG ANSWER!");
    break;
    default:
    //console.log("im into  reading")
    alert("IM INTO READING SINCE 2013");
} 
let dayNight = prompt('do you think im a night owl?')
dayNight = dayNight.toLocaleLowerCase();
console.log(dayNight)
switch(dayNight){
    case'yes':
    case'y':
    //console.log(" correct im a night owl")
        alert("CORRECT, Im a professional NIGHT OWL");
    break;
    case "no":
    case "n":
        //console.log("wrong im a night owl ")
    alert("WRONG!!");
    break;
    default: 
    //console.log("im a night owl")
    alert("professional NIGHT OWL");

} 
let coffee = prompt('do you think I prefer Coffee over tea')
coffee = coffee.toLocaleLowerCase();
console.log(coffee)
switch(coffee){
    case'yes':
    case'y':
    //console.log("right, i love coffee")
        alert("CORRECT OF COURSE");
    break;
    case "no":
    case "n":
        //console.log("wrong, its my favorite drink")
    alert("WRONG, im a night owl that drinks coffee day and night");
    break;
    default: 
   // console.log("i love coffee")
    alert("COFFEE LOVER");

} 
alert("Thank for visiting my website "+ userName + ", hope you come back another day")



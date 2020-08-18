/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

var votingAge = 18
var age = 10

if(age < votingAge ) {
    console.log("Too young to vote")
} else {
    console.log("you can vote")
}


//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let name = 'Ali'
let wife = 'Daniah'

if( name === 'Ali' ) {
   name = wife
} else {
    name
}



//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

let year = "1999"





//Task d: Write a function to multiply a*b


function mult(a,b) {
    return a*b
}

mult(3,5);


/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years

function dogYears(age) {
    return age*7
}

dogYears(10);





/************************************************************** Task 3 **************************************************************/
//Dog feeder
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight
// 11 - 15 lbs - 3% of their body weight
// > 15lbs - 2% of their body weight

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with ˜the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996

function dogFeeder(weight, age) {
    let feed = 0
    if(age >= 1) {
        if(weight <= 5) {
            feed = 0.05 * weight
        } else if (weight <=10) {
            feed = 0.04 * weight
        } else if (weight <= 15) {
            feed = 0.03 * weight
        } else {
            feed = 0.02 * weight
        }
    } else if (age >= (7/12) ) {
        feed = 0.04 * weight
    } else if (age >= (4/12) ) {
        feed = 0.05 * weight
    } else {
        feed = .1 * weight
    }

    return feed

}


/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number

// rock = 1
// paper = 2
// scissor =3

function rpc(user) {
    let computer = Math.floor(Math.random()*3) +1;


    let userchoice = 0;

    if(user == "rock") {
        userchoice = 1
    } else if(user == "paper") {
        userchoice = 2
    } else {
        userchoice = 3
    }

    if(userchoice === 1 && computer === 1) {
        console.log("Rock vs Rock: Tie")
    } else if (userchoice === 1 && computer === 2 ) {
        console.log("Rock vs Paper: Computer Wins")
    } else if (userchoice === 1 && computer === 3 ) {
        console.log("Rock vs Scissor: User Wins")
    } else if (userchoice === 2 && computer === 1 ) {
        console.log("Paper vs Rock: User Wins")
    } else if (userchoice === 2 && computer === 2 ) {
        console.log("Paper vs Paper: Tie")
    } else if (userchoice === 2 && computer === 3 ) {
        console.log("Paper vs Scissor: Comp Wins")
    } else if (userchoice === 3 && computer === 1 ) {
        console.log("Scissor vs Rock: Comp Wins")
    } else if (userchoice === 3 && computer === 2 ) {
        console.log("Scissor vs Paper: User Wins")
    } else {
        console.log("Scissor vs Scissor: Tie")
    }
}


/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles





//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters





/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`


function annoyingSong(num) {
    for (let i = num; i > 0; i--) {
        console.log(`${i} bottles of coffee on the wall`)
    }
}



/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade
//90s should be A
//80s should be B
//70s should be Cs
//60s should be D
//and anything below 60 should be F



function grade(score) {

    if(score >= 90 ) {
        console.log("A")
    } else if (score >= 80) {
        console.log("B")
    } else if (score >= 70) {
        console.log("C")
    } else if (score >= 60) {
        console.log("D")
    } else {
        console.log("F")
    }

}


/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object

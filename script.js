// Activating Strict Mode
'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true; // Deliberate Error hasDriverLicense
if (hasDriversLicense) console.log("I can drive.");

// The following causes errors as these variable names are reserved
// const interface = 'Audio'; const private = 534; const if = 23; 

// Functions - call, invoke or run often
function logger() {
    console.log('My name is Shay');
}


// Functions
// (Parameters) - input data (Variables)
function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice; // Return any value from the function
};

// Write the values of apples, organges. These are inputs (Arguments).
const appleJuice = fruitProcessor(2, 3); 
// When return is used, the function call stores the function value.
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


// Function Declaration Vs. Expressions
// Declaration
function calcAge1(birthYear) {
    return 2037 - birthYear; 
}
const age1 = calcAge1(1998);
console.log(age1);

// Expression - Anonymous Function - Called the same way
const calcAge2 = function (birthYear) {
    return 2037 - birthYear; 
}
const age2 = calcAge2(1998);
console.log(age1);


// Arrow Functions
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1998);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`; 
}
console.log(yearsUntilRetirement(1998, 'Shay'));


// Functions Calling Other Functions
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples); // 2 * 4
    const orangePieces = cutFruitPieces(oranges); // 3 * 4

    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`
    return juice; // Return any value from the function
};

console.log(fruitProcessor(2, 3));


// Reviewing Functions
const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const theYearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0 ) {
        console.log(`${firstName} retires in ${retirement} years. `)
        return retirement;
    } else {
        console.log(`${firstName} has already retired. `)
        return -1; // number that shows no meaning - useful in testing
    }
}
console.log(theYearsUntilRetirement(1998, 'Shay'));




// CHALLENGE 1
/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.
TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.
*/

// Calculate Dolphin Average
function dolplhinAverage(scoreOne, scoreTwo, scoreThree) {
    return scoreOne + scoreTwo + scoreThree; 
}
const calcAverageDolphins = dolplhinAverage(85, 54, 41);

// Calculate Koala Average
function averageKoalas(scoreOne, scoreTwo, scoreThree) {
    return scoreOne + scoreTwo + scoreThree; 
}
const calcAverageKoala = averageKoalas(23, 34, 27);

// Check Winner
function checkWinner() {
    if (calcAverageDolphins >= calcAverageKoala * 2) {
        console.log(`The Dolphins win with a score of ${calcAverageDolphins}!`)
    } else if (calcAverageKoala >= calcAverageDolphins * 2) {
        console.log(`The Koalas win with a score of ${calcAverageKoala}!`)
    } else {
        console.log(`No one won the game, this round!)`)
    }
}

// Which Team Won ?
checkWinner();


// Arrays (and Objects)
const friendOne = 'Micheal';
const friendTwo = 'Steven';
const friendThree = 'Peter';

const years = new Array(1991, 19984, 2008, 2020);
const friends = ['Micheal', 'Steve', 'Peter']; // More common use, the literal syntax
console.log(friends[0]);
console.log(friends[2]);

console.log(friends[friends.length[-1]]); // Retrieve last element => friends[3-1] = friends[2]
console.log(friends.length); // Length of elements in an array

// Replacing items in arrays
// Only primitive values are immutable, not arrays
friends[2] = 'Jay';
console.log(friends)

const shay = ['Shay', 'S', 2037 - 1991, 'teacher', friends]; // Nesting Arrays
console.log(shay);

// Exercise
const calculateAge = function (birthYear) {
    return 2037 - birthYear;
}
const theYears = [1990, 1967, 2002, 2010, 2018];
const age4 = calculateAge(years[0]); // 1990
const age5 = calculateAge(years[1]);  // 1967
const age6 = calculateAge(years[years.length - 1]); // 2018

const ages = [calculateAge[years[0]], calculateAge[years[1]]];
calculateAge[years[years.length-1]];
console.log(ages);


// Basic Array Operations (Methods) - Push & unshift
// Add elements
const newFriends = ['Mike', 'Jack', 'Sam'];
newFriends.push('Jay'); // Adds Jay to the array & returns length
console.log(newFriends); 

newFriends.shift(); // Removes the first element in array
newFriends.unshift('John'); // Adds John at the start of the array
newFriends.pop(); // removes the last element/item of the array
console.log(newFriends.indexOf('Steven')); // Returns the position of the item
newFriends.includes('Steven'); // Returns true or false if an element is in the array

if (newFriends.includes('Jason')) {
    console.log('You havea friend called Jason');
}




// CHALLENGE 2
/* 
Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:

- Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
- And now let's use arrays! So, create an array called bills containing the test data below.
- Create an array called tips containing the tip value for each bill, calculated from the function you created before.

BONUS: Create an array totals containing the total values, so the bill + tip.

TEST DATA: 125, 555, and 44.

*/

// Total + Tip Calculator
function calculateDinnerTotal(theBill) {

    let theTip = 0;
    let theTotal = 0;
    
    if (theBill >= 50 && theBill <= 300) {
        theTip = 0.15;
        theTotal = theTip * theBill + theBill;
        console.log(`The cost for the dinner is $${theTotal}`);
    } else {
        theTip = 0.3;
        theTotal = theTip * theBill + theBill;
        console.log(`The cost for the dinner is $${theTotal}`);
    }
}

// Tip Calculator
// function calculateTip(theBill) {

//     let theTip = 0;
//     let theTotal = 0;
    
//     if (theBill >= 50 && theBill <= 300) {
//         return theTip = 0.15;
//     } else {
//         return theTip = 0.3;
//     }
// }

const aSetOfBills = [125, 555, 44];
const aSetOfTips = [calculateTip(aSetOfBills[0]), calculateTip(aSetOfBills[1]), calculateTip(aSetOfBills[2])];

// BONUS
const aSetOfTotals = [calculateDinnerTotal(aSetOfBills[0]), calculateDinnerTotal(aSetOfBills[1]), calculateDinnerTotal(aSetOfBills[2])];
console.log(aSetOfTips);


// Introduction To Objects - Using {} notation - The Object literal syntax
// This object has 5 properties firstName, secondName, age, job, friends
const helloWorld = {
    firstName: 'Shay',
    secondName: 'S',
    birthYear: 1998,
    age: 'age',
    job: 'job',
    friends: ['Jason', 'Jack', 'Sarah', 'Jess'],
    hasDriversLicenses: true,

    // Functions attached to an Object are methods
    calcAge: function() {
        console.log(this); // this = helloWorld, this.birthYear = 1998;
        return 2037 - this.birthYear;
    },



};


// Dot Vs. Bracket Notation
console.log(helloWorld.secondName); // Retrieves secondName property to print 'Second Name'
console.log(helloWorld['firstName']); // Using the property name

// Add properties to an existing object
helloWorld.location = 'London';
helloWorld.favouriteHobbie = 'code';
console.log(helloWorld);

// Small-Challenge
// Shay has 3 friends, and his friend is jack.
const helloAgain = {
    firstName: 'Shay',
    friends: 3,
    bestFriend:'Jack',
};
console.log(helloAgain.firstName);
console.log(helloAgain.friends);
console.log(helloAgain.bestFriend);


// Object Methods
console.log(helloWorld.calcAge()); // Dot notations
console.log(helloWorld['calcAge'(1998)]); // Bracket Notation




// CHALLENGE 3
/* 
Let's go back to Mark and John comparing their BMIs!
This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

Your tasks:
- For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.
- Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property called bmi (lowercase), and also return it from the method.
- Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

*/

// BMI = mass / (height * height)
const mark = {
    fullName: 'Mark',
    mass: 78,
    height: 1.69,
    
    calcBMI: function() {
        bmi = this.mass / (this.height * this.height);
        return bmi;
    }
};

const john = {
    fullName: 'John',
    mass: 92,
    height: 1.95,
    
    calcBMI: function() {
        bmi = this.mass / (this.height * this.height);
        return bmi;
    }
};

// Calculate BMI for both Mark and John before comparing
if (mark.bmi > john.bmi) {
    console.log(`Mark's BMI of ${mark.calcBMI()} is greater than John's BMI of ${john.calcBMI()}`);
} else {
    console.log(`John's BMI of ${john.calcBMI()} is greater than Mark's BMI of ${mark.calcBMI()}`);
}


// Iteration: The For Loop
// For loop keeps running while condition is true
for (let rep = 1; rep <= 10; rep++) {
    // Write code we want repeated
    console.log(`Hello ${rep}`); // repeats 10 times
}


const birthYears = [1990, 1995, 2000, 2005, 2010];
const agesForBirthYears = [];

for (let i = 0; i < birthYears.length; i++) {
    agesForBirthYears.push(2037 - birthYears[i]);
}

console.log(agesForBirthYears);

// Arrays, Break & Continue
const dailySchedule = [
    'gym',
    'lunch',
    'work',
    40,
    'code',
    'study',
    'sleep',
    30
]

// for (counter = 0, condition/goal, update counter)
// Continue and Break
for (let i = 0; i < dailySchedule.length; i++) {
    if (typeof dailySchedule[i] !== 'string') {
        continue; // skip non-string items
    }
    
    if (typeof dailySchedule[i] === 'number') {
        break; // break if a number is encountered
    }
    
    console.log(dailySchedule[i], typeof dailySchedule[i]); // print item and their type
}


// Looping Backwards and Nested Loops
for (let i = dailySchedule.length - 1; i>= 0; i--) {
    console.log(dailySchedule[i]);
}

// Nested Loops
const listOfExercises = ['deadlift', 'squat', 'bench press', 'overhead press'];
for (let exercise = 1; exercise < listOfExercises.length; exercise++ ) {
    console.log(`STARTING EXERCISE ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Lift weight reps ${rep}`)
    }
        }

       
// Whle loops
let rep = 1; // Condition (flag)
while (rep <= 10) {
    console.log(`${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
}




// CHALLENGE 4
/* 

Let's improve Steven's tip calculator even more, this time using loops!

Your tasks:
- Create an array called bills containing all 10 test bill values.
- Create empty arrays for the tips and the totals (tips and totals)
- Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.

BONUS:

Write a function calcAverage which takes an array called arr as an argument. This function calculates the average of all numbers in the given array. 
*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calculateTipTotal() {
    let theTip = 0;
    let theTotal = 0;
    
    for (let i = 0; i < bills.length; i++) {
        if (bills[i] >= 50 && bills[i] <= 300) {
            theTip = 0.15 * bills[i];
        } else {
            theTip = 0.3 * bills[i];
        }

        theTotal = theTip + bills[i];
        
        tips.unshift(theTip);    // Add calculated tip for each bill
        totals.unshift(theTotal); // Add total for each bill
    }

    // BONUS: Calculate the average of all elements in `tips` and `totals` arrays
    let averageTips = 0;
    let averageTotal = 0;

    // Sum up tips
    for (let x = 0; x < tips.length; x++) {
        averageTips += tips[x];
    }

    // Sum up totals
    for (let y = 0; y < totals.length; y++) {
        averageTotal += totals[y];
    }

    averageTips /= tips.length;  // Divide by the length after summing
    averageTotal /= totals.length;  // Divide by the length after summing

    // Log results for average tips and totals
    console.log(`The average tip is ${averageTips}`);
    console.log(`The average total with tips is ${averageTotal}`);
}

calculateTipTotal();

console.log(tips);
console.log(totals);


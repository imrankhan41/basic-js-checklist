//1. write 3 vaiables (number,string,boolean)

let myNumber = 1652015620;
const myName = 'imran';
var isThisMyNo = true;
console.log(myNumber);
//2. 2 variables (let, const)

myNumber = 05168233154;
console.log('My new phone number is', myNumber)
console.log(myName);


//3. simple math() +, -, * , /, %

function addtion(num1, num2) {
    let add = num1 + num2;
    return add;
}
let addResult = addtion(15, 3);
console.log(addResult);

function subtraction(num3, num4) {
    let sub = num3 - num4;
    return sub;
}
let subResult = addtion(15,3);
console.log(subResult);
function multiplication(num5, num6) {
    let multi = num5 * num6;
    return multi;
}
let multiResult = addtion(15,3);
console.log(multiResult);
function division(num7, num8) {
    let div = num7 / num8;
    return div;
}
let divResult = division(15,3);
console.log(divResult);
function dmoduluss(num9, num10) {
    let modulu = num9 % num10;
    return modulu;
}
let modResult = dmoduluss(15,3);
console.log(modResult);

//4.comparision()
let myScore = 20;
let herScore = 25;
if (myScore == herScore){
    console.log('we are equal');
}
else if(myScore> herScore){
    console.log('My score is higher')
}
else if(myScore>= herScore){
    console.log('My score is higher or equal')
}
else if(myScore<= herScore){
    console.log('My score is lower or equal')
}
else if(myScore< herScore){
    console.log('My score is lower')
}
else if(myScore != herScore){
    console.log('we are not equal');
}

else{
    console.log('i dont know');
}

//5.two conditions. case-1:fullfill both condition case-2:fullfill one condition 
let myAge = 25;
let herAge =20;
if(myAge != herAge && myAge < herAge ){
    console.log("Yes, They are not equal");
}
else if(myAge != herAge || myAge > herAge){
    console.log('one condition fulfilled in or greater')
}
else if(myAge != herAge || myAge < herAge){
    console.log('one condition fulfilled in or less')
}
else if(myAge == herAge || myAge < herAge){
    console.log('Both condition fulfilled in equal')
}
else if(myAge != herAge && myAge >= herAge){
    console.log('Both condition fulfilled in equal')
}
else if(myAge != herAge && myAge > herAge){
    console.log('Both condition fulfilled')
}
else{
    console.log('i dont know')
}
//another
let score = 80;
switch(true){
    case (score>=80):
        console.log('A+');
        break;
    case (score<80 && score >=70):
        console.log("A");
        break;    
    case (score<70 && score >=60):
        console.log("A-");
        break;    
    case (score<60 && score >=50):
        console.log("B");
        break;    
    case (score<50 && score >=40):
        console.log("C");
        break;    
    case (score<40 && score >=33):
        console.log("A");
        break;    
    default:
        console.log("F");  
}
//6. if - else
let imranAge = 25;
let taniaAge = 20;
if(imranAge == taniaAge){
    console.log("Yes, They are equal");
}
else if(imranAge != taniaAge && imranAge < taniaAge){
    console.log("Yes, imran is smaller in age");
}
else if(imranAge != taniaAge && imranAge > taniaAge){
    console.log("Yes, imran is bigger in age");
}
else if(imranAge >= taniaAge){
    console.log("Yes, imran is bigger or equal in age");
}
else if (imranAge <= taniaAge){
    console.log("Yes, imran is smaller or equal in age");
}
else {
    console.log("oops, ii dont know");
}

//7. while loop result 7 to 19 odd number
console.log("even number");
let i =7;
while(i <19){
    
    if(i%2 == 0){
       
        console.log(i);
    }
    i++;
}
console.log(i);
console.log("ödd number");
let num =7;
while(num <19){
    if(i%2 != 0){
        console.log(num);
    }
    num++;
}
console.log(num);

//8.declare an array.4th position element replace,add or remove element. check whether a specific value exists in the array
console.log('array')
let names = ['imran','jamal','aamal','kamal','salam'];
let nameLength =names.length;
console.log(nameLength);

names[3]='bamal';
console.log(names);

names.push("amran");
console.log(names);
names.unshift("khan");
console.log(names);

names.pop();
console.log(names);
names.shift();
console.log(names);

if(names.indexOf('imran') !== -1){
console.log("yes, this valus is exist");
}
else{
    console.log("not exist");
}

// 9. use any for loop to display every elements of an array

let mobiles = ['walton', 'shaomi',
'samsung','htc','oppo','apple'];

for(let i=0; i< mobiles.length; i++){
    let element = mobiles[i];
    if(mobiles.indexOf(element) !== -1){
        console.log(element);
    }
}
// 10. you have an array of numbers. display only the numbers bigger than 80  
let numbersArray = [10,8,81,98,70,15,89,189];
for(let i=0; i<numbersArray.length; i++){
    let elements =numbersArray[i];
    if(elements >80){
        console.log(elements);
    }
}

// 11. write a function that takes three numbers and returns the multiplication of the three numbers

function multiplyThreeNumbers(num1,num2,num3){
    let multiply = num1 * num2 * num3;
    return multiply;
}


let result1= multiplyThreeNumbers(10,10,10);
console.log(result1);

// 12. declare an object and change any property of that object.
let shopping = 
    {product:"laptop",price:200,items:2}


shopping.product ="computer";
console.log(shopping);
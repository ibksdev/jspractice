//variable Declaration
// var num =201;

// console.log(num);

// var num=10;
// var sum=num+20;
// console.log(sum);


// Module 2 : Practice Pre Record #35

// Module 2: Live Test
// const originalArray = [1,6,2,7,3,8,4,9,5,10];
// const newArray = originalArray.map(myFunction);
// function myFunction(n) {
//     if(n <= 5)
//     {
//   return n + 10;
//     }
//     else
//     {
//         return n;
//     }
// }
// console.log(newArray);


/*const a= 20;
const b=5;
const c= a % b;
console.log(c)*/

/*
function matheOperator(num1,num2){
        let sum = num1 + num2;
        let difference = num1 - num2;
        let division = num2 / num1;
        let multiPly = num1 * num2;

        console.log(`Sum : ${sum}`);
        console.log(`Difference : ${difference}`);
        console.log(`Division : ${division}`);
        console.log(`Multiplication: ${multiPly}`);
}
matheOperator(20,30);


var y = 5 + 2 * 3 % 2 - 1;
console.log(y);*/
/*
var a = 10;
var z = a++ * 2 - a-- * 3;
console.log(z)*/

//
// var w = 10 > 5 && 5 < 3 || 2 + 2 === 5;
// console.log(w)
//
//
// let num1=30;
// let num2=15;
// let num3=-10;
//
// if (num1 > 0 ){
// 	if(num2 > 0)
// 	{
// 		if(num3>0)
// 		{
// 			console.log("Numbers are positive");
// 		}
// 		else{
// 			console.log("N3 Negative Numbers")
// 		}
// 	} else {
// 		console.log("N2 Negative Number")
// 	}
//
// }
// else {
// 	console.log("N1 is a negative")
// }

//Ternary Operator
// let isLoggedIn= true;
// let message= isLoggedIn ? "Login Successfully" : "You are not logged in"
// console.log(message)

// let age=18;
// let message = age >=18 ? "You are eligble to vote" : "You are not Adult"
// console.log(message);
//
// function  isEvenOrOdd (number) {
//
// 	return number % 2 ===0 ? "even" : "Odd"
// }
// console.log(isEvenOrOdd(2))
// console.log(isEvenOrOdd(3))

//Array
// let myArray=[1,2,3,4,5];
// myArray[0]=-1;
// myArray.push(2,10,2,0,3,0,5,8);
// myArray.pop(9);
// console.log(myArray);
// console.log(myArray.length);


const array1=[1,2,3,4,5];
const array2=[6,7,8,9,10];
let newArray=array1.concat(array2);
let evenNumber=newArray.filter(number => number % 2 ===0)
let foundNumber=evenNumber.find(n=> n>2)

console.log(foundNumber);
/* 1 завдання */
/* function func1(arguments) {
    arguments = +prompt("Enter your arguments, please")
    alert(arguments.length)
  }
  func1() */
let Funclenth = (args = prompt("Enter your arguments, please")) => {
    return args.length
};
  
alert(Funclenth())
/* 2 завдання */
function compareNum (a, b)  {
    a = prompt("Enter your first number")
    b = prompt("Enter your second number")
    if (a < b) {
        alert('-1')
    } else if (a > b) {
        alert('1')
    } else if (a = b){
        alert('0')
    } else {
        alert('unfortunately, it is not a correct symbol')
    }
 }
 compareNum()
/*  3 завдання */
function factorial(n = prompt("Enter your number, please ")) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }
  
  alert( factorial() )
  /* 4 завдання  */
  function numbersToString (a, b, c ) {
    a = prompt("Enter your number, please ")
    b = prompt("Enter your number, please ")
    c = prompt("Enter your number, please ")
    return (a + b + c)
  }
  
  alert( numbersToString () )
 /*  5 завдання */
 function square (a, b = a ) {
    a = prompt("Enter length of the first side, please ")
    b = prompt("Enter length of the second side, please ")
    if (b == 0) {
       b = a
    }
    return ((a * 2) + (b * 2 ))
  }
  
  alert( square () )
  /* 6 завдання */
  let number
  function isPerfect(number = +prompt ('enter your number))'))
{
var temp = 0;
   for(var i=1;i<=number/2;i++)
     {
         if(number%i === 0)
          {
            temp += i;
          }
     }
   
     if(temp === number && temp !== 0)
        {
       console.log("It is a perfect number.");
        } 
     else
        {
       console.log("It is not a perfect number.");
        }   
 } 
isPerfect();
/*   7 завдання */
function idealNumFromRange (a, b ) {
    a = +prompt("Enter the first number of the range, please ")
    b = +prompt("Enter the second  number of the range, please ")
 
    if (a >= 0 && b == 6) {
       alert("6 in your array is a perfect number")
    } else if (a >= 0 && ( b < 6)) {
       alert("there are no perfect numbers in your array ")
    } else if (a >= 0 && ( b == 28)) {
       alert("6 and 28 in your array are perfect numbers")
    } else if (a >= 0 && (b < 28)) {
       alert("6  in your array is a perfect number")
       
    } else if (a >= 0 && b == 496) {
       alert("6, 28 and 496 in your array are perfect numbers")
    } else if (a >= 0 && b < 496) {
       alert("6 and 28  in your array are perfect numbers")
    } else if (a >= 0 && b == 8128) {
       alert("6, 28, 496 and 8128 in your array are perfect numbers")
    } else if (a >= 0 && b < 8128) {
       alert("6, 28 and 496  in your array are perfect numbers")
    } else if (a >= 0 && b == 33550336) {
       alert("6, 28, 496, 8128 and 33550336 in your array are perfect numbers")
    } else if (a >= 0 && b < 33550336) {
       alert("6, 28, 496 and 8128  in your array are perfect numbers")
    } else if (a >= 0 && b == 8589869056) {
       alert("6, 28, 496, 8128, 33550336 and 8589869056 in your array are perfect numbers")
    } else if (a >= 0 && b < 8589869056) {
       alert("6, 28, 496, 8128 and 33550336 in your array are perfect numbers")
    } else {
        alert("You have entered not a correct value")
    }
 
   
 }
 idealNumFromRange()
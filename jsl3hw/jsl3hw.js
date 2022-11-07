const age = prompt ("Enter your age");
if (age >= 0 && age <= 11) {
    alert('You are a child!');
  } else if (age >= 12 && age <= 17) {
    alert('You are a teenager!');
} else if (age >= 18 && age <= 59) {
    alert('You are an adult!');
} else if (age >= 60 && age <= 90) {
    alert('You are a silverager!');
  } else {
    alert('You put not a correct answer!');
  }

  const tap = prompt('Enter any number from 0 to 9', '');

  switch (tap) {
    case '0':
      console.log(')');
      break;
    case '1':
      console.log('!');
      break;
    case '2':
      console.log('@');
      break;
      case '3':
      console.log('#');
      break;
    case '4':
      console.log('$');
      break;
    case '5':
      console.log('%');
      break;
    case '6':
        console.log('^');
        break;
    case '7':
        console.log('&');
        break;
    case '8':
        console.log('*');
        break;
    case '9':
        console.log('(');
        break;
    default:
      console.log('The symbol is not recognized');
      break;
  }

let number1 = +prompt (" Enter your first number");
let number2 = +prompt (" Enter your second number");
    quantity = number2 - number1;
for (let i = number1; i < number2; i++) {
     let sumar = ((2 * number1 + quantity) / 2) * (quantity + 1) ; 
    console.log(sumar);
  }

  const nod = (n, m) => {
    if (m !== 0) {
      const k = n % m;
      return nod(m, k);
    }
    return n;
  };
  
  alert('Введіть два числа, щоб знайти їх найбільший спільник дільник')
  let numb1 = prompt('Сюди напишіть своє перше число');
  let numb2 = prompt('Сюди напишіть своє друге число');
  alert('Найбільший спільний дільник чисел ' + numb1 + ' та ' + numb2 + ' буде: ' + nod(numb1, numb2));

  let digit = prompt("enter your number");
  for (let i = 1; i <= digit / 1; i++) {
      if (digit % i == 0) console.log(i);   
    }
 
  let pal = +prompt("Enter 5-digit number");
  
  //function palindrome(num) {
       // var tmp = num, res = 0, dig;
       // while (tmp) {
            ////dig = tmp % 10;
            //res = res * 10 + dig;
            //tmp = (tmp - dig) / 10;
       //}
       // return res == num;
   //}
    //alert(palindrome());
    

    var buy = prompt("Enter the value of your purchase");
    var discountedBuy;
    
    if (buy >= 200 && buy <= 300) {
       discountedBuy = buy - (buy / 100 * 3);
       
    }
    
    if (buy >= 300 && buy <= 500) {
       discountedBuy = buy - (buy / 100 * 5);
    }
    
    if (buy >= 500) {
       discountedBuy = buy - (buy / 100 * 7);
    } 
    alert (`Sum of your purchase with a discount will be ${discountedBuy}`);
  
    let monday = ("today is monday");    
var day = confirm(`${monday} do you wanna know which day is next?`);
    var text;
    if (day == true) {
       text = alert("next day will be tuesday");
    } 
    else {
      text = alert("You canceled!");
   }
    day = confirm(" do you wanna know which day is next?");
    if (day == true) {
      text = alert("next day will be wensday");
   } 
    else {
       text = alert("You canceled!");
      
    }

    day = confirm(" do you wanna know which day is next?");
    if (day == true) {
      text = alert("next day will be thursday");
   } 
    else {
       text = alert("You canceled!");
    }

    day = confirm(" do you wanna know which day is next?");
    if (day == true) {
      text = alert("next day will be friday");
   } 
    else {
       text = alert("You canceled!");
    }
    day = confirm(" do you wanna know which day is next?");
    if (day == true) {
      text = alert("next day will be saturday");
   } 
    else {
       text = alert("You canceled!");
    }
    day = confirm(" do you wanna know which day is next?");
    if (day == true) {
      text = alert("next day will be sunday");
   } 
    else {
       text = alert("You canceled!");
    }
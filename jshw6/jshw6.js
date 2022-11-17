/* завдання 1 */
let yes = "yes";
let no = "no";
let quantity = 1;
//let quantity1 = 1;
let quantity2 = 2;
let quantity3 = 3;
let price = 10;
let  price1  = 15;
let price2 = 5;
let price3 = 20; 
var bargainList1 = [
   {
product: "bread",
quantity : quantity,
hadbought : yes,
price :  price,
sum : price * quantity,
},
 {
product: "milk",
quantity : quantity,
hadbought : no,
price : price1,
sum : price1 * quantity,
},
 {
   product: "soda",
   quantity : quantity,
   hadbought : yes,
   price : price2,
   sum : price2 * quantity,
   },
  {
   product: "tomatoes",
   quantity : quantity ,
   hadbought : no,
   price : price3,
   sum : price3 * quantity,
   }
   
]


var newArr = bargainList1.map(el => el.sum);
console.log(newArr);
var newArr1 = bargainList1;
console.log(newArr1);
console.log(newArr1);
/* 1.1 */
/* function groupBy(objectArray, property) {
    return objectArray.reduce((acc, obj) => {
      const key = obj[property];
      const curGroup = acc[key] ?? [];
  
      return { ...acc, [key]: [...curGroup, obj] };
    }, {});
  }
  const groupedGoodes = groupBy(bargainList, "hadbought");
console.log(groupedGoodes); */
/* або */
bargainList.sort((a, b) => {
   const nameA = a.hadbought.toUpperCase(); 
   const nameB = b.hadbought.toUpperCase(); 
   if (nameA < nameB) {
     return -1;
   }
   if (nameA > nameB) {
     return 1;
   }
   return 0;
 });
bargainList.sort()
/* 1.2 */
function delPurchased(goody = prompt("enter purchased goody", "tomatoes")) {
   for (i=1;i<=9 ; ++i){
   if (goody == "tomatoes" && bargainList[1].hadbought == "yes" ) {
         
         bargainList[1].quantity = bargainList[1].quantity + i
         bargainList[1].sum = price3 * bargainList[1].quantity 
   } else if (goody == "milk" && bargainList[0].hadbought == "yes"){
         
         bargainList[0].quantity = bargainList[0].quantity + i
         bargainList[0].sum = price1 * bargainList[0].quantity 
   }else if (goody == "tomatoes") {
      bargainList[1].hadbought = "yes"; 
     
   } if (goody == "milk") {
      bargainList[0].hadbought = "yes"
   } else if (goody == "soda"){
      
      bargainList[3].quantity = bargainList[1].quantity + i;
      bargainList[3].sum = price2 * bargainList[3].quantity 
   } else if (goody == "bread") {
   
      bargainList[2].quantity = bargainList[1].quantity + i
      bargainList[2].sum = price * bargainList[2].quantity 
   } break
}   
}
/* 2.1  */
function Removed (removed = prompt("enter removed product")) {
    if (removed == "milk") { 
       x = 1
    } else if (removed == "tomatoes"){
       x = 3
    } else if (removed == "bread"){
       x = 0
    } else if (removed == "soda"){
       x = 2
    } 
    bargainList.splice(x, 1, );
    console.log(bargainList)
 }
 Removed()
/* 2.2 */
function newProduct() {
  
    let newproduct = prompt ("enter new product")
       
     let quantitynew = +prompt ("enter quantity")
       
    let hadalrbought = prompt ("had this product been bought  or not?")
    let pricenew = +prompt ("enter price") 
    var newest = [ {
       product: newproduct,
       quantity : quantitynew ,
       hadbought : hadalrbought,
       price : pricenew,
       sum : pricenew * quantity,
    } ]
       
     bargainListnew = bargainList.concat(newest);
     console.log(bargainListnew)
    }
/* 3.1 */ 
const summy = bargainList.reduce(
    (accumulator, currentValue) => accumulator + currentValue. sum,
    0,
  );
  console.log(summy)
/*   3.2 */
function notboughtsum() {
   const summy = groupedGoodes[no].reduce(
      (accumulator, currentValue) => accumulator + currentValue. sum,
      0,
    );
    console.log(summy)  
}
notboughtsum()
/* 3.3 */
function sortedByPrice(prices = prompt("enter world low or hight depending on which prices you wanna see first")) {
    if (prices == "low") {
       bargainList.sort((a, b) => a.price - b.price);
       console.log(bargainList)
    } else if (prices == "hight"){
       bargainList.sort((a, b) => b.price - a.price);
       console.log(bargainList)
    }
    
 }

delPurchased()
delPurchased() 
console.log(bargainList)
console.log(bargainList.tomatoes.sum)
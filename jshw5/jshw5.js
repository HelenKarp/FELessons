/* завдання 1 */
let averagegasEating = 8;
averagespeed = 110;
const Car = {
produser : "Nissan",
model : "Juke",
year : "2017",
"average speed" : averagespeed,
"engine volume" : 1.6,
averagegasEating : averagegasEating,
driver : "Suzi",
info : function info() {
  console.log(this);
},
changeName : function changeName (){   
  let copy = Car;    
  let driveR = prompt ("Enter new driver's name to change driver", "Suzi")
     copy.driver = driveR
     console.log (this.driver);
  },
valueOf(a) {
     console.log (this.averagegasEating);
     a = (this.averagegasEating) ;
     console.log(a)
     console.log (averagespeed)
   },
resoursesForRide : function gasForRide(dist= +prompt("Enter your distance")) { 
gas = (dist / 100) * averagegasEating;
console.log( gas) 
rideTime = (dist / averagespeed ) 
time = Math.floor(rideTime / 4)
fullTime = (rideTime + time).toFixed(2)
fullTime1 = (rideTime + time).toFixed()
minutes = ((fullTime - fullTime1) * 60).toFixed()
alert ("For this ride you need " + " " +gas +" " + "litres of gas," + " " +fullTime1 +" " + "hour/s and" +" " + minutes +" "+ "minutes")

}              
};
console.log (Car.driver);
Car.info()
Car.changeName()
Car.valueOf()
Car.resoursesForRide()
/* завдання 2  */
let CurrentTime = new Date();
alert (CurrentTime)
let hourr = + prompt ( "Add some amount of hours to current time")
CurrentTime.setHours (CurrentTime.getHours() + hourr);
   alert(CurrentTime.getHours()+":"+CurrentTime.getMinutes()+":"+CurrentTime.getSeconds() );
let minutes = + prompt ( "Add some amount of minutes to current time")
CurrentTime.setMinutes(CurrentTime.getMinutes() + minutes);
alert(CurrentTime.getHours()+":"+CurrentTime.getMinutes()+":"+CurrentTime.getSeconds() );
let sec = + prompt ( "Add some amount of seconds to current time")
CurrentTime.setSeconds (CurrentTime.getSeconds() + sec);
alert(CurrentTime.getHours()+":"+CurrentTime.getMinutes()+":"+CurrentTime.getSeconds() );
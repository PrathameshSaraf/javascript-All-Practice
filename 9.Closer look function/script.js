//====================================Default parameters===============================
/*
const bookings = [];
const createBooking = function (
    flightNum, 
    numPassenger=1,
    price=199*numPassenger) {
  const booking = {
    flightNum,
    numPassenger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking("LH123");
createBooking("LH123",2,800);
createBooking("LH123",2);
createBooking("LH123",5);

createBooking('LH123',undefined,1000)*/
//================================passing arguments works============================
/*
const flight='LH123';
const saraf={
    name:'prathamesh',
    passport:1254789632
};
const checkIn=function(flightNum,passenger){
    flightNum='LH999';
    passenger.name='Mr. '+passenger.name;

    if(passenger.passport===1254789632){
        alert('checked in');
    }else{
        alert('wrong passport');
    }
}
checkIn(flight,saraf);
console.log(flight,saraf);

const flightNum=flight;
const passenger=saraf;
*/ /*
//==================================first class and higher order function============
const oneWord=function(str){
    return str.replace(/ /g,' ').toLowerCase();
}

const upperFirstWord=function(str){
    const [first,...others]=str.split(' ');
    return [first.toUpperCase(),...others].join(' ');
}

const transformer=function(str,fn){
    console.log(`Original string ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`Transformed by:${fn.name}`);
}

transformer('javascript is the best!',upperFirstWord);
transformer('JavaScript is the best!',oneWord);
*/ /*
//====================================function return function===========================
const greet=function(greeting){
    return function(name){
        console.log(`${greeting} ${name}`);
    }
};

const greeterHey=greet('Hey');
greeterHey('Saraf');
greeterHey("Prathamesh");

greet('hello')('saraf');

//arrow function
const greetArr=greeting=>name=>console.log(`${greeting} ${name}`);

greetArr('hi')('Saraf');
*/ /*
const lufthansa = {
  airline: "lufthansa",
  iataCode: "LH",
  booking: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.booking.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, "Saraf");

const eurowings = {
  airline: "eurowings",
  iataCode: "EW",
  booking: [],
};

const book = lufthansa.book;

book.call(eurowings, 23, "Patil");
console.log(eurowings);

book.call(lufthansa, 239, "Khadase");
console.log(lufthansa);
*//*
//================================================bind function===========================================

//=============================================challenge 1==============================================
const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(`${this.question}
    \n${this.options.join("\n")}\n(write option number)`)
    );
    console.log(answer);
    typeof answer === "number" &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults("string");
  },
  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`poll results are ${this.answers.join(", ")}`);
    }
  },
};
//poll.registerNewAnswer();
document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, "string"); /*
//========================================Immediatly invoked function==================================
/*
const runOnce=function(){
  console.log('this will never run again');
};
runOnce();

(function(){
  console.log('this will new run again');
})();

//arrow function
(()=>console.log('this will also never run again'))();

{
  const inPrivate=23;
  var notPrivate=40;
}

//console.log(isPrivate);
console.log(notPrivate);
*/
//================================================closures======================================
/*
const sercureBooking=function(){
  let passengerCount=0;

  return function(){
    passengerCount++;
    console.log(`${passengerCount} passeger`);
  };
};

const booker=sercureBooking();

booker();
booker();
booker(); 

console.dir(booker);
*//*
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};
const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);
//re-assigning f function
h();
f();
console.dir(f);

//example 2
const boardPassenger = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`we are now boarding all ${n} passenger`);
    console.log(`There are 3 groups, each with ${perGroup} passeger`);
  }, wait * 1000);
  console.log(`will start boarding in ${wait} seconds`);
};

boardPassenger(180, 3);
*/
//=================================chanllenge 2======================================

(function(){
  const header=document.querySelector('h1');
  header.style.color='red'

  document.querySelector('body').addEventListener('click',function(){
    header.style.color='blue';
  });
})();
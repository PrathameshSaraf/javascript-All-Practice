/*//==========================constructor function=============================
const Person = function (firstName, birthYear) {
  //Instances Properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const saraf = new Person("Saraf", 2002);
console.log(saraf);

//1.new {} is created
//2. function is called, this={}
//3.{} linked to prototype
//4. function automatically return {}

const patil = new Person("mandar", 2002);
console.log(patil);

console.log(saraf instanceof Person);

//prototype
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2020 - this.birthYear);
};

saraf.calcAge();

console.log(saraf.__proto__);
console.log(saraf.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(saraf));
console.log(Person.prototype.isPrototypeOf(patil));

// .prototypeOfLinkedOnject

Person.prototype.species = "Home sapiens";
console.log(saraf.species, patil.species);

console.log(saraf.__proto__);
console.log(saraf.__proto__.__proto__);
console.log(saraf.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr=[3,1,4,2,5,7,5,2,5,6];
console.log(arr.__proto__);
console.log(arr.__proto__===Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique=function(){
  return [...new Set (this)];
};

console.log(arr.unique());

const h1=document.querySelectorAll('h1');
console.dir(x=>x+1);*/

/*//=================challenge 1=========================

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car("BMW", 120);
const mercedes = new Car("Mercedes", 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();*/
//==========================class=====================

/*//class declaration
class PersonCl{
  constructor(firstname,birthyear) {
    this.birthyear=birthyear
  }
  calcAge(){
      this.firstname=firstname
  console.log(2037-this.birthyear);
  }
  greet(){
    console.log(`Hey ${this.firstname}`);
  }
}

const saraf=new PersonCl("Prathanemsh",2002);
console.log(saraf);
saraf.calcAge();

console.log(saraf.__proto__===PersonCl.prototype);


saraf.greet();
*/ /*
//==========================setter and getter method===========================
const account = {
  owner: "Saraf",
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
*/
/*//================================Object.create()=====================================
const PersonProto={
  calcAge(){
    console.log(2022-this.birthYear);
  },

  init(firstName,birthYear){
    this.firstName=firstName;
    this.birthYear=birthYear;
  },
}

const steven=Object.create(PersonProto);
console.log(steven);
steven.name='steven';
steven.birthYear=2002;
steven.calcAge();

console.log(steven.__proto__===PersonProto);


const sarah=Object.create(PersonProto);
sarah.init('sarah',2002);
sarah.birthYear=2002;
sarah.calcAge();
*/
/*//==================================challenge 2========================
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl("ford", 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();

ford.speed = 50;
ford.accelerate();
*/
//=================================================class inheritance============================================
/*//function

const Person=function(firstName,birthyear){
  this.firstName=firstName;
  this.birthyear=birthyear;
};
Person.prototype.calcAge=function(){
  console.log(2037-this.birthyear);
};

const Student =function(firstName,birthYear,course){
  Person.call(this,firstName,birthYear);
  this.course=course;
};

//linking Prototype
Student.prototype=Object.create(Person.prototype);


Student.prototype.introduced=function(){
  console.log(`My name is ${this.firstName} And I study ${this.course}`);
};

const saraf=new Student('saraf',2002,'E&TC');
saraf.introduced();
saraf.calcAge();

console.log(saraf.__proto__);
console.log(saraf.__proto__.__proto__);

console.log(saraf instanceof Student);
console.log(saraf instanceof Person);

console.dir(Student.prototype.constructor);*/
/*//============================challenge 3====================================
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const EV=function(make,speed,charge){
  Car.call(this,make,speed)
  this.charge=charge;
};

//link the prototype
EV.prototype=Object.create(Car.prototype);
EV.prototype.chargeBattery=function (chargeTo){
  this.charge=chargeTo;
};

EV.prototype.accelerate=function(){
  this.speed+=20;
  this.charge--;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const tesala=new EV('TESALA',120,23);
tesala.chargeBattery(90);
console.log(tesala);

tesala.brake();*/

/*//===================================E6 class inheritance ==================================
class PersonCl{
  constructor(firstname,birthyear) {
    this.firstname=firstname;
    this.birthyear=birthyear
  }
  calcAge(){
  
  console.log(2037-this.birthyear);
  }
  greet(){
    console.log(`Hey ${this.firstname}`);
  }

  get age(){
    return 2022-this.birthyear;
  }

  set fullName(name){
    if(name.includes(' ')) this._fullName=name;
    else alert(`${name} is not a full name`);
  }

  get fullName(){
    return this._fullName;  
  }

  static hey(){
    console.log(`Hey there`);
  }
} 

class StudentCl extends PersonCl{
  constructor(fullName,birthyear,course){
    super(fullName,birthyear)
  }
}*/

/*//===============================Inheritance Between "classes":Object.create===================================

const PersonProto={
  calcAge(){
    console.log(2022-this.birthyear);
  },
  init(firstName,birthyear){
    this.firstName=firstName;
    this.birthYear=birthyear;
  },
};

const steven=Object.create(PersonProto);

const StudentProto=Object.create(PersonProto);
StudentProto.init=function(firstName, birthyear,course){
  PersonProto.init.call(this,firstName,birthyear)
  this.course=course;
};

const jay=Object.create(StudentProto);
jay.init('jay',2002,"ENTC");*/

//=======================================Class Account Example===================================

class Account {
  //1. public fields
  locale = navigator.language;

  //2.private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    //protected Property
    this.#pin = pin;

    // this._movements=[];
    // this.locale=navigator.language;

    console.log(`thanks for opening an account ${owner}`);
  }

  deposite(val) {
    this.#movements.push(val);
    return this;
  }
  getMovements() {
    return this.#movements;
  }
  withdraw(val) {
    this.deposite(-val);
    return this;
  }

  requestLoan(val) {
    if (this.#approvedLoan(val)) {
      this.deposite(val);
      console.log(`Loan Approved`);
      return this;
    }
  }

  //4. Private Method
  #approvedLoan(val) {
    return true;
  }
}

const acc1 = new Account("Jonas", "EUR", 1111);

acc1.deposite(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1);

//chaining
acc1.deposite(300).deposite(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());

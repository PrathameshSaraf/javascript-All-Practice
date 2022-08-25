"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = "";

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  console.log(movs);

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `<div class="movements"><div class="movements__row"><div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div><div class="movements__value">${mov}</div></div>`;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

//////////////////////////////////////
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

////////////////////////////////////////////////////
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};
/////////////////////////////////////////////////////////////
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUsernames(accounts);
///////////////////////////////////////////////////////////////
const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};
////////////////////////////////////////////////////////////////
let currentAccount;
btnLogin.addEventListener("click", function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `welcome back,${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;
    // Update UI
    updateUI(currentAccount);
    inputLoginUsername.value = "";
    inputLoginPin.value = "";
  }
});
//////////////////////////////////////////////////////////
btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    // Update UI
    updateUI(currentAccount);
  }
});
///////////////////////////////////////////////////////////
btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    //add the movement
    currentAccount.movements.push(amount);

    //update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = "";
});

///////////////////////////////////////////////////////////
btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    console.log("hello");
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    console.log(index);

    //delete account
    accounts.splice(index, 1);
    //hide UI
    containerApp.style.opacity = 0;
  } else {
    console.log("111111111111");
  }
  inputCloseUsername.value = inputClosePin.value = "";
});
let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
/*
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for(const [i,value] of movements.entries()){
  if(value>0){
    console.log(`Movements ${i+1} you deposited ${value}`);
  }else{
    console.log(`Movements ${i+1} you withdrew ${Math.abs(value)}`); 
  }
}
console.log('============ForEach method=============================');
movements.forEach(function(value,i,arr){
  if(value>0){
    console.log(`Movements ${i+1} you deposited ${value}`);
  }else{
    console.log(`Movements ${i+1} you withdrew ${Math.abs(value)}`); 
  }
});

//================================================forEach Method for MAP========================
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key} : ${value}`);
});

//===================================================forEach method for SET===============================
const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value} : ${value}`);
});


//======================================challenege 1=======================================
const checkDogs = function (dogsJulia, dogKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);

  const dogs = dogsJuliaCorrected.concat(dogKate);
  console.log(dogs);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1}is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy`);
    }
  });
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

//===========================================map function==========================================
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd=1.1;
//function 
  // const movementsUSD=movements.map(function(mov){
  //   return mov*eurToUsd;
  // });

//using arrow function 
 const movementsUSD=movements.map(mov=>mov*eurToUsd); 
console.log(movements);
console.log(movementsUSD);

const movementsUSDfor=[];
for(const mov of movements)movementsUSDfor.push(mov*eurToUsd);
console.log(movementsUSDfor);

const movementeDescription=movements.map((mov,i)=>`Movement ${i+1}: You ${mov>0?'deposited':'withdrew'} ${Math.abs(mov)}`);

console.log(movementeDescription);

*/
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposits=movements.filter(function(mov,i,arr){
  return mov>0;
});
console.log(movements);
console.log(deposits);

const depositeFor=[];
for(const mov of movements)if(mov>0)depositeFor.push(mov);
console.log(depositeFor);

const withdrawals=movements.filter(mov=>mov<0);
console.log(withdrawals);
*/
//=====================================reduse method ==============================================
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

const balance=movements.reduce(function(acc,cur,i,arr){
  console.log(`Iteration ${i}:${acc}`);
  return acc+cur;

},0);
console.log(balance);

//using for each loop
let balance2=0;
for(const mov of movements)
  balance2+=mov;
console.log(balance2);


//maximum value find using reducew function 
const max=movements.reduce((acc,mov)=>{
  if(acc>mov) return acc;
  else return mov;
},movements[0]);
console.log(max);
*/
/*//================================================challenge 2==========================================
const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAges.filter((age) => age >= 18);

  console.log(humanAges);
  console.log(adults);

  const average=adults.reduce((acc,age)=>acc+age,0)/adults.length;
  return average;
};

const avg1=calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
console.log(avg1);*/
//================================The Magic of Chaining Methods============================
/* 
const eurToUsd = 1.1;
console.log(movements);
// PIPELINE
const totalDepositsUSD = movements
  .filter((mov) => mov > 0)
  .map((mov, i, arr) => {
    // console.log(arr);
    return mov * eurToUsd;
  })
  // .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);
//==========================================challenge 3=============================================
const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
// adults.length
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);
//==========================================The find Method==============================================
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);
console.log(accounts);
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);
*/
/*//======================================Some And Every ============================================
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

//equality
console.log(movements.includes(-130));

//condition
console.log(movements.some((mov) => mov === -130));

const anyDeposits = movements.some((mov) => mov > 0);
console.log(anyDeposits);

//Every
console.log(movements.every(mov=>mov>0));
console.log( account4.movements.every(mov=>mov>0));

//separate call back 
const deposite=mov=>mov>0;
console.log(movements.some(deposite));
console.log(movements.every(deposite));
*/
//======================================flat and flatMap=============================================
/*const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], 4, [5, 6], 7, 8];
console.log(arrDeep.flat(2));

//flat
const overalBalance = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

//flatMap
const overalBalance2 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2);
*/
/*//=================================================sorting Array=======================================
//string 
const owners=['jonas','zach','adam','martha'];
console.log(owners.sort());
console.log(owners);

//numbers
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);
console.log(movements.sort());

//ascending
movements.sort((a,b)=>{
  if(a>b) return 1;
  if(a<b) return -1;
});
console.log(movements);

//descending
movements.sort((a,b)=>{
  if(a>b) return -1;
  if(a<b) return 1;
});
console.log(movements);*/
/*//=========================================challenge 4=======================================
const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];
//1.
dogs.forEach((dog) => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs);

//2.
const dogSarah = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log(dogSarah);
console.log(
  `Sarah's dog is eating ${
    dogSarah.curFood > dogSarah.recFood ? "much" : "littel"
  }`
);

//3.
const ownerEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recFood)
  .map((dog) => dog.owners)
  .flat();
console.log(ownerEatTooMuch);

const ownerEatTooLittel = dogs
  .filter((dog) => dog.curFood < dog.recFood)
  .map((dog) => dog.owners)
  .flat();
console.log(ownerEatTooLittel);
//4.
console.log(`${ownerEatTooMuch.join(" and ")}'s dogs eat too much`);
console.log(`${ownerEatTooLittel.join(" and ")}'s dogs eat too littel`);
//5.
console.log(dogs.some((dog) => dog.curFood === dog.recFood));
//6.
const checkEatingOkay = (dog) =>
  dog.curFood > dog.recFood * 0 * 9 && dog.curFood < dog.recFood * 1.1;
console.log(dogs.some(checkEatingOkay));

//7.
console.log(dogs.filter(checkEatingOkay));

//8.
const dogSorted = dogs.splice().sort((a, b) => a.recFood - b.recFood);
console.log(dogSorted);
*/

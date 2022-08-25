//-------------------------------------------destructing Array-----------------------------------------
/*
const Arr = [10, 20, 30];
const a = Arr[0];
const b = Arr[1];
const c = Arr[2];

const [x, y, z] = Arr;
console.log(x, y, z);

const obj = {
  food: ['apple', 'mango', 'banana', 'orange'],
  animal: ['cat', 'dog', 'elephant', 'monkey'],
  flowers: ['rose', 'mogara', 'jai', 'jui'],
  laptop: ['hp', 'lenovo', 'dell', 'apple'],
  order: function (first, sec) {
    return [this.animal[first], this.food[sec]];
  },
};
let mobile = ['samsung', 'poco', 'redmi', 'mi', 'oneplus'];
//switching elements using third value
console.log(mobile);
const temp = mobile[0];
mobile[0] = mobile[1];
mobile[1] = temp;
console.log(mobile);

mobile = ['samsung', 'poco', 'redmi', 'mi', 'oneplus'];
let [sung, , , poc] = mobile;
console.log(sung, poc);

[sung, poc] = [poc, sung];
console.log(sung, poc);

console.log(obj.order(1, 2));
*/ /*
//------------------------------------------spread(...) Operator-----------------------------------------
//adding new elements in array
let arr = [1, 2, 3];
let newarr = [0, ...arr, 4, 5];
console.log(arr);
console.log(newarr);

//concate new arr
let arr1 = [10, 20, 30];
let arr2 = [40, 50, 60];
let newArr = [...arr1, ...arr2];
console.log(newArr);

//concate string array also
let string = ['saraf', 'prathamesh'];
let newString = [...string, 'age', '', '20'];
console.log(newString);

//also spread operator use with object
const color = {
  red: [0, 0, 111],
  blue: [1, 2, 3],
  yellow: [4, 5, 60],
};

const newObj = {
  green: [4, 5, 8],
  pink: [7, 8, 9, 10],
  ...color,
};
console.log(newObj);

console.log(color.red[1], color.red[2]);
*/
//-------------------------------rest Pattern And Paramerters-------------------------
/*const arr = [1, 2, ...[3, 4]];

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

//function
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3, 4);

const x = [10, 14, 15, 17, 18];
add(...x);
//optional values send function
const entry = function (person, family) {
  console.log(person);
  console.log(family);
};

const x1 = ['mummy', 'daddy', 'uncle'];
entry('saraf', x1);
*/ /*
//-------------------------------------Short circuit && or ||---------------------------
console.log(0 || 1);
console.log('' || 'saraf');
console.log(undefined || 1);
console.log(0 || undefined);
//short circuiting
console.log(undefined || null || 'saraf' || 0 || 23 || null);
console.log();

let number = 11;
const abc = number ? number : 10;
console.log(abc);
//------------------------------&& operator----------------------------------
console.log('saraf');
console.log(0 && 1);
console.log('' && 'saraf');
console.log(undefined && 1);
console.log(0 && undefined);
//short circuiting
console.log(undefined && null && 'saraf' && 0 && 23 && null);
console.log();
*/ /*
//----------------------nulliash operator-------------------------------------
//condition oprator
let number =0;
let abc = number ? number : 10;
console.log(abc);

//nullish operator
number =0;
 abc = number ?? 10;
console.log(abc);
*/
/*
//----------------------------------Logical Assignement--------------------------
const rest1 = {
  name: 'sayali',
  guestNumber: 0,
};
const rest2 = {
  name: 'krishna',
  owner: 'bbjk',
};
//or assignment operator
//rest1.guestNumber ||= 10;
//rest2.guestNumber ||= 10;

console.log(rest1);
console.log(rest2);
console.log('==================');
//nullish assignment operator
rest1.guestNumber??=10;
rest2.guestNumber??=20;
console.log(rest1.guestNumber);
console.log(rest2);

//and assignment operator
rest1.guestNumber &&= 10;
rest2.guestNumber &&= 10;
*/ /*
//------------------------------------challenege-1-----------------------------------
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
  [
  'Neuer',
  'Pavard',
  'Martinez',
  'Alaba',
  'Davies',
  'Kimmich',
  'Goretzka',
  'Coman',
  'Muller',
  'Gnarby',
  'Lewandowski',
  ],
  [
  'Burki',
  'Schulz',
  'Hummels',
  'Akanji',
  'Hakimi',
  'Weigl',
  'Witsel',
  'Hazard',
  'Brandt',
  'Sancho',
  'Gotze',
  ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
  'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
  team1: 1.33,
  x: 3.25,
  team2: 6.5,
  },
  };

//1.Create one player array for each team (variables 'players1' and 'players2')
const[player1,player2]=game.players;

console.log(player1,player2);
//2. The first player in any player array is the goalkeeper and the others are field 
// players. For Bayern Munich (team 1) create one variable ('gk') with the 
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 
// field players
const [gk,fieldPlayers]=game.players
console.log(gk,fieldPlayers);
//3
const allplayer=[...player1,...player2];
console.log(allplayer);

//4
const playerfinal=[...player1,'thiago','coutinho','perscic'];

//5
const {odds:{team1,x:draw,team2}}=game;
console.log(team1,x,team2);
*/ /*
//---------------------------------------for of loop------------------------------
const arr=[1,2,3,4,5,6,7,8,9,10];
for(const i of arr)console.log(i);

for(const i of arr.entries()){
  console.log(i);
}
*/ /*
//----------------------------------------------challenge 2----------------------------
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//1.
for (const [i, player] of game.scored.entries()) {
  console.log(`goal ${i + 1}:${player}`);
}

//2.
let average = 0;
for (const odd of Object.values(game.odds)) {
  average += odd;
}
average /= Object.values(game.odds).length;
console.log(average);

//3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamstr = team === 'x' ? 'draw' : `victory${game[team]}`;
  console.log(`odd of ${teamstr} ${odd}`);
}
*/ /*
//----------------------------------------------------Set-------------------------------------
const set1=new Set(['a','b','c','a','b']);
console.log(set1);
console.log(set1.size);

const arr=[1,2,3,4,5,1,2,3,4];
const uniqueArr=[...new Set(arr)];
console.log(uniqueArr);

set1.add(6);
set1.add(7);
console.log(set1);
set1.delete('a');
console.log(set1);
*/ /*
//--------------------------------------------------------map----------------------------------
let map1=new Map();
map1.set('fname','Prathamesh');
map1.set('age',20);
console.log(map1);
console.log(map1.size);

console.log(map1.get('age'));
map1.delete('age');
console.log(map1);
*/ /*
//------------------------------------------------challenge 3----------------------------------
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
  ]);
 console.log(gameEvents.values());
 const events=[...new Set (gameEvents.values())];
 console.log(events); 

 //2
 gameEvents.delete(64);

 //3
 const time=[...gameEvents.keys()].pop();
 console.log(time);
 console.log(`An event happened, on average, every ${time/gameEvents.size} minutes`);

//4
for(const [min,event] of gameEvents){
  const half=min<=45?'first':'second';
  console.log(`[ ${half} half] ${min}: ${event}`);
} */
//--------------------------------------------------String Operation---------------------------------
const str1 = 'I am hungry';
console.log(str1[4]);
console.log(str1.length);
console.log(str1.concat('please give me something '));
console.log(str1);
console.log(str1.indexOf('a'));

console.log(str1.slice(2));

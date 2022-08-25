//----------------------------------------------------Function-----------------------
/*
function logger(){
console.log("Hello Saraf");
}
//calling/invoking/running function
logger();
logger();
logger();

//parameter function
function fruitProcessor(apple,orange){
    console.log(apple,orange)
    let juice =`juice with ${apple} apples and ${orange} oranges`

    return juice;
}

let k=fruitProcessor(5,3);
console.log(k);
*/
//-------------------------------------Function decleration and expression-----------
/*
//function decleration
function sarafage(birthyear){
    let age=2022-birthyear;
    return age;
}

let p=sarafage(2002);
console.log(p);
//function expression
let k=function (birthyear){
    return 2022-birthyear;
}

let y=k(2002);
console.log(y);
*/
//-------------------------------Arrow-Function-----------------------------------
/*
const Sage=birthyear=>2022-birthyear;
const age=Sage(2002);
console.log(age);

const retiredmentAge=(birthyear,firstname)=>{
     const age=2022-birthyear;
     const Rage=65-age;
     return `${firstname} is remain ${Rage}year to retiredment !`;
}
let  s=retiredmentAge(2002,'saraf');
console.log(s);
*/
//---------------------------------functions calling other function-----------------
/*
function cutpieces(friut){
    const pieces=friut*4;
    return pieces;
}
function fruitProcessor(apple,orange){
    let applepieces=cutpieces(apple);
    let orangepieces=cutpieces(orange);

    let juice =`juice with ${applepieces} pieces of apple and ${orangepieces} pieces of orange`

    return juice;
}
let k=fruitProcessor(5,3);
console.log(k);
*/
//------------------------------------------challenge-1------------------------------
/*
let calcAverage=(sc1,sc2,sc3)=>(sc1+sc2+sc3)/3;
function checkWinner(){
    let avgDolhins=calcAverage(85,54,41);
    let avgKoalas=calcAverage(23,34,27);

    if(avgDolhins>=2*avgKoalas){
        console.log(`Dolphins win ${avgDolhins} vs ${avgKoalas}`);
    }else if(avgKoalas>=2*avgDolhins){
        console.log(`Koalas win ${avgKoalas} vs ${avgDolhins}`);
    }else{
        console.log("hello");
    }
}
checkWinner();
*/
//---------------------------------Array-------------------------------------------------
/*
let friends=['hulk','iron man','weapon h','deadpool','thonos']
console.log(friends);
console.log(friends.length);

console.log(friends[0]);
console.log(friends[2]);

let actors=new Array('Matt murdock','thor','wasp','carol danvers');
console.log(actors);
console.log(actors.length);
console.log(actors[actors.length-1]);

function calcage(birthyear){
    let age=2022-birthyear;
    return age;

}
let years=[1999,1995,2000,2005];
let age1=calcage(years[0]);
let age2=calcage(years[1]);
let age3=calcage(years[2]);
let age4=calcage(years[3]);

let actorsAges=[age1,age2,age3,age4];
console.log(actors[0]+"="+actorsAges[0]);
console.log(actors[1]+"="+actorsAges[1]);
console.log(actors[2]+"="+actorsAges[2]);
console.log(actors[3]+"="+actorsAges[3]);
*/
//------------------------------------Array Opperation Method-----------------------
/*
let marvelHeros=['spider man','hulk','captain america','iron man','wanda'];
marvelHeros.push("weapon h");
console.log(marvelHeros.length);

marvelHeros.unshift('doctor Strange');
console.log(marvelHeros);

let c=marvelHeros.pop();
console.log(marvelHeros);
console.log(c);

let k=marvelHeros.shift();
console.log(marvelHeros);
console.log(k);

let ss=marvelHeros.includes("wanda");
console.log(ss);

console.log(marvelHeros.indexOf("wanda"));
*/
//--------------------------------------------challenge-2------------------------------
/*
let tips=[];
let tip;
function calctip(bill){
(bill>=50 || bill<=300)?tip=(bill*15/100):tip=(bill*20/100);
return tip;
}
let bills=[125,555,44]
let tip1=calctip(bills[0]);
tips.push(tip1);
let tip2=calctip(bills[1]);
tips.push(tip2);
let tip3=calctip(bills[2]);
tips.push(tip3);

console.log(tips);
let total=[tips[0]+bills[0],tips[1]+bills[1],tips[2]+bills[2]];
console.log(total);
*/
//------------------------------------object & access the object value------------------
/*
let abdul={
    firstName:"avul pakirjainulabdeen",
    lastName:'abdul kalam',
    birthdate:'15 oct 1931',
    job:'prisident of india',
    Awards:['bharat ratna','veer savarkar award','hoover medal','padma vibhushan']
} 

console.log(abdul.firstName);
console.log(abdul['job']);

let keyname="Name";
console.log(abdul['first'+keyname]);
//console.log(abdul.'first'+keyname);

//challenge-:
//"abdul has got 4 awards and first award is bharat ratna award"
console.log(`${abdul.lastName} has got ${abdul.Awards.length} award and first is ${abdul.Awards[0]} award`);
*/
//----------------------------------challenge-3-----------------------
/*
let mark={
    fullName:"Mark Miller",
    mass:78,
    hight:1.69,
    calcBHI:function(){
        this.BMI=this.mass/(this.hight*this.hight);
        return this.BMI;
    }
};
let John={
    fullName:"John Smith",
    mass:92,
    hight:1.95,
    calcBHI:function(){
        this.BMI=this.mass/(this.hight*this.hight);
        return this.BMI;
    }
};

mark.calcBHI();
John.calcBHI();
if(John.BMI>mark.BMI){
    console.log(`${John.fullName} BHI(${John.BMI}) is higher than ${mark.fullName}(${mark.BMI})`);
}else{
    console.log(`${mark.fullName} BHI(${mark.BMI}) is higher than ${John.fullName}(${John.BMI})`);
}
*/
//-------------------------------For Loop---------------------------------------------
/*
for(let i=1;i<=10;i++){
    console.log("2 * "+i+" ="+2*i);
}

let years=[1999,1995,2000,2005];
let Ages=[];
function calcAge(birthyear){
    let age =2022-birthyear;
    return age;
}

for(let j=0;j<years.length;j++){
    Ages.push(calcAge(years[j]));
}
console.log(Ages);

for(let p=10;p>=0;p--){
    console.log("2 * "+p+" ="+2*p);
}

//continue statement
age=[15,19,12,13];
for(let k=0;k<age.length;k++){
    if(age[k]%3===1){
        continue;
    }else{
        console.log("hello"+k); 
    }
}
*/
//-------------------------------reverse for loop And Loop in Loop---------------------
/*
for(let R=10;R>=0;R--){
    console.log("hello"+R);
}

//loop in loop
for(let k=0;k<5;k++){
    for(let i=0;i<5;i++){
        console.log("hello"+k+ "And hello"+i);
    }
}
*/
//-------------------------------------while loop-------------------------------------
/*
let fun=1;
while(fun<=10){
    console.log("5 *"+fun+" = "+fun*5);
    fun++;
}
*/
//-----------------------------------------challenge-4--------------------------------
let tips=[];
let tip;
function calctip(bill){
(bill>=50 || bill<=300)?tip=(bill*15/100):tip=(bill*20/100);
return tip;
}
let bills=[22,295,176,440,37,105,10,1100,86,52]
for(let k=0;k<bills.length;k++){
    tips.push(bills[k]);
}
console.log(tips);
let sum=0;
for(j=0;j<tips.length;j++){
  
    sum=(sum+tips[j]);
}
console.log(sum);
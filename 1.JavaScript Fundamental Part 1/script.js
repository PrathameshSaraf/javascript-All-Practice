//---------------------------------------- values And Variables -------------------------------------------
/*let js="Saraf";
if(js==="Saraf") alert("Welcome!");
 
//variables Declearation 
let firstJob="Student";    //Declear the string 
let currentJob="Programmer";

console.log(firstJob);

let A=5;        //Declear the interger variables 
let a=6;
console.log(A+a);
//-----------------------------------------primitive data types------------------------------------------ 
/* 
let pg='samir';
console.log(pg);
console.log(typeof pg);

kk=null;
console.log(typeof kk);

let ps;
console.log(typeof ps);

let q=45.1;
console.log(typeof q);

let k=true;
console.log(typeof k);

//------------------------------------------------var ,let and const-----------------------------------------
/*
var ch='kiran';
console.log(ch);
var k=14;
console.log(k);

const p=14;
console.log(p);
var v="saraf";
v=15;
console.log(v);
v="saraf"
console.log(v);

var j;
let a;
const h=20;
//-----------------------------Operators in javascript--------------------------------------
/*1. Arithmatic operator
const A=2;
const B=6;
const c=A+B;
const d=A-B;
const e=A*B;
const f=A/B;
const g=A%B;
console.log(A,B,c,d,e,f,g);

2.Assignement operator
let A=12;
let B=13;
A+=1;
B-=1;
console.log(A,B);

3. Comparison Operator 
const sarafAge =15;
const khadseAge=20;
const patilAge=25;

let value =khadseAge>sarafAge
console.log(value)

let value1 =patilAge<sarafAge
console.log(value1)
*/
//------------------------------------challenge 1-----------------------------------------------
/*
const markHeight=1.88;
const johnHeight=1.76;
const markMass=95;
const johnMass=85;

const markBMI=markMass/(markHeight*markHeight);
const johnBMI=johnMass/(johnHeight*johnHeight);

markHigherBIM=markBMI>johnBMI;
console.log(markHigherBIM);
*/
//-------------------------------------String Concatination & Template Literals------------------------------
/*const firstName='prathamesh';
const job='student';
const birthDate=2002;
const year=2022;

const result= "i'm "+firstName+", a "+(year-birthDate)+" old "+job;
console.log(result);

const result1=`i am ${firstName}, a ${year-birthDate} old ${job}`;
console.log(result1);

console.log("sakam \n\
\n\ mohish \n\
qwe")

console.log(`saraf
mohish
mandar
patil`)*/
//--------------------------------------------if-else--------------------------------------
/*let sarafAge=20;
let patilAge=12;

if(sarafAge>patilAge){
    console.log("saraf is elder ");
}else
{
    console.log("patil is elder");
}
*/
//---------------------------------------------challenge-2-----------------------------------------
/*
const markHeight=1.88;
const johnHeight=1.76;
const markMass=95;
const johnMass=85;

const markBMI=markMass/(markHeight*markHeight);
const johnBMI=johnMass/(johnHeight*johnHeight);

if(markBMI>johnBMI){
    console.log("Mark's BMI is higher than John's!");
}
else{
    console.log("John's BMI is higher than Mark's!");
}
*/
//-------------------------------------------type conversion and coercion-----------------------------------
/*
const x='10'
let sum=x+1;
console.log(sum);
let sum1=sum-1;
console.log(sum1);

let y="10";
const ans =10-y+1;
console.log(ans);

let p='11';
k=p*p;
console.log(k);

console.log(Number(p) +Number(k));
*/
//------------------------------------------------falsy and truly value------------------------------
// in javascript 5 falsy value (undefine,null,nan,0,'')
/*
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(0));
console.log(Boolean(''));

let x=1;
if(x){
    console.log("x is define");
}
else{
    console.log("x is undefine");
}
*/
//------------------------------------------equality operators---------------------------------------------
/*
x=12;//assignment operator 
x==12;// loose equality operator 
x===12;//strick equallity operator 

const C=prompt("enter the ur favorite number");
if(C==12)
    console.log("number is 12");
else
    console.log("number is not 12");

const C1=Number(prompt("enter the ur favorite number"));
if(C1===12)
console.log("number is 12");
else
console.log("number is not 12"); 
*/
//--------------------------------------------------Boolean logic-------------------------------------------
// &&-AND operation(any one false output is false)
// ||-OR operation (any one true output is true)
//  !-not operation (reverse operation (true-false))
/*
const hasDrivingLicence=true;
const hasGoodVision=true;
const isTired=false;

if(hasDrivingLicence && hasGoodVision && !isTired){
    console.log("you should drive ");
}
else{
    console.log("any other should drive");
}

let B=200;
let C=50,A=100;
if((A || B)<=100)
{
    console.log("numbers are greater than or equal to 100");
}else
{
    console.log("numbers are not larger than 100");
}
*/
//------------------------------------------------challenge-3----------------------------------------------
/*
const D1score=97;
const D2score=112;
const D3score=101;

const K1score=109;
const K2score=95;
const K3score=106;

let avgDol=(D1score+D2score+D3score)/3;
let avgKoal=(K1score+K2score+K3score)/3;

if(avgDol==avgKoal){
    console.log("draw")
}else if(avgDol>avgKoal){
    console.log("Dolphons Win");
}else
{
    console.log("Koalas Win");
}
//Bonus 1
if(avgDol==avgKoal){
    console.log("draw")
}else if(avgDol<avgKoal && avgKoal>100){
    console.log("Win Koalas");
}else if(avgDol>avgKoal && avgDol>100){
    console.log("win Dolphins");
}
//bonus 2
if(avgDol==avgKoal && (avgDol && avgKoal)>100){
    console.log("draw")
}else if(avgDol<avgKoal && avgKoal>100){
    console.log("Win Koalas");
}else if(avgDol>avgKoal && avgDol>100){
    console.log("win Dolphins");
}
*/
//------------------------------------------------------Switch Statement------------------------------------
/*
const day="thursday";
switch(day){

    case "monday":console.log("Math & English");break;
    case "tuesday":console.log("Marathi & Geography");break;
    case "wenseday":console.log("Sanskrit & hindi");break;
    case "thursday":console.log("history and science");break;
    case "friday":console.log("aptitude and reasoning");break;
    case "saturday":console.log("singing and dance");break;
    case "sunday":console.log("enjoy and play");break;
    default :console.log("invalid Day !");break;
}

//Switch case make using if..else statement
if(day==='monday')
    console.log("Math & English");
else if(day==='tuesday')
    console.log("Marathi & Geography");
else if(day==='wenseday')
    console.log("Sanskrit & hindi");
else if(day==='thursday')
    console.log("history and science");
else if (day==='friday')
    console.log("aptitude and reasoning");
else if (day==='saturday')
    console.log("singing and dance");
else if(day==='sunday')
    console.log("enjoy and play");
else
    console.log("invalid Day !");
*/
//----------------------------------------------------------ternory operator-------------------------------
/*
let age=19;
let a;
age<=18?(a='drink water'):(a='dring wine');
console.log(a);
*/
//---------------------------------------------------------challenge 4th-------------------------------------

const bill=430;
let tip;
(bill>=50 || bill<=300)?tip=(bill*15/100):tip=(bill*20/100);
console.log(`Your Total bill is ${bill} and tip is ${tip} so total amount is ${bill+tip}`);
console.log(bill);
console.log(tip);


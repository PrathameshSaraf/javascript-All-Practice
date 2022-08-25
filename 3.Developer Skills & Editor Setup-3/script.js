/*
let x = 10;
if (x === 10) console.log('hello');

const calcAge = birthyear => 2022 - birthyear;
const calcAge1 = birthyear => 2022 - birthyear;
*/
//----------------------------Problem 1---------------

/*we work for a company building a smart home thermlmeter .our most recent task is this :
"given an array temperature amplitude . keep in mind that sometimes there might be a 
sensor error ."*/
/*
const temperature = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temp) {
  let max = temp[0];
  let min = temp[0];

  for (let i = 0; i < temp.length; i++) {
    const curTemp = temp[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(temperature);
console.log(amplitude);
*/
//----------------------------------------------challenge-1----------------------------------------
/*
array1 = [17, 21, 23];
let str = '';
function printForcast(arr) {
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]} C in ${Number(i + Number(1))} days... `;
  }
  return str;
}
let g = printForcast(array1);
console.log('... ' + g);
*/

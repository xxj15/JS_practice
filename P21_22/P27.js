let first_input = 'Yujin Hyewon';
let second_input = '70 100';

const keys = first_input.split(' ');
const values = second_input.split(' ');

const obj = {};

for (let i=0;i<keys.length;i++){
    obj[keys[i]] = Number(values[i]);
}

console.log(obj);
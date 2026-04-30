let students = '원범 원범 혜원 혜원 혜원 혜원 유진 유진';
let studentList = students.split(' ');

let result = {};

for (student of studentList){
    result[`${student}`] = result[`${student}`] === undefined ? 1 : result[`${student}`] + 1;
}
let ans = '';

let max_ans = 0;
let max_student = '';

for (key in result){
    if (result[`${key}`] > max_ans){
        max_ans = result[`${key}`];
        max_student = key;
    }   
}
console.log(`${max_student} : ${max_ans} 표`);
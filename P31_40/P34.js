let students = '155 156 165 166 169 176';
let studentList = students.split(' ');

if (students  === studentList.sort((a, b) => a - b).join(' ')){
    console.log('YES');
}else{
    console.log('NO');
}
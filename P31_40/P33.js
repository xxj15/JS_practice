let nums = '1 2 3 4 5';
let num_list = nums.split(' ');
let new_list = [];
for (let i=0;i<num_list.length;i++){
    new_list.push(num_list[num_list.length - 1 - i]);
}
console.log(new_list.join(' '));

// const data = prompt('숫자를 입력하세요.').split(' ').reverse();
// const result = '';

// for (let i=0; i<data.length; i++){
//   result += data[i];
// }

// console.log(result);
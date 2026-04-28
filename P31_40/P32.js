let sentence = '안녕하세요. 저는 제주대학교 컴퓨터공학전공 혜림입니다.';

let words = sentence.split(' ');
let count = 0;
for (let word of words){
    count ++;
}
console.log(count);

// console.log(words.length);

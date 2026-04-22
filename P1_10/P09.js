// concat을 활용한 출력 방법
// concat = 문자열이나 배열을 이어붙이는 메서드

var year = "2019";
var month = "04";
var day = "26";
var hour = "11";
var minute = "34";
var second = "27";

// var result = ' '을 채우기
var result = year.concat(
  "/",
  month,
  "/",
  day,
  " ",
  hour,
  ":",
  minute,
  ":",
  second,
);

console.log(result);

// 출력
// 2019/04/26 11:34:27

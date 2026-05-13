let arr = [];
let sum = 0;

for (let i=1; i<=20; i++){
  arr.push(i);
}

arr.forEach((n) => {
  while(n !== 0){
    sum += (n % 10);
    n = Math.floor(n/10);
  }
})

console.log(sum);
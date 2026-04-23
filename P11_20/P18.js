let scores = [20, 30, 40];

let sum = 0;
for (let s of scores){
    sum += s;
}

sum /= scores.length;
sum = Math.floor(sum);
console.log(sum);
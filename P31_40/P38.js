let scores = '97 86 75 66 55 97 85 97 97 95'.split(' ');

scores = scores.sort((a,b)=>(b-a));

let cnt = 1;
let ans = 1;

for(let i = 0;i<scores.length-1;i++){
    cnt = scores[i]===scores[i+1] ? cnt : cnt+1
    if (cnt===4){
        break
    }
    ans += 1;
}

console.log(ans)
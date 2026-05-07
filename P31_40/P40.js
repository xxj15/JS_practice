// 구조분해 할당 

let inputs = '50 5 20 20 20 20 20';
let [max_weight, n, ...weights] = inputs.split(' ');
max_weight = Number(max_weight);
n = Number(n);
weights = weights.map(Number);

let weight = 0;
let ans = 0;
for (let i = 0; i< n; i++){
    weight += weights[i]
    if (weight <= max_weight){
        ans += 1
    }
}
console.log(ans)



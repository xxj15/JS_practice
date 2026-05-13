let numbers = [2, 3, 5, 6, 10, 13];

for (let num of numbers){
    let isPrime = true;
    for (let i = 2;i<=Math.sqrt(num);i++){
        if (num % i == 0){
            isPrime = false;
            break
        }
    }
    console.log(isPrime ? 'YES' : 'NO');
}
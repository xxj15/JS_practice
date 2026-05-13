let numbers = [1, 8, 19, 28893];

for (let num of numbers) {
    let ans2 = num.toString(2);
    console.log(`Binary : ${ans2}`);
    let ans10 = parseInt(ans2, 2);
    console.log(`Decimal : ${ans10}`);
}
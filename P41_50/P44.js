let inputs = [18234, 3849];

for (let num of inputs) {
    let ans = 0;
    let str = num.toString();
    for (let i = 0;i<str.length;i++) {
        ans += Number(str[i])
    }
    console.log(ans)
}
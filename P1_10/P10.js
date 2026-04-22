const n = 5;

for (let i = 1;i<=n;i++){
    let str = '';
    str += ' '.repeat(n-i);
    str += '*'.repeat(2*i-1);
    console.log(str);
}
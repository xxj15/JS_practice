let month = 5, date = 8;
function solution(a,b){
    const day = ["SUN","MON","TUE","WED","THU","FRI","SAT"];

    const x = new Date('2026-'+a+'-'+b);
    return day[x.getDay()];
}
console.log(solution(month, date));
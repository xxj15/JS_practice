# JS100제 P01 ~ P10

## P01 - 배열 요소 삭제 (pop)

**문제:** 다음 배열에서 400, 500을 삭제하는 코드를 작성하세요.

```js
var nums = [100, 200, 300, 400, 500];
nums.pop();
nums.pop();
console.log(nums); // [100, 200, 300]
```

**해석:** `pop()`은 배열의 **마지막 요소**를 제거하고 반환한다. 두 번 호출하면 400, 500이 순서대로 제거된다.

---

## P02 - 배열 내장함수 splice

**문제:** splice를 사용해 배열 중간에 값을 삽입하세요.

```js
var arr = [200, 100, 300];
arr.splice(2, 0, 10000);
console.log(arr); // [200, 100, 10000, 300]
```

**해석:** `splice(index, 삭제개수, 삽입값)` — index 2 위치에 0개 삭제 후 10000을 삽입한다.

---

## P03 - 변수의 타입 (배열)

**문제:** 다음 변수의 `typeof` 출력값은?

```js
var arr = [100, 200, 300];
console.log(typeof arr); // "object"
```

**해석:** JavaScript에서 배열은 객체(object)의 일종이므로 `typeof`는 `"object"`를 반환한다.

---

## P04 - 변수 타입 O/X

**문제:** 다음 중 `typeof(a)` 결과가 잘못 연결된 것은?

| 입력 | 출력 |
|------|------|
| `a = 1` | `number` |
| `a = 2.22` | `boolean` ← **오답** |
| `a = 'p'` | `string` |
| `a = [1,2,3]` | `object` |

**답: 2번** — `2.22`는 부동소수점 숫자이므로 `typeof`는 `"number"`를 반환한다. `"boolean"`이 아니다.

---

## P05 - for문 계산

**문제:** 아래 코드의 출력값은?

```js
var a = 10;
var b = 2;

for (var i = 1; i < 5; i += 2) {
  a += i;
}

console.log(a + b); // 16
```

**해석:** `i`는 1 → 3 → 5(종료) 순으로 증가. `a = 10 + 1 + 3 = 14`, `14 + b(2) = 16`

---

## P06 - Falsy 값 찾기

**문제:** 다음 중 `false`로 취급되지 않는 (Truthy인) 것을 고르시오.

| 보기 | 결과 |
|------|------|
| `NaN` | falsy |
| `1` | **truthy** ← 정답 |
| `""` | falsy |
| `0` | falsy |
| `undefined` | falsy |

**답: 2번 (1)** — `0`이 아닌 숫자는 Truthy다.

---

## P07 - 유효한 변수명

**문제:** 다음 중 변수명으로 사용할 수 없는 것 2개를 고르시오.

| 보기 | 유효 여부 |
|------|-----------|
| `age` | O |
| `Age` | O |
| `let` | X (예약어) |
| `_age` | O |
| `1age` | X (숫자 시작 불가) |

**답: 3번, 5번** — 예약어(`let`, `const`, `var` 등)와 숫자로 시작하는 이름은 변수명 불가.

---

## P08 - 객체 키 이름 중복

**문제:** 아래 코드의 출력값은?

```js
var d = {
  height: 180,
  weight: 78,
  weight: 84,   // 중복 키
  temperature: 36,
  eyesight: 1,
};

console.log(d["weight"]); // 84
```

**해석:** 객체에 동일한 키가 중복되면 **나중에 선언된 값**으로 덮어씌워진다.

---

## P09 - concat으로 날짜 문자열 만들기

**문제:** `concat()`을 사용해 `"2019/04/26 11:34:27"` 형식으로 출력하세요.

```js
var year = "2019", month = "04", day = "26";
var hour = "11", minute = "34", second = "27";

var result = year.concat("/", month, "/", day, " ", hour, ":", minute, ":", second);
console.log(result); // 2019/04/26 11:34:27
```

**해석:** `concat()`은 문자열/배열을 이어붙이는 메서드. 여러 인자를 한 번에 전달할 수 있다.

---

## P10 - 별 피라미드 출력

**문제:** n=5일 때 아래 모양의 피라미드를 출력하세요.

```
    *
   ***
  *****
 *******
*********
```

```js
const n = 5;

for (let i = 1; i <= n; i++) {
  let str = '';
  str += ' '.repeat(n - i);   // 앞 공백
  str += '*'.repeat(2 * i - 1); // 별 개수
  console.log(str);
}
```

**해석:** 행 `i`마다 공백 `(n-i)`개 + 별 `(2i-1)`개를 출력. `repeat()`으로 문자열을 반복 생성한다.

**해석:** 행 `i`마다 공백 `(n-i)`개 + 별 `(2i-1)`개를 출력. `repeat()`으로 문자열을 반복 생성한다.

---

## P11 - for를 이용한 기본 활용

**문제:** 1부터 100까지 모두 더하는 코드를 for를 사용해 완성하세요.

```js
let s = 0;

for (let i = 1; i <= 100; i++) {
  s += i;
}

console.log(s); // 5050
```

**해석:** `s`에 1~100을 순서대로 누적 합산. 등차수열 합 공식으로도 구할 수 있다: `n*(n+1)/2 = 100*101/2 = 5050`

---

## P12 - 클래스(class) 기본 사용

**문제:** `class`를 사용해 Wizard 객체를 만들고 속성과 메서드를 출력하세요.

```js
class Wizard {
    constructor(health, mana, armor) {
        this.health = health;
        this.mana = mana;
        this.armor = armor;
    }
    attack() {
        console.log('파이어볼');
    }
}

const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor); // 545 210 10
x.attack(); // 파이어볼
```

**해석:**

- `constructor` : `new`로 객체를 생성할 때 자동으로 호출되는 특수 메서드. 초기값 설정에 사용한다.
- `this` : 생성된 객체 자신을 가리킨다. `this.health`는 해당 객체의 `health` 속성을 의미한다.
- `attack()` : 클래스 안에 정의한 일반 메서드. `new`로 만든 모든 인스턴스가 공유한다.
- 메서드는 `function` 키워드 없이 이름만으로 정의한다.
- 인스턴스마다 별도로 저장되는 속성(`health`, `mana`, `armor`)과 달리, 메서드는 클래스의 `prototype`에 한 번만 저장되어 메모리를 아낀다.

---

## P13 - 배열 인덱스로 행성 찾기

**문제:** 순번(1부터 시작)을 입력하면 해당 행성 이름을 출력하세요.

```js
let planets = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성'];

const q = 1;

let ans = planets[q - 1];
console.log(ans); // 수성
```

**해석:**

- 배열의 인덱스는 **0부터** 시작하므로 사용자가 입력한 순번에서 1을 뺀다.
- `planets[0]` → `'수성'`, `planets[1]` → `'금성'` 순서다.
- `q - 1`로 1-based 순번을 0-based 인덱스로 변환하는 것이 핵심이다.

---

## P14 - 3의 배수 판별 (짝 게임)

**문제:** 숫자 n이 주어질 때, 3의 배수이면 `'짝'`을, 아니면 n을 그대로 출력하세요.

```js
const inputs = [3, 5, 9, 7, 12];

for (let n of inputs) {
    if (n % 3 === 0) {
        console.log('짝');
    } else {
        console.log(n);
    }
}
```

**해석:**

- `%` : 나머지 연산자. `n % 3 === 0`이면 3의 배수다.
- `for...of` : 배열의 요소를 하나씩 꺼내 순회하는 문법. 파이썬의 `for n in inputs:`와 동일하다.

```js
for (let n of inputs) { ... }
// 파이썬: for n in inputs:
```

- `for...of`는 인덱스 없이 값만 필요할 때 사용한다. 인덱스도 필요하면 `forEach` 또는 일반 `for`문을 쓴다.

**forEach vs for문 비교:**

`forEach` — 배열 메서드. 콜백 함수로 값과 인덱스를 둘 다 받을 수 있다.

```js
inputs.forEach((n, i) => {
    console.log(i, n); // 인덱스, 값 둘 다 사용 가능
});
```

일반 `for`문 — 인덱스로 직접 접근. 중간에 `break`로 멈추거나 역순 순회 등 세밀한 제어가 필요할 때 쓴다.

```js
for (let i = 0; i < inputs.length; i++) {
    console.log(i, inputs[i]);
}
```

| | `for...of` | `forEach` | `for`문 |
|---|---|---|---|
| 인덱스 사용 | X | O | O |
| `break` 사용 | O | X | O |
| 코드 간결함 | O | O | 상대적으로 길다 |

---

## P15 - 템플릿 리터럴

```js
let n = '김다정';
console.log(`안녕하세요. 저는 ${n}입니다.`);
```

**해석:** 백틱(`` ` ``)으로 감싸고 `${변수}`로 값을 삽입한다. 파이썬의 f-string(`f"..."`)과 동일하다.

---

## P16 - 문자열 뒤집기

```js
let n = '거꾸로';
let ans = '';
for (let i = n.length - 1; i >= 0; i--) {
    ans += n[i];
}
console.log(ans); // 로꾸거
```

**해석:** `n.length - 1`부터 0까지 역순으로 인덱스를 줄이며 문자를 하나씩 이어붙인다. `n[i]`로 문자열의 특정 인덱스에 접근하는 방식은 파이썬과 동일하다.

---

## P17 - 조건 판별 (놀이기구 탑승)

```js
let people = [160, 135, 120, 150];

for (let p of people) {
    if (p >= 150) {
        console.log('YES');
    } else {
        console.log('NO');
    }
}
```

**해석:** 150 이상이면 YES, 미만이면 NO를 출력한다.

---

## P18 - 평균 구하기

```js
let scores = [20, 30, 40];

let sum = 0;
for (let s of scores) {
    sum += s;
}

sum /= scores.length;
sum = Math.floor(sum);
console.log(sum); // 30
```

**해석:** `sum /= scores.length`는 `sum = sum / scores.length`의 축약형. `Math.floor()`로 소수점을 버린다.

---

## P19 - 거듭제곱

```js
let a = 2, b = 3;
console.log(a ** b); // 8
```

**해석:** `**`는 거듭제곱 연산자. `Math.pow(a, b)`와 동일하다.

---

## P20 - 몫과 나머지

```js
let a = 10, b = 2;
console.log(Math.floor(a / b), a % b); // 5 0
```

**해석:** JS에는 파이썬의 `//` 연산자가 없어서 `Math.floor(a / b)`로 몫을 구한다. `%`는 나머지 연산자로 파이썬과 동일하다.

---

## 문제21 : set은 어떻게 만드나요?

다음 중 set을 만드는 방법으로 올바른 것을 모두 고르시오.

```
1) var x = {1, 2, 3, 5, 6, 7};
2) var x = {};
3) var x = new Set('javascript');
4) var x = new Set(range(5));
5) var x = new Set();
```

**정답: 3번, 5번**

**해설:**

- **1번 X** : `{}`는 객체(Object)를 만드는 문법이다. `{1, 2, 3}` 형태는 JS에서 유효하지 않다.
- **2번 X** : `{}`는 빈 객체다. 빈 Set이 아니다.
- **3번 O** : `new Set()`은 이터러블을 인자로 받는다. 문자열도 이터러블이므로 각 문자를 요소로 갖는 Set이 만들어진다. (`{'j','a','v','s','c','r','i','p','t'}`)
- **4번 X** : `range()`는 파이썬 함수다. JS에는 존재하지 않아 ReferenceError가 발생한다.
- **5번 O** : 인자 없이 빈 Set을 생성한다.

**JS에서 Set 만드는 올바른 방법:**

```js
var a = new Set();           // 빈 Set
var b = new Set([1, 2, 3]);  // 배열로 생성
var c = new Set('hello');    // 문자열로 생성 → {'h','e','l','o'}
```

**`new` 키워드란?**

`new`는 생성자 함수를 기반으로 새 객체를 만들어 반환하는 명령어다. `Set`, `Map`, `Date` 등 내장 객체를 만들 때 사용한다.

```js
var s = new Set();   // Set 객체 생성
var d = new Date();  // Date 객체 생성
```

파이썬의 `set()`, `dict()` 같은 내장 함수 호출과 비슷한 역할이지만, JS에서는 `new` 키워드를 앞에 붙여야 한다.

---

## 문제22 : 배수인지 확인하기

다음 중 변수 i가 6의 배수인지 확인하는 방법으로 올바른 것은?

```
1) i / 6 == 0
2) i % 6 == 0
3) i & 6 == 0
4) i | 6 == 0
5) i // 6 == 0
```

**정답: 2번**


---

## 문제23 : OX문제

`console.log(10/3)`의 출력 결과는 **3**이다.

**정답: X**

**해설:** JS에서 `/`는 실수 나눗기다. `10 / 3`은 `3.3333...`을 출력한다. 파이썬과 달리 JS에는 정수 나눗기 연산자(`//`)가 없어서 나눗기 결과는 항상 소수점까지 포함된다. 정수 몫만 원하면 `Math.floor(10 / 3)`을 사용해야 한다.

---

## P24 - 문자열 대문자 변환

```js
let names = ['mary', 'Tom', 'LUCY'];

for (let n of names) {
    console.log(n.toUpperCase());
}
// MARY, TOM, LUCY
```

**해석:**

- `toUpperCase()` : 문자열을 모두 대문자로 변환한다. 파이썬의 `.upper()`와 동일하다.
- 반대로 소문자는 `toLowerCase()`. 파이썬의 `.lower()`와 동일하다.

---

## P25 - 원의 넓이 구하기

```js
let rads = [2, 3, 5];

for (let r of rads) {
    console.log(r ** 2 * Math.PI);
}
```

**해석:**

- `Math.PI` : 원주율(π) 상수. 파이썬의 `math.pi`와 동일하다.
- `r ** 2` : 반지름의 제곱. 원의 넓이 공식은 `π * r²`다.

---

## P26 - 객체로 한영 행성 이름 변환

```js
const planets = {
    '수성': 'Mercury',
    '금성': 'Venus',
    '지구': 'Earth',
    '화성': 'Mars',
    '목성': 'Jupiter',
    '토성': 'Saturn',
    '천왕성': 'Uranus',
    '해왕성': 'Neptune'
};

let input = ['금성', '토성', '지구', '화성'];

for (let i of input) {
    console.log(planets[i]);
}
// Venus, Saturn, Earth, Mars
```

**해석:**

- 객체를 딕셔너리처럼 활용해 한글 키로 영어 값을 조회한다. 파이썬의 `dict`와 동일한 방식이다.
- `planets[i]`로 동적으로 키를 조회한다.

---

## P27 - 두 배열로 객체 만들기

```js
const keys = first_input.split(' ');    // ['Yujin', 'Hyewon']
const values = second_input.split(' '); // ['70', '100']

const obj = {};

for (let i = 0; i < keys.length; i++) {
    obj[keys[i]] = Number(values[i]);
}

console.log(obj); // { Yujin: 70, Hyewon: 100 }
```

**해석:**

- `split(' ')` : 공백 기준으로 문자열을 쪼개 배열로 반환한다. 파이썬의 `.split(' ')`과 동일하다.
- `Number()` : 문자열을 숫자로 변환한다. 파이썬의 `int()` 또는 `float()`과 유사하다.
- `obj[keys[i]] = ...` : 동적으로 객체에 키를 추가하는 방식이다.
- `keys`, `values`, `obj` 모두 `const`로 선언 가능하다. 재할당이 없고 내부 수정만 하기 때문이다.

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
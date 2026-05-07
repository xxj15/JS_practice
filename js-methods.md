# JS 자주 쓰는 메서드 정리

---

## 문자열 (String)

| 메서드 | 설명 | 예시 |
|--------|------|------|
| `includes(str)` | 문자열 포함 여부 | `'hello'.includes('ell')` → `true` |
| `startsWith(str)` | 시작 문자열 확인 | `'hello'.startsWith('he')` → `true` |
| `endsWith(str)` | 끝 문자열 확인 | `'hello'.endsWith('lo')` → `true` |
| `indexOf(str)` | 첫 번째 위치 반환, 없으면 -1 | `'hello'.indexOf('l')` → `2` |
| `slice(start, end)` | 문자열 자르기 | `'hello'.slice(1, 3)` → `'el'` |
| `replace(a, b)` | 첫 번째 일치 항목 교체 | `'aaa'.replace('a', 'b')` → `'baa'` |
| `replaceAll(a, b)` | 모든 일치 항목 교체 | `'aaa'.replaceAll('a', 'b')` → `'bbb'` |
| `toUpperCase()` | 대문자 변환 | `'hello'.toUpperCase()` → `'HELLO'` |
| `toLowerCase()` | 소문자 변환 | `'HELLO'.toLowerCase()` → `'hello'` |
| `trim()` | 앞뒤 공백 제거 | `'  hi  '.trim()` → `'hi'` |
| `split(str)` | 문자열 → 배열로 분리 | `'a,b,c'.split(',')` → `['a','b','c']` |
| `repeat(n)` | n번 반복 | `'ab'.repeat(3)` → `'ababab'` |
| `padStart(n, str)` | 앞을 채워서 길이 맞춤 | `'5'.padStart(3, '0')` → `'005'` |
| `padEnd(n, str)` | 뒤를 채워서 길이 맞춤 | `'5'.padEnd(3, '0')` → `'500'` |

---

## 배열 (Array)

| 메서드 | 설명 | 예시 |
|--------|------|------|
| `push(item)` | 맨 뒤에 추가 | `[1,2].push(3)` → `[1,2,3]` |
| `pop()` | 맨 뒤 제거 후 반환 | `[1,2,3].pop()` → `3` |
| `shift()` | 맨 앞 제거 후 반환 | `[1,2,3].shift()` → `1` |
| `unshift(item)` | 맨 앞에 추가 | `[1,2].unshift(0)` → `[0,1,2]` |
| `includes(item)` | 포함 여부 | `[1,2,3].includes(2)` → `true` |
| `indexOf(item)` | 첫 번째 위치 반환, 없으면 -1 | `[1,2,3].indexOf(2)` → `1` |
| `join(str)` | 배열 → 문자열로 합치기 | `['a','b','c'].join('-')` → `'a-b-c'` |
| `slice(start, end)` | 배열 자르기 (원본 유지) | `[1,2,3,4].slice(1,3)` → `[2,3]` |
| `splice(start, n)` | 배열 자르기 (원본 변경) | `[1,2,3].splice(1,1)` → `[2]`, 원본 `[1,3]` |
| `concat(arr)` | 배열 합치기 | `[1,2].concat([3,4])` → `[1,2,3,4]` |
| `reverse()` | 배열 뒤집기 (원본 변경) | `[1,2,3].reverse()` → `[3,2,1]` |
| `sort()` | 정렬 (원본 변경) | `[3,1,2].sort()` → `[1,2,3]` |
| `flat(depth)` | 중첩 배열 펼치기 | `[[1,2],[3]].flat()` → `[1,2,3]` |

### 콜백을 받는 배열 메서드

| 메서드 | 설명 | 예시 |
|--------|------|------|
| `map(fn)` | 각 요소 변환 후 새 배열 반환 | `[1,2,3].map(x => x * 2)` → `[2,4,6]` |
| `filter(fn)` | 조건 통과한 요소만 새 배열 반환 | `[1,2,3].filter(x => x > 1)` → `[2,3]` |
| `find(fn)` | 조건 맞는 첫 번째 요소 반환 | `[1,2,3].find(x => x > 1)` → `2` |
| `findIndex(fn)` | 조건 맞는 첫 번째 인덱스 반환 | `[1,2,3].findIndex(x => x > 1)` → `1` |
| `some(fn)` | 하나라도 조건 만족하면 true | `[1,2,3].some(x => x > 2)` → `true` |
| `every(fn)` | 모두 조건 만족하면 true | `[1,2,3].every(x => x > 0)` → `true` |
| `reduce(fn, init)` | 누적 계산 | `[1,2,3].reduce((acc, x) => acc + x, 0)` → `6` |
| `forEach(fn)` | 각 요소 순회 (반환값 없음) | `[1,2,3].forEach(x => console.log(x))` |
| `flatMap(fn)` | map 후 flat(1) | `[1,2].flatMap(x => [x, x*2])` → `[1,2,2,4]` |

---

## 숫자 (Number / Math)

| 메서드 | 설명 | 예시 |
|--------|------|------|
| `Math.max(...arr)` | 최댓값 | `Math.max(1,2,3)` → `3` |
| `Math.min(...arr)` | 최솟값 | `Math.min(1,2,3)` → `1` |
| `Math.abs(n)` | 절댓값 | `Math.abs(-5)` → `5` |
| `Math.floor(n)` | 내림 | `Math.floor(4.7)` → `4` |
| `Math.ceil(n)` | 올림 | `Math.ceil(4.1)` → `5` |
| `Math.round(n)` | 반올림 | `Math.round(4.5)` → `5` |
| `Math.pow(a, b)` | 거듭제곱 | `Math.pow(2,3)` → `8` |
| `Math.sqrt(n)` | 제곱근 | `Math.sqrt(9)` → `3` |
| `Math.random()` | 0 이상 1 미만 난수 | `Math.random()` → `0.xxx` |
| `n.toFixed(d)` | 소수점 d자리까지 (문자열 반환) | `(3.14159).toFixed(2)` → `'3.14'` |
| `parseInt(str)` | 문자열 → 정수 | `parseInt('42px')` → `42` |
| `parseFloat(str)` | 문자열 → 실수 | `parseFloat('3.14')` → `3.14` |

---

## 객체 (Object)

| 메서드 | 설명 | 예시 |
|--------|------|------|
| `Object.keys(obj)` | 키 배열 반환 | `Object.keys({a:1,b:2})` → `['a','b']` |
| `Object.values(obj)` | 값 배열 반환 | `Object.values({a:1,b:2})` → `[1,2]` |
| `Object.entries(obj)` | [키, 값] 쌍 배열 반환 | `Object.entries({a:1})` → `[['a',1]]` |
| `Object.fromEntries(arr)` | [키, 값] 배열 → 객체 | `Object.fromEntries([['a',1]])` → `{a:1}` |
| `Object.assign(target, src)` | 객체 병합 (원본 변경) | `Object.assign({}, {a:1}, {b:2})` → `{a:1,b:2}` |
| `{...obj}` | 스프레드로 얕은 복사 | `{...{a:1,b:2}}` → `{a:1,b:2}` |

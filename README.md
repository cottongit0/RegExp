# 정규표현식(RegExp)

정규식, Regular Expression

## 역할

- 문자 검색(search)
- 문자 대체(replace)
- 무자 추출(extract)

## 테스트 사이트

http://regexr.com/

## 정규식 생성

```js
// 생성자
new RegExp("표현", "옵션");
new RegExp("[a-z]", "gi");

// 리터럴
/표현/옵션
/[a-z]/gi
```

```js
// 예제
const str = `
010-1234-5678
cottongit0@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
Cotton is so soft!
abbcccdddd
`;
```

```js
// 생성자
const regexp1 = new RegExp("cotton", "gi");
console.log(str.match(regexp1));

// 리터럴
const regexp2 = /cotton/gi;
console.log(str.match(regexp2));
```

## 메소드

| 메소드    | 문법                             | 설명                                                            |
| --------- | -------------------------------- | --------------------------------------------------------------- |
| exec      | 정규식.exec(문자열)              | 일치하는 하나의 정보(Array) 변환                                |
| test\*    | 정규식.test(문자열)              | 일치 여부(Boolean) 변환                                         |
| match\*   | 문자열.match(정규식)             | 일치하는 문자열의 배열(Array) 변환                              |
| search    | 문자열.search(정규식)            | 일치하는 문자열의 인덱스(Number) 변환                           |
| replace\* | 문자열.replace(정규식, 대체문자) | 일치하는 문자열을 대체하고 대체된 문자열(String) 변환           |
| split     | 문자열.split(정규식)             | 일치하는 문자열을 분할하여 배열(Array)로 변환                   |
| toString  | 생성자\_정규식.toString()        | 생성자 함수 방식의 정규식을 리터럴 방식의 문자열(string)로 변환 |

## 플래그(옵션)

| 플래그 | 설명                                       |
| ------ | ------------------------------------------ |
| g      | 모든 문자 일치(global)                     |
| i      | 영어 대소문자를 구분않고 일치(ignore case) |
| m      | 여러 줄 일치(multi line)                   |

## 패턴(표현)

| 패턴       | 설명                               |
| ---------- | ---------------------------------- |
| ^ab        | 줄(Line) 시작에 있는 ab와 일치     |
| ab$        | 줄(Line) 끝에 있는 ab와 일치       |
| .          | 임의의 한 문자와 일치              |
| a&verbar;b | a 또는 b와 일치                    |
| ab?        | b가 없거나 b와 일치                |
| {3}        | 3개 연속 일치                      |
| {3,}       | 3개 이상 연속 일치                 |
| {3, 5}     | 3개 이상 5개 이하(3~5개) 연속 일치 |

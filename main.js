const str = `
010-1234-5678
cottongit0@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
Cotton is so soft.
abbcccdddd
http://localhost:1234
`;

const regexp1 = new RegExp("cotton", "gi");
console.log(str.match(regexp1));

const regexp2 = /cotton/gi;
console.log(str.match(regexp2));

const regexp3 = /soft/gi;
console.log(regexp3.test(str));

const regexp4 = /fox/gi;
console.log(regexp4.test(str));

const regexp5 = /soft/gi;
console.log(str.replace(regexp5, "hard"));

console.log(str.match(/\.$/gim));

console.log(str.match(/d$/gm));

console.log(str.match(/^c/gim));

console.log(str.match(/./g));

console.log(str.match(/http/g));

console.log(str.match(/h..p/g));

console.log(str.match(/cotton|soft/i));
console.log(str.match(/cotton|soft/gi));

console.log(str.match(/https?/g));

console.log(str.match(/d{2}/g));
console.log(str.match(/d{2,}/g));
console.log(str.match(/d{1,4}/g));

console.log(str.match(/\w{2,3}/g));
console.log(str.match(/\b\w{2,3}\b/g));

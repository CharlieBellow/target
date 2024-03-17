/* 
5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:

a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

b) Evite usar funções prontas, como, por exemplo, reverse; */

let text = "charlie bellow";
let array = [];

let size = text.length;

let count = size - 1

for (let i = text.length; i > 0; i--) {
  array.push(text.substring(i, count));
  console.log(text.substring(i, count));
  count -= 1;
}
const invert = array.join('')
console.log(invert);

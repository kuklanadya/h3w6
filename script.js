//Task 1
//1
function numbersToWords(number) {
   const units = {
      1: 'один',
      2: 'два',
      3: 'три',
      4: 'четыре',
      5: 'пять',
      6: 'шесть',
      7: 'семь',
      8: 'восемь',
      9: 'девять'
   }
   const dozens = {
      10: 'десять',
      11: 'одиннадцать',
      12: 'двенадцать',
      13: 'тринадцать',
      14: 'четыренадцать',
      15: 'пятьнадцать',
      16: 'шестьнадцать',
      17: 'семьнадцать',
      18: 'восемьнадцать',
      19: 'девятьнадцать',
      2: 'двадцать',
      3: 'тридцать',
      4: 'сорок',
      5: 'пятьдесят',
      6: 'шестьдесят',
      7: 'семьдесят',
      8: 'восемьдесят',
      9: 'девяносто',
   };
   number = [...'' + number];
   let result = dozens[number[0]] + ' ' + units[number[1]];
   return number < 20 ? dozens[number] : result;
}

//2
function informant(string) {
   return `Number of letters: ${string.match(/[A-Za-z]/g).length},
   number of digits: ${string.match(/\d/g).length}, 
   number of symbols: ${string.match(/[^A-Za-z0-9 ]/g).length}`;
}

//3
function replacer(string) {
   return string.replace(/[A-Za-z]/g, x => String(x).toLowerCase() === x ?
      String(x).toUpperCase() : String(x).toLowerCase()).replace(/\d/g, '_');
}

//Task 2
let i = 1;
const button = document.querySelector('.next');
const colors = document.querySelectorAll('.color');
button.addEventListener('click', function () {
   colors.forEach(function (el) {
      el.classList.remove('active')
   })
   if (i === 3) {
      i = 0;
   }
   colors[i++].classList.add('active')
})

//Task 3
//1
//['Яблоко', 'Банан', 'Ананас'].map(el => el[0]);
// > ['Я', 'Б', 'А']
console.log(['Яблоко', 'Банан', 'Ананас'].reduce((acc, el) => acc + el[0] + ' ', ''));

//2
//['Яблоко', 'Банан', 'Ананас'].filter(el => el[0].toLowerCase() === 'a');
// > ['Ананас']
console.log(['Яблоко', 'Банан', 'Ананас'].reduce((acc, el) =>
   el[0].toLowerCase() === 'а' ? acc + el : acc, ''));

//3
//['Яблоко', 'Банан', 'Ананас'].forEach((el, i, arr) => arr[i] = `${i + 1}: ${el};`)
console.log(['Яблоко', 'Банан', 'Ананас'].reduce((acc, el, i, arr) =>
   acc + `${i + 1}: ${el}; `, ''));
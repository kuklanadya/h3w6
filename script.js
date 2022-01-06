//Task 1
function sumOfMin(array) {
   return array.reduce((result, element) => result += element.sort((a, b) => a - b)[0], 0);
}

//Task 2
function twoOldestAges(array) {
   return [...new Set(array)].sort((a, b) => a - b).slice(-2);
}

//Task 3
function shortestWord(string) {
   return string.trim().split(' ').sort((a, b) => a.length - b.length)[0].length;
}

//Task 4
function yourOrder(string) {
   return string.split(' ').sort((a, b) => a.match(/\d/) - b.match(/\d/)).join(' ');
}

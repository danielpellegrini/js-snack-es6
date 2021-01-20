// jsnack 3
// Si scriva una funzione che accetti tre argomenti, un array e due numeri (A più piccolo di B).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri
var numbersArray=[1,2,3,4,5,6,7,8,9,10];

function myFunction(arg1, arg2, arg3) {
  var newNumbersArray = [];
  for (var i = 0; i < arg1.length; i++) {
    if (arg1[i] > arg2 && arg1[i] < arg3) {
      newNumbersArray.push(arg1[i]);
    }
  }
  return newNumbersArray
}

var result = myFunction(numbersArray,2,8)

console.log(result);

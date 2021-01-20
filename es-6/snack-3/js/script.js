// jsnack 3
// Si scriva una funzione che accetti tre argomenti, un array e due numeri (A più piccolo di B).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri
const numbersArray=[0,1,2,3,4,5,6,7,8,9,10];

const filteredArray = numbersArray.filter((element, index, array) => {

  return element > 2 && element < 8 ;

});

console.log(filteredArray);

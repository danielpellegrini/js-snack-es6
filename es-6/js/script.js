// jsnack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal (backtick `)

// let name = 'Bianchi';
// let weight = '6'
//
// const nameKey = 'weight';
//
// const bikeShop = {
//   name,
//   [nameKey]: weight
// };
//
// console.log(bikeShop)

const bikeShop = [
  {
    name: 'Bianchi',
    weight: 6
  },
  {
    name: 'Neri',
    weight: 5
  },
  {
    name: 'Rossi',
    weight: 4
  }
];
const [weight] = bikeShop;
console.log(weight);

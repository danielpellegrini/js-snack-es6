// jsnack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal (backtick `)



const bike=[

{
  name:'Bianchi',
  weight:8,
},
{
  name:'Rossi',
  weight:12,
},
{
  name:'Verdi',
  weight:6,
},
{
  name:'Neri',
  weight:7,
}

]
console.log(bike);
let lightBike=bike[0];

const {name, weight} = lightBike

for (let i = 1; i < bike.length; i++) {
   if (lightBike.weight>bike[i].weight){
    lightBike=bike[i];
   }
}


console.log(`The lighter bike is ${lightBike.name} and its weight is ${lightBike.weight}`);

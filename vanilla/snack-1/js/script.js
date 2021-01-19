// jsnack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore



var bike = [{
    'name': 'bianchi',
    'weight': 6
  },
  {
    'name': 'colnago',
    'weight': 5
  },
  {
    'name': 'trek',
    'weight': 7
  },
  {
    'name': 'masciarelli',
    'weight': 4
  },
];


var lightBike = bike[0];


for (var i = 1; i < bike.length; i++) {

  if (bike[i].weight < lightBike.weight) {
    lightBike = bike[i];

  }

}

console.log(lightBike);

// jsnack 2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


var squadre = [
  {
    'nome': 'Genoa',
    'punti fatti': 0,
    'falli subiti': 0
  },
  {
    'nome': 'Atalanta',
    'punti fatti': 0,
    'falli subiti': 0
  },
  {
    'nome': 'Udinese',
    'punti fatti': 0,
    'falli subiti': 0
  },
  {
    'nome': 'Ferrara',
    'punti fatti': 0,
    'falli subiti': 0
  },
  {
    'nome': 'Sampdoria',
    'punti fatti': 0,
    'falli subiti': 0
  },
  {
    'nome': 'Fiorentina',
    'punti fatti': 0,
    'falli subiti': 0
  }
];

for (var i = 0; i < squadre.length; i++) {
    squadre[i]['punti fatti']=Math.floor(Math.random()*100+1);
    squadre[i]['falli subiti']=Math.floor(Math.random()*100+1);
}
console.log(squadre);

var newSquadre = [];

for (var i = 0; i < squadre.length; i++) {
  newSquadre.push({
    'nome': squadre[i]['nome'],
    'falli subiti': squadre[i]['falli subiti'],
  })
}
console.log(newSquadre);

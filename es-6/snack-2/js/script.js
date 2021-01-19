// jsnack 2


// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

function randomNumber (min, max) {
  var random = Math.floor(Math.random() * (max - min)) + min;
  return random;
}

const teams = [
  {
    name: 'Genoa',
    points: 0,
    fouls: 0
  },
  {
    name: 'Atalanta',
    points: 0,
    fouls: 0
  },
  {
    name: 'Udinese',
    points: 0,
    fouls: 0
  },
  {
    name: 'Ferrara',
    points: 0,
    fouls: 0
  },
  {
    name: 'Sampdoria',
    points: 0,
    fouls: 0
  },
  {
    name: 'Fiorentina',
    points: 0,
    fouls: 0
  }
];

// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti
for (let i = 0; i < teams.length; i++) {
  teams[i].points = randomNumber(1, 100);
  teams[i].fouls = randomNumber(1, 100);
}

const newTeams = [];
for (let i = 0; i < teams.length; i++) {
  let thisTeam = teams[i];
  const {name, fouls} = thisTeam;
  newTeams.push({
    name,
    fouls
  });
}
console.log(newTeams);

// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

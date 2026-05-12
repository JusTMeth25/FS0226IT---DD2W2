// Oggetti
const persona = {
  nome: "Mario",
  cognome: "Rossi",
  num_corsi: 3,
};

console.log(typeof persona);
console.table(persona);
console.log(persona.nome);
console.log(persona["num_corsi"]);

const studente = {
  nome: "Aldo",
  cognome: "Bianchi",
  eta: 28,
  indirizzo: {
    via: "Roma",
    civico: 20,
    cap: 10100,
    citta: "Torino",
  },
  num_corsi: 3,
  attivo: true,
};

console.log(
  `Lo studente ${studente.nome} ${studente.cognome} abita a ${studente.indirizzo.citta}`,
);
console.table(studente);

// Array
const colors = ["rosso", "verde", "blu", "giallo", "nero"];
const numbers = [8, 15, 12, 7, 6, 10, 21];
const names = ["Mario", "Aldo", "Anna", "Maria"];
const mixedArray = [
  "Nicola",
  25,
  { via: "Roma", civico: 25, citta: "Napoli" },
  true,
];

console.log(typeof colors);

console.table(colors);
console.table(numbers);
console.table(name);
console.table(mixedArray);

console.log(colors[1]);
console.table(mixedArray[2].citta);
console.log(names.length);
console.log(names[names.length - 1]);

names[1] = "Pippo";
console.log(names);
names[8] = "Mimmo";
console.log(names);

colors.pop();
console.log(colors);

let deletedColor = colors.pop();
console.log(deletedColor);

console.log(names.indexOf("Anna"));

// Iterazione dell'array
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

// Pattern - un array di oggetti fatti tutti allo stesso modo
const carrello = [
  {
    articleName: "mouse",
    category: "accessories",
    price: 30,
    available: false,
  },
  {
    articleName: "monitor",
    category: "hardware",
    price: 110,
    available: true,
  },
  {
    articleName: "keyboard",
    category: "accessories",
    price: 20,
    available: true,
  },
];
console.log(`*********************************`);
console.log("Carrello:");
for (let i = 0; i < carrello.length; i++) {
  console.log(`Articolo: ${carrello[i].articleName}`);
  console.log(`Categoria: ${carrello[i].category}`);
  console.log(`Prezzo: ${carrello[i].price}`);
  console.log(`Disponibilita': ${carrello[i].available}`);
  console.log(`-`);
}

carrello.push({
  articleName: "Stampante",
  category: "hardware",
  price: 150,
  available: false,
});

console.log(`*********************************`);
console.log("Carrello:");
for (let i = 0; i < carrello.length; i++) {
  console.log(`Articolo: ${carrello[i].articleName}`);
  console.log(`Categoria: ${carrello[i].category}`);
  console.log(`Prezzo: ${carrello[i].price}`);
  console.log(`Disponibilita': ${carrello[i].available}`);
  console.log(`-`);
}

carrello.splice(1, 1);
console.log(`*********************************`);
console.log("Carrello:");
for (let i = 0; i < carrello.length; i++) {
  console.log(`Articolo: ${carrello[i].articleName}`);
  console.log(`Categoria: ${carrello[i].category}`);
  console.log(`Prezzo: ${carrello[i].price}`);
  console.log(`Disponibilita': ${carrello[i].available}`);
  console.log(`-`);
}

// if/else if/else
let eta = 15;
if (eta >= 18) {
  console.log(`Sei maggiorenne`);
}

let voto = 25;
if (voto >= 18) {
  console.log(`Promosso`);
} else {
  console.log(`Bocciato`);
}

let availability = 3;
if (availability >= 20) {
  console.log(`Disponibile`);
} else if (availability >= 10 && availability < 20) {
  console.log(`Necessita fornitura`);
} else if (availability >= 1 && availability < 10) {
  console.log(`In esaurimento`);
} else {
  console.log(`Non disponibile`);
}

// Carrello condizionato
console.log(`*********************************`);
console.log("Carrello:");
for (let i = 0; i < carrello.length; i++) {
  if (carrello[i].available === true) {
    console.log(`Articolo: ${carrello[i].articleName}`);
    console.log(`Categoria: ${carrello[i].category}`);
    console.log(`Prezzo: ${carrello[i].price}`);
    console.log(`-`);
  } else {
    console.log(`Articolo ${carrello[i].articleName} non disponibile`);
    console.log(`-`);
  }
}

// Errore di assegnazione
let myValue = 5;
if ((myValue = 10)) {
  console.log(`Il mio valore è 10`);
} else {
  console.log(`Il mio valore è ${myValue}`);
}
// qui sto riassegnando myValue perciò vedrò 10!

// Operatore ternario
let frequency = false;
const active = frequency === true ? "Frequentante" : "Non frequentante";
console.log(active);

// Operatori logici
let personAge = 18;
let personCan = true;

if (personAge < 18 || !personCan) {
   console.log('Non puo guidare');
} else {
   console.log('Puo guidare');
}

let abbonato = true;
if (personAge >= 18 && abbonato) {
   console.log('Puo entrare');
} else {
   console.log('Non puo entrare');
}
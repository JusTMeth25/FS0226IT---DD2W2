// Oggetti
/*const persona = {
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

*/

// Inizio esercizi

/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto ogni commento.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- In alternativa: nel terminale, `node script.js`.
- Cerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato stamattina.
*/

/* ESERCIZIO 1 — Oggetto persona
   Crea un oggetto "persona" con: nome, cognome, eta, citta.
   Stampa: "Mario Rossi, 25 anni, vive a Roma."
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*const persona = {
nome: 'Lorenzo',
cognome: 'Melis',
eta: '29',
citta: 'Roma',
} 

console.log(`${persona.nome} ${persona.cognome} , ${persona.eta} anni, vive a ${persona.citta}.`);
*/

/* ESERCIZIO 2 — Aggiungi e rimuovi
   Sull'oggetto "persona": aggiungi "email", poi rimuovi "eta".
   Stampa l'oggetto risultante.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*const persona = {
  nome: "Lorenzo",
  cognome: "Melis",
  email: "lorenzo.melis@yahoo.it",
  eta: 29,
  citta: "Roma",
};

delete persona.eta;

console.log(persona);
*/

/* ESERCIZIO 3 — Oggetto annidato
   Oggetto "utente" con una proprietà "indirizzo" (oggetto con via, citta, cap).
   Stampa solo il CAP con dot notation.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const utente = {
  indirizzo: {
    via: "Roma",
    civico: 20,
    cap: 10100,
    citta: "Torino",
  },
};

console.log(`CAP: ${utente.indirizzo.cap}`);

/* ESERCIZIO 4 — Bracket dinamica
   Sull'oggetto "persona", variabile chiave = "nome".
   Stampa il valore con bracket notation usando la variabile chiave.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const persona = {
  nome: "Lorenzo",
  cognome: "Melis",
  email: "lorenzo.melis@yahoo.it",
  eta: 29,
  citta: "Roma",
};

console.log(`Valore di nome: ${persona["nome"]}`);

/* ESERCIZIO 5 — Numero più grande
   Tre numeri a, b, c.
   Con if/else if, stampa il più grande. Se pareggio al massimo, stampa "Pareggio".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numA = 12;
let numB = 19;
let numC = 19;

if (numA > numB && numA > numC) {
  console.log(numA);
} else if (numB > numA && numB > numC) {
  console.log(numB);
} else if (numC > numA && numC > numB) {
  console.log(numC);
} else if (numB === numC || numA === numB || numA === numC) {
  console.log("Pareggio");
}

/* ESERCIZIO 6 — E-commerce: spedizione
   Variabile "totale".
   Se totale >= 50 spedizione gratuita, altrimenti 9.90.
   Stampa: "Totale carrello: 35€ — Spedizione: 9.90€ — Totale finale: 44.90€"
   Risolvi una volta con if/else e una volta con ternario.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totale = 67;

if (totale < 50) {
  console.log(
    `Totale carrello: ${totale}€ - Spedizione: 9.9€ - Totale finale: ${totale + 9.9}€`,
  );
} else if (totale >= 50) {
  console.log(
    `Totale carrello: ${totale}€ - Spedizione: gratuita - Totale finale: ${totale}€`,
  );
}

/* ESERCIZIO 7 — typeof check
   Crea un array con 3 valori diversi (es. [42, "ciao", true]).
   Con un for + if, per ogni elemento stampa "x è un numero" o "x non è un numero".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const parole = [42, "ciao", true];

for (let i = 0; i < parole.length; i++) {
  let x = parole[i];
  if (typeof x === "number") {
    console.log(x + " è un numero ");
  } else if (typeof x !== "number") {
    console.log(x + " non è un numero ");
  }
}

/* ESERCIZIO 8 — Array dei numeri
   Array vuoto. Aggiungi 1..5 con push. Aggiungi 0 all'inizio con unshift.
   Stampa array e length.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let vuoto = [];

vuoto.push(1, 2, 3, 4, 5);

vuoto.unshift(0);

console.log(vuoto);
console.log(`Lunghezza: ${vuoto.length}`);

/* ESERCIZIO 9 — Carrello con splice
   Array ["Penna", "Quaderno", "Zaino", "Astuccio"].
   Con splice: rimuovi "Quaderno", poi inserisci "Diario" al suo posto.
   Stampa dopo ogni operazione.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let carrello = ["Penna", "Quaderno", "Zaino", "Astuccio"];

console.log(carrello);
console.log("-");

carrello.splice(1, 1);
console.log(carrello);

carrello.splice(1, 0, 'Diario');
console.log(carrello);



/* ESERCIZIO 10 — Cerca un articolo
   Array prodotti = ["Penna", "Quaderno", "Zaino"].
   cercato = "Zaino".
   Con includes: stampa "Zaino è in carrello: true".
   Con indexOf: stampa la posizione, o "Non in carrello".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let prodotti = ["Penna", "Quaderno", "Zaino", "Astuccio"];




/* ESERCIZIO 11 — Lista utenti
   Array utenti di 3 oggetti { nome, eta }.
   Con un for, stampa ogni utente: "Mario (25 anni)".
   Aggiungi console.table(utenti) alla fine.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12 — Inventario disponibili
   Array prodotti di 4 oggetti { nome, prezzo, disponibile }.
   Con for, per ogni prodotto:
   - disponibile && prezzo < 10 → "OFFERTA: nome (prezzo€)"
   - disponibile && prezzo >= 10 → "nome — prezzo€"
   - !disponibile → "nome — esaurito"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* --EXTRA-- ESERCIZIO 13 — Reverse manuale
   Array [1, 2, 3, 4, 5].
   Nuovo array "inverso", riempilo con un for (dall'ultimo al primo) usando push.
   Stampa "inverso".
   Vincolo: niente metodo .reverse() di JavaScript.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

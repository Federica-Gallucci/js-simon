// ? Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.

// Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente
// deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.

// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.

// ? BONUS:
// - Inseriamo la validazione: se l'utente mette due numeri uguali o
//   inserisce cose diverse da numeri lo blocchiamo in qualche modo.
// - Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.

// ? Consigli del giorno:
// - Pensate prima in italiano.
// - Dividete in piccoli problemi la consegna.
// - Individuate gli elementi di cui avete bisogno per realizzare il programma.
// - Immaginate la logica come fosse uno snack: "Dati 2 array di numeri, indica quali e
//   quanti numeri ci sono in comune tra i due array"

const countdownEl = document.getElementById("countdown");
const numbersListEl = document.getElementById("numbers-list");
const answersForm = document.getElementById("answers-form");
// uso querySelectorAll per prendere tutti gli input che hanno classe "form-control" e genero una lista
const inputList = document.querySelectorAll(".form-control");

// # FUNZIONI

const generateRandomNUmber = (min, max) => {
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNumber;
};

// # ARRAY DI 5 NUMERI CASUALI
const numberOne = generateRandomNUmber(1, 50);
const numberTwo = generateRandomNUmber(1, 50);
const numberThree = generateRandomNUmber(1, 50);
const numberFour = generateRandomNUmber(1, 50);
const numberFive = generateRandomNUmber(1, 50);

// console.log(numberOne);
// console.log(numberTwo);
// console.log(numberThree);
// console.log(numberFour);
// console.log(numberFive);

const arrayRandomNumber = [
  numberOne,
  numberTwo,
  numberThree,
  numberFour,
  numberFive,
];

console.log(arrayRandomNumber);

for (let i = 0; i < arrayRandomNumber.length; i++) {
  console.log(inputList.push(arrayRandomNumber[i]));
}

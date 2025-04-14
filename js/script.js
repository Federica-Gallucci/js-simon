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
const numbersList = document.getElementById("numbers-list");
const numberListEl = document.querySelectorAll(".number-el");
const answersForm = document.getElementById("answers-form");
const inputGroup = document.getElementById("input-group");
// uso querySelectorAll per prendere tutti gli input che hanno classe "form-control" e genero una lista
const inputList = document.querySelectorAll(".form-control");
const sendButton = document.getElementById("send-button");
const message = document.getElementById("message");

//secondi per memorizzare i numeri
let remainingMs = 10;

// # FUNZIONI

// ? GENERA NUMERI RANDOM

const generateRandomNUmber = (min, max) => {
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNumber;
};

// ? FUNZIONE CHE IL COUNTDOWN

const handleCountdown = () => {
  remainingMs--;
  countdownEl.textContent = remainingMs;

  if (remainingMs <= 0) {
    clearInterval(remainSecond);
    numbersList.classList.add("d-none");
    answersForm.classList.remove("d-none");
    countdownEl.textContent = "";
  }

  console.warn(`Rimangono solo ${remainingMs} secondi`);
  return remainingMs;
};

// # ARRAY DI 5 NUMERI CASUALI
const numberOne = generateRandomNUmber(1, 50);
const numberTwo = generateRandomNUmber(1, 50);
const numberThree = generateRandomNUmber(1, 50);
const numberFour = generateRandomNUmber(1, 50);
const numberFive = generateRandomNUmber(1, 50);

const arrayRandomNumber = [
  numberOne,
  numberTwo,
  numberThree,
  numberFour,
  numberFive,
];

console.log(arrayRandomNumber);

// ## VISUALIZZARE IN PAGINA 5 NUMERI CASUALI

// assegno i valori random alla lista di numeri
for (let i = 0; i < arrayRandomNumber.length; i++) {
  numberListEl[i].textContent = arrayRandomNumber[i];
  console.log(`I numeri da memorizzare sono:  ${numberListEl[i].textConten}`);
}
let remainSecond = setInterval(handleCountdown, 1000);
console.log(remainSecond);
console.log(handleCountdown);

// # AL CLICK DEL BOTTONE

sendButton.addEventListener("click", function () {
  for (let i = 0; i < arrayRandomNumber.length; i++) {
    let sum = 0;
    const numberGuessed = [];
    if (inputList.value === arrayRandomNumber[i]) {
      sum += 1;
      const guessed = numberGuessed.push(arrayRandomNumber[i]);
      message.textContent = `Hai indovinato ${sum} numeri! (${guessed})`;
    } else {
      message.textContent = `Non hai indovinato nessun numero!`;
    }
  }
});

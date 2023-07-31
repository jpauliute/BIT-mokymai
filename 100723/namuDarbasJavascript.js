// Pirma uzduotis: Sukurti du kintamuosius. Jiems priskirti savo
// mylimo aktoriaus vardą ir pavardę kaip stringus (Jonas Jonaitis).
// Atspausdinti trumpesnį stringą.
console.log("----Pirma uzduotis----");

let x = "Johnny";
let y = "Depp";

console.log(x + " " + y);

if (x.length > y.length) {
  console.log(y);
} else if (x.length === y.length) {
  console.log("Vardas ir pavarde to paties ilgio");
} else {
  console.log(y);
}

// // Antra uzduotis: Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą,
// pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). Parašykite kodą,
// kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir
// pavardės kintamuosius atspausdintų tokį sakinį :
// // "Aš esu Vardenis Pavardenis. Man yra XX metai(ų)".

console.log("----Antra uzduotis----");
let myname = "Jovita";
let last = "Pauliute";
let birth = 1993;
let now = 2023;
console.log(
  `As esu ` +
    myname +
    " " +
    last +
    "." +
    "Man yra " +
    (now - birth) +
    " metai(u)."
);

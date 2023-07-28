// // Trecia uzduotis. Sukurti du kintamuosius. Jiems priskirti savo mylimo //
// aktoriaus vardą ir pavardę kaip stringus. Sukurti trečią kintamąjį ir //
// jam priskirti stringą, sudarytą iš trijų paskutinių vardo ir pavardės
// kintamųjų raidžių. Jį atspausdinti.

console.log("----Trecia uzduotis----");
let a = "Johnny";
let b = "Depp";
console.log(a + " " + b);
let result =
  a[a.length - 3] +
  a[a.length - 2] +
  a[a.length - 1] +
  b[b.length - 3] +
  b[b.length - 2] +
  b[b.length - 1];
console.log(result);

// Ketvirta Uzduotis. Sukurti kintamąjį su stringu: “Once upon a time
// in hollywood”. Jame visas “o” (didžiąsias ir mažąsias) pakeisti
// žvaigždutėm “*”. Rezultatą atspausdinti.
console.log("----Ketvirta uzduotis----");

let w = "Once upon a time in hollywood";
let wLowered = w.toLowerCase();
let wReplaced = wLowered.replaceAll("o", "*");
console.log(wReplaced);

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Penkta uzduotis. Sukurkite keturis kintamuosius kuriems sugeneruokite
//  atsitiktines reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių,
//  vienetų ir dvejetų.

console.log("----Penkta uzduotis----");

let pirmas = rand(0, 2);
let antras = rand(0, 2);
let trecias = rand(0, 2);
let ketvirtas = rand(0, 2);

console.log(pirmas);
console.log(antras);
console.log(trecias);
console.log(ketvirtas);

let nuliai = "";
let vienetai = "";
let dvejetai = "";

if (pirmas === 0) {
  nuliai++;
}
if (pirmas === 1) {
  vienetai++;
}
if (pirmas === 2) {
  dvejetai++;
}
if (antras === 0) {
  nuliai++;
}
if (antras === 1) {
  vienetai++;
}
if (antras === 2) {
  dvejetai++;
}
if (trecias === 0) {
  nuliai++;
}
if (trecias === 1) {
  vienetai++;
}
if (trecias === 2) {
  dvejetai++;
}
if (ketvirtas === 0) {
  nuliai++;
}
if (ketvirtas === 1) {
  vienetai++;
}
if (ketvirtas === 2) {
  dvejetai++;
}
console.log(`Is viso nuliu yra: ${nuliai}`);
console.log(`Is viso vienetu yra: ${vienetai}`);
console.log(`Is viso dvejetu yra: ${dvejetai}`);

// Sesta uzduotis. Pasinaudokite atsitiktinio skaičiaus
// generavimo funkcija. Sukurkite du kintamuosius ir naudodamiesi
// funkcija jiems priskirkite atsitiktines reikšmes nuo 0 iki 4.
// Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą
// jį suapvalinę iki 2 skaičių po kablelio.

console.log("----Sesta uzduotis----");

let j = rand(0, 4);
let p = rand(0, 4);
console.log(j);
console.log(p);
let jp = "";
if (j > p) {
  jp += j / p;
} else if (p > j) {
  jp += p / j;
}
if (j === p) {
  jp += "Skaiciai yra lygus, dalyba negalima";
}
console.log(`Rezultatas: ${jp}`);

// Septinta uzduotis. Naudokite funkciją ir sukurkite tris kintamuosius
// kuriems priskirkite atsitiktines reikšmes nuo 0 iki 25.
// Raskite ir atspausdinkite vidurinę reikšmę.

console.log("----Septinta uzduotis----");
vienas = rand(0, 25);
antras = rand(0, 25);
trecias = rand(0, 25);

console.log("Reiksmes yra:", vienas, antras, trecias);
max = Math.max(vienas, antras, trecias);
min = Math.min(vienas, antras, trecias);
(mid = vienas), antras, trecias - (max, min);

console.log(mid);

// Astunta uzduotis. Sukurti du kintamuosius. Jiems priskirti savo
// mylimo aktoriaus vardą ir pavardę kaip stringus. Sukurti
// trečią kintamąjį ir jam priskirti stringą, sudarytą iš
// pirmų vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.
a = "Johnny";
b = "Depp";
console.log(a + " " + b);
let inicialai = a[0] + b[0];
console.log(inicialai);

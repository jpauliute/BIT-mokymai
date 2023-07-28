let x = 10;

x += 20;

console.log(typeof x);

x += "Labas";

console.log(x);

console.log(typeof x);

x = x * 2;

console.log(x);

// Tikrinims ar tai nera skaicius
console.log(isNaN(x));

x = 30;

// Kondicine logika

if (x === 10) {
  console.log("Skaičius yra lygus dešimt");
} else {
  if (x === 30) {
    console.log("Skaičius yra trisdešimt");
  } else {
    console.log("Skaicius nera nei desimt nei trisdesimt");
  }
}
//*If kondicijoje galime priskirti reiksme kintamajam. Viena lygybe nera
// sulyginimas
// if ((x = 50)) {
//   console.log("Skaicius yra lygus penkiasdesimt");
// }
// console.log(x);

x = "10";

// Du lygybes zenklai nurodo duomens tipo netikrinima

if (x == 10) {
  console.log("Netikrinant duomens tipo reikšmė yra dešimt");
}

x = "Labas";
// case sensitive - didziosios ir mazosios raides skiriasi

if (x === "Labas") {
  console.log("Stringas atitiko stringa");
} else {
  console.log("Stringas neatitiko stringo");
}

x = false;

// if (x === true) {
//   //Kazkas
// } else {
//   console.log("Veiksmas ivyko");
// }
// ! - simbolizuoja bang operatoriu

if (x != true) {
  console.log("Veiksmas ivyko");
}

x = true;
// Undefined;
// Null;
// Boolean;

if (x) {
  console.log("X reiksme yra teigiama");
}
if (!x) {
  console.log("Reiksme yra neigiama");
}

x = "Labas";

// Stringo ilgio tikrinimas
console.log(x.length);

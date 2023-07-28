function riebusPienas() {
  let vardas = "Šrekasiukas";
  let pavarde = "Žaliasis";
  if (vardas.length > pavarde.length) {
    console.log(pavarde);
  } else {
    console.log(vardas);
  }

  let manoVardas = "Jovita";
  let manoPavarde = "Pauliute";
  let gimimoMetai = 1993;
  let sieMetai = 2023;
  let metuSkaicius = sieMetai - gimimoMetai;
  console.log(
    "Aš esu " +
      manoVardas +
      " " +
      manoPavarde +
      ". Man yra " +
      metuSkaicius +
      " metai(ų)."
  );
  let file = "Sushiukas";
  let life = "Katinas";
  let rezultatas =
    file[file.length - 3] +
    file[file.length - 2] +
    file[file.length - 1] +
    life[life.length - 3] +
    life[life.length - 2] +
    life[life.length - 1];
  console.log(rezultatas);
  let ketvirtaUzduotis = "Once upon a time in hollywood";
  ketvirtaUzduotis = ketvirtaUzduotis.replaceAll("o", "*");
  ketvirtaUzduotis = ketvirtaUzduotis.replaceAll("O", "*");
  console.log(ketvirtaUzduotis);

  let x = rand(0, 2);
  let y = rand(0, 2);
  let z = rand(0, 2);
  let w = rand(0, 2);
  let allZero = 0;
  let allOne = 0;
  let allTwo = 0;
  if (x === 0) {
    allZero++;
  } else if (x === 1) {
    allOne++;
  } else {
    allTwo++;
  }
  if (y === 0) {
    allZero++;
  } else if (y === 1) {
    allOne++;
  } else {
    allTwo++;
  }
  if (z === 0) {
    allZero++;
  } else if (z === 1) {
    allOne++;
  } else {
    allTwo++;
  }
  if (w === 0) {
    allZero++;
  } else if (w === 1) {
    allOne++;
  } else {
    allTwo++;
  }
  let statZero = `Is viso sugeneruoti nuliai: ${allZero}`;
  let statOne = `Is viso sugeneruoti vienetai: ${allOne}`;
  let statTwo = `Is viso sugeneruoti dvejetai: ${allTwo}`;
  console.log(statZero);
  console.log(statOne);
  console.log(statTwo);
  let a = rand(0, 4);
  let b = rand(0, 4);
  console.log(a);
  console.log(b);
  let result = Math.max(a, b) / Math.min(a, b);
  console.log(result.toFixed(2));

  let c = rand(0, 25);
  let d = rand(0, 25);
  let e = rand(0, 25);
  console.log(c);
  console.log(d);
  console.log(e);
  let maxReiksme = Math.max(c, d, e);
  let minReiksme = Math.min(c, d, e);
  if (maxReiksme !== c && minReiksme !== c) {
    console.log(`C reiksme yra:` + c);
  }
  if (maxReiksme !== d && minReiksme !== d) {
    console.log(`D reiksme yra:` + d);
  }
  if (maxReiksme !== e && minReiksme !== e) {
    console.log(`E reiksme yra:` + e);
  }
  let name = "Johny";
  let lastName = "Bepp";
  let resultatas = name[0] + lastName[0];
  console.log(resultatas);
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let pirmasSkaitmuo = rand(0);
}
function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

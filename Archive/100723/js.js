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
}

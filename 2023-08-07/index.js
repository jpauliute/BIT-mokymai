//------------------------------------VARIABLES-----------------------------------------

const form = document.getElementById("form");
const result = document.getElementById("result");
const drinkLayout = document.querySelector(".drinkLayout");
const info = document.querySelector(".info");
const close = document.querySelector(".bi-x-circle-fill");
let ingredients;
let ingredientData;
let value;
let alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
//------------------------------------------------------------------
//    localStorage duomenu paemimas
// let data = localStorage.getItem('data'); //null

//    duomenu konvertavimas is json formato
// data = JSON.parse(data);

//     masyvo papildymas
// data[data.length] = task;

//     duomenu uzsifravimas
//     duomenu issaugojimas localStorage
// localStorage.setItem('data', JSON.stringify(data));

// ------------------------------------GET COCTAIL BY NAME-----------------------------------

function getData(e) {
  fading();
  e.preventDefault();
  let value = document.getElementById("search").value;

  fetchData("search", `s=${value}`).then((data) => {
    if (!data.drinks)
      return (result.innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
        <strong>Pagal nurodytą užklausą gėrimo rasti nepavyko  !</strong>
      </div>`);
    localStorage.setItem("key", JSON.stringify(data));
    showData(data);
  });

  form.reset();
  fetchData("filter", `i=${value}`);
}

//-------------------------------FUNCTION GET DRINK WITH DETAILS------------------------------------------

function getDrink(e, id) {
  visibleOn();

  fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id)
    .then((resp) => resp.json())
    .then((data) => {
      data = data.drinks[0];
      ingredientsLoop(data);

      drinkLayout.innerHTML = ` <h1 class="mt-2 text-white" style="text-align: center">${data.strDrink}</h1>
                      <h4 class="mt-4">Details: </h4>
                      <div class="mt-2 "><a href="#" onclick="filterAlco(event)">${data.strAlcoholic}</a> , <a href="#" onclick="filterCategory(event)">${data.strCategory}</a> , <a href="" onclick="filterGlass(event)">${data.strGlass}</a> </div>
                      <h4 class="mt-2">Ingredients: </h4>
                      <ul class="mt-2" >${ingredients}</ul>
                      <h4 class="mt-2">Preparation: </h4>
                      <p class="mt-2">${data.strInstructions}</p>`;
    });
}

//--------------------------------------FUNCTION INGREDIENTS LOOP------------------------------------------

function ingredientsLoop(data) {
  ingredients = "";

  for (let i = 1; i <= 15; i++) {
    if (data["strIngredient" + i])
      ingredients += `<li> <a href="#" onclick="getIngrediens(event)">${
        data["strIngredient" + i]
      }</a> ${data["strMeasure" + i] ? data["strMeasure" + i] : ""}</li>`;
  }
}
//--------------------------------------FUNCTION GET INGREDIENTS-------------------------------------------

function getIngrediens(e) {
  value = e.target.innerText;

  fetchData("filter", `i=${value}`).then((data) => {
    localStorage.setItem("key", JSON.stringify(data));
    showDrinksInfo(data);
  });

  fading();
}

//-------------------------------------FUNCTION GET RANDOM COCTAIL----------------------------------------

function randomCoctail(e) {
  console.log("ranodm", e);
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
    .then((resp) => resp.json())
    .then((data) => {
      localStorage.setItem("key", JSON.stringify(data));
      showData(data);
    });
}

//-----------------------------------------FUNCTION LETTERS-----------------------------------------------
function showLetter() {
  const letters = document.querySelector(".alphabet");
  for (const i in alphabet) {
    letters.innerHTML += `<a href="#" class="link-underline link-underline-opacity-0 text-info" onclick="filterByLetter(event)">${alphabet[
      i
    ].replace("", " ")}</a>`;
  }
}
showLetter();

//-----------------------------------------FILTER BY LETTERS----------------------------------------------

function filterByLetter(e) {
  value = e.target.innerText;
  fetchData("search", `f=${value}`).then((data) => {
    for (const i in data.drinks) {
      localStorage.setItem("key", JSON.stringify(data));
      showData(data);
    }
  });
}

//---------------------------- FUNCTIONS FILTERING BY ALCO CATEGORY AND GLASS ----------------------------
function filterAlco(e) {
  fading();
  value = e.target.innerHTML;

  fetchData("filter", `a=${value}`).then((data) => {
    localStorage.setItem("key", JSON.stringify(data));
    showDrinksInfo(data);
  });
}

function filterCategory(e) {
  fading();
  e.preventDefault();
  value = e.target.innerHTML;
  fetchData("filter", `c=${value}`).then((data) => {
    localStorage.setItem("key", JSON.stringify(data));
    showDrinksInfo(data);
  });
}

function filterGlass(e) {
  fading();
  e.preventDefault();
  value = e.target.innerHTML;
  fetchData("filter", `g=${value}`).then((data) => {
    localStorage.setItem("key", JSON.stringify(data));
    showDrinksInfo(data);
  });
}

// --------------------------------------- SHOW DRINKS(DATA) ---------------------------------------------
function showData(data) {
  let html = `<div class="row justify-content-center text center">`;

  data.drinks.map((data) => {
    html += `<div class="col-4">
                              <a href="#" onclick="getDrink(event, ${data.idDrink})" class="text-decoration-none">
                                  <img src="${data.strDrinkThumb}" alt="${data.strDrink}" />
                                  <h3 class="text-center text-dark ">${data.strDrink}</h3>
                              </a>
                          </div>`;
  });

  html += `</div>`;

  result.innerHTML = html;
}
//----------------------------------------SHOW DRINK'S INFO------------------------------------------------
function showDrinksInfo(data) {
  let html = `<div class="row"><h2 class="my-5" style="text-align: center">Drinks filtered by: ${value.toLowerCase()}</h2>`;
  for (const value in data.drinks) {
    const alcoDrinks = data.drinks[value];

    alcoDrinks.innerHTML = html += `<div class="col-4">
                                          <a href="#" onclick="getDrink(event, ${alcoDrinks.idDrink})" class="text-decoration-none">
                                              <img src="${alcoDrinks.strDrinkThumb}" alt="${alcoDrinks.strDrink}" />
                                              <h3>${alcoDrinks.strDrink}</h3>
                                          </a>
                                      </div>`;
  }
  html += `</div>`;

  result.innerHTML = html;
}
//----------------------------------------GET LOCAL STORAGE-----------------------------------------------

getLocalStorageData();

function getLocalStorageData() {
  let data = localStorage.getItem("key"); // istraukiama data yra objektas stringo formatu.

  if (!data)
    return (document.getElementById(
      "result"
    ).innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
        <strong>Pasirink savo gėrimą !</strong>
      </div>`); //Atvaizduojame žinutę

  data = JSON.parse(data); // is stringo kovertuoja i JSONa.
  showData(data);
}

//-------------------------------  ------------ FETCH ------------------------------------------------
async function fetchData(path, queryParam) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/${path}.php?${queryParam}`;
  const resp = await fetch(url);
  return await resp.json();
}

//--------------------------------------------CLOSE EVENT-------------------------------------------------

close.addEventListener("click", (e) => {
  console.log("info", e);
  fading();
});

//--------------------------------------FUNCTION FADING IN/OUT INFO TAB-----------------------------------

function fading() {
  close.style.visibility = "hidden";
  info.style.visibility = "hidden";
  result.style.opacity = "100%";
  form.style.opacity = "100%";
}

function visibleOn() {
  form.style.opacity = "30%";
  result.style.opacity = "30%";
  info.style.visibility = "visible";
  close.style.visibility = "visible";
}
//--------------------------------------------CLOSE DRINKS INFO-------------------------------------------
// Check links ! (https://)
//           www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic
// www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic

// Filter by Category
// www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink
// www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail

// Filter by Glass
// www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass
// www.thecocktaildb.com/api/json/v1/1/filter.php?g=Champagne_flute

//--------------------------------------------

// //NALOGA 1)

for (let i = 1; i <= 100; i++)
  //znak za odstotenk simbolizira ostanek
  //ko se števili 3 in 5, deli z indexom, je ostanek 0
  //večkratniki števila 15, so prav tako večkratniki števil 3 in 5
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("Trojka in Petka");
  } else if (i % 5 === 0) {
    console.log("Petka");
  } else if (i % 3 === 0) {
    console.log("Trojka");
  } else {
    console.log(i);
  }

//NALOGA 2)

(function () {
  length = 20;
  //index sem deklariral z let, namesto z var, ker želim da je index "block scoped" namesto "global scoped"
  // prav tako je deklariran znotraj oklepaja namesto znotraj funkcije
  //znak "<" sem zamenjal z "<=", da se iteracija ponovi še enkrat tudi, ko pride index do 19
  for (let index = 0; index <= this.length; index++) {
    setTimeout(function () {
      console.log(index);
      //200 milisekund sem pomnožil z indexom, ker želim da se index izpiše na vsake 0.2 sekundi
    }, 200 * index);
  }
})();

//NALOGA 3)

//navigator.userAgent vrne vrednost "user-agent" teksta, ki ga browser pošlje serverju
//notri je specificirano ime in pa verzija browserja
const userAgent = window.navigator.userAgent;
//spodnja funkcija poišče specifično verzijo IE browserja
const msie = userAgent.indexOf("MSIE ");
//opozorilo se izpiše samo, če je verzija IE browserja znotraj userAgent-a enaka 7
if (msie === 7) {
  (function () {
    alert("Hello World");
  })();
}

// NALOGA 4)

//znotraj funkcije sem dodal "return this", ki returna cel object
var object = {
  alert: function (txt) {
    alert(txt);
    return this;
  },
  confirm: function (txt) {
    confirm(txt);
    return this;
  },
};

object
  .alert("Warning: you are about to delete this item!")
  .confirm("Are you sure?");

// NALOGA 5)

// ker ima vsak onMouseMove event, notraj vsakega diva, svoje koordinate, sem za vsakega napisal svojo funkcijo.

function getCoords(e) {
  let bounds = e.currentTarget.getBoundingClientRect();
  let x = e.clientX - bounds.left;
  let y = e.clientY - bounds.top;

  let coo = "Coordinates are: (" + x + "," + y + ")";
  document.getElementById("title").innerHTML = coo;
}

function clearCoordinates() {
  document.getElementById("title").innerHTML = "div1";
}

function getCoordsTwo(e) {
  let bounds = e.currentTarget.getBoundingClientRect();
  let x = e.clientX - bounds.left;
  let y = e.clientY - bounds.top;
  let coo = "Coordinates are: (" + x + "," + y + ")";
  document.getElementById("titleTwo").innerHTML = coo;
}

function clearCoordinatesTwo() {
  document.getElementById("titleTwo").innerHTML = "div2";
}

function getCoordsThree(e) {
  let bounds = e.currentTarget.getBoundingClientRect();
  let x = e.clientX - bounds.left;
  let y = e.clientY - bounds.top;
  let coo = "Coordinates are: (" + x + "," + y + ")";
  document.getElementById("titleThree").innerHTML = coo;
}

function clearCoordinatesThree() {
  document.getElementById("titleThree").innerHTML = "div3";
}

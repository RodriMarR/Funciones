const Azul = document.getElementById("Azul");
const Rojo = document.getElementById("Rojo");
const Verde = document.getElementById("Verde");
const Amarillo = document.getElementById("Amarillo");
const keyDiv = document.getElementById("key");



function setStyles() {
    setDefaultStyle(Azul);
    Azul.style.backgroundColor = "blue";
  
    setDefaultStyle(Rojo);
    Rojo.style.backgroundColor = "red";
  
    setDefaultStyle(Verde);
    Verde.style.backgroundColor = "green";
  
    setDefaultStyle(Amarillo);
    Amarillo.style.backgroundColor = "yellow";
  
    setDefaultStyle(keyDiv);
    changeColor(keyDiv, "white");
    keyDiv.style.border = "2px solid black";
  }
  


  document.addEventListener("DOMContentLoaded", function () {
    setStyles();
  });
  
  Azul.addEventListener("click", function () {
    changeColor(Azul, "black");
  });
  Rojo.addEventListener("click", function () {
    changeColor(Rojo, "black");
  });
  Verde.addEventListener("click", function () {
    changeColor(Verde, "black");
  });
  Amarillo.addEventListener("click", function () {
    changeColor(Amarillo, "black");
  });
  
  

  
  let color;
  
  document.addEventListener("keydown", function (event) {

    if (event.key === "a") {
      color = "pink";
      changeColor(keyDiv, color);
    } else if (event.key === "s") {
      color = "orange";
      changeColor(keyDiv, color);
    } else if (event.key === "d") {
      color = "lightblue";
      changeColor(keyDiv, color);
    } else if (event.key === "q") {

      color = "purple";
      createElement(color);
    } else if (event.key === "w") {
      color = "grey";
      createElement(color);
    } else if (event.key === "e") {
      color = "brown";
      createElement(color);
    }
  });
  
  function changeColor(element, color) {
    element.style.backgroundColor = color;
  }
  
  //REQUERIMIENTO 3, ejercicio 3
  function createElement(color) {
    const newDiv = document.createElement("div");
    setDefaultStyle(newDiv);
    newDiv.style.backgroundColor = color;
    newDiv.style.border = "2px solid black";
    document.body.appendChild(newDiv);
  }
  
  function setDefaultStyle(element) {
    element.style.width = "200px";
    element.style.height = "200px";
  }
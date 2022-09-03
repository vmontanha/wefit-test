
//Menu

let menuGroupBtn = document.querySelectorAll(".btn-group-vertical")[0];
let buttonMenu = document.querySelectorAll(".btn.btn-secondary");


menuGroupBtn.style.flexDirection = "row";
menuGroupBtn.style.width = "auto";

for (var i = 0; i < buttonMenu.length; i += 1) {
          buttonMenu[i].style.width = "auto";
          buttonMenu[i].style.marginRight = "5px";
          buttonMenu[i].style.borderRadius = "5px";
}

//Header 

let headerBackGround = document.querySelectorAll(".jumbotron")[0];
let color = document.querySelectorAll(".jumbotron")[0];
let link = document.querySelector(".jumbotron a");

headerBackGround.style.background = "#6C757D";
headerBackGround.style.textAlign = "right";
color.style.color = "#fff";

link.className = "btn btn-success btn-lg"


//Cards

var css = '.btn-primary:hover{ background-color: #28A745; border: none}';
var style = document.createElement('style');
buttonCards = document.querySelectorAll('.card a');

if (style.styleSheet) {
          style.styleSheet.cssText = css;
} else {
          style.appendChild(document.createTextNode(css));
}
document.getElementsByTagName('head')[0].appendChild(style);


//Lista

let listaQuarto = document.createElement("li");
let textoQuarto = document.createTextNode("Quarto item");

let listaQuinto = document.createElement("li");
let textoQuinto = document.createTextNode("Quinto item");

let primeiroItem = document.querySelector(".list-group-item")

primeiroItem.className = "list-group-item"

listaQuarto.className = "list-group-item active"
listaQuarto.appendChild(textoQuarto);
listaQuinto.className = "list-group-item"
listaQuinto.appendChild(textoQuinto);

let elementHtml = document.querySelector("ul");
elementHtml.appendChild(listaQuarto);

let elementHtmlLast = document.querySelector("ul");
elementHtml.appendChild(listaQuinto);


/* Código para icone do navbar */
function navbarIcon() {
    var x = document.getElementById("navbar");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}
/* Código para fixar navbar no topo da tela após scroll */
window.onscroll = function() {scroll()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function scroll() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

/* Função dos botões do menu */
function allProjects() {
  document.getElementById("Simon the Game - Python").style.display = "grid";
  document.getElementById("Base Giratória Cubo Mágico - Arduino e Cmaismais").style.display = "grid";
  document.getElementById("Guess the Number - Python").style.display = "grid";
  document.getElementById("Teclado Virtual - JavaScript").style.display = "grid";
  document.getElementById("Jogo da Velha - Python").style.display = "grid";
  document.getElementById("Event Key - HTML CSS JavaScript").style.display = "grid";
  document.getElementById("Grafico de Barras - Python").style.display = "grid";
  document.getElementById("CSS Animation 1").style.display = "grid";
  document.getElementById("Tabuada - Java").style.display = "grid";
  document.getElementById("Playlist VBA").style.display = "grid";
}
function python() {
  document.getElementById("Simon the Game - Python").style.display = "grid";
  document.getElementById("Base Giratória Cubo Mágico - Arduino e Cmaismais").style.display = "none";
  document.getElementById("Guess the Number - Python").style.display = "grid";
  document.getElementById("Teclado Virtual - JavaScript").style.display = "none";
  document.getElementById("Jogo da Velha - Python").style.display = "grid";
  document.getElementById("Event Key - HTML CSS JavaScript").style.display = "none";
  document.getElementById("Grafico de Barras - Python").style.display = "grid";
  document.getElementById("CSS Animation 1").style.display = "none";
  document.getElementById("Tabuada - Java").style.display = "none";
  document.getElementById("Playlist VBA").style.display = "none";
}
function html() {
  document.getElementById("Simon the Game - Python").style.display = "none";
  document.getElementById("Base Giratória Cubo Mágico - Arduino e Cmaismais").style.display = "none";
  document.getElementById("Guess the Number - Python").style.display = "none";
  document.getElementById("Teclado Virtual - JavaScript").style.display = "grid";
  document.getElementById("Jogo da Velha - Python").style.display = "none";
  document.getElementById("Event Key - HTML CSS JavaScript").style.display = "grid";
  document.getElementById("Grafico de Barras - Python").style.display = "none";
  document.getElementById("CSS Animation 1").style.display = "grid";
  document.getElementById("Tabuada - Java").style.display = "none";
  document.getElementById("Playlist VBA").style.display = "none";
}
function css() {
  document.getElementById("Simon the Game - Python").style.display = "none";
  document.getElementById("Base Giratória Cubo Mágico - Arduino e Cmaismais").style.display = "none";
  document.getElementById("Guess the Number - Python").style.display = "none";
  document.getElementById("Teclado Virtual - JavaScript").style.display = "grid";
  document.getElementById("Jogo da Velha - Python").style.display = "none";
  document.getElementById("Event Key - HTML CSS JavaScript").style.display = "grid";
  document.getElementById("Grafico de Barras - Python").style.display = "none";
  document.getElementById("CSS Animation 1").style.display = "grid";
  document.getElementById("Tabuada - Java").style.display = "none";
  document.getElementById("Playlist VBA").style.display = "none";
}
function java() {
  document.getElementById("Simon the Game - Python").style.display = "none";
  document.getElementById("Base Giratória Cubo Mágico - Arduino e Cmaismais").style.display = "none";
  document.getElementById("Guess the Number - Python").style.display = "none";
  document.getElementById("Teclado Virtual - JavaScript").style.display = "none";
  document.getElementById("Jogo da Velha - Python").style.display = "none";
  document.getElementById("Event Key - HTML CSS JavaScript").style.display = "none";
  document.getElementById("Grafico de Barras - Python").style.display = "none";
  document.getElementById("CSS Animation 1").style.display = "none";
  document.getElementById("Tabuada - Java").style.display = "grid";
  document.getElementById("Playlist VBA").style.display = "none";
}
function javascript() {
  document.getElementById("Simon the Game - Python").style.display = "none";
  document.getElementById("Base Giratória Cubo Mágico - Arduino e Cmaismais").style.display = "none";
  document.getElementById("Guess the Number - Python").style.display = "none";
  document.getElementById("Teclado Virtual - JavaScript").style.display = "grid";
  document.getElementById("Jogo da Velha - Python").style.display = "none";
  document.getElementById("Event Key - HTML CSS JavaScript").style.display = "grid";
  document.getElementById("Grafico de Barras - Python").style.display = "none";
  document.getElementById("CSS Animation 1").style.display = "grid";
  document.getElementById("Tabuada - Java").style.display = "none";
  document.getElementById("Playlist VBA").style.display = "none";
}
function cmaismais() {
  document.getElementById("Simon the Game - Python").style.display = "none";
  document.getElementById("Base Giratória Cubo Mágico - Arduino e Cmaismais").style.display = "grid";
  document.getElementById("Guess the Number - Python").style.display = "none";
  document.getElementById("Teclado Virtual - JavaScript").style.display = "none";
  document.getElementById("Jogo da Velha - Python").style.display = "none";
  document.getElementById("Event Key - HTML CSS JavaScript").style.display = "none";
  document.getElementById("Grafico de Barras - Python").style.display = "none";
  document.getElementById("CSS Animation 1").style.display = "none";
  document.getElementById("Tabuada - Java").style.display = "none";
  document.getElementById("Playlist VBA").style.display = "none";
}
function vba() {
  document.getElementById("Simon the Game - Python").style.display = "none";
  document.getElementById("Base Giratória Cubo Mágico - Arduino e Cmaismais").style.display = "none";
  document.getElementById("Guess the Number - Python").style.display = "none";
  document.getElementById("Teclado Virtual - JavaScript").style.display = "none";
  document.getElementById("Jogo da Velha - Python").style.display = "none";
  document.getElementById("Event Key - HTML CSS JavaScript").style.display = "none";
  document.getElementById("Grafico de Barras - Python").style.display = "none";
  document.getElementById("CSS Animation 1").style.display = "none";
  document.getElementById("Tabuada - Java").style.display = "none";
  document.getElementById("Playlist VBA").style.display = "grid";
}
function arduino() {
  document.getElementById("Simon the Game - Python").style.display = "none";
  document.getElementById("Base Giratória Cubo Mágico - Arduino e Cmaismais").style.display = "grid";
  document.getElementById("Guess the Number - Python").style.display = "none";
  document.getElementById("Teclado Virtual - JavaScript").style.display = "none";
  document.getElementById("Jogo da Velha - Python").style.display = "none";
  document.getElementById("Event Key - HTML CSS JavaScript").style.display = "none";
  document.getElementById("Grafico de Barras - Python").style.display = "none";
  document.getElementById("CSS Animation 1").style.display = "none";
  document.getElementById("Tabuada - Java").style.display = "none";
  document.getElementById("Playlist VBA").style.display = "none";
}
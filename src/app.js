import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  const generarCarta = () => {

    const palos = [
        { simbolo: "♥", clase: "heart" },
        { simbolo: "♦", clase: "diamond" },
        { simbolo: "♠", clase: "spade" },
        { simbolo: "♣", clase: "club" }
      ];

      const valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

      const paloAleatorio = palos[Math.floor(Math.random() * palos.length)];
      const valorAleatorio = valores[Math.floor(Math.random() * valores.length)];

      const carta = document.getElementById("carta");
      const simboloArriba = document.getElementById("simbolo-arriba");
      const simboloAbajo = document.getElementById("simbolo-abajo");
      const numero = document.getElementById("numero-carta");

      simboloArriba.textContent = paloAleatorio.simbolo;
      simboloAbajo.textContent = paloAleatorio.simbolo;
      numero.textContent = valorAleatorio;

      carta.classList.remove("heart", "diamond", "spade", "club");
      carta.classList.add(paloAleatorio.clase);
      console.log(`🂠 Carta generada: ${valorAleatorio} de ${paloAleatorio.simbolo}`);
      
  }
       generarCarta();
};

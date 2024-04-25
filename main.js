const botoes = document.querySelectorAAL(".botao");
console.log(botoes);

for(i=0;i <botoes.length;i++){
    botoes[i].onclick = function(){
     
     for(let j=0;j<botoes.length;j++){
        botoes[j].classlist.remover("ativo");

     }
       
     botoes[i].classlist.add("ativo");
    }}

    const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

botoes[i].classList.add("ativo");
textos[i].classList.add("ativo");

botoes[j].classList.remove("ativo");
textos[j].classList.remove("ativo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    
        const contadores = document.querySelectorAll(".contador");

        contadores[0].textContent = "Contagem regressiva";

        const tempoObjetivo1 = new Date("2024-10-05");

contadores[0].textContent = tempoObjetivo1;

const tempoObjetivo1 = new Date("2023-10-05T00:00:00");
let tempoAtual = new Date();
for (let i=-1 ; i<5; i++){
    console.log(i);
  }
  const botao = document.querySelectorAll(".botao");
  `__________________________________`
  for (let i=0;i<botao.length;i++){
   `__________________`
      if(i==0){
          fundo.classList.remove("fundo-branco");
          fundo.classList.add("fundo-preto");
      } else{
        fundo.classList.remove("fundo-preto");
       `__________________`
      }  }  }
      const contadores = document.querySelectorAll(".contador");
      const tempoObjetivo1 = new Date("2023-08-18T15:37:07");
      
      contadores[0].textContent = tempoObjetivo1;
      const contadores = document.querySelectorAll(".contador");
      const tempoObjetivo1 = new Date("2023-08-18T15:37:07")
      
      let tempo = tempoObjetivo1.getTime();
      
      contadores[0].textContent = tempo;

      const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2023-08-18T15:37:07")

let tempo = tempoObjetivo1.getDate();

contadores[0].textContent = tempo;

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2023-08-18T15:37:07")

let tempo = tempoObjetivo1.getMonth();

contadores[0].textContent = tempo;
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2023-08-18T15:37:07")

let tempo = tempoObjetivo1.getFullYear();

contadores[0].textContent = tempo;
function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;

    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos";

                
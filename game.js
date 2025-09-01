const items = [
  { name: "Cuia", correct: true, order: 1, img: "imagens/cuia.png" },
  { name: "Erva", correct: true, order: 2, img: "imagens/erva.png" },
  { name: "Bomba", correct: true, order: 3, img: "imagens/bomba.png" },
  { name: "Água Quente", correct: true, order: 4, img: "imagens/agua.png" },
  { name: "Leite", correct: false, img: "imagens/leite.png" },
  { name: "Açúcar", correct: false, img: "imagens/acucar.png" },
  { name: "Chá", correct: false, img: "imagens/cha.png" },
  { name: "Café", correct: false, img: "imagens/cafe.png" },
  { name: "Refrigerante", correct: false, img: "imagens/refri.png" },
  { name: "Canudo", correct: false, img: "imagens/canudo.png" },
  { name: "Suco", correct: false, img: "imagens/suco.png" },
  { name: "Cerveja", correct: false, img: "imagens/cerveja.png" },
  { name: "Leite Condensado", correct: false, img: "imagens/leite condensado.png" },
  { name: "Achocolatado", correct: false, img: "imagens/achocolatado.png" },
  { name: "Mel", correct: false, img: "imagens/mel.png" }
];

let currentStep = 1;
let fixedCards = [];
let timer;
let timeLeft = 90; // Tempo ajustado para 1:30
let playerName = "";
let startTime = 0;
let isClickable = true;

function shuffle(array

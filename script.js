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
  { name: "Leite Condensado", correct: false, img: "imagens/leite_condensado.png" },
  { name: "Achocolatado", correct: false, img: "imagens/achocolatado.png" },
  { name: "Mel", correct: false, img: "imagens/mel.png" }
];

let currentStep = 1;
let fixedCards = [];
let timer;
let timeLeft = 60;
let playerName = "";
let startTime = 0;
let isClickable = true;

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function renderCards() {
  const container = document.getElementById("cards");
  const fixedContainer = document.getElementById("fixed-cards");
  container.innerHTML = "";
  fixedContainer.innerHTML = "";

  const remaining = shuffle(items.filter(i => !fixedCards.includes(i)));
  remaining.forEach(item => container.appendChild(createCard(item, false)));
  fixedCards.forEach(item => fixedContainer.appendChild(createCard(item, true)));
}

function createCard(item, revealed) {
  const card = document.createElement("div");
  card.classList.add("card");
  if (revealed) card.classList.add("revealed");
  card.dataset.name = item.name;
  card.dataset.correct = item.correct;
  card.dataset.order = item.order || 0;

  card.innerHTML = `
    <div class="card-inner">
      <div class="card-back"></div>
      <div class="card-front"><img src="${item.img}" alt="${item.name}"></div>
    </div>
  `;

  if (!revealed) {
    card.addEventListener("click", () => revealCard(card));
  }

  return card;
}

function revealCard(card) {
  if (!isClickable || card.classList.contains("revealed")) return;
  isClickable = false;
  card.classList.add("revealed");

  const name = card.dataset.name;
  const correct = card.dataset.correct === "true";
  const order = Number(card.dataset.order || 0);
  const feedback = document.getElementById("feedback");

  if (correct && order === currentStep) {
    feedback.innerText = `Bahh, acertou! ${name} era o passo certo.`;
    fixedCards.push(items.find(i => i.name === name));
    currentStep++;
    updateProgress();
    setTimeout(() => {
      if (currentStep > 4) finishGame(false);
      else {
        renderCards();
        isClickable = true;
      }
    }, 500);
  } else if (correct && order !== currentStep) {
    feedback.innerText = "Hmmmm, quase lá, é o próximo!";
    setTimeout(() => {
      card.classList.remove("revealed");
      isClickable = true;
    }, 1000);
  } else {
    feedback.innerText = "Esse não entra no chimarrão, tente outro!";
    setTimeout(() => {
      card.classList.remove("revealed");
      renderCards();
      isClickable = true;
    }, 1000);
  }
}

function updateProgress() {
  const progressBar = document.getElementById("progress-bar");
  const percent = (fixedCards.length / 4) * 100;
  if (window.innerWidth >= 900) {
    progressBar.style.height = `${percent}%`;
  } else {
    progressBar.style.width = `${percent}%`;
  }
}

function startTimer() {
  startTime = Date.now();
  const timerEl = document.getElementById("timer");
  timerEl.innerText = `Tempo restante: ${timeLeft}s`;

  timer = setInterval(() => {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    timeLeft = Math.max(60 - elapsed, 0);
    timerEl.innerText = `Tempo restante: ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(timer);
      finishGame(true);
    }
  }, 1000);
}

function finishGame(timeOut) {
  clearInterval(timer);
  const elapsedTime = 60 - timeLeft;
  if (!playerName) playerName = "Anônimo";

  localStorage.setItem("lastPlayer", JSON.stringify({ name: playerName, time: elapsedTime, steps: fixedCards.length }));
  window.location.href = "game.html";
}

// Inicialização
window.onload = () => {
  playerName = localStorage.getItem("playerName") || prompt("Bah guri(a), me diga seu nome?") || "Anônimo";
  localStorage.setItem("playerName", playerName);

  renderCards();
  startTimer();
};

window.onresize = () => updateProgress();

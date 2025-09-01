window.onload = () => {
  const playerName = localStorage.getItem("playerName") || "Jogador";
  const playerTime = localStorage.getItem("playerTime") || "0";
  const gameCompleted = localStorage.getItem("gameCompleted") === "true";

  const titleEl = document.getElementById("final-title");
  const msgEl = document.getElementById("instagram-msg");
  const playerMsg = document.getElementById("player-msg");

  if (!gameCompleted) {
    // Quando não completar
    titleEl.innerText = `Que pena, ${playerName}!`;
    playerMsg.innerText = `Tchê! Não desanima, tente novamente! ⏱ ${playerTime}s`;
    msgEl.style.display = "none"; // esconde o Instagram
  } else {
    // Quando completar
    titleEl.innerText = `Parabéns, ${playerName}!`;
    playerMsg.innerText = `Você completou o jogo em ${playerTime}s!`;
    msgEl.style.display = "block";
  }

  document.getElementById("play-again").addEventListener("click", () => {
    window.location.href = "index.html";
  });
};

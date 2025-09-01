window.onload = () => {
  // Recupera nome e tempo do jogador do localStorage
  const playerName = localStorage.getItem("playerName") || "Jogador";
  const playerTime = localStorage.getItem("playerTime") || "0";

  // Atualiza HTML
  document.getElementById("player-name").innerText = playerName;
  document.getElementById("player-time").innerText = playerTime + "s";

  // Botão para reiniciar o jogo
  document.getElementById("play-again").addEventListener("click", () => {
    window.location.href = "index.html";
  });
};


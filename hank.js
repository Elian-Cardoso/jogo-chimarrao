window.onload = () => {
  const lastPlayerInfo = document.getElementById("last-player-info");
  const topRanking = document.getElementById("top-ranking");

  // Mostrar último jogador
  const lastScore = JSON.parse(localStorage.getItem("lastScore"));
  if (lastScore) {
    lastPlayerInfo.innerText = `${lastScore.name} completou ${lastScore.steps} passo(s) em ${lastScore.time}s ${lastScore.timeout ? "(tempo esgotado)" : ""}`;
  } else {
    lastPlayerInfo.innerText = "Nenhum jogo registrado ainda.";
  }

  // Top 3 jogadores
  const ranking = JSON.parse(localStorage.getItem("ranking")) || [];
  topRanking.innerHTML = ranking.slice(0,3).map((r, i) => `<li>${i+1}. ${r.name} - ${r.time}s</li>`).join("");

  // Jogar novamente
  document.getElementById("play-again").addEventListener("click", () => {
    window.location.href = "index.html";
  });
};

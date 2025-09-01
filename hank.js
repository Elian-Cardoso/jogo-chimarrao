window.onload = () => {
  const rankingList = document.getElementById("ranking-list");
  const ranking = JSON.parse(localStorage.getItem("ranking")) || [];

  // Lista completa de jogadores, ordenada pelo tempo
  ranking.sort((a, b) => a.time - b.time);

  if (ranking.length === 0) rankingList.innerHTML = "<li>Nenhum jogador ainda!</li>";
  else rankingList.innerHTML = ranking
    .map((r, i) => `<li>${i + 1}. ${r.name} - ${r.time}s</li>`)
    .join("");

  // Mostrar o jogador atual em destaque
  const playerName = localStorage.getItem("playerName") || "Anônimo";
  document.getElementById("player-name").innerText = `Jogador: ${playerName}`;
};

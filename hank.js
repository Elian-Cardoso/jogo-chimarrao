// Carregar nome do jogador e ranking do localStorage
const playerName = localStorage.getItem("playerName") || "Anônimo";
const ranking = JSON.parse(localStorage.getItem("ranking")) || [];

document.getElementById("player-score").innerText = `Jogador: ${playerName}`;

// Mostrar ranking completo, não apenas 5
const rankingList = document.getElementById("ranking-list");
if (ranking.length === 0) {
  rankingList.innerHTML = "<li>Nenhum jogador ainda</li>";
} else {
  // Ordenar por tempo
  ranking.sort((a, b) => a.time - b.time);
  rankingList.innerHTML = ranking.map((r, i) => 
    `<li>${i + 1}. ${r.name} - ${r.time}s</li>`
  ).join("");
}

// Botão jogar novamente
document.getElementById("play-again").addEventListener("click", () => {
  window.location.href = "index.html";
});

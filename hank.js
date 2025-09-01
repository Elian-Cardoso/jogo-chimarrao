const playerName = localStorage.getItem("playerName") || "Anônimo";
const ranking = JSON.parse(localStorage.getItem("ranking")) || [];

const rankingList = document.getElementById("ranking-list");
document.getElementById("player-score").innerText = `Jogador: ${playerName}`;

if (ranking.length === 0) {
  rankingList.innerHTML = "<li>Nenhum jogador ainda</li>";
} else {
  ranking.sort((a,b) => a.time - b.time);
  rankingList.innerHTML = ranking.map((r,i) => 
    `<li>${i+1}. ${r.name} - ${r.time}s</li>`
  ).join("");
}

document.getElementById("play-again").addEventListener("click", () => {
  window.location.href = "index.html";
});

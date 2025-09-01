// Pegar ranking do localStorage
function loadRanking() {
  const rankingList = document.getElementById("ranking-list");
  const ranking = JSON.parse(localStorage.getItem("ranking")) || [];

  if(ranking.length === 0){
    rankingList.innerHTML = "<li>Nenhum jogador ainda</li>";
    return;
  }

  // Mostrar ranking
  rankingList.innerHTML = ranking
    .slice(0, 5)
    .map((r, i) => `<li>${i + 1}. ${r.name} - ${r.time}s</li>`)
    .join("");
}

// Botão de jogar novamente
document.getElementById("play-again").addEventListener("click", () => {
  window.location.href = "index.html"; // Volta para a tela inicial
});

// Inicialização
window.onload = () => {
  loadRanking();
};

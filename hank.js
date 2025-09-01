// Função para carregar ranking do localStorage
function loadRanking() {
  const rankingList = document.getElementById("ranking-list");
  const ranking = JSON.parse(localStorage.getItem("ranking")) || [];

  // Ordenar por tempo (menor tempo primeiro)
  ranking.sort((a, b) => a.time - b.time);

  // Pegar apenas os 5 melhores
  const top5 = ranking.slice(0, 5);

  // Renderizar na tela
  rankingList.innerHTML = top5
    .map((player, index) => `<li>${index + 1}. ${player.name} - ${player.time}s</li>`)
    .join("");
}

// Botão para reiniciar o jogo
document.getElementById("play-again").addEventListener("click", () => {
  window.location.href = "index.html";
});

// Inicializar
window.onload = () => {
  loadRanking();
};

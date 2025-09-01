// Hank.js – Exibe ranking completo
window.onload = () => {
  const rankingList = document.getElementById("ranking-list");
  let ranking = JSON.parse(localStorage.getItem("ranking")) || [];

  // Ordenar por menor tempo
  ranking.sort((a, b) => a.time - b.time);

  if (ranking.length === 0) {
    rankingList.innerHTML = "<li>Nenhum jogador ainda!</li>";
  } else {
    rankingList.innerHTML = ranking.map((r, i) => `<li>${i + 1}. ${r.name} - ${r.time}s</li>`).join("");
  }

  document.getElementById("back-game").addEventListener("click", () => {
    window.location.href = "index.html";
  });
};

window.onload = () => {
  const rankingList = document.getElementById("ranking-list");
  let ranking = JSON.parse(localStorage.getItem("ranking")) || [];

  // Ordena por menor tempo e mantém apenas os 5 melhores
  ranking.sort((a, b) => a.time - b.time);
  ranking = ranking.slice(0, 5);
  localStorage.setItem("ranking", JSON.stringify(ranking));

  // Mostra no HTML
  rankingList.innerHTML = ranking.map((r, i) => `<li>${i+1}. ${r.name} - ${r.time}s</li>`).join("");

  // Botão para reiniciar o jogo
  document.getElementById("play-again").addEventListener("click", () => {
    window.location.href = "index.html";
  });
};

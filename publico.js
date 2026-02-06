const temporada = JSON.parse(localStorage.getItem("temporada"));
const ranking = JSON.parse(localStorage.getItem("rankingTemporada")) || [];
const historico = JSON.parse(localStorage.getItem("historicoCopas")) || [];

function renderTemporada() {
  const box = document.getElementById("temporadaPublica");

  if (!temporada) {
    box.innerHTML = "<p>Nenhuma temporada ativa</p>";
    return;
  }

  box.innerHTML = `
    <h2>${temporada.nome}</h2>
    <p>📅 ${temporada.inicio} → ${temporada.fim}</p>
    <p>Status: ${temporada.ativa ? "🟢 Em andamento" : "🔴 Encerrada"}</p>
  `;
}

function renderRanking() {
  const ul = document.getElementById("rankingPublico");
  ul.innerHTML = "";

  [...ranking]
    .sort((a, b) => b.titulos - a.titulos || b.gols - a.gols)
    .forEach((j, i) => {
      ul.innerHTML += `
        <li>
          ${i + 1}º ${j.nome} — 🏆 ${j.titulos} | ⚽ ${j.gols}
        </li>
      `;
    });
}

function renderHistorico() {
  const ul = document.getElementById("historicoPublico");
  ul.innerHTML = "";

  historico.forEach(c => {
    ul.innerHTML += `
      <li>
        🏆 ${c.campeao} |
        ${c.jogadores} jogadores |
        ${c.data}
      </li>
    `;
  });
}

renderTemporada();
renderRanking();
renderHistorico();

let faseAtual = [];
let proximos = [];
let jogadoresCopa = 0;

/* ---------- TEMPORADA ---------- */

function criarTemporada() {
  const nome = nomeTemp.value;
  const inicio = inicioTemp.value;
  const fim = fimTemp.value;

  if (!nome || !inicio || !fim) return alert("Preencha tudo");

  rankingTemporada = jogadores.map(j => ({
    id: j.id,
    nome: j.nome,
    gols: 0,
    titulos: 0
  }));

  historicoCopas = [];

  temporada = { nome, inicio, fim, ativa: true };
  salvarTudo();
  renderTemporada();
  renderHistorico();
}

function finalizarTemporada() {
  temporada.ativa = false;
  salvarTudo();
  renderTemporada();
}

/* ---------- CAMPEONATO ---------- */

function iniciarCampeonato(qtd) {
  if (!temporada || !temporada.ativa) {
    alert("Nenhuma temporada ativa");
    return;
  }

  jogadoresCopa = qtd;
  faseAtual = jogadores.slice(0, qtd);
  gerarFase();
}

function nomeFase(qtd) {
  if (qtd === 16) return "Oitavas";
  if (qtd === 8) return "Quartas";
  if (qtd === 4) return "Semifinal";
  if (qtd === 2) return "Final";
}

function gerarFase() {
  mataMata.innerHTML = `<h2>${nomeFase(faseAtual.length)}</h2>`;
  proximos = [];

  for (let i = 0; i < faseAtual.length; i += 2) {
    const p1 = faseAtual[i];
    const p2 = faseAtual[i + 1];

    mataMata.innerHTML += `
      <div class="chave">
        <p>${p1.nome} <input id="g1-${i}" type="number" min="0"></p>
        <p>${p2.nome} <input id="g2-${i}" type="number" min="0"></p>
        <button onclick="definirVencedor(${i})">Confirmar</button>
      </div>
    `;
  }
}

function definirVencedor(i) {
  const g1 = +document.getElementById(`g1-${i}`).value;
  const g2 = +document.getElementById(`g2-${i}`).value;

  if (isNaN(g1) || isNaN(g2)) return;

  const p1 = faseAtual[i];
  const p2 = faseAtual[i + 1];

  p1.gols += g1;
  p2.gols += g2;

  rankingTemporada.find(j => j.id === p1.id).gols += g1;
  rankingTemporada.find(j => j.id === p2.id).gols += g2;

  proximos.push(g1 > g2 ? p1 : p2);

  if (proximos.length === faseAtual.length / 2) {
    faseAtual = proximos;

    if (faseAtual.length === 1) {
      faseAtual[0].titulos++;
      rankingTemporada.find(j => j.id === faseAtual[0].id).titulos++;

      historicoCopas.push({
        temporada: temporada.nome,
        jogadores: jogadoresCopa,
        campeao: faseAtual[0].nome,
        data: new Date().toLocaleDateString("pt-BR")
      });

      salvarTudo();
      renderRanking();
      renderHistorico();

      mataMata.innerHTML = `<h2>🏆 Campeão: ${faseAtual[0].nome}</h2>`;
    } else {
      gerarFase();
    }
  }
}

/* ---------- UI ---------- */

function renderTemporada() {
  temporadaBox.innerHTML = !temporada
    ? `
      <input id="nomeTemp" placeholder="Fevereiro 2026">
      <input id="inicioTemp" type="date">
      <input id="fimTemp" type="date">
      <button onclick="criarTemporada()">Iniciar Temporada</button>
    `
    : `
      <h3>${temporada.nome}</h3>
      <p>${temporada.inicio} → ${temporada.fim}</p>
      ${temporada.ativa ? `<button onclick="finalizarTemporada()">Finalizar Temporada</button>` : "<p>Encerrada</p>"}
    `;
}

function renderRanking() {
  rankingTemp.innerHTML = "";
  rankingTemporada
    .sort((a, b) => b.titulos - a.titulos || b.gols - a.gols)
    .forEach(j => {
      rankingTemp.innerHTML += `<li>${j.nome} 🏆 ${j.titulos} ⚽ ${j.gols}</li>`;
    });
}

function renderHistorico() {
  historico.innerHTML = "";
  historicoCopas.forEach(c => {
    historico.innerHTML += `
      <li>
        🏆 ${c.campeao} |
        ${c.jogadores} jogadores |
        ${c.data}
      </li>`;
  });
}

renderTemporada();
renderRanking();
renderHistorico();

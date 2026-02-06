let jogadores = JSON.parse(localStorage.getItem("jogadores")) || [
  { id: 1, nome: "Jogador 1", gols: 0, titulos: 0 },
  { id: 2, nome: "Jogador 2", gols: 0, titulos: 0 },
  { id: 3, nome: "Jogador 3", gols: 0, titulos: 0 },
  { id: 4, nome: "Jogador 4", gols: 0, titulos: 0 },
  { id: 5, nome: "Jogador 5", gols: 0, titulos: 0 },
  { id: 6, nome: "Jogador 6", gols: 0, titulos: 0 },
  { id: 7, nome: "Jogador 7", gols: 0, titulos: 0 },
  { id: 8, nome: "Jogador 8", gols: 0, titulos: 0 },
  { id: 9, nome: "Jogador 9", gols: 0, titulos: 0 },
  { id: 10, nome: "Jogador 10", gols: 0, titulos: 0 },
  { id: 11, nome: "Jogador 11", gols: 0, titulos: 0 },
  { id: 12, nome: "Jogador 12", gols: 0, titulos: 0 },
  { id: 13, nome: "Jogador 13", gols: 0, titulos: 0 },
  { id: 14, nome: "Jogador 14", gols: 0, titulos: 0 },
  { id: 15, nome: "Jogador 15", gols: 0, titulos: 0 },
  { id: 16, nome: "Jogador 16", gols: 0, titulos: 0 }
];

let temporada = JSON.parse(localStorage.getItem("temporada")) || null;
let rankingTemporada = JSON.parse(localStorage.getItem("rankingTemporada")) || [];
let historicoCopas = JSON.parse(localStorage.getItem("historicoCopas")) || [];

function salvarTudo() {
  localStorage.setItem("jogadores", JSON.stringify(jogadores));
  localStorage.setItem("temporada", JSON.stringify(temporada));
  localStorage.setItem("rankingTemporada", JSON.stringify(rankingTemporada));
  localStorage.setItem("historicoCopas", JSON.stringify(historicoCopas));
}

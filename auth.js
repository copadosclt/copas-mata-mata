const SENHA_ADMIN = "ben@cl#clt"; // 🔴 TROQUE ISSO

function login() {
  const senha = document.getElementById("senhaInput").value;

  if (senha === SENHA_ADMIN) {
    localStorage.setItem("adminLogado", "true");
    mostrarAdmin();
  } else {
    alert("Senha incorreta");
  }
}

function logout() {
  localStorage.removeItem("adminLogado");
  location.reload();
}

function mostrarAdmin() {
  document.getElementById("loginBox").style.display = "none";
  document.getElementById("adminBox").style.display = "block";
}

if (localStorage.getItem("adminLogado") === "true") {
  mostrarAdmin();
}

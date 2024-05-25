function logar() {
  var login = document.getElementById("login").value
  var senha = document.getElementById("senha").value

  var loginValido = "giovanni"
  var senhaValida = "12345"

  if (login == loginValido && senha == senhaValida) {
    alert("Você Será Redirecionado Para a Pagina!")
    window.location.href = "https://tamborim13.github.io/Projeto-Pokedex/"
  } else {
    alert("Usuário ou senha incorreta")
  }
}

document.getElementById("button").addEventListener("click", logar)

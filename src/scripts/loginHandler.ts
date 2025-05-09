export function verificarLogin(email, password) {
  console.log("Email:", email);
  console.log("Senha:", password);

  if (email && password) {
    return {
      mensagem: "Bem vindo!",
      cor: "green",
      msg_authentication:
        "Autenticação com sucesso!<br> Email:" +
        email +
        "<br> Senha: " +
        password,
    };
  } else {
    return {
      mensagem: "Preencha todos os campos meu >:(",
      cor: "red",
      msg_authentication:
        "Falha na autenticação! Favor preencha todos os campos",
    };
  }
}

export function verificarLogin(user, password) {
  console.log("Usuário:", user);
  console.log("Senha:", password);

  if (user && password) {
    return {
      mensagem: "Bem vindo!",
      cor: "green",
      msg_authentication:
        "Autenticação com sucesso!<br> Login:" +
        user +
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

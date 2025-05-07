export function verificarLogin(user, password) {
  console.log("Usuário:", user);
  console.log("Senha:", password);

  if (user && password) {
    return {
      mensagem: "Bem vindo!",
      cor: "green", 
    };
  } else {
    return {
      mensagem: "Preencha todos os campos meu >:(",
      cor: "red",
    };
  }
}

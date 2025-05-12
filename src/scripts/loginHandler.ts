import type { LoginForm } from "@/types/LoginForm";
export function verificarLogin(email: string, password: string) {
  console.log("Email:", email);
  console.log("Senha:", password);
  const sanitizedEmail = (email || "").trim();
  if (sanitizedEmail && password) {
    return {
      mensagem: "Bem vindo!",
      cor: "green",
      msg_authentication:
        "Autenticação com sucesso!<br> Email:" +
        sanitizedEmail +
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

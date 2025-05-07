<template>
  <div class="login-container">
    <h2>LOGIN</h2>
    <input type="text" v-model="user" placeholder="Usuário" />
    <input type="password" v-model="password" placeholder="Senha" />
    <button @click="verificarLogin(user, password)">Entrar</button>
    <div :style="{ color: mensagemCor }">{{ mensagem }}</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { verificarLogin as loginHandler } from "../scripts/loginHandler.js";
import { useAuthStore } from "@/stores/auth";
import { useCounterStore } from "@/stores/counter";

const user = ref("");
const password = ref("");
const mensagem = ref("");
const mensagemCor = ref("green");
const auth = useAuthStore();

const counter = useCounterStore();

function verificarLogin(user, password) {
  const resultado = loginHandler(user, password);
  mensagem.value = resultado.mensagem;
  mensagemCor.value = resultado.cor;

  auth.user = user;
  auth.password = password;
  auth.login();
  console.log("INcremento");
  counter.increment();
}
</script>

<style scoped>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 139, 139);
}
.login-container {
  background: white;
  padding: 20px 40px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.994);
}
h2 {
  text-align: center;
}
input {
  display: inline-block;
  margin-bottom: 15px;
  padding: 10px;
  width: 100%;
}
button {
  padding: 10px;
  width: 100%;
  background-color: rgb(0, 139, 139);
  color: white;
  border: none;
  cursor: pointer;
}
</style>

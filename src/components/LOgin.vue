<template>
  <div class="main-container">
    <div class="login-container">
      <h2>LOGIN</h2>
      <input type="text" v-model="email" placeholder="Insira seu email..." />
      <input
        type="password"
        v-model="password"
        placeholder="Insira a sua senha..."
      />
      <div :style="{ color: mensagemCor }">{{ mensagem }}</div>
    </div>
    <v-col cols="12" md="4" sm="6">
      <v-btn
        rounded="xl"
        size="x-large"
        block
        @click="verificarLogin(email, password)"
        >Entrar</v-btn
      >
    </v-col>
    <v-col cols="12" md="4" sm="6">
      <v-btn
        v-if="counter.count >= 1"
        rounded="xl"
        size="x-large"
        block
        @click="goToHomePage"
      >
        Home Page
      </v-btn>
    </v-col>

    <div class="validation-container">
      <h2>Validação de Login</h2>
      <div style="color: black" v-html="msg_authentication"></div>
      <div style="color: black">
        {{ "Número de tentativas totais: " + counter.count }}
      </div>
      <v-divider :thickness="5" color="black"></v-divider>
      <h2>Histórico de Usuários</h2>
      <ul v-if="auth.loginHistory && auth.loginHistory.length > 0">
        <li v-for="(entry, index) in auth.loginHistory" :key="index">
          Login: {{ entry.email }} | Senha: {{ entry.password }}
        </li>
      </ul>
      <div v-else>Nenhum login realizado.</div>
    </div>
    <v-expansion-panels>
      <v-expansion-panel
        title="Informações Adicionais"
        color="#c6c6c6"
        text="Projeto feito da provavel pior forma de design e codagem que alguem vai ver na vida"
      >
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { verificarLogin as loginHandler } from "../scripts/loginHandler";
import { useAuthStore } from "@/stores/auth";
import { useCounterStore } from "@/stores/counter";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const mensagem = ref("");
const mensagemCor = ref("green");
const auth = useAuthStore();
const counter = useCounterStore();
const msg_authentication = ref("");
const router = useRouter();

function verificarLogin(email, password) {
  const resultado = loginHandler(email, password);
  mensagem.value = resultado.mensagem;
  mensagemCor.value = resultado.cor;
  msg_authentication.value = resultado.msg_authentication;
  auth.login(email, password);
  counter.increment();
  counter.count;
}
function goToHomePage() {
  router.push("/home");
}
</script>

<style scoped>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  background-color: #ececec;
  margin: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px; /* Espaçamento entre os blocos */
}

.login-container,
.validation-container {
  background: #d9d9d9;
  padding: 20px 40px;
  border-radius: 10px;
  box-shadow: 0 0 10px #000000;
  gap: 20px;
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
  background-color: #b3b3b3;
  color: rgb(0, 0, 0);
  border: none;
  cursor: pointer;
  margin-bottom: 10px;
}
</style>

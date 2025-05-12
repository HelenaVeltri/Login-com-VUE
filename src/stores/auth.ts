import { defineStore } from "pinia";
import type { LoginForm } from "@/types/LoginForm";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    email: "",
    password: "",
    loginHistory: [] as LoginForm[], //informa explicitamente que o campo de loginHistory é um array de objetos que interface LoginForm
  }),
  actions: {
    login(email: string, password: string) {
      this.email = email;
      this.password = password;
      console.log(
        "Tentativa de login executada com:",
        this.email,
        this.password
      );
      this.loginHistory.push({ email: this.email, password: this.password });
    },
  },
});

import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    email: "",
    password: "",
    loginHistory: [],
  }),
  actions: {
    login(email, password) {
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

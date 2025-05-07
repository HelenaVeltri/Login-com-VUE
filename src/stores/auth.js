import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: "",
    password: "",
    loginHistory: [],
  }),
  actions: {
    login(user, password) {
      this.user = user;
      this.password = password;
      console.log(
        "Tentativa de login executada com:",
        this.user,
        this.password
      );
      this.loginHistory.push({ user: this.user, password: this.password });
    },
  },
});

import { defineStore } from "pinia";
export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: "",
    password: "",
  }),
  actions: {
    login() {
      console.log(
        "Tentativa de login executada com:",
        this.user,
        this.password
      );
    },
  },
});

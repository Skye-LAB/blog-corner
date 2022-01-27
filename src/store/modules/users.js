import axios from "axios";
import router from "../../router";

export default {
  namespaced: true,
  state: {
    user: {},
    error: "",
  },
  mutations: {
    setError(state, error) {
      state.error = error;
    },
  },
  actions: {
    loginUser(ctx, payload) {
      axios
        .post("/api/users/login", {
          email: payload.email,
          password: payload.password,
        })
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("admin", res.data.user.admin);
          ctx.commit("setError", "");
          window.location.replace("/");
        })
        .catch((err) => {
          ctx.commit("setError", err.response.data);
        });
    },
    registerUser(ctx, payload) {
      axios
        .post("/api/users", {
          username: payload.username,
          email: payload.email,
          password: payload.password,
        })
        .then(() => {
          router.push("/login");
        });
    },
    logoutUser(ctx) {
      localStorage.removeItem("token");
      localStorage.removeItem("admin");
      window.location.replace("/");
    },
  },
  getters: {},
};

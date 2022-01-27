import axios from "axios";
import router from "../../router";

export default {
  namespaced: true,
  state: {
    blogs: [],
    blogId: "",
  },
  mutations: {
    setBlogs(state, blog) {
      state.blogs = blog;
    },
    setBlogId(state, id) {
      state.blogId = id;
    },
  },
  actions: {
    fetchBlogs(ctx) {
      axios.get("/api/blog").then((res) => {
        ctx.commit("setBlogs", res.data);
      });
    },
    createBlog(ctx, payload) {
      axios
        .post("/api/blog", {
          title: payload.title,
          body: payload.body,
        })
        .then((res) => {
          router.push("/dashboard");
        });
    },
  },
  getters: {
    currentBlog(state) {
      return state.blogs.find((x) => x.id === state.blogId);
    },
  },
};

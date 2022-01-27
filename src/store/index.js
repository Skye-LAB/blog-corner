import { createStore } from "vuex";

import users from "./modules/users";
import blogs from "./modules/blogs";

export default createStore({
  modules: {
    users,
    blogs
  },
});

<template>
  <div class="container py-4" style="height: 100vh">
    <navbar>
      <template v-slot:logo>
        <span class="fs-4">Blog Corner</span>
      </template>
      <template v-slot:primary-menu>
        <li class="nav-item">
          <router-link class="nav-link active" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/blogs">Blogs</router-link>
        </li>
      </template>
      <template v-slot:secondary-menu>
        <li class="nav-item" v-if="!token">
          <router-link class="nav-link" to="/login"> Log In </router-link>
        </li>
        <li class="nav-item" v-if="!token">
          <router-link class="nav-link active" to="/register">
            Sign Up
          </router-link>
        </li>
        <li class="nav-item dropdown" v-if="token">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://dummyimage.com/200x200/9c939c/fff"
              width="30"
              class="rounded-circle"
            />
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <router-link class="dropdown-item" to="/me">Profile</router-link>
            </li>
            <li>
              <router-link class="dropdown-item" to="/dashboard"
                >Dashboard</router-link
              >
            </li>
            <li>
              <router-link class="dropdown-item" to="/blog/create"
                >Create Blog</router-link
              >
            </li>
            <li><hr class="dropdown-divider" /></li>
            <li>
              <button class="dropdown-item text-danger" @click="logout">
                Logout
              </button>
            </li>
          </ul>
        </li>
      </template>
    </navbar>

    <router-view />

    <my-footer>
      <template v-slot:copy-name> Copyright@Skye-LAB</template>
    </my-footer>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";

import Navbar from "@/components/nav/Navbar.vue";
import MyFooter from "@/components/MyFooter.vue";

export default {
  name: "App",
  components: {
    Navbar,
    MyFooter,
  },
  setup() {
    let store = useStore();
    const token = ref("");

    onMounted(() => {
      token.value = localStorage.getItem("token");
    });

    const logout = () => {
      store.dispatch("users/logoutUser");
    };

    return {
      token,
      logout,
    };
  },
};
</script>

<style></style>

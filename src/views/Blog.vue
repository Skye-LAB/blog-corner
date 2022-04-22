<template>
  <div v-if="blog">
    <main class="container d-flex flex-column justify-content-start">
      <div class="mb-4">
        <div class="container-fluid">
          <img class="img-fluid rounded mx-auto d-block" src="https://dummyimage.com/720x480/b8b8b8/454545.png" />
        </div>
      </div>
      <div class="d-flex justify-content-between">
        <h4>{{ blog ? blog.title : "" }}</h4><i class="bi-heart fs-5"></i>
      </div>
      <p class="fw-light">By {{ blog.user.username }}</p>
      <div class="text-justify">
        <p v-html="blog.body"></p>
      </div>
    </main>

    <title-content where="left">
      <template v-slot:title>
        <h4>Latest Blogs</h4>
      </template>
    </title-content>

    <card-container where="left">
      <template v-slot:cards>
        <card v-for="blog in blogs" :key="blog.id">
          <template v-slot:card-badge> New </template>
          <template v-slot:card-image>
            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" />
          </template>
          <template v-slot:card-title-author>
            <router-link class="fw-bolder text-decoration-none text-dark" :to="`/blogs/${blog.id}`">
              <h5>{{ blog.title }}</h5>
            </router-link>
            <p class="fw-light">By {{ blog.user.username }}</p>
          </template>
          <template v-slot:card-content>
            <div v-html="blog.body"></div>
          </template>
        </card>
      </template>
    </card-container>
  </div>
  <error v-else>
    <template v-slot:error-code>
      <h2>404 Blog Not Found</h2>
    </template>
    <template v-slot:error-msg>
      <div class="error-details">
        Sorry, an error has occured, Requested page not found!
        <br />
        <router-link to="/">Go Back</router-link>
      </div>
    </template>
  </error>
</template>

<script>
import { computed, onMounted, watchEffect } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

import TitleContent from "@/components/TitleContent.vue";
import Card from "@/components/Card.vue";
import CardContainer from "@/components/CardContainer.vue";
import Error from "@/components/Error.vue";

export default {
  components: {
    TitleContent,
    Card,
    CardContainer,
    Error,
  },
  setup() {
    let store = useStore();
    let route = useRoute();

    const fetchData = () => {
      store.dispatch("blogs/fetchBlogs");
    };

    onMounted(() => {
      fetchData();
    });

    watchEffect(() => {
      store.commit("blogs/setBlogId", route.params.id);
    });

    return {
      blogs: computed(() => store.state.blogs.blogs),
      blog: computed(() => store.getters["blogs/currentBlog"]),
    };
  },
};
</script>

<style scoped>
.text-justify {
  text-align: justify;
  text-justify: inter-word;
}
</style>

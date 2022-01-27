<template>
  <title-content where="left">
    <template v-slot:title>
      <h4>List Blogs</h4>
    </template>
  </title-content>

  <card-container where="left">
    <template v-slot:cards>
      <card v-for="blog in blogs" :key="blog.id">
        <template v-slot:card-badge> New </template>
        <template v-slot:card-image>
          <img
            class="card-img-top"
            src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          />
        </template>
        <template v-slot:card-title-author>
          <router-link
            class="fw-bolder text-decoration-none text-dark"
            :to="`/blogs/${blog.id}`"
          >
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
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

import TitleContent from "@/components/TitleContent.vue";
import Card from "@/components/Card.vue";
import CardContainer from "@/components/CardContainer.vue";

export default {
  components: {
    TitleContent,
    Card,
    CardContainer,
  },
  setup() {
    let store = useStore();

    const fetchData = () => {
      store.dispatch("blogs/fetchBlogs")
    }

    onMounted(() => {
      fetchData()
    })

    return {
      blogs: computed(() => store.state.blogs.blogs)
    };
  },
};
</script>

<style></style>

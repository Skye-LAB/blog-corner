<template>
  <jumbotron>
    <template v-slot:jumbotron-body>
      <h1 class="display-5 fw-bold">Blog Corner</h1>
      <p class="col-md-8 fs-4">
        Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
        cillum sint consectetur cupidatat.
      </p>
      <button class="btn btn-primary btn-lg" type="button">Sign Up</button>
    </template>
  </jumbotron>

  <title-content>
    <template v-slot:title>
      <h4>Latest Blogs</h4>
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

// @ is an alias to /src
import Jumbotron from "@/components/Jumbotron.vue";
import TitleContent from "@/components/TitleContent.vue";
import Card from "@/components/Card.vue";
import CardContainer from "@/components/CardContainer.vue";

export default {
  components: {
    Jumbotron,
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

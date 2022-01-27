<template>
  <error>
    <template v-slot:error-code>
      <h2>404 Not Found</h2>
    </template>
    <template v-slot:error-msg>
      <div class="error-details">
        Sorry, an error has occured, Requested page not found!
        <br>
        <router-link to="/">Go Back</router-link>
      </div>
    </template>
  </error>
</template>

<script>
import Error from "@/components/Error.vue";
export default {
  components: {
    Error,
  },
};
</script>

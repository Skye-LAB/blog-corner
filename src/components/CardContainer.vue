<template>
  <div class="row gx-4 gx-lg-5 px-4" :class="whereClass">
    <slot name="cards" />
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    where: {
      type: String,
      default: "center",
    },
  },
  setup(props) {
    let where = ref("");
    let whereClass = ref("");

    where = props.where;

    switch (where) {
      case "center":
        whereClass = "justify-content-center";
        break;
      case "left":
        whereClass = "justify-content-start";
        break;
      case "right":
        whereClass = "justify-content-end";
        break;
      default:
        whereClass = "justify-content-center";
    }

    return { whereClass };
  },
};
</script>

<style></style>

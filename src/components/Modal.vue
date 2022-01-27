<template>
  <div class="modal fade" :id="name" tabindex="-1">
    <div class="modal-dialog" :class="sizeClass">
      <div class="modal-content">
        <div class="modal-header">
          <slot name="modal-header" />
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
          ></button>
        </div>

        <div class="modal-body">
          <slot name="modal-body" />
        </div>
        <div class="modal-footer">
          <slot name="modal-footer" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    size: {
      type: String,
    },
  },
  setup(props) {
    let size = ref("");
    let sizeClass = ref("");

    size = props.size;

    switch (size) {
      case "sm":
        sizeClass = "modal-sm";
        break;
      case "lg":
        sizeClass = "modal-lg";
        break;
      case "xl":
        sizeClass = "modal-xl";
        break;
      default:
        sizeClass = "";
    }

    return { sizeClass };
  },
};
</script>

<style></style>

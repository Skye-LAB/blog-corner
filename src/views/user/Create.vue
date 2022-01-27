<template>
  <title-content>
    <template v-slot:title>
      <h4>Create Blog</h4>
    </template>
  </title-content>
  <div>
    <form @submit.prevent="makeBlog">
      <div class="row mb-3">
        <div class="col-xl-6">
          <label for="formFile" class="form-label">Thumbnail: </label>
          <input class="form-control" type="file" id="formFile" />
        </div>

        <div class="col-xl-6">
          <label for="title" class="form-label">Title: </label>
          <input class="form-control" type="text" id="title" v-model="title" />
        </div>
      </div>

      <span>Content: </span>
      <ckeditor :editor="editor" v-model="content"></ckeditor>
      <div class="d-flex align-items-center justify-content-end my-4">
        <button
          type="button"
          class="btn btn-warning"
          data-bs-toggle="modal"
          data-bs-target="#previewBlog"
        >
          Preview
        </button>
        <button type="submit" class="btn btn-primary ms-4">Post</button>
      </div>
    </form>
    <modal name="previewBlog" size="xl">
      <template v-slot:modal-header>Preview Blog</template>
      <template v-slot:modal-body>
        <div>
          <div class="mb-4">
            <div class="container-fluid">
              <img
                class="img-fluid rounded mx-auto d-block"
                src="https://dummyimage.com/540x360/b8b8b8/454545.png"
              />
            </div>
          </div>
          <h4>{{ title }}</h4>
          <p class="fw-light">By author</p>
          <div class="text-justify" v-html="content"></div>
        </div>
      </template>
      <template v-slot:modal-footer>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
          Close
        </button>
      </template>
    </modal>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import TitleContent from "@/components/TitleContent.vue";
import Modal from "@/components/Modal.vue";

export default {
  components: {
    TitleContent,
    Modal,
  },
  setup() {
    const store = useStore();
    const editor = ClassicEditor;
    const content = ref("");
    const title = ref("");

    const makeBlog = () => {
      store.dispatch("blogs/createBlog", {
        title: title.value,
        body: content.value,
      });
    };

    return {
      editor,
      content,
      title,
      makeBlog,
    };
  },
};
</script>

<style>
.ck-editor__editable {
  height: 300px;
}
</style>

<template>
  <div class="col-12 col-sm-12 col-md-6 col-lg-4 mb-5">
    <div class="card h-100">
      <div
        class="badge bg-primary text-white position-absolute"
        style="top: 0.5rem; right: 0.5rem"
      >
        <slot name="card-badge" />
      </div>
      <slot name="card-image" />
      <div class="card-body p-4">
        <div class="text-left">
          <slot name="card-title-author" />
        </div>
      </div>
      <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div class="text-truncante">
          <slot name="card-content" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.text-truncante {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>

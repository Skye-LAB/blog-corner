<template>
  <div class="row my-5">
    <div class="col-md-12">
      <div class="d-flex justify-content-center text-center">
        <div class="error-template">
          <h1>Oops!</h1>
          <slot name="error-code"/>
          <slot name="error-msg"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>

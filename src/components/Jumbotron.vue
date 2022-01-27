<template>
  <div
    class="p-5 mb-4 bg-light rounded-3 jumbotron"
    style="background-size: cover"
  >
    <div class="container-fluid py-5">
      <slot name="jumbotron-body"/>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.jumbotron {
  background-image: url('https://img.jakpost.net/c/2019/03/02/2019_03_02_66706_1551461528._large.jpg')
}
</style>

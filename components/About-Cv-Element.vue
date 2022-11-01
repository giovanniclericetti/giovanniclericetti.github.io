<template>
  <div class="mt-4 pr-5">
    <h6>{{ category }}</h6>
    <p >{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "About-Cv-Element",
  props: ['category', 'text']
}
</script>

<style scoped>

</style>

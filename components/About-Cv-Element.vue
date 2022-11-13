<template>
  <div class="mt-md-4  ml-2 ml-md-0 mt-3 pr-5 cvpar">
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

@media (max-width: 768px) {

  .cvpar{
    width: 85%;
  }

}

</style>

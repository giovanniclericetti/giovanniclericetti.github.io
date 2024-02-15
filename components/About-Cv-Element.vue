<template>
  <div class=" ml-md-0 mt-md-3 pr-md-5 cvpar ">
    <h6 class="mb-1"> {{ category }}</h6>
    <slot style="padding: 0px" name="slotcvelement"> </slot>
  </div>
</template>

<script>
export default {
  name: "About-Cv-Element",
  props: ['category']
}
</script>

<style scoped>


@media (max-width: 768px) {

  .cvpar{
    width: 80%;
  }

}

</style>

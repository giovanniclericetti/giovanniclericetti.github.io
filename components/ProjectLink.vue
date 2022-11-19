<template>

    <div class="d-flex">

      <b-icon shift-v="2" icon="arrow-up-right-circle-fill" style="width: 30px; height: 30px; color: var(--color-primary)"></b-icon>

      <h4 class="m-0 p-0 ml-2 hover-underline-animation" style="color: var(--color-primary)" > {{ textlink }}
         </h4>

    </div>

</template>

<script>
export default {
  name: "ProjectLink",
  props: {
    textlink: String
  },
}

</script>

<style scoped>

.hover-underline-animation:after {
  height: 2px;
  bottom: 4px;
}


</style>

<template>

    <div class="d-flex align-items-center">

      <HeaderIcon symbol="up-right" :gradient="false" :size="30" style="flex-shrink: 0; color: var(--color-primary)" />

      <h4 class="m-0 p-0 ml-2 hover-underline-animation" style="color: var(--color-primary)" > {{ $t(textlink) }}
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



@media (max-width: 991.98px) {
  .d-flex { min-height: 48px; align-items: center; }
  .b-icon { flex-shrink: 0; }
}

</style>

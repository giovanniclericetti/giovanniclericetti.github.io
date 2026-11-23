<template>


  <div class="mobile-nav-slot">
  <nav aria-label="Main navigation" class="container-fluid header p-0 mb-3">

    <b-row class="p-0 m-0" align-h="between">
      <b-col cols="auto" class="p-0">  <NuxtLink to="/" aria-label="All projects"> <img src="~static/icons/back-home.svg" alt="" aria-hidden="true" width="36" height="36" /> </NuxtLink> </b-col>
      <b-col cols="auto" class="p-0 text-right" align-self="center"> <a href="mailto:giovanni.clericetti@gmail.com" class="gradient hover-underline-animation" > <h5 class="m-0 gradient" > Contact Me </h5> </a> </b-col>
    </b-row>

  </nav>
  </div>


</template>

<script>
export default {
  name: "About-Header"
}
</script>

<style scoped>

.header{
  color: var(--color-primary);
}

a{
  text-decoration: none;
  color: var(--color-primary);
}



@media (max-width: 991.98px), (pointer: coarse) {
  a { display: inline-flex; min-width: 44px; min-height: 44px; align-items: center; }
  .hover-underline-animation:after { bottom: 9px; }
}
</style>

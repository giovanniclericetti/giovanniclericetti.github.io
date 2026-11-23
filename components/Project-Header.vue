<template>


  <div class="mobile-nav-slot">
  <nav aria-label="Main navigation" class="container-fluid header p-0 mb-3">

    <ProjectScrollProgress />

    <b-row class="p-0 m-0" align-h="between">
      <b-col cols="auto" class="p-0">
        <NuxtLink to="/" aria-label="All projects">
          <svg width="36" height="36" viewBox="0 0 143 143" fill="none" aria-hidden="true" focusable="false">
            <rect width="143" height="143" rx="50" fill="currentColor" />
            <path d="M72 44 44.5 71.5 72 99M46 71.5H99" stroke="white" stroke-width="10" stroke-linecap="butt" stroke-linejoin="miter" />
          </svg>
        </NuxtLink>
      </b-col>
      <b-col cols="auto" class="p-0 text-right" align-self="center"> <NuxtLink to="/about" class=" hover-underline-animation" > <h5 class="m-0" > About Me </h5> </NuxtLink> </b-col>
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

a:hover {
  text-decoration: none;
  color: var(--color-primary);
}



@media (max-width: 991.98px), (pointer: coarse) {
  a { display: inline-flex; min-width: 44px; min-height: 44px; align-items: center; }
  .hover-underline-animation:after { bottom: 9px; }
}
</style>

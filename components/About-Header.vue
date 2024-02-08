<template>


  <div class="container-fluid header p-0 mb-3">

    <b-row class="p-0 m-0" align-h="between">
      <b-col cols="auto" class="p-0 gradient">  <NuxtLink to="/"> <b-icon icon="arrow-left-circle-fill" style="width: 33px; height: 33px; color:#FF9A5A"></b-icon> </NuxtLink> </b-col>
      <b-col cols="auto" class="p-0 text-right" align-self="center"> <a href="mailto:giovanni.clericetti@gmail.com" class="gradient hover-underline-animation" > <h5 class="m-0 gradient" > Contact Me </h5> </a> </b-col>
    </b-row>

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


</style>

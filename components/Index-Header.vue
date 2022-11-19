<template>

  <div class="container-fluid header p-0 mb-3">

    <b-row class="p-0 m-0" align-h="between">
      <b-col cols="auto" class="p-0 gradient">  <NuxtLink to="/"> <img src="~static/favicon.svg" style="width: 30px; height: 30px;"/>  </NuxtLink> </b-col>
      <b-col cols="auto" class="p-0 text-right" align-self="center"> <NuxtLink to="about" class="gradient hover-underline-animation" > <h5 class="m-0 gradient" > About Me </h5> </NuxtLink> </b-col>
    </b-row>


  </div>

</template>

<script>
export default {
  name: "Index-Header"
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

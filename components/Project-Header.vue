<template>

  <div class="container-fluid header p-0 mb-3">


    <b-row class="p-0 m-0" align-h="between">
      <b-col cols="auto" class="p-0">  <NuxtLink to="/"> <b-icon icon="arrow-left-circle-fill" style="width: 30px; height: 30px;"></b-icon> </NuxtLink> </b-col>
      <b-col cols="auto" class="p-0 text-right"> <NuxtLink to="about" class="hover-underline-animation"> <h5 class="m-0" > About Me </h5> </NuxtLink> </b-col>
    </b-row>





  </div>

</template>

<script>
export default {
  name: "ProjectHeader"
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

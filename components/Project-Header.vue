<template>

  <div class="container-fluid header p-0 mb-3">


    <b-row class="p-0 m-0" align-v="center">
      <b-col cols="6" class="p-0">  <a href="index"> <b-icon icon="arrow-left-circle-fill" style="width: 30px; height: 30px;"></b-icon> </a> </b-col>
      <b-col cols="6" class="p-0 text-right"> <a href="about"> <h5 class="m-0" > About Me </h5> </a> </b-col>
    </b-row>


  </div>

</template>

<script>
export default {
  name: "G-Footer"
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

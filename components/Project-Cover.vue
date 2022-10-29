<template>

  <div class="projectcover">

<img :src="cover">


  </div>

</template>

<script>
export default {
  name: "Project-Cover",
  props: ['cover']
}
</script>

<style>

.projectcover{
  background-color: red;
  border-radius: 30px;
  overflow: hidden;
  max-height: 500px;
}

.projectcover img{
  width: 100%;
  object-fit: contain;
}



</style>

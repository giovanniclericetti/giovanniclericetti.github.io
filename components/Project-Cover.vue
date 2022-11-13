<template>

  <div class="projectcover my-4">

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
  border-radius: 30px;
  overflow: hidden;
  max-height: 500px;
}

.projectcover img{
  width: 100%;
  object-fit: contain;
}

@media (max-width: 768px) {

  .projectcover{
    border-radius: 20px;
    height: 250px;
  }

  .projectcover img{
    height: 100%;
    object-fit: cover;
  }

}


</style>

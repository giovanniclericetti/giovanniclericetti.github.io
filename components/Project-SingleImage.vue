<template>
  <div class="projectbox">
    <img :src="img">
  </div>
</template>

<script>
export default {
  name: "Project-SingleImage",
  props: ['img']
}
</script>

<style scoped>

.projectbox img {
  width: 100%;
  object-fit: contain;
}

.projectbox{
  background-color: white;
  max-height: 600px;
  border-radius: 30px;
  overflow: hidden;
}

@media (max-width: 768px) {

  .projectbox img {
    height: 100%;
    object-fit: contain;
  }

  .projectbox{
    border-radius: 20px;

  }

}
</style>

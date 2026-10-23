<template>
  <div class="projectbox">
    <img :src="img" alt="Project Image" loading="lazy" decoding="async">
  </div>



</template>

<script>


export default {
  name: "Project-SingleImage",
  props: ['img'],
}
</script>

<style scoped>
.projectbox img {
  width: 120%;


}

.projectbox {
  background-color: white;
  max-height: 600px;
  border-radius: 30px;
  overflow: hidden;
}

@media (max-width: 768px) {
  .projectbox img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  .projectbox {
    border-radius: 20px;
  }
}
</style>

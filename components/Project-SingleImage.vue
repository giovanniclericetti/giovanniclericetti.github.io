<template>
  <div class="projectbox" v-prlx.background="{ speed: 9 }">
    <img :src="img" alt="Project Image">
  </div>



</template>

<script>
import { VuePrlxDirective } from 'vue-prlx';

export default {
  name: "Project-SingleImage",
  props: ['img'],
  directives: {
    prlx: VuePrlxDirective,
  },
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
    height: 100%;
    object-fit: contain;
  }

  .projectbox {
    border-radius: 20px;
  }
}
</style>

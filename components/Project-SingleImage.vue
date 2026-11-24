<template>
  <div class="projectbox">
    <PortfolioImage :src="img" :alt="$t(&quot;Project Image&quot;)" loading="lazy" decoding="async" sizes="(max-width: 768px) calc(100vw - 30px), (min-width: 1200px) 1332px, (min-width: 992px) 1116px, 828px" />
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
  height: auto;


}

.projectbox {
  background-color: white;
  max-height: 600px;
  border-radius: var(--radius-medium, 20px);
  overflow: hidden;
}

@media (max-width: 768px) {
  .projectbox img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  .projectbox {
    border-radius: var(--radius-medium, 20px);
  }
}
</style>

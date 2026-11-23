<template>
<div class="my-4 testiproject">


    <h4 aria-level="2"> {{title}} </h4>
     <ProjectCopy :text="description" :emphasis="emphasis" />




</div>

</template>

<script>
export default {
  name: "Project-Description",
  props: ['description', 'title', 'emphasis']
}
</script>

<style scoped>


.testiproject{
  width: 70%
}

@media (max-width: 768px) {

.testiproject{
    width: 100%;
  }

}

</style>

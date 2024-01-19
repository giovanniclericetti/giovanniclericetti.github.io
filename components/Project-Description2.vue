<template>
<div class="my-4" style="width: 70%">


    <h4> {{title}} </h4>
     <p> {{ description }} </p>




</div>

</template>

<script>
export default {
  name: "Project-Description",
  props: ['description', 'title']
}
</script>

<style scoped>

</style>

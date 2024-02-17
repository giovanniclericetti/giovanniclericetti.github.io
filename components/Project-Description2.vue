<template>
<div class="my-4 testiproject">


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


.testiproject{
  width: 70%
}

@media (max-width: 768px) {

.testiproject{
    width: 100%;
  }

}

</style>

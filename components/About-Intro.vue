
<template>

  <div>

    <h1 class="gradient"> {{title}} </h1>
    <h3 class="description"> {{description}}</h3>

  </div>
</template>

<script>
export default {
  name: 'About-Intro',
  props: [ 'title', 'description']


}
</script>

<style>

.description{
  max-width: 75%;
  line-height: 120%;
}



@media (max-width: 768px) {

  .description{
    max-width: 100vw;
    line-height: 120%;
  }}


</style>



<template>

  <div>

    <h1 class="gradient d-md-block d-none mt-4 " style="font-size: 64px"> {{title}} </h1>
    <h1 class="gradient d-md-none d-block"> {{titlesm}} </h1>

    <div  class="mt-4">
    <h3 style="white-space: pre-line">  {{subtitle}} </h3> </div>

    <h4 class="gradient mt-5"> {{subdescription}} </h4>
    <p class="description mt-3"> {{description}}</p>

  </div>
</template>

<script>
export default {
  name: 'About-Intro',
  props: [ 'title', 'titlesm', 'description', 'subtitle', 'subdescription']


}
</script>

<style>

.description{
  max-width: 85%;
  line-height: 140%;
}



@media (max-width: 768px) {

  .description{
    max-width: 100vw;
    line-height: 120%;
  }}


</style>


<template>
<div class="container my-4">
  <IndexHeader></IndexHeader>

  <div class=" bg-primary mt-5">

    <H2 style="width: 90%"> Hey! My name is <span class="name gradient"> Giovanni </span>, I’m an Italian communication and
      experience designer based in Milan. I graduated in Communication
      Design at the Polimi and now I am attending a master's program. </H2>


    <b-button class="bg-warning"> <a href="about"> <h4> About </h4> </a></b-button>
    <b-button class="bg-warning"> <a href="it-back"> <h4> It-Back </h4> </a></b-button>

  </div>

<PortfolioGrid></PortfolioGrid>


</div>

</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style>

.name{
  font-family: 'title-bold';
  font-size: 35px;
}


</style>

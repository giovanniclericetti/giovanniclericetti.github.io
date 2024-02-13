<template>

  <div>

<div class="container mt-4">



  <IndexHeader></IndexHeader>

  <div class="mt-5">

    <h2 style="width: 85%; line-height: 140%" class="py-5"> Hi! I'm Giovanni, an italian <span class="name gradient"> communication and
      experience designer </span> based in Milan. I graduated in Communication
      Design at the Polimi. Here are some of the projects I have worked on! </h2>

  </div>

<PortfolioGrid class="mb-5"/>

</div>

  <PortfolioFooter/>

</div>

</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style >

.name{
  font-family: 'title-regular';
  font-size: 34px;
}


@media (max-width: 768px) {

  .name{
  font-size: 30px;}

}



</style>

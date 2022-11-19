<template>

  <div>

<div class="container mt-4">

  <IndexHeader></IndexHeader>

  <div class=" mt-5">

    <h2 style="width: 90%"> Hey! My name is <span class="name gradient">Giovanni</span>. I’m an Italian communication and
      experience designer based in Milan. I graduated in Communication
      Design at the Polimi and now I am attending a master's program. </h2>

  </div>

<PortfolioGrid/>

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
  font-family: 'title-bold';
  font-size: 35px;
}


@media (max-width: 768px) {

  .name{
  font-size: 30px;}

}



</style>

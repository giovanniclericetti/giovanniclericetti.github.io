<template>

  <div>

<div class="container mt-4 index">

  <IndexHeader></IndexHeader>

  <div class="mt-5 py-md-5 py-2">

    <h2 class="titleindex"> Hey! I'm Giovanni, an Italian <span class="name gradient"> communication and
      experience designer </span> based in Milan. I graduated in Communication
      Design at Polimi. Here are some of the projects I have worked on! </h2>

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

.titleindex{
  width: 85%;
  line-height: 140%
}


.index {
  --color-primary: #FF4466;
}


@media (max-width: 768px) {

  .name{
  font-size: 30px;}

  .titleindex{
    width: 90%;
    line-height: 140%
  }

}



</style>

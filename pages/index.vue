<template>

  <div>

<div class="container mt-4 index">

  <IndexHeader></IndexHeader>

  <div class="mt-5 py-md-5 py-2">

    <h2 class="titleindex"> Hey! I'm Giovanni, an Italian <span class="name gradient"> visual and
      experience designer </span> based in Milan. After graduating in Communication Design at <a class="hover-a-underline-animation"
                                                                                                 href="https://www.polimi.it/"> Polimi </a>,
      I'm currently working at <a class="hover-a-underline-animation"
                                  href="https://www.acmilan.com/"> AC Milan </a>. Here’s my Portfolio.


    </h2>

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

.hover-a-underline-animation {
  display: inline-block;
  position: relative;
  color: black;
}

.hover-a-underline-animation:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2.5px;
  bottom: 5px;
  left: 0;
  background-color: black;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.hover-a-underline-animation:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

a:hover {
  text-decoration: none;
  color: black;
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

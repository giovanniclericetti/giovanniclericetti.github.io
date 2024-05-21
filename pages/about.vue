<template>

<div class="about">

  <div class="container mt-4 pb-5">

    <About-Header/>

    <div class="mt-5 py-md-5 py-2">

      <h2 class="titleindex">

        My name is <span class="name gradient"> Giovanni</span>.
        I'm 23 years old and I come from Milan. <br>
        I'm passionate and curious about discovering,
        learning and understanding aspects of reality and the forms it can take.


      </h2>

    </div>

    <AboutPhoto
      class="d-md-none"
    />

    <About-Box class="d-lg-block d-none" />

    <About-Intro

subdescription="My Short Story" description="My first real taste of the design world came in high school when I had the pleasure of attending the Artistic School at Fondazione Sacro Cuore in Milan. These years were extremely important for me, as they allowed me to develop an eye for aesthetic beauty and to cultivate a personal critical perspective. What led me to pursue Communication Design at the Politecnico was my growing realization of the importance of how a project is presented and communicated.

During my tenure at the university in Bovisa, I was surprised by my own attraction to the design style that I had learned, developed, and made my own, to the point that I now apply it to everything. It is an essential part of my everyday way of living. On numerous occasions, I have engaged in the creative process of branding holidays, designing t-shirts, creating graphics, developing personalized stickers, curating Instagram pages, and programming websites, all for the purpose of fun and enjoyment with my friends..

What do I want to do in the future? Over the years, I have explored various fields within the design world. However I believe the area that fascinates me the most is digital and interactive design, particularly related to user experience.
"

      class=""/>

    <About-CV class="d-none d-md-block"/>
    <About-CV-Accordion class="d-md-none d-block"/>



  </div>

  <PortfolioFooter class="mt-md-5"/>

</div>

</template>

<script>
export default {
  name: "About-Me",
}
</script>

<style scoped>

.about .titleindex {
  width: 95%;
}

.about {
  --color-primary: #FF6A68;
}

@media (max-width: 768px) {

  .name{
    font-size: 30px;}

  .titleindex{
    width: 100%;
    line-height: 140%
  }

}
</style>

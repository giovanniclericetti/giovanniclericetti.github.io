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

    <About-Intro

    title="Something about me"
    titlesm="Who I am"
    subtitle="My name is Giovanni! I’m 23 years old and Milan is my city. I'm passionate
    and curious about what I have around me. I like to discover, learn about and
    comprehend aspects of reality and the forms it can take, even in small details."

    class=" d-none"/>


    <div class="mt-4 py-4 d-md-none">

      <h2 class="titleindex">

        My name is <span class="name gradient"> Giovanni</span>. I’m 23 years old and Milan is my city. I'm passionate
        and curious about what I have around me. I like to discover, learn about and
        comprehend aspects of reality and the forms it can take, even in small details.

      </h2>

    </div>

    <AboutPhoto
      class="d-md-none"
    />

    <About-Box class="d-lg-block d-none" />

    <About-Intro

subdescription="My Short Story" description="Sono nato il 22 gennaio 2001, ma sono sempre stato in classe coi 2000 fin da quando son bambino. My first important approach to the world of design happened in high school, attending the Art School at the Sacred Heart Foundation in Milan. These years were fundamental for me, because they allowed me to train my eye in the taste for the aesthetically beautiful and to mature a personal critical gaze. What made me choose to take the path of Communication Design at the Polytechnic, was realizing more and more how important it was for me the way a project is presented and communicated.

During these years in Bovisa, I surprised myself by being attracted to the way of design that I learned, developed and made my own, to the point that I now apply it in everything. I can't do without it for a moment now; how many times have I found myself branding vacations, producing t-shirts, layout graphics, curating instagram pages, programming sites just for pleasure and fun with my friends.

What do I want to do in the future? Over the years I have experimented with different fields different fields of the design world, but I think the one that fascinates me the most is a digital approach to design and related to user experience. But now ... come on, I'll let my projects do some of the talking!
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

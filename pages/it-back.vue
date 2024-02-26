<template>

  <div class="it-back">

    <div class="container mt-4">

      <ProjectHeader/>

      <Project-Intro
        title="It-Back"
        subtitle="Designing a digital experience aimed at reviving those outdated technology products, giving them a new value."
        pill1="UX-UI"
        pill2="Visual"
        pill3="Branding"
        pill4="Coding"

      />

      <div cols="12" md="12" class=" py-md-3 py-2 ">

        <img class="cover-parallax" style="
     background-image: url(https://github.com/giovanniclericetti/giovanniclericetti.github.io/blob/master/static/images/it-back/it-back_cover.png?raw=true)"
             v-prlx.background="{ speed: 0.1 }">
      </div>

      <ProjectDescription
        description="
It is precisely from the comeback of outdated, vintage products
IT-BACK was born, characterized by a minimal, modern and decidedly colorful style,
coupled with equally direct and lively communication.
The experience starts with the Instagram profile, where the user
is intrigued by social content that shows some products in their details
without ever explicitly revealing what they are about, but only hinting that
they are great technological innovations. It continues with the website, where this
path of curiosity and recognition continues, growing the hype. The slide scrolling of
the site helps make this step-by-step journey more immersive. Moving on, one will discover
that these products, presented as extremely innovative, are instead now disused because they are obsolete.
But the experience does not stop there, as they are reevaluated since they carry with them a new meaning
that makes those who use them unique and special."
        team="B. Barzaghi, E. Ceriani, B. Duina, F. Nozza, E. Peverelli"
        role="Brand Identity, UX-UI, Art Direction, Keynote Presentation, Social Media, Coding (Wordpress)"
        delivery="Software and Graphics Lab, 2022"
        class="my-5"
      >

        <template #link>
          <div class="mt-5">
            <a href="https://itback.altervista.org/" target="_blank">
              <ProjectLink textlink="Website"></ProjectLink>
            </a>
          </div>
        </template>

      </ProjectDescription>

      <div>

      </div>

      <b-row class="mt-4">

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">

          <div class="imgbox">
            <img class="img-parallax imgproject h600" style="
     background-image: url(/images/it-back/itback1.svg)"
                 v-prlx.background="{ speed: 0.2 }"></div>
        </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">
        <div class="imgbox">
          <img class="img-parallax imgproject h600" style="
     background-image: url(/images/it-back/itback2.svg)"
               v-prlx.background="{ speed: 0.2 }"></div>
        </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img class="img-parallax imgproject h400" style="
     background-image: url(/images/it-back/itback3.svg)"
                 v-prlx.background="{ speed: 0.1 }"></div>
        </b-col>

        <b-col cols="12" md="6" class=" py-md-3 py-2 px-3">

          <div class="imgbox">
            <img class="img-parallax imgproject h500" style="
     background-image: url(/images/it-back/itback4.svg)"
                 v-prlx.background="{ speed: 0.2 }"></div>
        </b-col>

        <b-col cols="12" md="6" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img class="img-parallax imgproject h500" style="
     background-image: url(/images/it-back/itback5.svg)"
                 v-prlx.background="{ speed: 0.2 }"></div>
        </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img class="img-parallax imgproject h500 small-dis" style="
     background-image: url(/images/it-back/itback6.svg)"
                 v-prlx.background="{ speed: 0.1 }"></div>
        </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img class="img-parallax imgproject h600" style="
     background-image: url(/images/it-back/itback8.svg)"
                 v-prlx.background="{ speed: 0.1 }"></div>
        </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img class="img-parallax imgproject h400" style="
     background-image: url(/images/it-back/itback7.svg)"
                 v-prlx.background="{ speed: 0.2 }"></div>
        </b-col>



      </b-row>


      <ProjectNextPrevious
        thumbnail="/images/previewpretest/next.svg"
        class="column card-large biowhite previewpretest"
        to="previewpretest"
        pill1="Branding"
        pill2="Social"
        pill3="Visual"
        nextproject="Preview & Pretest"
        bionext="Series of event dedicated to future students of Politecnico di Milano"
      />


    </div>


    <PortfolioFooter/>
  </div>


</template>

<script>
export default {
  name: 'it-back',
}


</script>


<style>

.it-back .subtitle {
  max-width: 60%;
}

@media (max-width: 768px) {

  .subtitle {
    max-width: 90%;
  }

  .small-dis{
    height: 200px;
  }



}



</style>

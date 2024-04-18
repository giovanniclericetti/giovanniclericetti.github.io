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
IT-BACK was born from the comeback of obsolete, vintage products, characterised by a minimalist, modern and decidedly colourful style, coupled with an equally direct and lively communication. The focus of the project is on the user's experience throughout the entire journey.
he experience starts with the Instagram profile, where the user is fascinated by social content that shows some products in detail, without ever explicitly revealing what they are, but only suggesting that they are great technological innovations.
"
        team="B. Barzaghi, E. Ceriani, B. Duina, F. Nozza, E. Peverelli"
        role="Brand Identity, UX-UI, Art Direction, Keynote Presentation, Social Media, Coding (Wordpress)"
        delivery="Software and Graphics Lab, 2022"
        class="my-5"
      >

        <template #link>
          <div class="mt-4">
            <a href="https://itback.altervista.org/" target="_blank">
              <ProjectLink textlink="Website"></ProjectLink>
            </a>
          </div>
        </template>

      </ProjectDescription>

      <div>

      </div>

      <b-row class="mt-4">

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3 d-md-block d-none">
          <div class="imgbox">
            <img class="img-parallax imgproject h500 small-dis" style="
     background-image: url(/images/it-back/itback6.jpg)"
                 v-prlx.background="{ speed: 0.1 }"></div>
        </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3 d-block d-md-none">
          <div class="imgbox">
            <img class="img-parallax imgproject h500 small-dis" style="
     background-image: url(/images/it-back/itback6-sm.jpg)"
                 v-prlx.background="{ speed: 0.1 }"></div>
        </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">

          <div class="imgbox">
            <img class="img-parallax imgproject h600" style="
     background-image: url(/images/it-back/itback1.jpg)"
                 v-prlx.background="{ speed: 0.2 }"></div>
        </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">

          <ProjectDescription2

            title="Platform User Experience"

            description="
The experience continues with the website, where this path of curiosity and recognition is continued and the hype grows. The site's scrolling slides help to make this step-by-step journey even more immersive. As the journey continues, the visitor discovers that these products, presented as highly innovative, are in fact being phased out as they become obsolete. But the experience does not stop there, as they are reassessed as they take on a new meaning that makes those who use them unique and special."

          /> </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">
        <div class="imgbox">
          <img class="img-parallax imgproject h600" style="
     background-image: url(/images/it-back/itback2.jpg)"
               v-prlx.background="{ speed: 0.2 }"></div>
        </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">

          <ProjectDescription2

            title="Content and Sections"

            description="
The objects presented on the web platform are four, like the sections of the site: Walkman, Tamagotchi, Walkie-Talkie and Floppy Disk. Each object is associated with a colour and a specific narrative path."
          /> </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img class="img-parallax imgproject h400" style="
     background-image: url(/images/it-back/itback3.jpg)"
                 v-prlx.background="{ speed: 0.1 }"></div>
        </b-col>



        <b-col cols="12" md="6" class=" py-md-3 py-2 px-3">

          <div class="imgbox">
            <img class="img-parallax imgproject h500" style="
     background-image: url(/images/it-back/itback4.jpg)"
                 v-prlx.background="{ speed: 0.2 }"></div>
        </b-col>

        <b-col cols="12" md="6" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img class="img-parallax imgproject h500" style="
     background-image: url(/images/it-back/itback5.jpg)"
                 v-prlx.background="{ speed: 0.2 }"></div>
        </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img class="img-parallax imgproject h600" style="
     background-image: url(/images/it-back/itback8.jpg)"
                 v-prlx.background="{ speed: 0.1 }"></div>
        </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img class="img-parallax imgproject h400" style="
     background-image: url(/images/it-back/itback7.jpg)"
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

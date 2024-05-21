<template>

  <div class="previewpretest">

    <div class="container mt-4">

      <ProjectHeader/>

      <Project-Intro
        title="Preview & Pretest"
        subtitle="Series of events dedicated to all future students
        of Design and Architecture at Politecnico di Milano"
        pill1="Branding"
        pill2="Social"
        pill3="Visual"
        pill4="Event"
      />

      <div cols="12" md="12" class=" mt-md-0 py-md-3 py-md-2 d-none d-md-block "
      >



        <img class="cover-parallax" style="


     background-image: url(/images/covers/hero/preview_cover.jpg)"




             v-prlx.background="{ speed: 0.1 }">
      </div>


      <div cols="12" class="pt-0 my-4 cover-mobile d-block d-md-none" >

        <img class=""
     src="/images/covers/sm/preview_sm.jpg"
        >

      </div>

      <ProjectDescription
        description="

In such an important stage of a student's life as choosing a university, Preview & Pretest is a concrete help in approaching this new world. The work consists, on the one hand, of managing all the organisational aspects of these events and, on the other hand, of developing a brand identity system that has remained consistently recognisable while evolving over time to adapt to the current context, so much so that even today this brand continues to exist year after year.
"
        team="C. Ghio, T. Prinetti, A. Silvano, D. Zoppi"
        role="Event Organization, Social Media, Brand Identity Evolution, Visual, UX-UI, Coding (HTML, CSS, JS, Wordpress)"
        delivery="Extracurricular Project for Polimi, 2020-2022"
        class="my-md-3">

        <template #link>
          <div class="mt-md-4 mt-4">
            <a href="https://www.instagram.com/previewpretest.la" target="_blank">
              <ProjectLink textlink="Instagram Profile"></ProjectLink>
            </a>
          </div>
        </template>

      >

      </ProjectDescription>

      <div>

      </div>

      <b-row class="mt-4">

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img class="img-parallax imgproject h400" style="
     background-image: url(/images/previewpretest/preview1.jpg)"
                 v-prlx.background="{ speed: 0.1 }"></div>
        </b-col>

        <b-col cols="12" md="12" class=" d-md-block py-md-3 py-2 px-3">
          <div class="imgbox">
            <img class="img-parallax imgproject h500" style="
     background-image: url(/images/previewpretest/preview3.jpg)"
                 v-prlx.background="{ speed: 0.1 }"></div>
        </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">

          <ProjectDescription2

            title="Preview"

            description="
Preview is an event where students' projects are shown to prospective students to help them understand which academic course is right for them. It mainly takes place on a single day, but all communications and the showcase website are created to accompany it."

          /> </b-col>

        <b-col cols="12" md="12" class=" d-md-block py-md-3 py-2 px-3">
        <div class="imgbox">
          <img class="img-parallax imgproject h600" style="
     background-image: url(/images/previewpretest/preview2.jpg)"
               v-prlx.background="{ speed: 0.1 }"></div>
        </b-col>

        <b-col cols="12" md="6" class=" d-md-block py-md-3 py-2 px-3">
          <div class="imgbox">
            <img class="img-parallax imgproject h400 small-dis" style="
     background-image: url(/images/previewpretest/preview4.jpg)"
                 v-prlx.background="{ speed: 0.1 }"></div>
        </b-col>

        <b-col cols="12" md="6" class=" d-md-block py-md-3 py-2 px-3">
          <div class="imgbox">
            <img class="img-parallax imgproject h400 small-dis" style="
     background-image: url(/images/previewpretest/preview5.jpg)"
                 v-prlx.background="{ speed: 0.1 }"></div>
        </b-col>



        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">

          <ProjectDescription2

            title="Pretest"

            description="
Pretest is a three-day study event in preparation for the Design and Architecture entrance exam, which helps students by explaining topics in lectures, preparing presentations, designing handouts, creating simulations and providing guided study time."

          /> </b-col>

        <b-col cols="12" md="6" class=" d-md-block py-md-3 py-2 px-3">
          <div class="imgbox">
            <img class="img-parallax imgproject h500" style="
     background-image: url(/images/previewpretest/pretest6.jpg)"
                 v-prlx.background="{ speed: 0.1 }"></div>
        </b-col>

        <b-col cols="12" md="6" class=" d-md-block py-md-3 py-2 px-3">
          <div class="imgbox">
            <img class="img-parallax imgproject h500" style="
     background-image: url(/images/previewpretest/pretest7.jpg)"
                 v-prlx.background="{ speed: 0.1 }"></div>
        </b-col>

        <b-col cols="12" md="7" class=" d-md-block py-md-3 py-2 px-3">
          <div class="imgbox">
            <img class="img-parallax imgproject h400 small-dis " style="
     background-image: url(/images/previewpretest/pretest8.jpg)"
                 v-prlx.background="{ speed: 0.1 }"></div>
        </b-col>

        <b-col cols="12" md="5" class="d-none d-md-block py-md-3 py-2 px-3">
          <div class="imgbox">
            <img class="img-parallax imgproject h400" style="
     background-image: url(/images/previewpretest/pretest9.jpg)"
                 v-prlx.background="{ speed: 0.1 }"></div>
        </b-col>

        <b-col cols="12" md="5" class="d-none d-md-block py-md-3 py-2 px-3">
          <div class="imgbox">
            <img class="img-parallax imgproject h400" style="
     background-image: url(/images/previewpretest/pretest10.jpg)"
                 v-prlx.background="{ speed: 0.1 }"></div>
        </b-col>

        <b-col cols="12" md="7" class=" d-md-block py-md-3 py-2 px-3">
          <div class="imgbox">
            <img class="img-parallax imgproject h400 small-dis" style="
     background-image: url(/images/previewpretest/pretest11.jpg)"
                 v-prlx.background="{ speed: 0.1 }"></div>
        </b-col>

        <b-col cols="12" md="12" class="d-none d-md-block py-md-3 py-2 px-3">
          <div class="imgbox">
            <img class="img-parallax imgproject h500" style="
     background-image: url(/images/previewpretest/pretest12.jpg)"
                 v-prlx.background="{ speed: 0.1 }"></div>
        </b-col>








      </b-row>

      <ProjectNextPrevious
        thumbnail="/images/covers/next/qu-next.jpg"
        class="column card-large biowhite quattriny"
        to="quattriny"
        pill1="Branding"
        pill2="Copywriting"
        pill3="Visual"
        nextproject="Quattriny"
        bionext="Ironic fiction-branding of a cash provider payment company"
      />


    </div>


    <PortfolioFooter/>
  </div>


</template>

<script>
export default {
  name: 'preview-pretest',
}


</script>


<style>

.cover-mobile{
  width: 100%;
  height: 300px;
  background-size: contain;
  background-position: center;
  border-radius: 20px;
  overflow: hidden;

  img{
    width: 100%;
  }
}





.previewpretest .subtitle {
  max-width: 55%;
  line-height: 120%;
}

@media (max-width: 768px) {

  .previewpretest .subtitle {
    max-width: 90%;
  }

  .small-dis{
    height: 300px;
  }



}

</style>

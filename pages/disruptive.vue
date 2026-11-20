<template>

  <div class="disruptive">

    <div class="container mt-4">

      <ProjectHeader/>

      <Project-Intro
        title="Disruptive"
        :subtitle="project.bio" :project-type="project.projectType" :pill1="project.pill1" :pill2="project.pill2" :pill3="project.pill3" />

      <div cols="12" md="12" class=" mt-md-0 py-md-3 py-md-2 d-none d-md-block "
      >



        <img alt="" role="img" aria-label="Disruptive exhibition identity with illustrated figures" v-responsive-background="'/images/covers/hero/disruptive.jpg'" data-image-src="/images/covers/hero/disruptive.jpg" class="cover-parallax"




             data-parallax-image v-parallax>
      </div>


      <div cols="12" class="pt-0 my-4 cover-mobile d-block d-md-none" >

        <PortfolioImage alt="Disruptive exhibition identity with illustrated figures" class=""
     src="/images/covers/sm/disruptive_sm.jpg"
 loading="eager" fetchpriority="high" style="height: auto;" />

      </div>

      <ProjectDescription
        :description="project.overview"
        team="A. Bocchio, G. Bonadei, M. Bruno, M. Pari, <br> F. Pozzi, T. Prinetti, A. Silvano, D. Zoppi"
        role="Brand Identity, UX-UI, Keynote Presentation"
        delivery="Exhibition for Meeting di Rimini, 2021"
        class="my-md-3"
      >

        <template #link>
          <div class="mt-md-4 mt-4">
            <a href="https://disruptive.meetingrimini.org/en/" target="_blank">
              <ProjectLink textlink="Visit the Website"></ProjectLink>
            </a>
          </div>
        </template>

      </ProjectDescription>

      <div>

      </div>

      <b-row class="mt-4">

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" aria-label="Disruptive digital exhibition homepage" v-responsive-background="'/images/disruptive/disruptive1.jpg'" data-image-src="/images/disruptive/disruptive1.jpg" class="img-parallax imgproject h600"
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="12" class=" d-md-block py-md-3 py-2 px-3">
        <div class="imgbox">
          <img alt="" role="img" aria-label="Wireframes of the exhibition story cards" v-responsive-background="'/images/disruptive/disruptive2.jpg'" data-image-src="/images/disruptive/disruptive2.jpg" class="img-parallax imgproject h400"
               data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" aria-label="Visual design of blue and pink mobile story cards" v-responsive-background="'/images/disruptive/disruptive3.jpg'" data-image-src="/images/disruptive/disruptive3.jpg" class="img-parallax imgproject h500"
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="6" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" aria-label="Exhibition story page with an illustrated silhouette" v-responsive-background="'/images/disruptive/disruptive4.jpg'" data-image-src="/images/disruptive/disruptive4.jpg" class="img-parallax imgproject h400 small-dis"
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="6" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" aria-label="Long-form article and related stories in the exhibition" v-responsive-background="'/images/disruptive/disruptive5.jpg'" data-image-src="/images/disruptive/disruptive5.jpg" class="img-parallax imgproject h400 small-dis"
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">

          <ProjectDescription2

            title="Content and Sections"

            description="After a careful analysis of the digital exhibition sector, a card-based navigation with an Instagram-story style of interaction was chosen. The platform is divided into three macro sections, each containing cards with the main content of text, infographics, illustrations, photos or videos, with the possibility of going deeper with a long read."

          /> </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" aria-label="Three colour-coded exhibition section cards" v-responsive-background="'/images/disruptive/disruptive6.jpg'" data-image-src="/images/disruptive/disruptive6.jpg" class="img-parallax imgproject h400"
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" aria-label="Collection of illustrated Disruptive web pages" v-responsive-background="'/images/disruptive/disruptive7.jpg'" data-image-src="/images/disruptive/disruptive7.jpg" class="img-parallax imgproject h600"
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">

          <ProjectDescription2

            title="Exhibition"

            description="The exhibition was then brought into the physical space of the 2021 Rimini Meeting. The challenge was to create a new space for content that was originally designed for digital platforms only, due to COVID-19 restrictions. The physical space was designed to complement the digital approach of the online exhibition, hosting videos and digital presentations."          /> </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" aria-label="Audience watching a presentation at the physical exhibition" v-responsive-background="'/images/disruptive/disruptive8.jpg'" data-image-src="/images/disruptive/disruptive8.jpg" class="img-parallax imgproject h600"
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="7" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" aria-label="Exhibition presenter speaking to visitors" v-responsive-background="'/images/disruptive/disruptive10.jpg'" data-image-src="/images/disruptive/disruptive10.jpg" class="img-parallax imgproject h500"
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="5" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" aria-label="Disruptive exhibition poster and wayfinding" v-responsive-background="'/images/disruptive/disruptive9.jpg'" data-image-src="/images/disruptive/disruptive9.jpg" class="img-parallax imgproject h500"
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">

          <div style="padding:56.25% 0 0 0;position:relative;" class="projectbox">
            <iframe :title="project.bio + ' — video'" loading="lazy" src="https://player.vimeo.com/video/578387348?h=d40c4360c5&title=0&byline=0&portrait=0"
                    style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>


        </b-col>



      </b-row>

      <ProjectNextPrevious
        thumbnail="/images/covers/next/bn-next.jpg"
        class="column card-large biowhite bottleneck"
        to="/bottleneck"
        nextproject="Bottleneck"
      :pill1="projectContent.bottleneck.pill1" :pill2="projectContent.bottleneck.pill2" :pill3="projectContent.bottleneck.pill3" :bionext="projectContent.bottleneck.bio" />


    </div>


    <PortfolioFooter/>
  </div>


</template>

<script>
import projectContent from '~/utils/project-content'
export default {
  data() { return { project: projectContent.disruptive, projectContent } },
  name: 'it-back',
}


</script>


<style lang="scss">

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




.quartapill {
  visibility: hidden;
}

.disruptive .subtitle {
  max-width: 55%;
  line-height: 120%;
}

@media (max-width: 768px) {

  .disruptive .subtitle {
    max-width: 85%;
  }

  .imgproject .small-dis{
    height: 300px;
  }

  .h400.small-dis{
    height: 300px;
  }



}

</style>

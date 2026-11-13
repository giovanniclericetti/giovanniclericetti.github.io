<template>

  <div class="carachioggia">

    <div class="container mt-4">

      <ProjectHeader/>

      <Project-Intro
        title="Cara Chioggia ti scrivo"
        :subtitle="project.bio"
      :pill1="project.pill1" :pill2="project.pill2" :pill3="project.pill3" />

      <div cols="12" md="12" class=" mt-md-0 py-md-3 py-md-2 d-none d-md-block respowidth"
      >

        <img v-responsive-background="'/images/covers/hero/carachioggia.jpg'" data-image-src="/images/covers/hero/carachioggia.jpg" class="cover-parallax"

             data-parallax-image v-parallax>
      </div>


      <div cols="12" class="pt-0 my-4 cover-mobile d-block d-md-none" >

        <PortfolioImage class=""
             src="/images/covers/sm/carachioggia_sm.jpg"
 loading="lazy" fetchpriority="high" style="height: auto;" />

      </div>

      <ProjectDescription
        :description="project.overview"
        team="A. Catania, G. Fulghieri, L. Tassetto"
        role="Brand Identity, UX-UI, Art Direction, Keynote Presentation, Social Media, Coding (Wordpress)"
        delivery="Final Synthesis Master Lab, 2023"
        class="my-md-3"
      >

      </ProjectDescription>

      <div>

      </div>

      <b-row class="mt-4">

        <b-col cols="12" md="5" class="d-none d-md-block py-md-3 py-2 px-3">
          <div class="imgbox bg-primary">
            <img v-responsive-background="'/images/carachioggia/carachioggia1b.svg'" data-image-src="/images/carachioggia/carachioggia1b.svg" class="imgproject h400 "
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="7" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img v-responsive-background="'/images/carachioggia/carachioggia1.svg'" data-image-src="/images/carachioggia/carachioggia1.svg" class="img-parallax imgproject h400 small-quattriny"
                 data-parallax-image v-parallax></div>
        </b-col>



        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img v-responsive-background="'/images/carachioggia/carachioggia2.jpg'" data-image-src="/images/carachioggia/carachioggia2.jpg" class="img-parallax imgproject h600 small-quattriny" id="cc-fotopc"
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">
        <ProjectDescription2

          title="An Immersive Digital Experience"
            description="The platform is designed as a scroll-driven narrative, where the experience unfolds gradually as visitors move through each story. Starting from an illustrated map of Chioggia, users can select a letter and explore its connection to specific people and places. As they scroll, new elements are progressively revealed, creating a sense of discovery and building a deeper understanding of the narrative. Particular attention was given to the relationship between editorial layout, typography, scrolling behaviour, illustrations and podcast audio. These elements were designed to work together, shaping the rhythm of the experience and transforming reading into a more immersive form of exploration. Rather than presenting all the information at once, the experience uses progressive disclosure to guide visitors through the narrative, creating moments of anticipation, discovery and emotional engagement."

        /> </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">

          <div style="padding:56.25% 0 0 0;position:relative;" class="projectbox">
            <iframe loading="lazy" src="https://player.vimeo.com/video/902889846?h=3c0d8ace14&title=0&byline=0&portrait=0"
                    style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>

          <script src="https://player.vimeo.com/api/player.js"></script>

        </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3 ">
          <div class="imgbox ">
            <img v-responsive-background="'/images/carachioggia/carachioggia5.svg'" data-image-src="/images/carachioggia/carachioggia5.svg" class="small-chioggia img-parallax imgproject h400 "
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img v-responsive-background="'/images/carachioggia/carachioggia6.jpg'" data-image-src="/images/carachioggia/carachioggia6.jpg" class="img-parallax imgproject h600 small-quattriny"
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img v-responsive-background="'/images/carachioggia/carachioggia7.jpg'" data-image-src="/images/carachioggia/carachioggia7.jpg" class="img-parallax imgproject h500 small-quattriny"
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img v-responsive-background="'/images/carachioggia/carachioggia8.jpg'" data-image-src="/images/carachioggia/carachioggia8.jpg" class="img-parallax imgproject h600 small-quattriny"
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">
          <ProjectDescription2

            title="Research &amp; Narrative Design"
            description="The project was developed through research into Chioggia's fishing culture, combining field observations, interviews and an exploration of the area's social and geographical identity. The collected material was transformed into a series of personal narratives and letters connecting characters, memories and locations. The editorial structure, visual compositions and illustrations were designed to make these stories accessible and engaging, while preserving their connection to the territory. Each narrative was approached as a complete experience, where written content, visual rhythm, interaction and audio contribute to a coherent storytelling system."
          /> </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img v-responsive-background="'/images/carachioggia/carachioggia9.jpg'" data-image-src="/images/carachioggia/carachioggia9.jpg" class="small-chioggia img-parallax imgproject h500 small-quattriny"
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img v-responsive-background="'/images/carachioggia/carachioggia10.jpg'" data-image-src="/images/carachioggia/carachioggia10.jpg" class="small-chioggia img-parallax imgproject h600 small-quattriny"
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="12" class="d-none d-md-block py-md-3 py-2 px-3">
          <div class="imgbox">
            <img v-responsive-background="'/images/carachioggia/carachioggia11.jpg'" data-image-src="/images/carachioggia/carachioggia11.jpg" class="img-parallax imgproject h400 " style="height: 350px;
     "
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img v-responsive-background="'/images/carachioggia/carachioggia12.jpg'" data-image-src="/images/carachioggia/carachioggia12.jpg" class="small-chioggia img-parallax imgproject h500 "
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="6" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img v-responsive-background="'/images/carachioggia/carachioggia13.jpg'" data-image-src="/images/carachioggia/carachioggia13.jpg" class="img-parallax imgproject h400 "
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="6" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img v-responsive-background="'/images/carachioggia/carachioggia14.jpg'" data-image-src="/images/carachioggia/carachioggia14.jpg" class="img-parallax imgproject h400 "
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">
          <ProjectDescription2

            title="Beyond the Screen"
            description="The digital platform is part of a broader communication system designed to reconnect the stories with the places in which they originated. Physical installations and complementary communication materials extend the experience throughout Chioggia, encouraging visitors to discover the locations featured in the narratives and contribute new stories. The result is a connected experience where digital interaction, editorial storytelling, podcast content and physical exploration become complementary ways of discovering the territory."
          /> </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img v-responsive-background="'/images/carachioggia/carachioggia15.jpg'" data-image-src="/images/carachioggia/carachioggia15.jpg" class="img-parallax imgproject h500 "
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img v-responsive-background="'/images/carachioggia/carachioggia17.jpg'" data-image-src="/images/carachioggia/carachioggia17.jpg" class="img-parallax imgproject h600 "
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="12" class="d-none py-md-3 py-2 px-3">
          <div class="imgbox">
            <img v-responsive-background="'/images/carachioggia/carachioggia18.jpg'" data-image-src="/images/carachioggia/carachioggia18.jpg" class="img-parallax imgproject h600 "
                 data-parallax-image v-parallax></div>
        </b-col>

      </b-row>


      <ProjectNextPrevious
        thumbnail="/images/covers/next/avi-next.svg"
        class="column card-large biowhite avi"
        to="/audiovisualidentity"
        nextproject="Audiovisual Identity"
      :pill1="projectContent.audiovisualidentity.pill1" :pill2="projectContent.audiovisualidentity.pill2" :pill3="projectContent.audiovisualidentity.pill3" :bionext="projectContent.audiovisualidentity.bio" />


    </div>


    <PortfolioFooter/>
  </div>


</template>

<script>
import projectContent from '~/utils/project-content'
export default {
  data() { return { project: projectContent.carachioggia, projectContent } },
  name: 'it-back',
}


</script>


<style>

.quattriny .subtitle {
  max-width: 90%;
}



@media (max-width: 768px) {

  .subtitle {
    max-width: 90%;
  }

  #cc-fotopc{
    height: 300px;
  }

  .small-quattriny{
    height: 200px;
  }

  .small-chioggia {
    background-size: contain;
    background-color: #F8E7D6;
  }


  .extrasmall-quattriny{
    height: 180px;
  }





}



</style>



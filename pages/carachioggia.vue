<template>

  <div class="carachioggia">

    <div class="container mt-4">

      <ProjectHeader/>

      <Project-Intro
        title="Cara Chioggia ti scrivo"
        :subtitle="project.bio" :project-type="project.projectType"
      :pill1="project.pill1" :pill2="project.pill2" :pill3="project.pill3" />

      <div cols="12" md="12" class=" mt-md-0 py-md-3 py-md-2 d-none d-md-block respowidth"
      >

        <img alt="" role="img" :aria-label="$t(&quot;Printed letters and illustrated maps for Cara Chioggia ti scrivo&quot;)" v-responsive-background="'/images/covers/hero/carachioggia.jpg'" data-image-src="/images/covers/hero/carachioggia.jpg" class="cover-parallax"

             data-parallax-image v-parallax>
      </div>


      <div cols="12" class="pt-0 my-4 cover-mobile d-block d-md-none" >

        <PortfolioImage :alt="$t(&quot;Printed letters and illustrated maps for Cara Chioggia ti scrivo&quot;)" class=""
             src="/images/covers/sm/carachioggia_sm.jpg"
 loading="eager" fetchpriority="high" style="height: auto;" />

      </div>

      <ProjectDescription
        overview-title="Introduction"
        role-title="My contribution"
        :description="project.overview"
        team="A. Catania, G. Fulghieri, L. Tassetto"
        :role="project.contribution"
        delivery="Final Synthesis Master Lab, 2023"
        class="my-md-3"
      >
        <template #role-copy>
          <ProjectCopy :text="project.contribution" :emphasis="project.contributionEmphasis" />
        </template>
        <template #overview-copy>
          <ProjectCopy :text="project.overview" :emphasis="project.emphasis" />
        </template>


      </ProjectDescription>

      <div>

      </div>

      <b-row class="mt-4">

        <b-col cols="12" md="5" class="d-none d-md-block py-md-3 py-2 px-3">
          <div class="imgbox bg-primary">
            <img alt="" role="img" :aria-label="$t(&quot;Cara Chioggia ti scrivo wordmark&quot;)" v-responsive-background="'/images/carachioggia/carachioggia1b.svg'" data-image-src="/images/carachioggia/carachioggia1b.svg" class="imgproject h400 "
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="7" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" :aria-label="$t(&quot;Framework connecting personal letters, an illustrated map and narrative podcasts&quot;)" v-responsive-background="'/images/carachioggia/carachioggia1.svg'" data-image-src="/images/carachioggia/carachioggia1.svg" class="img-parallax imgproject h400 small-quattriny"
                 data-parallax-image v-parallax></div>
        </b-col>



        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" :aria-label="$t(&quot;Illustrated Chioggia map on the website, displayed on a laptop&quot;)" v-responsive-background="'/images/carachioggia/carachioggia2.jpg'" data-image-src="/images/carachioggia/carachioggia2.jpg" class="img-parallax imgproject h600 small-quattriny" id="cc-fotopc"
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">
        <ProjectDescription2
            :title="$t(project.sections[0].title, 'carachioggia.sections.0.title')"
            :description="project.sections[0].description" :emphasis="project.sections[0].emphasis"
          /> </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">

          <div style="padding:56.25% 0 0 0;position:relative;" class="projectbox">
            <iframe :title="$t(project.bio + ' — video')" loading="lazy" src="https://player.vimeo.com/video/902889846?h=3c0d8ace14&title=0&byline=0&portrait=0"
                    style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>

        </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3 ">
          <div class="imgbox ">
            <img alt="" role="img" :aria-label="$t(&quot;Five-stage journey through the digital storytelling platform&quot;)" v-responsive-background="'/images/carachioggia/carachioggia5.svg'" data-image-src="/images/carachioggia/carachioggia5.svg" class="small-chioggia img-parallax imgproject h400 "
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" :aria-label="$t(&quot;Night-time map interface connecting locations and letters&quot;)" v-responsive-background="'/images/carachioggia/carachioggia6.jpg'" data-image-src="/images/carachioggia/carachioggia6.jpg" class="img-parallax imgproject h600 small-quattriny"
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" :aria-label="$t(&quot;Website map and letter preview on desktop and mobile&quot;)" v-responsive-background="'/images/carachioggia/carachioggia7.jpg'" data-image-src="/images/carachioggia/carachioggia7.jpg" class="img-parallax imgproject h500 small-quattriny"
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" :aria-label="$t(&quot;Illustrated characters, maps and field research photographs&quot;)" v-responsive-background="'/images/carachioggia/carachioggia8.jpg'" data-image-src="/images/carachioggia/carachioggia8.jpg" class="img-parallax imgproject h600 small-quattriny"
                 data-parallax-image v-parallax></div>
        </b-col>



        <b-col cols="12" md="12" class="py-md-3 py-2 px-3">
          <ProjectDescription2 :title="$t(project.sections[1].title, 'carachioggia.sections.1.title')" :description="project.sections[1].description" :emphasis="project.sections[1].emphasis" />
        </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" :aria-label="$t(&quot;Narrative structure and story planning cards&quot;)" v-responsive-background="'/images/carachioggia/carachioggia9.jpg'" data-image-src="/images/carachioggia/carachioggia9.jpg" class="small-chioggia img-parallax imgproject h500 small-quattriny"
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" :aria-label="$t(&quot;Annotated structure of a letter and its illustrated location&quot;)" v-responsive-background="'/images/carachioggia/carachioggia10.jpg'" data-image-src="/images/carachioggia/carachioggia10.jpg" class="small-chioggia img-parallax imgproject h600 small-quattriny"
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="12" class="d-none d-md-block py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" :aria-label="$t(&quot;Illustrated characters from the Chioggia stories&quot;)" v-responsive-background="'/images/carachioggia/carachioggia11.jpg'" data-image-src="/images/carachioggia/carachioggia11.jpg" class="img-parallax imgproject h400 " style="height: 350px;
     "
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" :aria-label="$t(&quot;Illustrated objects, buildings and characters for the map&quot;)" v-responsive-background="'/images/carachioggia/carachioggia12.jpg'" data-image-src="/images/carachioggia/carachioggia12.jpg" class="small-chioggia img-parallax imgproject h500 "
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="6" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" :aria-label="$t(&quot;Detail of the illustrated Chioggia map in daylight&quot;)" v-responsive-background="'/images/carachioggia/carachioggia13.jpg'" data-image-src="/images/carachioggia/carachioggia13.jpg" class="img-parallax imgproject h400 "
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="6" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" :aria-label="$t(&quot;Detail of the illustrated Chioggia map at night&quot;)" v-responsive-background="'/images/carachioggia/carachioggia14.jpg'" data-image-src="/images/carachioggia/carachioggia14.jpg" class="img-parallax imgproject h400 "
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">
          <ProjectDescription2
            :title="$t(project.sections[2].title, 'carachioggia.sections.2.title')"
            :description="project.sections[2].description" :emphasis="project.sections[2].emphasis"
          /> </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" :aria-label="$t(&quot;Three promotional posters featuring the illustrated map&quot;)" v-responsive-background="'/images/carachioggia/carachioggia15.jpg'" data-image-src="/images/carachioggia/carachioggia15.jpg" class="img-parallax imgproject h500 "
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" :aria-label="$t(&quot;Letter collection box and instructions for contributing a story&quot;)" v-responsive-background="'/images/carachioggia/carachioggia17.jpg'" data-image-src="/images/carachioggia/carachioggia17.jpg" class="img-parallax imgproject h600 "
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="12" class="d-none py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" :aria-label="$t(&quot;Printed story materials and illustrated maps&quot;)" v-responsive-background="'/images/carachioggia/carachioggia18.jpg'" data-image-src="/images/carachioggia/carachioggia18.jpg" class="img-parallax imgproject h600 "
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


<style lang="scss">

.quattriny .subtitle {
  max-width: 90%;
}



@media (max-width: 768px) {

  .carachioggia .subtitle {
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



<template>

  <div class="previewpretest">

    <div class="container mt-4">

      <ProjectHeader/>

      <Project-Intro
        title="Preview & Pretest"
        :subtitle="project.bio" :project-type="project.projectType"
        pill4="Event"
      :pill1="project.pill1" :pill2="project.pill2" :pill3="project.pill3" />

      <div cols="12" md="12" class=" mt-md-0 py-md-3 py-md-2 d-none d-md-block "
      >



        <img alt="" role="img" aria-label="Collection of student design work presented at Preview" v-responsive-background="'/images/covers/hero/preview_cover.jpg'" data-image-src="/images/covers/hero/preview_cover.jpg" class="cover-parallax"




             data-parallax-image v-parallax>
      </div>


      <div cols="12" class="pt-0 my-4 cover-mobile d-block d-md-none" >

        <PortfolioImage alt="Collection of student design work presented at Preview" class=""
     src="/images/covers/sm/preview_sm.jpg"
 loading="eager" fetchpriority="high" style="height: auto;" />

      </div>

      <ProjectDescription
        :description="project.overview"
        team="C. Ghio, T. Prinetti, A. Silvano, D. Zoppi"
        role="Event Organization, Social Media, Brand Identity Evolution, Visual, UX-UI, Coding (HTML, CSS, JS, WordPress)"
        delivery="Extracurricular Project for Polimi, 2020-2022"
        class="my-md-3">

        <template #link>
          <div class="mt-md-4 mt-4">
            <a href="https://www.instagram.com/previewpretest.la" target="_blank">
              <ProjectLink textlink="Instagram Profile"></ProjectLink>
            </a>
          </div>
        </template>

      </ProjectDescription>

      <div>

      </div>

      <b-row class="mt-4">

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" aria-label="Preview and Pretest wordmarks in multiple colours" v-responsive-background="'/images/previewpretest/preview1.jpg'" data-image-src="/images/previewpretest/preview1.jpg" class="img-parallax imgproject h400"
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="12" class=" d-md-block py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" aria-label="Preview event and social content on smartphones" v-responsive-background="'/images/previewpretest/preview3.jpg'" data-image-src="/images/previewpretest/preview3.jpg" class="img-parallax imgproject h500"
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">

          <ProjectDescription2

            title="Preview"

            description="Preview is an event where students' projects are shown to prospective students to help them understand which academic course is right for them. It mainly takes place on a single day, but all communications and the showcase website are created to accompany it."

          /> </b-col>

        <b-col cols="12" md="12" class=" d-md-block py-md-3 py-2 px-3">
        <div class="imgbox">
          <img alt="" role="img" aria-label="Preview showcase website on desktop" v-responsive-background="'/images/previewpretest/preview2.jpg'" data-image-src="/images/previewpretest/preview2.jpg" class="img-parallax imgproject h600"
               data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="6" class=" d-md-block py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" aria-label="Preview website grid of student projects" v-responsive-background="'/images/previewpretest/preview4.jpg'" data-image-src="/images/previewpretest/preview4.jpg" class="img-parallax imgproject h400 small-dis"
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="6" class=" d-md-block py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" aria-label="Student project presentation on the Preview website" v-responsive-background="'/images/previewpretest/preview5.jpg'" data-image-src="/images/previewpretest/preview5.jpg" class="img-parallax imgproject h400 small-dis"
                 data-parallax-image v-parallax></div>
        </b-col>



        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">

          <ProjectDescription2

            title="Pretest"

            description="Pretest is a three-day study event in preparation for the Design and Architecture entrance exam, which helps students by explaining topics in lectures, preparing presentations, designing handouts, creating simulations and providing guided study time."

          /> </b-col>

        <b-col cols="12" md="6" class=" d-md-block py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" aria-label="Students attending a Pretest classroom session" v-responsive-background="'/images/previewpretest/pretest6.jpg'" data-image-src="/images/previewpretest/pretest6.jpg" class="img-parallax imgproject h500"
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="6" class=" d-md-block py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" aria-label="Pretest lesson with presentation slides" v-responsive-background="'/images/previewpretest/pretest7.jpg'" data-image-src="/images/previewpretest/pretest7.jpg" class="img-parallax imgproject h500"
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="7" class=" d-md-block py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" aria-label="Students working with printed practice materials" v-responsive-background="'/images/previewpretest/pretest8.jpg'" data-image-src="/images/previewpretest/pretest8.jpg" class="img-parallax imgproject h400 small-dis "
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="5" class="d-none d-md-block py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" aria-label="Pink Pretest booklet cover" v-responsive-background="'/images/previewpretest/pretest9.jpg'" data-image-src="/images/previewpretest/pretest9.jpg" class="img-parallax imgproject h400"
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="5" class="d-none d-md-block py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" aria-label="Student studying with a Pretest booklet" v-responsive-background="'/images/previewpretest/pretest10.jpg'" data-image-src="/images/previewpretest/pretest10.jpg" class="img-parallax imgproject h400"
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="7" class=" d-md-block py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" aria-label="Students collaborating during Pretest" v-responsive-background="'/images/previewpretest/pretest11.jpg'" data-image-src="/images/previewpretest/pretest11.jpg" class="img-parallax imgproject h400 small-dis"
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="12" class="d-none d-md-block py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" aria-label="Pretest volunteer addressing a classroom" v-responsive-background="'/images/previewpretest/pretest12.jpg'" data-image-src="/images/previewpretest/pretest12.jpg" class="img-parallax imgproject h500"
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
  data() { return { project: projectContent.previewpretest, projectContent } },
  name: 'preview-pretest',
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

<template>

  <div class="bottleneck">

    <div class="container mt-4">

      <ProjectHeader/>

      <Project-Intro
        title="Bottleneck"
        :subtitle="project.bio" :project-type="project.projectType"
        pill4="Coding" :pill1="project.pill1" :pill2="project.pill2" :pill3="project.pill3" />

      <div cols="12" md="12" class=" mt-md-0 py-md-3 py-md-2 d-none d-md-block ">

        <img alt="" role="img" aria-label="Bottleneck notification platform on desktop and mobile" v-responsive-background="'/images/covers/hero/bottleneck.jpg'" data-image-src="/images/covers/hero/bottleneck.jpg" class="cover-parallax"
             data-parallax-image v-parallax>
      </div>


      <div cols="12" class="pt-0 my-4 cover-mobile d-block d-md-none" >

        <PortfolioImage alt="Bottleneck notification platform on desktop and mobile" class=""
     src="/images/covers/sm/bottleneck_sm.jpg"
 loading="eager" fetchpriority="high" style="height: auto;" />

      </div>

      <ProjectDescription
        overview-title="Introduction"
        role-title="My contribution"
        :description="project.overview"        team="S. Bonfanti, A. Burchiani, T. Prinetti"
        :role="project.contribution"
        delivery="Interaction Design Lab, 2021-2022"
        class="my-md-3"
      >
        <template #role-copy>
          <ProjectCopy :text="project.contribution" :emphasis="project.contributionEmphasis" />
        </template>
        <template #overview-copy>
          <ProjectCopy :text="project.overview" :emphasis="project.emphasis" />
        </template>


        <template #link>
          <div class="mt-md-4 mt-4 pt-md-1">
            <a href="https://bottleneckai.vercel.app/" target="_blank">
              <ProjectLink textlink="Bottleneck Website"></ProjectLink>
            </a>
          </div>
        </template>

      </ProjectDescription>

      <div>

      </div>

      <b-row class="mt-4">

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" aria-label="Bottleneck dashboard on laptop and smartphone" v-responsive-background="'/images/bottleneck/bottleneck1.jpg'" data-image-src="/images/bottleneck/bottleneck1.jpg" class="img-parallax imgproject h600"
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">

          <div style="padding:56.25% 0 0 0;position:relative;" class="projectbox">
            <iframe :title="project.bio + ' — video'" loading="lazy" src="https://player.vimeo.com/video/838849711?h=3e45c03c7b&title=0&byline=0&portrait=0"
                    style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>

        </b-col>

        <b-col cols="12" md="12">

        <ProjectDescription2
            :title="project.sections[0].title"
            :description="project.sections[0].description" :emphasis="project.sections[0].emphasis"
          /> </b-col>

        <b-col cols="12" md="8" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" aria-label="Notification taxonomy by urgency and application" v-responsive-background="'/images/bottleneck/bottleneck2.jpg'" data-image-src="/images/bottleneck/bottleneck2.jpg" class="img-parallax imgproject h500"
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="4" class="d-none d-md-block py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" aria-label="Flow diagram connecting Bottleneck features" v-responsive-background="'/images/bottleneck/bottleneck3.jpg'" data-image-src="/images/bottleneck/bottleneck3.jpg" class="img-parallax imgproject h500"
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="12" class="d-none d-md-block py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" aria-label="Bottleneck information architecture diagram" v-responsive-background="'/images/bottleneck/bottleneck5.jpg'" data-image-src="/images/bottleneck/bottleneck5.jpg" class="img-parallax imgproject h500"
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="12" class="d-md-block py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" aria-label="Bottleneck interface shown alongside research diagrams" v-responsive-background="'/images/bottleneck/bottleneck6.jpg'" data-image-src="/images/bottleneck/bottleneck6.jpg" class="img-parallax imgproject h500"
                 data-parallax-image v-parallax></div>
        </b-col>



        <b-col cols="12" md="12" class="py-md-3 py-2 px-3">
          <ProjectDescription2 :title="project.sections[1].title" :description="project.sections[1].description" :emphasis="project.sections[1].emphasis" />
        </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">

          <div style="overflow: hidden" class="bot-video p-0 m-0 projectbox d-flex justify-content-center align-items-center">
            <ProjectMotion src="/images/bottleneck/feature1.mp4" poster="/images/video-posters/feature1.jpg" :width="1920" :height="1239" :label="project.bio" />
          </div>

        </b-col>

        <b-col cols="12" md="6" class=" py-md-3 py-2 px-3">

          <div style="overflow: hidden" class=" p-0 m-0 projectbox d-flex  justify-content-center align-items-center">
            <ProjectMotion src="/images/bottleneck/feature3.mp4" poster="/images/video-posters/feature3.jpg" :width="1920" :height="1239" :label="project.bio" />
          </div>

        </b-col>

        <b-col cols="12" md="6" class=" py-md-3 py-2 px-3">

          <div style="overflow: hidden" class=" p-0 m-0 projectbox d-flex  justify-content-center align-items-center">
            <ProjectMotion src="/images/bottleneck/feature2.mp4" poster="/images/video-posters/feature2.jpg" :width="1920" :height="1239" :label="project.bio" />
          </div>

        </b-col>



        <b-col>
        <ProjectDescription2
            :title="project.sections[2].title"
            :description="project.sections[2].description" :emphasis="project.sections[2].emphasis"
          /> </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">

          <div style="overflow: hidden" class="bot-video p-0 m-0 projectbox d-flex justify-content-center align-items-center">
            <ProjectMotion src="/images/bottleneck/designsystem.mp4" poster="/images/video-posters/designsystem.jpg" :width="2896" :height="1402" :label="project.bio" />
          </div>

        </b-col>

        <b-col cols="12" md="12" class="d-block d-md-none  py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" aria-label="Overview of Bottleneck interface layouts and cards" v-responsive-background="'/images/bottleneck/bottleneck4.jpg'" data-image-src="/images/bottleneck/bottleneck4.jpg" class="img-parallax imgproject " style="height: 250px;
     "
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="12" class="d-none d-md-block d-md-block py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" aria-label="Overview of Bottleneck interface layouts and cards" v-responsive-background="'/images/bottleneck/bottleneck4.jpg'" data-image-src="/images/bottleneck/bottleneck4.jpg" class="img-parallax imgproject "
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="12" class="d-none d-md-block py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" aria-label="Bottleneck integration with desktop operating systems" v-responsive-background="'/images/bottleneck/bottleneck10.jpg'" data-image-src="/images/bottleneck/bottleneck10.jpg" class="img-parallax imgproject h500"
                 data-parallax-image v-parallax></div>
        </b-col>




      </b-row>

      <ProjectNextPrevious
        thumbnail="/images/covers/next/pr-next.jpg"
        class="column card-large biowhite previewpretest"
        to="/previewpretest"
        nextproject="Preview & Pretest"
      :pill1="projectContent.previewpretest.pill1" :pill2="projectContent.previewpretest.pill2" :pill3="projectContent.previewpretest.pill3" :bionext="projectContent.previewpretest.bio" />


    </div>


    <PortfolioFooter/>
  </div>


</template>

<script>
import projectContent from '~/utils/project-content'
export default {
  data() { return { project: projectContent.bottleneck, projectContent } },
  name: 'it-back',
}


</script>


<style lang="scss">

.bottleneck .subtitle{
  width: 80%;
}

.bot-video{
  max-height: 830px;
}


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

@media (max-width: 768px) {

  .bottleneck .subtitle{
    width: 100%;
  }

}


</style>

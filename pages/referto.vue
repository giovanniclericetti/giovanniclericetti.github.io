<template>

  <div class="referto">

    <div class="container mt-4">

      <ProjectHeader/>

      <Project-Intro
        title="Referto Magazine"
        :subtitle="project.bio" :project-type="project.projectType"

      :pill1="project.pill1" :pill2="project.pill2" :pill3="project.pill3" />

      <div cols="12" md="12" class=" mt-md-0 py-md-3 py-md-2 d-none d-md-block "
      >



        <img alt="" role="img" :aria-label="$t(&quot;Referto magazine with editorial photography and a printed spread&quot;)" v-responsive-background="'/images/covers/hero/referto.jpg'" data-image-src="/images/covers/hero/referto.jpg" class="cover-parallax"




             data-parallax-image v-parallax>
      </div>


      <div cols="12" class="pt-0 my-4 cover-mobile d-block d-md-none" >

        <PortfolioImage :alt="$t(&quot;Referto magazine with editorial photography and a printed spread&quot;)" class=""
     src="/images/covers/sm/referto_sm.jpg"
 loading="eager" fetchpriority="high" style="height: auto;" />

      </div>

      <ProjectDescription
        overview-title="Introduction"
        role-title="My contribution"
        :description="project.overview"        team="S. Bonfanti, A. Burchiani, E. Ceriani, T. Prinetti"
        :role="project.contribution"
        delivery="Editorial Design Lab, 2023"
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

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" :aria-label="$t(&quot;Reader holding an open red and white Referto spread&quot;)" v-responsive-background="'/images/referto/referto1.jpg'" data-image-src="/images/referto/referto1.jpg" class="img-parallax imgproject h600"
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="6" class=" d-md-block py-md-3 py-2 px-3">
        <div class="imgbox">
          <img alt="" role="img" :aria-label="$t(&quot;Referto magazine cover held in a reader’s hands&quot;)" v-responsive-background="'/images/referto/referto3.jpg'" data-image-src="/images/referto/referto3.jpg" class="img-parallax imgproject ref-3"
               data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="6" class=" py-md-3 py-2 px-3">
          <div class="imgbox pb-0 mb-4">
            <img alt="" role="img" :aria-label="$t(&quot;Black and white photographic spread in Referto&quot;)" v-responsive-background="'/images/referto/referto4.jpg'" data-image-src="/images/referto/referto4.jpg" class="img-parallax imgproject h400" style="height: 350px;
     "
                 data-parallax-image v-parallax></div>

          <div class="pt-2">
          <div class="imgbox ">
            <img alt="" role="img" :aria-label="$t(&quot;Stack of red stitched Referto magazines&quot;)" v-responsive-background="'/images/referto/referto5.jpg'" data-image-src="/images/referto/referto5.jpg" class="img-parallax imgproject h600" style="height: 250px;
     "
                 data-parallax-image v-parallax></div>
          </div>         </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" :aria-label="$t(&quot;Referto spread combining portrait photography and text&quot;)" v-responsive-background="'/images/referto/referto2.jpg'" data-image-src="/images/referto/referto2.jpg" class="img-parallax imgproject h500"
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="4" class=" py-md-3 py-2 px-3 d-none d-md-block">
          <div class="imgbox pb-0 mb-4">
            <img alt="" role="img" :aria-label="$t(&quot;Red Referto contents spread with white typography&quot;)" v-responsive-background="'/images/referto/referto15.jpg'" data-image-src="/images/referto/referto15.jpg" class=" img-parallax imgproject " style="height: 250px;
     "
                 data-parallax-image v-parallax></div>

          <div class="pt-2">
            <div class="imgbox  d-none d-md-block">
              <img alt="" role="img" :aria-label="$t(&quot;Close-up of Referto cover typography&quot;)" v-responsive-background="'/images/referto/referto16.jpg'" data-image-src="/images/referto/referto16.jpg" class="img-parallax imgproject" style="height: 250px;
     "
                   data-parallax-image v-parallax></div>
          </div>         </b-col>

          <b-col cols="12" md="8" class=" py-md-3 py-2 px-3">

            <div style="overflow: hidden" class="p-0 m-0 projectbox d-flex ref-video justify-content-center align-items-center">
              <ProjectMotion src="/images/referto/referto_gif.mp4" poster="/images/video-posters/referto_gif.jpg" :width="1400" :height="1024" :label="$t(project.bio)" />
            </div>


          </b-col>



        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">

          <ProjectDescription2
            :title="$t(project.sections[0].title)"
            :description="project.sections[0].description" :emphasis="project.sections[0].emphasis"
          /> </b-col>

        <b-col cols="12" md="12" class="d-none d-md-block py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" :aria-label="$t(&quot;Overview of Referto magazine spreads&quot;)" v-responsive-background="'/images/referto/referto6.jpg'" data-image-src="/images/referto/referto6.jpg" class="img-parallax imgproject h600" style="height: 630px;
     "
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="12" class=" d-md-block py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" :aria-label="$t(&quot;Reader opening a red typographic Referto spread&quot;)" v-responsive-background="'/images/referto/referto7.jpg'" data-image-src="/images/referto/referto7.jpg" class="img-parallax imgproject h600"
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="6" class=" d-md-block py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" :aria-label="$t(&quot;Referto digital magazine interface on a laptop&quot;)" v-responsive-background="'/images/referto/referto11.jpg'" data-image-src="/images/referto/referto11.jpg" class="img-parallax imgproject h400 ref-pc"
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="6" class="d-none d-md-block py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" :aria-label="$t(&quot;Printed magazines displayed at the Referto exhibition&quot;)" v-responsive-background="'/images/referto/referto12.jpg'" data-image-src="/images/referto/referto12.jpg" class="img-parallax imgproject h400"
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">
          <ProjectDescription2
            :title="$t(project.sections[1].title)"
            :description="project.sections[1].description" :emphasis="project.sections[1].emphasis"
          /> </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">

          <div style="padding:56.25% 0 0 0;position:relative;" class="projectbox">

            <iframe :title="$t(project.bio) + ' — video'" loading="lazy" src="https://player.vimeo.com/video/892686972?h=af631d4405&title=0&byline=0&portrait=0"
                    style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>

        </b-col>

        <b-col cols="12" md="12" class=" d-md-block py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" :aria-label="$t(&quot;Reader browsing Referto magazine&quot;)" v-responsive-background="'/images/referto/referto13.jpg'" data-image-src="/images/referto/referto13.jpg" class="img-parallax imgproject h500"
                 data-parallax-image v-parallax></div>
        </b-col>



      </b-row>

      <ProjectNextPrevious
        thumbnail="/images/covers/next/sd-next.jpg"
        class="column card-large biowhite sourdata"
        to="/sourdata"
        nextproject="SourData"
      :pill1="projectContent.sourdata.pill1" :pill2="projectContent.sourdata.pill2" :pill3="projectContent.sourdata.pill3" :bionext="projectContent.sourdata.bio" />


    </div>


    <PortfolioFooter/>
  </div>


</template>

<script>
import projectContent from '~/utils/project-content'
export default {
  data() { return { project: projectContent.referto, projectContent } },
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

.referto .subtitle{
  max-width: 55%;
}

.ref-3{
  height: 630px;
}

.ref-video{
  height: 530px;
}

.quartapill {
  visibility: hidden;
}

@media (max-width: 768px) {

  .referto .subtitle   {
    max-width: 100%;
  }

  .ref-pc{
    height: 270px;
  }

  .ref-video{
    height: 270px;
  }

  .ref-3{
    height: 400px;
  }
}

</style>

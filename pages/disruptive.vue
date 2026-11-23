<template>

  <div class="disruptive">

    <div class="container mt-4">

      <ProjectHeader/>

      <Project-Intro
        title="Disruptive"
        :subtitle="project.bio" :project-type="project.projectType" :pill1="project.pill1" :pill2="project.pill2" :pill3="project.pill3" />

      <div cols="12" md="12" class=" mt-md-0 py-md-3 py-md-2 d-none d-md-block "
      >


        <img alt="" role="img" :aria-label="$t(&quot;Disruptive exhibition identity with illustrated figures&quot;)" v-responsive-background="'/images/covers/hero/disruptive.jpg'" data-image-src="/images/covers/hero/disruptive.jpg" class="cover-parallax"




             data-parallax-image v-parallax>
      </div>


      <div cols="12" class="pt-0 my-4 cover-mobile d-block d-md-none" >

        <PortfolioImage :alt="$t(&quot;Disruptive exhibition identity with illustrated figures&quot;)" class=""
     src="/images/covers/sm/disruptive_sm.jpg"
 loading="eager" fetchpriority="high" style="height: auto;" />

      </div>

      <ProjectDescription
        overview-title="Introduction"
        role-title="My contribution"
        :description="project.overview"
        team="A. Bocchio, G. Bonadei, M. Bruno, M. Pari, <br> F. Pozzi, T. Prinetti, A. Silvano, D. Zoppi"
        :role="project.contribution"
        delivery="Exhibition for Meeting di Rimini, 2021"
        class="my-md-3"
      >
        <template #role-copy>
          <ProjectCopy :text="project.contribution" :emphasis="project.contributionEmphasis" />
        </template>
        <template #overview-copy>
          <ProjectCopy :text="project.overview" :emphasis="project.emphasis" />
        </template>


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
            <img alt="" role="img" :aria-label="$t(&quot;Disruptive digital exhibition homepage&quot;)" v-responsive-background="'/images/disruptive/disruptive1.jpg'" data-image-src="/images/disruptive/disruptive1.jpg" class="img-parallax imgproject h600"
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="12" class=" d-md-block py-md-3 py-2 px-3">
        <div class="imgbox">
          <img alt="" role="img" :aria-label="$t(&quot;Wireframes of the exhibition story cards&quot;)" v-responsive-background="'/images/disruptive/disruptive2.jpg'" data-image-src="/images/disruptive/disruptive2.jpg" class="img-parallax imgproject h400"
               data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" :aria-label="$t(&quot;Visual design of blue and pink mobile story cards&quot;)" v-responsive-background="'/images/disruptive/disruptive3.jpg'" data-image-src="/images/disruptive/disruptive3.jpg" class="img-parallax imgproject h500"
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="6" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" :aria-label="$t(&quot;Exhibition story page with an illustrated silhouette&quot;)" v-responsive-background="'/images/disruptive/disruptive4.jpg'" data-image-src="/images/disruptive/disruptive4.jpg" class="img-parallax imgproject h400 small-dis"
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="6" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" :aria-label="$t(&quot;Long-form article and related stories in the exhibition&quot;)" v-responsive-background="'/images/disruptive/disruptive5.jpg'" data-image-src="/images/disruptive/disruptive5.jpg" class="img-parallax imgproject h400 small-dis"
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">

          <ProjectDescription2
            :title="$t(project.sections[0].title)"
            :description="project.sections[0].description" :emphasis="project.sections[0].emphasis"
          /> </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" :aria-label="$t(&quot;Three colour-coded exhibition section cards&quot;)" v-responsive-background="'/images/disruptive/disruptive6.jpg'" data-image-src="/images/disruptive/disruptive6.jpg" class="img-parallax imgproject h400"
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" :aria-label="$t(&quot;Collection of illustrated Disruptive web pages&quot;)" v-responsive-background="'/images/disruptive/disruptive7.jpg'" data-image-src="/images/disruptive/disruptive7.jpg" class="img-parallax imgproject h600"
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">

          <ProjectDescription2
            :title="$t(project.sections[1].title)"
            :description="project.sections[1].description" :emphasis="project.sections[1].emphasis"
          /> </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" :aria-label="$t(&quot;Audience watching a presentation at the physical exhibition&quot;)" v-responsive-background="'/images/disruptive/disruptive8.jpg'" data-image-src="/images/disruptive/disruptive8.jpg" class="img-parallax imgproject h600"
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="7" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" :aria-label="$t(&quot;Exhibition presenter speaking to visitors&quot;)" v-responsive-background="'/images/disruptive/disruptive10.jpg'" data-image-src="/images/disruptive/disruptive10.jpg" class="img-parallax imgproject h500"
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="5" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" :aria-label="$t(&quot;Disruptive exhibition poster and wayfinding&quot;)" v-responsive-background="'/images/disruptive/disruptive9.jpg'" data-image-src="/images/disruptive/disruptive9.jpg" class="img-parallax imgproject h500"
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">

          <div style="padding:56.25% 0 0 0;position:relative;" class="projectbox">
            <iframe :title="$t(project.bio) + ' — video'" loading="lazy" src="https://player.vimeo.com/video/578387348?h=d40c4360c5&title=0&byline=0&portrait=0"
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

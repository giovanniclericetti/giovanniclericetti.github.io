<template>

  <div class="avi">

    <div class="container mt-4">

      <ProjectHeader/>

      <Project-Intro
        title="Audiovisual Identity"
        :subtitle="project.bio" :project-type="project.projectType"

      :pill1="project.pill1" :pill2="project.pill2" :pill3="project.pill3" />

      <div cols="12" md="12" class=" mt-md-0 py-md-3 py-md-2 d-none d-md-block "
      >



        <img alt="" role="img" aria-label="Audiovisual Identity thesis and blue typographic cover" v-responsive-background="'/images/covers/hero/avi.jpg'" data-image-src="/images/covers/hero/avi.jpg" class="cover-parallax"




             data-parallax-image v-parallax>
      </div>


      <div cols="12" class="pt-0 my-4 cover-mobile d-block d-md-none" >

        <PortfolioImage alt="Audiovisual Identity thesis and blue typographic cover" class=""
     src="/images/covers/hero/avi.jpg"
 loading="eager" fetchpriority="high" style="height: auto;" />

      </div>


      <b-row class="mt-md-4">

        <b-col cols="12" md="7">

          <h4 aria-level="2"> Introduction </h4>
          <p>{{ project.overview }}</p>

          <slot name="link2">
          </slot>


        </b-col>

        <b-col cols="12" md="5" class="pl-md-5">


          <h4 aria-level="2" class="mt-4 mt-md-0"> Supervisor </h4>
          <p> Francesco Ermanno Guida </p>

          <h4 aria-level="2" class="mt-4 "> My contribution </h4>
          <p>{{ project.contribution }}</p>

          <h4 aria-level="2" class="mt-4 "> Delivery </h4>
          <p> Research-Based Design Project </p>

          <div class="mt-md-4 mt-4">
            <a href="https://audiovisualidentityhub.vercel.app/index.html" target="_blank" rel="noopener noreferrer">
              <ProjectLink textlink="Visit the Website"></ProjectLink>
            </a>
          </div>


        </b-col>
      </b-row>

      <div>

      </div>

      <b-row class="mt-4">

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" aria-label="Thesis spread comparing television brand identities" v-responsive-background="'/images/avi/avi4.jpg'" data-image-src="/images/avi/avi4.jpg" class="img-parallax imgproject h600"
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">

        <ProjectDescription2
            :title="project.sections[0].title"
            :description="project.sections[0].description"
          /> </b-col>

        <b-col cols="12" md="6" class=" d-md-block py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" aria-label="Blue cover of the Audiovisual Identity thesis" v-responsive-background="'/images/avi/avi2.jpg'" data-image-src="/images/avi/avi2.jpg" class="img-parallax imgproject h350 ref-pc"
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="6" class="d-none d-md-block py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" aria-label="Thesis spread introducing audiovisual identity" v-responsive-background="'/images/avi/avi3.jpg'" data-image-src="/images/avi/avi3.jpg" class="img-parallax imgproject h350"
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" aria-label="Research text and diagrams in the thesis" v-responsive-background="'/images/avi/avi7.jpg'" data-image-src="/images/avi/avi7.jpg" class="img-parallax imgproject h600"
                 data-parallax-image v-parallax></div>
        </b-col>
        <b-col cols="12" md="6" class=" d-md-block py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" aria-label="Thesis taxonomy diagram across a double-page spread" v-responsive-background="'/images/avi/avi5.jpg'" data-image-src="/images/avi/avi5.jpg" class="img-parallax imgproject h400 ref-pc"
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="6" class="d-none d-md-block py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" aria-label="Television identity examples on an orange editorial spread" v-responsive-background="'/images/avi/avi6.jpg'" data-image-src="/images/avi/avi6.jpg" class="img-parallax imgproject h400"
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="12" class="d-none d-md-block py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" aria-label="Overview of the thesis editorial spreads" v-responsive-background="'/images/avi/avi13.jpg'" data-image-src="/images/avi/avi13.jpg" class="img-parallax imgproject h400" style="height: 430px;
     "
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">

          <ProjectDescription2
            :title="project.sections[1].title"
            :description="project.sections[1].description"
          /> </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" aria-label="Audiovisual Identity Hub homepage with television logos" v-responsive-background="'/images/avi/avi8.jpg'" data-image-src="/images/avi/avi8.jpg" class="img-parallax imgproject h600"
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="6" class="d-none d-md-block py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" aria-label="Audiovisual Identity Hub research article" v-responsive-background="'/images/avi/avi9.jpg'" data-image-src="/images/avi/avi9.jpg" class="img-parallax imgproject h400"
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="6" class="d-none d-md-block py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" aria-label="Audiovisual Identity Hub taxonomy interface" v-responsive-background="'/images/avi/avi10.jpg'" data-image-src="/images/avi/avi10.jpg" class="img-parallax imgproject h400"
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" aria-label="Audiovisual Identity Hub case-study collection" v-responsive-background="'/images/avi/avi15.jpg'" data-image-src="/images/avi/avi15.jpg" class="img-parallax imgproject h600"
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="6" class="d-none d-md-block py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" aria-label="Broadcast identity case study on Audiovisual Identity Hub" v-responsive-background="'/images/avi/avi12.jpg'" data-image-src="/images/avi/avi12.jpg" class="img-parallax imgproject h400"
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="6" class="d-none d-md-block py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" aria-label="Audiovisual Identity Hub information page" v-responsive-background="'/images/avi/avi16.jpg'" data-image-src="/images/avi/avi16.jpg" class="img-parallax imgproject h400"
                 data-parallax-image v-parallax></div>
        </b-col>




        <b-col cols="12" md="12" class="d-none d-md-block py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" aria-label="Overview of presentation slides for the thesis" v-responsive-background="'/images/avi/avi14.jpg'" data-image-src="/images/avi/avi14.jpg" class="img-parallax imgproject h600" style="height: 630px;
     "
                 data-parallax-image v-parallax></div>
        </b-col>




      </b-row>

      <ProjectNextPrevious
        thumbnail="/images/covers/next/rf-next.jpg"
        class="column card-large biowhite referto"
        to="/referto"
        nextproject="Referto Magazine"
      :pill1="projectContent.referto.pill1" :pill2="projectContent.referto.pill2" :pill3="projectContent.referto.pill3" :bionext="projectContent.referto.bio" />


    </div>


    <PortfolioFooter/>
  </div>


</template>

<script>
import projectContent from '~/utils/project-content'
export default {
  data() { return { project: projectContent.audiovisualidentity, projectContent } },
  name: 'audiovisual-identity',

};
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

.avi .subtitle{
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

  .avi .subtitle   {
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

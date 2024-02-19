<template>

  <div class="bottleneck">

    <div class="container mt-4">

      <ProjectHeader/>

      <Project-Intro
        title="Bottleneck"
        subtitle="Digital service that counteracts digital overload with a desktop and mobile app that categorizes, prioritizes, and displays notifications in innovative ways."
        pill1="UX-UI"
        pill2="Interaction"
        pill3="Branding"
        pill4="Coding"/>

      <div cols="12" md="12" class=" mt-md-0 py-md-3 py-md-2 d-none d-md-block ">

        <img class="cover-parallax" style="
     background-image: url(/images/bottleneck/bottleneck_cover.svg)"
             v-prlx.background="{ speed: 0.1 }">
      </div>


      <div cols="12" class="pt-0 my-4 cover-mobile d-block d-md-none" >

        <img class=""
     src="/images/bottleneck/bottleneck-cover-sm.svg"
        >

      </div>

      <ProjectDescription
        description="
The project starts from the problem of notification overload in individuals working symbiotically with digital technology leading increasingly to a blurring of boundaries between the personal and work spheres. Bottleneck was created to address this need through a digital service designed to assist users in managing daily notifications on multiple devices during work activities. This service is available as a desktop and mobile application, which manages notifications through three main tabs: a dashboard with an innovative way to categorize notifications into primary on the foreground dashboard and secondary on the background dashboard, an interaction page with an AI model to observe how user data is collected, and a new search tab to explore discussions on various channels. Notification prioritization is made possible by artificial intelligence-driven summarization and prioritization, promoting a more balanced digital life and an inclusive approach to the use of communication tools."
        team="S. Bonfanti, A. Burchiani, T. Prinetti"
        role="Brand Identity, Visual, UX-UI, Branding, Coding"
        delivery="Interaction Design Lab, 2021-2022"
        class="my-md-3"
      >

        <template #link>
          <div class="mt-md-5 mt-4">
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
            <img class="img-parallax imgproject h600" style="
     background-image: url(/images/bottleneck/bottleneck1.svg)"
                 v-prlx.background="{ speed: 0.1 }"></div>
        </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">

          <div style="padding:56.25% 0 0 0;position:relative;" class="projectbox">
            <iframe src="https://player.vimeo.com/video/838849711?h=3e45c03c7b&title=0&byline=0&portrait=0"
                    style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>

          <script src="https://player.vimeo.com/api/player.js"></script>

        </b-col>

        <b-col cols="12" md="12">

        <ProjectDescription2

          title="Research & Taxonomy"

          description="
Beginning with reflection on the issue of personal data and privacy,
SourData was born as a company producing devices that monitor the most intimate data,
the only ones yet ever collected, in exchange for money: Coomy for masturbation,
Poopy for feces, and We"

        /> </b-col>

        <b-col cols="12" md="8" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img class="img-parallax imgproject h500" style="
     background-image: url(/images/bottleneck/bottleneck2.svg)"
                 v-prlx.background="{ speed: 0.1 }"></div>
        </b-col>

        <b-col cols="12" md="4" class="d-none d-md-block py-md-3 py-2 px-3">
          <div class="imgbox">
            <img class="img-parallax imgproject h500" style="
     background-image: url(/images/bottleneck/bottleneck3.svg)"
                 v-prlx.background="{ speed: 0.1 }"></div>
        </b-col>

        <b-col cols="12" md="12" class="d-none d-md-block py-md-3 py-2 px-3">
          <div class="imgbox">
            <img class="img-parallax imgproject h500" style="
     background-image: url(/images/bottleneck/bottleneck5.svg)"
                 v-prlx.background="{ speed: 0.1 }"></div>
        </b-col>

        <b-col cols="12" md="12" class="d-md-block py-md-3 py-2 px-3">
          <div class="imgbox">
            <img class="img-parallax imgproject h500" style="
     background-image: url(/images/bottleneck/bottleneck6.jpg)"
                 v-prlx.background="{ speed: 0.1 }"></div>
        </b-col>

        <b-col cols="12" md="12">

          <ProjectDescription2

            title="Features and Tabs"

            description="
Beginning with reflection on the issue of personal data and privacy,
SourData was born as a company producing devices that monitor the most intimate data,
the only ones yet ever collected, in exchange for money: Coomy for masturbation,
Poopy for feces, and We"

          /> </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">

          <div style="overflow: hidden" class="bot-video p-0 m-0 projectbox d-flex justify-content-center align-items-center">
            <video autoplay loop muted style="width: 100%;">
              <source src="/images/bottleneck/feature1.mp4" type="video/mp4">
            </video>
          </div>

        </b-col>

        <b-col cols="12" md="6" class=" py-md-3 py-2 px-3">

          <div style="overflow: hidden" class=" p-0 m-0 projectbox d-flex ref-video justify-content-center align-items-center">
            <video autoplay loop muted style="width: 100%;">
              <source src="/images/bottleneck/feature2.mp4" type="video/mp4">
            </video>
          </div>

        </b-col>

        <b-col cols="12" md="6" class=" py-md-3 py-2 px-3">

          <div style="overflow: hidden" class=" p-0 m-0 projectbox d-flex ref-video justify-content-center align-items-center">
            <video autoplay loop muted style="width: 100%;">
              <source src="/images/bottleneck/feature3.mp4" type="video/mp4">
            </video>
          </div>

        </b-col>

        <b-col>
        <ProjectDescription2

          title="Design System & Card Anatomy"

          description="
Beginning with reflection on the issue of personal data and privacy,
SourData was born as a company producing devices that monitor the most intimate data,
the only ones yet ever collected, in exchange for money: Coomy for masturbation,
Poopy for feces, and We"

        /> </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">

          <div style="overflow: hidden" class="bot-video p-0 m-0 projectbox d-flex justify-content-center align-items-center">
            <video id="myVideo" autoplay loop muted style="width: 100%;">
              <source src="/images/bottleneck/designsystem.mp4" type="video/mp4">
            </video>
          </div>

        </b-col>

        <b-col cols="12" md="12" class=" d-md-block py-md-3 py-2 px-3">
          <div class="imgbox">
            <img class="img-parallax imgproject " style="
     background-image: url(/images/bottleneck/bottleneck4.svg)"
                 v-prlx.background="{ speed: 0.1 }"></div>
        </b-col>

        <b-col cols="12" md="12" class="d-none d-md-block py-md-3 py-2 px-3">
          <div class="imgbox">
            <img class="img-parallax imgproject h500" style="
     background-image: url(/images/bottleneck/bottleneck10.svg)"
                 v-prlx.background="{ speed: 0.1 }"></div>
        </b-col>


      </b-row>

      <ProjectNextPrevious
        title="It-Back"
        thumbnail="/images/it-back/next.svg
"



        mobileThumbnail="/images/cards/itback_sm.png"
        class="column card-large biowhite it-back"
        to="it-back"
        pill1="Visual"
        pill2="UX-UI"
        pill3="Coding"
        nextproject="It-Back"
        bionext="Digital experience  aimed at reviving outdated technology products"
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

.subtitle{
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

.subtitle {
  max-width: 90%;
  line-height: 120%;
}

</style>

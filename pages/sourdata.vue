<template>

  <div class="sourdata">

    <div class="container mt-4">

      <ProjectHeader/>


      <Project-Intro
        title="SourData"
        :subtitle="project.bio"
        pill4="Speculative"





      :pill1="project.pill1" :pill2="project.pill2" :pill3="project.pill3" />

      <div cols="12" md="12" class=" mt-md-0 py-md-3 py-md-2 d-none d-md-block ">

        <img alt="" role="img" aria-label="SourData brand identity and speculative data collection devices" v-responsive-background="'/images/covers/hero/sourdata.jpg'" data-image-src="/images/covers/hero/sourdata.jpg" class="cover-parallax"
             data-parallax-image v-parallax>
      </div>


      <div cols="12" class="pt-0 my-4 cover-mobile d-block d-md-none" >

        <PortfolioImage alt="SourData brand identity and speculative data collection devices" class=""
     src="/images/covers/sm/sourdata_sm.jpg"
 loading="eager" fetchpriority="high" style="height: auto;" />

      </div>

      <ProjectDescription
        :description="project.overview"
        team="E. Ceriani, G. Fulghieri, F. Nozza, M. Zagaria"
        role="Brand Identity, Graphics, UX-UI, Keynote Presentation, Social Media, Editorial, Technology Research, Coding (HTML, CSS, JS, Arduino)"
        delivery="Final Synthesis Bachelor Lab, 2021-2022"
        class="my-md-3"
      >

        <template #link>
          <div class="mt-md-4 pt-1 mt-4">
            <a href="https://itback.altervista.org/" target="_blank">
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
            <img alt="" role="img" aria-label="SourData devices displayed in presentation packaging" v-responsive-background="'/images/sourdata/sourdata_2.jpg'" data-image-src="/images/sourdata/sourdata_2.jpg" class="img-parallax imgproject h600"
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">

          <div style="padding:56.25% 0 0 0;position:relative;" class="projectbox">
            <iframe :title="project.bio + ' — video'" loading="lazy" src="https://player.vimeo.com/video/728646170?h=c26dc4bb98&title=0&byline=0&portrait=0"
                    style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>

        </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" aria-label="Blue campaign posters introducing SourData products" v-responsive-background="'/images/sourdata/sourdata_4.png'" data-image-src="/images/sourdata/sourdata_4.png" class="img-parallax imgproject h400"
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">

          <ProjectDescription2

            title="Brand System "

            description="SourData was developed in every aspect, from the creation of the most general branding system down to the detail of the screens. The first assets were the posters to launch the project and make it clear what data the project was talking about. This was followed by the social content, user manual, presentation slides, showcase website and presentation brochures. To complete the experience, related products were also created for each device."

          /> </b-col>

        <b-col cols="12" md="4" class="d-none d-md-block py-md-3 py-2 px-3">
        <div class="imgbox">
          <img alt="" role="img" aria-label="Pink SourData wordmark on a typographic grid" v-responsive-background="'/images/sourdata/sourdata_5.png'" data-image-src="/images/sourdata/sourdata_5.png" class="img-parallax imgproject h500"
               data-parallax-image v-parallax></div>
        </b-col>


        <b-col cols="12" md="8" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" aria-label="Product descriptions and illustrations for the SourData collection" v-responsive-background="'/images/sourdata/sourdata_6.png'" data-image-src="/images/sourdata/sourdata_6.png" class="img-parallax imgproject h500"
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="12" class="d-none d-md-block py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" aria-label="Diagram showing the SourData collection and exchange process" v-responsive-background="'/images/sourdata/sourdata_9.png'" data-image-src="/images/sourdata/sourdata_9.png" class="img-parallax imgproject h400"
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">
          <ProjectDescription2
            title="The Experience"
            description="The SourData experience centres on gestures, each one carrying meaning and metaphor, from the shape of the Hub resembling a piggy bank to the gesture of clicking a button to agree to send data. Once the user has made contact and accepted SourData's terms and conditions, the box containing the Hub and the device arrives at the user's home. Once opened, the device needs to be put on and used. The data is collected on the SD card, which is removed and inserted into the Hub. Clicking the button sends the data to the digital platform where it can be viewed and the user can receive their reward."
          /> </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" aria-label="Pink SourData packaging and collection devices beside fruit" v-responsive-background="'/images/sourdata/sourdata_3.png'" data-image-src="/images/sourdata/sourdata_3.png" class="img-parallax imgproject h500"
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="6" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" aria-label="SourData devices displayed beside a rose" v-responsive-background="'/images/sourdata/sourdata_11.png'" data-image-src="/images/sourdata/sourdata_11.png" class="img-parallax imgproject h500"
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="6" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" aria-label="SourData collection devices and printed instructions" v-responsive-background="'/images/sourdata/sourdata_10.png'" data-image-src="/images/sourdata/sourdata_10.png" class="img-parallax imgproject h500"
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">

          <div style="padding:56.25% 0 0 0;position:relative;" class="projectbox">

            <iframe :title="project.bio + ' — video'" loading="lazy" src="https://player.vimeo.com/video/753126993?h=81c5baeaa7&title=0&byline=0&portrait=0"
                    style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>

        </b-col>



        <b-col cols="12" md="4" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" aria-label="Hand inserting a pink data token into the collection hub" v-responsive-background="'/images/sourdata/sourdata_7.png'" data-image-src="/images/sourdata/sourdata_7.png" class="img-parallax imgproject h500"
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="8" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" aria-label="SourData personal-data dashboard with charts" v-responsive-background="'/images/sourdata/sourdata_8.png'" data-image-src="/images/sourdata/sourdata_8.png" class="img-parallax imgproject h500"
                 data-parallax-image v-parallax></div>
        </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img alt="" role="img" aria-label="Overview of pink and blue SourData website screens" v-responsive-background="'/images/sourdata/sourdata_12.png'" data-image-src="/images/sourdata/sourdata_12.png" class="img-parallax imgproject h600"
                 data-parallax-image v-parallax></div>
        </b-col>


        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">
          <ProjectDescription2
            title="Making Of"
            description="The collection devices were designed and prototyped using 3D printing. Coomy and the Hub are also functional and programmed using an Arduino to monitor the data and share it on the online server."
          /> </b-col>


        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">

          <div style="padding:56.25% 0 0 0;position:relative;" class="projectbox">
            <iframe :title="project.bio + ' — video'" loading="lazy" src="https://player.vimeo.com/video/728645150?h=1e9d32eb71&title=0&byline=0&portrait=0"
                    style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>

        </b-col>

      </b-row>

      <ProjectNextPrevious
        thumbnail="/images/covers/cards/milan-card-v2.jpg"
        class="column card-large biowhite acmilan"
        to="/acmilan"
        nextproject="AC Milan Commercial Decks"
      :pill1="projectContent.acmilan.pill1" :pill2="projectContent.acmilan.pill2" :pill3="projectContent.acmilan.pill3" :bionext="projectContent.acmilan.bio" />


    </div>


    <PortfolioFooter/>
  </div>


</template>

<script>
import projectContent from '~/utils/project-content'
export default {
  data() { return { project: projectContent.sourdata, projectContent } },
  name: 'sour-data',

};


</script>


<style lang="scss">


.sourdata .subtitle {
  max-width: 90%;
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

.sourdata .subtitle {
  max-width: 90%;
  line-height: 120%;
}

</style>

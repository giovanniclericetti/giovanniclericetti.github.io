<template>

  <div class="acmilan">



    <div class="container mt-4">

      <ProjectHeader/>

      <Project-Intro
        title="ACM Commercial Decks"
        subtitle="Design and production of sponsorship presentations and supporting visual assets for AC Milan's commercial activities, in collaboration with marketing, sales, and strategy teams."
        pill1="Work"
        pill2="Commercial"
        pill3="Presentation"

      />

      <div cols="12" md="12" class=" mt-md-0 py-md-3 py-md-2 d-none d-md-block "
      >



        <div role="img" aria-label="AC Milan commercial presentation design" v-responsive-background="'/images/covers/hero/acm.svg'" data-image-src="/images/covers/hero/acm.svg" class="cover-parallax"




             data-parallax-image v-parallax></div>
      </div>


      <div cols="12" class="pt-0 my-4 cover-mobile d-block d-md-none" >

        <PortfolioImage src="/images/covers/sm/acm_sm.svg" alt="AC Milan commercial presentation design" loading="eager" fetchpriority="high" />

      </div>

      <div class="text-center m-4 p-3">
        <p>This material is confidential. <br>Get in touch to learn more.</p>


        <a href="mailto:giovanni.clericetti@gmail.com" class="m-3 custom-outline-btn px-4 py-2 rounded-pill d-inline-block text-decoration-none">
          <p class="text-decoration-none"> Contact me </p>
        </a>

        </div>

      <b-row>
        <b-col cols="12" md="7">

          <h4> Project Overview </h4>
          <p>Design and production of partnership presentations and supporting graphic assets, translating AC Milan’s visual identity into materials for the Club’s commercial activities. The work was developed in close collaboration with marketing, sales, and strategy teams, adapting visual communication to different partners and presentation formats. All activities were carried out under strict confidentiality.</p>

          <slot name="link2">
          </slot>


        </b-col>

        <b-col cols="12" md="5" class="pl-md-5">


          <h4 class="mt-4 mt-md-0"> Tools </h4>
          <p> Keynote, PowerPoint, Figma, Figma Slides, Photoshop, Illustrator, Midjourney, OpenAI, Asana </p>

          <div class="mt-md-5 mt-4">
            <a href="          https://www.linkedin.com/posts/activity-7207066977016754177-HIoz?utm_source=share&utm_medium=member_desktop&rcm=ACoAADGmc5MBRFlV2ZhxOY7sTc3zelk5nsUZlMk
" target="_blank" rel="noopener noreferrer">
              <ProjectLink textlink="ACM Brand Design Reel 23/24"></ProjectLink>
            </a>
          </div>



        </b-col>
      </b-row>





      <div>

      </div>


      <ProjectNextPrevious
        thumbnail="/images/acm-partner-visibility/acm2-next.png"
        class="column card-large biowhite acmilan2"
        to="/acm-partner-visibility"
        pill1="Work"
        pill2="Brand"
        pill3="Commercial"
        nextproject="ACM Partner Visibility"
        bionext="Visual branding and visibility for the Club's commercial partners."
      />



    </div>


    <PortfolioFooter/>
  </div>


</template>

<script>
export default {
  name: 'ac-milan',
  head() {
    return {
      title: 'ACM Commercial Decks — Giovanni Clericetti',
      meta: [{ hid: 'description', name: 'description', content: 'Design of commercial presentations and visual assets for AC Milan and its partners.' }],
    }
  },


}


</script>


<style scoped>
.acmilan ::v-deep .project-pills {
  white-space: nowrap;
}
@media (max-width: 575.98px) {
  .acmilan ::v-deep .pillsmob {
    font-size: 12px;
  }
}


.cover-mobile{
  width: 100%;
  height: auto !important;
  background-size: contain;
  background-position: center center;
  border-radius: 20px;
  overflow: hidden;



  img{
    width: 100%;
  }
}

.custom-outline-btn {
  border: 2px solid #e0071b;
  color: #e0071b;
  background-color: transparent;
  transition: all 0.2s ease;
}

.custom-outline-btn:hover {
  border: 2px solid #e0071b;
  background-color: #e0071b;
  color: #fff;
}

.custom-outline-btn:active,
.custom-outline-btn:focus,
.custom-outline-btn:visited {
  background-color: transparent;
  color: #e0071b;
  box-shadow: none;
  outline: none;
}

.acmilan ::v-deep .subtitle{
  max-width: 85%;
  text-wrap: balance;
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

  .acmilan ::v-deep .subtitle   {
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

<template>

  <div class="acmilan">



    <div class="container mt-4">

      <ProjectHeader/>

      <Project-Intro
        title="AC Milan"
        subtitle="Production of sponsorship presentations and visual graphics for Club’s visual language"
        pill1="Visual"
        pill2="Branding"
        pill3="Sport Production"

      />

      <div cols="12" md="12" class=" mt-md-0 py-md-3 py-md-2 d-none d-md-block "
      >



        <img class="cover-parallax" style="


     background-image: url(/images/covers/hero/acm.svg)"




             v-prlx.background="{ speed: 0.1 }">
      </div>


      <div cols="12" class="pt-0 my-4 cover-mobile d-block d-md-none" >

        <img class=""
     src="/images/covers/sm/acm_sm.svg"
        >

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
          <p> Design and development of graphic assets adapted to AC Milan’s visual identity across various sports-related areas: from creating visual identities for internal projects and defining the seasonal visual language, to supporting events, and up to sports production during matches at San Siro Stadium. The work focused particularly on producing presentations for partnerships and graphics tailored to sponsored events, in close collaboration with marketing, sales, and strategy teams. All activities were carried out under strict confidentiality. </p>

          <slot name="link2">
          </slot>


        </b-col>

        <b-col cols="12" md="5" class="pl-5">


          <h4 class="mt-4 mt-md-0"> Tools </h4>
          <p> Keynote, PowerPoint, Figma, Figma Slide, Photoshop, Illustrator, Midjourney, OpenAI, Asana </p>

          <div class="mt-md-5 mt-4">
            <a href="          https://www.linkedin.com/posts/activity-7207066977016754177-HIoz?utm_source=share&utm_medium=member_desktop&rcm=ACoAADGmc5MBRFlV2ZhxOY7sTc3zelk5nsUZlMk
" target="_blank">
              <ProjectLink textlink="ACM Brand Design Reel 23/24"></ProjectLink>
            </a>
          </div>



        </b-col>
      </b-row>





      <div>

      </div>


      <ProjectNextPrevious
        title="AC Milan"
        thumbnail="/images/covers/next/cc-next.jpg
"
        class="column card-large biowhite carachioggia"
        to="acmilan"
        pill1="UX-UI"
        pill2="Visual"
        pill3="Branding"
        nextproject="Cara Chioggia ti scrivo"
        bionext="Digital experience of letters to relive fishing places in Chioggia"
      />


    </div>


    <PortfolioFooter/>
  </div>


</template>

<script>
export default {
  name: 'audiovisual-identity',
}


</script>


<style>

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

.acmilan .subtitle{
  max-width: 45%;
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

  .acmilan .subtitle   {
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

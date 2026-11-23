<template>

  <div class="acmilan">



    <div class="container mt-4">

      <ProjectHeader/>

      <Project-Intro
        title="ACM Commercial Decks"
        :subtitle="project.bio" :project-type="project.projectType"

      :pill1="project.pill1" :pill2="project.pill2" :pill3="project.pill3" />

      <div cols="12" md="12" class=" mt-md-0 py-md-3 py-md-2 d-none d-md-block "
      >



        <div role="img" :aria-label="$t(&quot;AC Milan commercial presentation design&quot;)" v-responsive-background="'/images/covers/hero/acm.svg'" data-image-src="/images/covers/hero/acm.svg" class="cover-parallax"




             data-parallax-image v-parallax></div>
      </div>


      <div cols="12" class="pt-0 my-4 cover-mobile d-block d-md-none" >

        <PortfolioImage src="/images/covers/sm/acm_sm.svg" :alt="$t(&quot;AC Milan commercial presentation design&quot;)" loading="eager" fetchpriority="high" />

      </div>

      <div class="text-center m-4 p-3">
        <p>{{ $t("This material is confidential. Get in touch to learn more.") }}</p>


        <a href="mailto:giovanni.clericetti@gmail.com" class="m-3 custom-outline-btn px-4 py-2 rounded-pill d-inline-block text-decoration-none">
          <p class="text-decoration-none">{{ $t(" Contact me ") }}</p>
        </a>

        </div>

      <b-row>
        <b-col cols="12" md="7">

          <h4 aria-level="2">{{ $t(" Project Overview ", "acmilan.overviewTitle") }}</h4>
          <p>{{ $t(project.overview) }}</p>

          <slot name="link2">
          </slot>


        </b-col>

        <b-col cols="12" md="5" class="pl-md-5">


          <h4 aria-level="2" class="mt-4 mt-md-0">{{ $t(" Tools ") }}</h4>
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
        nextproject="ACM Partner Visibility"
      :pill1="projectContent['acm-partner-visibility'].pill1" :pill2="projectContent['acm-partner-visibility'].pill2" :pill3="projectContent['acm-partner-visibility'].pill3" :bionext="projectContent['acm-partner-visibility'].bio" />



    </div>


    <PortfolioFooter/>
  </div>


</template>

<script>
import projectContent from '~/utils/project-content'
export default {
  data() { return { project: projectContent.acmilan, projectContent } },
  name: 'ac-milan',


}


</script>


<style scoped lang="scss">
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

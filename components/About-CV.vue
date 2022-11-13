<template>

  <div class="mt-5">
    <b-row>

      <b-col cols="12" md="4">

        <h4 class="gradient"> Education </h4>

        <AboutCvElement
          category="2022 - ongoing"
          text="Master Degree in Communication Design at Politecnico di Milano"
        />

        <AboutCvElement
          category="2019-2022"
          text="Bachelor Degree in Communication Design at Politecnico di Milano"
        />

        <AboutCvElement
          category="2014-2019"
          text="Artistic High School at Fondazione Sacro Cuore in Milan (Architecture)"
        />

        <h4 class="gradient mt-md-5 mt-4"> Languages </h4>

        <AboutCvElement
          category="Italian"
          text="First Language"
        />

        <AboutCvElement
          category="English"
          text="B2 - IELTS Certification"
        />

      </b-col>

      <b-col cols="12" md="4">

        <h4 class="gradient mt-md-0 mt-4"> Work Experiences </h4>

        <AboutCvElement
          category="2020-2022"
          text="Metadata and content classification activities in collaboration with Mediaset Spa"
        />

        <AboutCvElement
          category="2021, 2022"
          text="Volunteer at Meeting in Rimini for the realization of exhibitions"
        />

        <AboutCvElement
          category="2020"
          text="Museum guide for exhibitions at Palazzo Reale in Milann"
        />

        <AboutCvElement
          category="2018"
          text="Waiter at Planibel Hotel and Residence in La Thuile"
        />

      </b-col>

      <b-col cols="12" md="4">

        <h4 class="gradient mt-md-0 mt-4"> Software </h4>

        <AboutCvElement
          category="Adobe CC"
          text="Illustrator, Photoshop, Premiere Pro,  Lightroom, InDesign, Audition, XD"
        />

        <AboutCvElement
          category="Microsoft"
          text="Word, PowerPoint, Excel"
        />

        <AboutCvElement
          category="Other Tools"
          text="Figma, Keynote, Pages, iMovie"
        />

        <AboutCvElement
          category="Coding"
          text="HTML, CSS, Javascript, Wordpress "
        />

        <h4 class="gradient mt-5">
          <b-icon class="mr-2" shift-v="-3" icon="arrow-down-right-circle-fill"
                  style="width: 35px; height: 35px; color: #FF6E60"></b-icon>
          Download CV
        </h4>


      </b-col>


    </b-row>
  </div>

</template>

<script>
export default {
  name: "About-CV",
  props: ['team']
}
</script>

<style scoped>


</style>

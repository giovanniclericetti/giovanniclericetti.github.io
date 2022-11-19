<template>

  <div class="mt-5">
    <b-row>

      <b-col cols="12" md="4">

        <h4 class="gradient"> Education </h4>

        <AboutCvElement category="2022 - ongoing">

          <template #slotcvelement>
            <p>Master Degree in Communication Design at <a class="hover-a-underline-animation" href="https://www.polimi.it/">Politecnico di Milano</a> </p>
          </template>

        </AboutCvElement>

        <AboutCvElement
          category="2019-2022"
        >

        <template #slotcvelement>
          <p>Bachelor Degree in Communication Design at <a class="hover-a-underline-animation" href="https://www.polimi.it/">Politecnico di Milano</a></p>
        </template>

        </AboutCvElement>

        <AboutCvElement
          category="2014-2019"
        >

          <template #slotcvelement>
            <p>Artistic High School at <a class="hover-a-underline-animation" href="https://www.sacrocuore.org/"> Fondazione Sacro Cuore </a> in Milan (Architecture)</p>
          </template>

        </AboutCvElement>


        <h4 class="gradient mt-md-5 mt-4"> Languages </h4>

        <AboutCvElement
          category="Italian"
        >

          <template #slotcvelement>
            <p>First Language</p>
          </template>

        </AboutCvElement>


        <AboutCvElement
          category="English"
        >

          <template #slotcvelement>
            <p>B2 - IELTS Certification</p>
          </template>

        </AboutCvElement>

      </b-col>

      <b-col cols="12" md="4">

        <h4 class="gradient mt-md-0 mt-4"> Work Experiences </h4>

        <AboutCvElement
          category="2020-2022"
        >

          <template #slotcvelement>
            <p>Metadata and content classification activities in collaboration with Mediaset Spa</p>
          </template>

        </AboutCvElement>

        <AboutCvElement
          category="2021, 2022"
        >

          <template #slotcvelement>
            <p>Volunteer at Meeting in Rimini for the realization of exhibitions</p>
          </template>

        </AboutCvElement>

        <AboutCvElement
          category="2020"
        >

          <template #slotcvelement>
            <p>Museum guide for exhibitions at Palazzo Reale in Milan</p>
          </template>

        </AboutCvElement>

        <AboutCvElement
          category="2018"
        >

          <template #slotcvelement>
            <p>Waiter at Planibel Hotel and Residence in La Thuile</p>
          </template>

        </AboutCvElement>

      </b-col>

      <b-col cols="12" md="4">

        <h4 class="gradient mt-md-0 mt-4"> Software </h4>

        <AboutCvElement
          category="Adobe CC"
        >

          <template #slotcvelement>
            <p>Illustrator, Photoshop, Premiere Pro,  Lightroom, InDesign, Audition, XD</p>
          </template>

        </AboutCvElement>

        <AboutCvElement
          category="Microsoft"
        >

          <template #slotcvelement>
            <p>Word, PowerPoint, Excel</p>
          </template>

        </AboutCvElement>

        <AboutCvElement
          category="Other Tools"
        >

          <template #slotcvelement>
            <p>Figma, Keynote, Pages, iMovie</p>
          </template>

        </AboutCvElement>

        <AboutCvElement
          category="Coding"
        >

          <template #slotcvelement>
            <p>HTML, CSS, Bootstrap, Javascript, Nuxt, Vue, Wordpress</p>
          </template>

        </AboutCvElement>

        <h4 class="gradient mt-5 ">
          <b-icon class="mr-1" shift-v="-3" icon="arrow-down-right-circle-fill"
                  style="width: 35px; height: 35px; color:#FF9A5A"></b-icon>
          <span class="hover-underline-animation gradient downloadcv"> Download CV </span>
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

<style lang="scss">

.hover-a-underline-animation {
  display: inline-block;
  position: relative;
  color: black;
}

.hover-a-underline-animation:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 2px;
  left: 0;
  background-color: black;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.hover-a-underline-animation:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

a:hover{
  text-decoration: none;
  color: black;
}



</style>

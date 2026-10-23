<template>

  <div class="mt-5">

    <div class="accordion lineacc pt-4" role="tablist">
      <b-card no-body class="cardaccordion">
        <b-card-header class="p-0 cardaccordion pb-3" >
          <b-row tag="button" type="button" v-b-toggle.accordion-1 class="text-left d-flex cardaccordion justify-spa accordion-trigger" >
            <b-col class=""> <h4 class="gradient"> Education </h4> </b-col>
            <b-col class="text-right mr-2 ">

              <b-icon :icon="!opened.accordion1 ? 'chevron-down' : 'chevron-up'"
                      variant="thick"
                      font-scale="2"
                      style="color: #FF4466" />
            </b-col>
          </b-row>
        </b-card-header>

        <b-collapse v-model="opened.accordion1" id="accordion-1" class="cardaccordion pb-4" accordion="">
          <b-card-body >

            <AboutCvElement category="2022 - ongoing" class="mt-0">

              <template #slotcvelement>
                <p>Master Degree in Communication Design at <a class="underlinemobile"
                                                               href="https://www.polimi.it/">Politecnico di Milano</a></p>
              </template>

            </AboutCvElement>

            <AboutCvElement category="2023" class="mt-3">

              <template #slotcvelement>
                <p>Erasmus Experience at <a class="underlinemobile" href="https://cmd-amsterdam.nl/"> AUAS Master</a>  Digital Design, Amsterdam, Netherlands</p>
              </template>

            </AboutCvElement>

            <AboutCvElement
              category="2019-2022" class="mt-3"
            >

              <template #slotcvelement>
                <p>Bachelor Degree in Communication Design at <a class="underlinemobile"
                                                                 href="https://www.polimi.it/">Politecnico di Milano</a></p>
              </template>

            </AboutCvElement>

            <AboutCvElement
              category="2014-2019" class="mt-3"
            >

              <template #slotcvelement >
                <p>Artistic High School at <a class="hover-a-underline-animation" href="https://www.sacrocuore.org/">
                  Fondazione Sacro Cuore </a>, Milan </p>
              </template>

            </AboutCvElement>



          </b-card-body>
        </b-collapse>
      </b-card>

    </div>


    <div class="accordion lineacc pt-4" role="tablist">
      <b-card no-body class="cardaccordion">
        <b-card-header class="p-0 cardaccordion pb-3" >
          <b-row tag="button" type="button" v-b-toggle.accordion-2 class="text-left d-flex cardaccordion justify-spa accordion-trigger" >
            <b-col cols="auto" class=""> <h4 class="gradient"> Exhibition & Awards </h4> </b-col>
            <b-col class="text-right mr-2 ">

              <b-icon :icon="!opened.accordion2 ? 'chevron-down' : 'chevron-up'"
                      variant="thick"
                      font-scale="2"
                      style="color: #FF4466" />
            </b-col>
          </b-row>
        </b-card-header>

        <b-collapse v-model="opened.accordion2" id="accordion-2" class="cardaccordion pb-4" accordion="">
          <b-card-body >

            <AboutCvElement category="2023, La Stecca 3 (Milan) " class="mt-3">
              <template #slotcvelement>
                <p>Belonging / Not Belonging - Indie magazine for Social Change  </p>
                <p class="subtitlecv">Project: Referto Magazine</p>
              </template>
            </AboutCvElement>

            <AboutCvElement category="2022, FuoriSalone Milan Design Week" class="mt-3">
              <template #slotcvelement>
                <p> DesignXDesigner - Politecnico Design Student Exhibition </p>
                <p class="subtitlecv">Project: SourData</p>
              </template>
            </AboutCvElement>

            <AboutCvElement category="2022, ATS Insubria" class="mt-3">
              <template #slotcvelement>
                <p> Selection for the communication campaign to
                  raise awareness </p>
                <p class="subtitlecv">Project: Bella Scusa</p>
              </template>
            </AboutCvElement>


          </b-card-body>
        </b-collapse>
      </b-card>

    </div>

    <div class="accordion lineacc pt-4" role="tablist">
      <b-card no-body class="cardaccordion">
        <b-card-header class="p-0 cardaccordion pb-3" >
          <b-row tag="button" type="button" v-b-toggle.accordion-6 class="text-left d-flex cardaccordion justify-spa accordion-trigger" >
            <b-col cols="auto" class=""> <h4 class="gradient"> Work Experience </h4> </b-col>
            <b-col class="text-right mr-2 ">

              <b-icon :icon="!opened.accordion6 ? 'chevron-down' : 'chevron-up'"
                      variant="thick"
                      font-scale="2"
                      style="color: #FF4466" />
            </b-col>
          </b-row>
        </b-card-header>

        <b-collapse v-model="opened.accordion6" id="accordion-6" class="cardaccordion pb-4" accordion="">
          <b-card-body >

            <AboutCvElement category="2023" class="mt-0">
              <template #slotcvelement>
                <p>Brand identity and website design</p>
                <p class="subtitlecv">SKProgetti - Engineering Studio</p>
              </template>
            </AboutCvElement>



            <AboutCvElement category="2021-2023" class="mt-3">
              <template #slotcvelement>
                <p>Realization of Exhibition Spaces</p>
                <p class="subtitlecv">Meeting di Rimini</p>
              </template>
            </AboutCvElement>

            <AboutCvElement category="2020-2023" class="mt-3">
              <template #slotcvelement>
                <p>Content classification activities</p>
                <p class="subtitlecv">Mediaset S.p.A.</p>
              </template>
            </AboutCvElement>

            <AboutCvElement category="2020-2021" class="mt-3">
              <template #slotcvelement>
                <p>UX/UI and Graphics design </p>
                <p class="subtitlecv">Disruptive x Meeting di Rimini</p>
              </template>
            </AboutCvElement>

            <AboutCvElement category="2019" class="mt-3">
              <template #slotcvelement>
                <p>Internship in Architecture Studio</p>
                <p class="subtitlecv">Studio MEA, Milan</p>
              </template>
            </AboutCvElement>

            <AboutCvElement category="2019" class="mt-3">
              <template #slotcvelement>
                <p>Museum Guide for Exhibitions</p>
                <p class="subtitlecv">Palazzo Reale, Milan</p>
              </template>
            </AboutCvElement>

            <AboutCvElement category="2018" class="mt-3">
              <template #slotcvelement>
                <p>Waiter</p>
                <p class="subtitlecv">Planibel Hotel, La Thuile</p>
              </template>
            </AboutCvElement>

          </b-card-body>
        </b-collapse>
      </b-card>

    </div>

    <div class="accordion lineacc pt-4" role="tablist">
      <b-card no-body class="cardaccordion">
        <b-card-header class="p-0 cardaccordion pb-3" >
          <b-row tag="button" type="button" v-b-toggle.accordion-3 class="text-left d-flex cardaccordion justify-spa accordion-trigger" >
            <b-col cols="auto" class=""> <h4 class="gradient"> Social Initiatives </h4> </b-col>
            <b-col class="text-right mr-2 ">

              <b-icon :icon="!opened.accordion3 ? 'chevron-down' : 'chevron-up'"
                      variant="thick"
                      font-scale="2"
                      style="color: #FF4466" />
            </b-col>
          </b-row>
        </b-card-header>

        <b-collapse v-model="opened.accordion3" id="accordion-3" class="cardaccordion pb-4" accordion="">
          <b-card-body >

            <AboutCvElement category="University Politics" class="mt-0">
              <template #slotcvelement>
                <p>Representative of the Course of Study in Communication Design at Politecnico di Milano</p>
              </template>
            </AboutCvElement>

            <AboutCvElement category="University Volunteering" class="mt-3">
              <template #slotcvelement>
                <p>Sales Clerk at University Bookstore
                  CUSL, Politecnico di Milano</p>
              </template>
            </AboutCvElement>


            <AboutCvElement category="Volunteering" class="mt-3">
              <template #slotcvelement>
                <p>Banco Alimentare Volunteer for National Food Collection Day </p>
              </template>
            </AboutCvElement>

          </b-card-body>
        </b-collapse>
      </b-card>

    </div>

    <div class="accordion lineacc pt-4" role="tablist">
      <b-card no-body class="cardaccordion">
        <b-card-header class="p-0 cardaccordion pb-3" >
          <b-row tag="button" type="button" v-b-toggle.accordion-4 class="text-left d-flex cardaccordion justify-spa accordion-trigger" >
            <b-col cols="auto" class=""> <h4 class="gradient"> Languages </h4> </b-col>
            <b-col class="text-right mr-2 ">

              <b-icon :icon="!opened.accordion4 ? 'chevron-down' : 'chevron-up'"
                      variant="thick"
                      font-scale="2"
                      style="color: #FF4466" />
            </b-col>
          </b-row>
        </b-card-header>

        <b-collapse v-model="opened.accordion4" id="accordion-4" class="cardaccordion pb-4" accordion="">
          <b-card-body >

            <AboutCvElement class="mt-0"
              category="Italian"
            >

              <template #slotcvelement>
                <p>First Language</p>
              </template>

            </AboutCvElement>


            <AboutCvElement class="mt-3"
              category="English"
            >

              <template #slotcvelement>
                <p>B2 - IELTS Certification</p>
              </template>

            </AboutCvElement>

            <AboutCvElement
              category="Spanish" class="mt-3"
            >

              <template #slotcvelement>
                <p>Scholastic Level</p>
              </template>

            </AboutCvElement>

          </b-card-body>
        </b-collapse>
      </b-card>

    </div>

    <div class="accordion lineacc lineaccsott  pt-4" role="tablist">
      <b-card no-body class="cardaccordion">
        <b-card-header class="p-0 cardaccordion pb-3" >
          <b-row tag="button" type="button" v-b-toggle.accordion-5 class="text-left d-flex cardaccordion justify-spa accordion-trigger" >
            <b-col cols="auto" class=""> <h4 class="gradient"> Software </h4> </b-col>
            <b-col class="text-right mr-2 ">

              <b-icon :icon="!opened.accordion5 ? 'chevron-down' : 'chevron-up'"
                      variant="thick"
                      font-scale="2"
                      style="color: #FF4466" />
            </b-col>
          </b-row>
        </b-card-header>

        <b-collapse v-model="opened.accordion5" id="accordion-5" class="cardaccordion pb-4" accordion="">
          <b-card-body >

            <AboutCvElement class="mt-0"
              category="Adobe CC"
            >

              <template #slotcvelement>
                <p>Illustrator, Photoshop, Premiere Pro, Lightroom, InDesign, Audition, XD</p>
              </template>

            </AboutCvElement>

            <AboutCvElement class="mt-3"
              category="Microsoft & Google"
            >

              <template #slotcvelement>
                <p>Word, PowerPoint, Excel</p>
              </template>

            </AboutCvElement>

            <AboutCvElement class="mt-3"
              category="Other Tools"
            >

              <template #slotcvelement>
                <p>Figma, Keynote, Pages, iMovie</p>
              </template>

            </AboutCvElement>

            <AboutCvElement class="mt-3"
              category="Coding"
            >

              <template #slotcvelement>
                <p>HTML, CSS, Bootstrap, Javascript, Nuxt, Vue, Wordpress</p>
              </template>

            </AboutCvElement>

          </b-card-body>
        </b-collapse>
      </b-card>



    </div>

    <h4 class="w-100 mt-5 text-center"> <a href="documents/giovanniclericetti.pdf" target="_blank">
      <span class="underlinemobile downloadcv" style="color: black"> Download Resume </span> </a>
    </h4>

  </div>

</template>

<script>
export default {
  name: "About-CV",
  props: ['team', 'text'],
  data() {
    return {
      opened: {
        accordion1: false,
        accordion2: false,
        accordion3: false,
        accordion4: false,
        accordion5: false,
        accordion6: false,
      },
    }
  },
}
</script>

<style scoped lang="scss">
.cardaccordion{
  background-color: #F6F2F2;
  border-style: hidden;
}

.card-body{
  padding: 0px;
}

.lineacc{
  border-top: solid #DADADA 2px;
}

.lineaccsott{
  border-top: solid #DADADA 2px;
  border-bottom: solid #DADADA 2px;
}

.underlinemobile{
  text-decoration: underline;
  text-decoration-thickness: 5px;
  text-decoration-color: #DADADA;
  text-underline-offset: 1px;
  color: black;
}

.accordion-trigger {
  width: 100%;
  margin: 0;
  padding: 0;
  min-height: 44px;
  border: 0;
  flex-wrap: nowrap;
  align-items: center;
  cursor: pointer;
}
.accordion-trigger > :first-child { flex: 1; min-width: 0; padding-left: 0; }
.accordion-trigger > :last-child { flex: 0 0 auto; }
.accordion-trigger h4 { text-align: left; margin-bottom: 0; }
.accordion-trigger:focus-visible { outline: 2px solid #FF4466; outline-offset: 4px; }
</style>

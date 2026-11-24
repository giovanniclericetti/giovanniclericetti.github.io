<template>

  <div>

    <div class="accordion lineacc pt-4">
      <b-card no-body class="cardaccordion">
        <b-card-header class="p-0 cardaccordion pb-3" >
          <b-row tag="button" type="button" v-b-toggle.accordion-6 class="text-left d-flex cardaccordion justify-spa accordion-trigger" >
            <b-col cols="auto" class=""> <h4 aria-level="2" class="gradient">{{ $t(" Professional Experience ") }}</h4> </b-col>
            <b-col class="text-right mr-2 ">

              <HeaderIcon
                bare
                id-suffix="-accordion-6"
                :size="30"
                class="accordion-arrow"
                :class="{ 'is-open': opened.accordion6 }"
              />
            </b-col>
          </b-row>
        </b-card-header>

        <b-collapse v-model="opened.accordion6" id="accordion-6" class="cardaccordion pb-4" accordion="">
          <b-card-body >

        <AboutWorkExperience />

          </b-card-body>
        </b-collapse>
      </b-card>

    </div>

    <div class="accordion lineacc pt-4">
      <b-card no-body class="cardaccordion">
        <b-card-header class="p-0 cardaccordion pb-3" >
          <b-row tag="button" type="button" v-b-toggle.accordion-1 class="text-left d-flex cardaccordion justify-spa accordion-trigger" >
            <b-col class=""> <h4 aria-level="2" class="gradient">{{ $t(" Education ") }}</h4> </b-col>
            <b-col class="text-right mr-2 ">

              <HeaderIcon
                bare
                id-suffix="-accordion-1"
                :size="30"
                class="accordion-arrow"
                :class="{ 'is-open': opened.accordion1 }"
              />
            </b-col>
          </b-row>
        </b-card-header>

        <b-collapse v-model="opened.accordion1" id="accordion-1" class="cardaccordion pb-4" accordion="">
          <b-card-body >

        <AboutCvElement category="2022-2025" class="mt-0">
          <template #slotcvelement>
            <p>{{ $t("Master’s Degree in Communication Design") }}</p>
            <p class="subtitlecv"><a class="underlinemobile" href="https://www.polimi.it/">Politecnico di Milano</a>{{ $t(", School of Design (110/110)") }}</p>
          </template>
        </AboutCvElement>

        <AboutCvElement category="2024" class="mt-3">
          <template #slotcvelement>
            <p>{{ $t("Erasmus Exchange - Master Digital Design") }}</p>
            <p class="subtitlecv"><a class="underlinemobile" href="https://cmd-amsterdam.nl/">Hogeschool van Amsterdam</a>{{ $t(", Amsterdam, NL") }}</p>
          </template>
        </AboutCvElement>

        <AboutCvElement category="2019-2022" class="mt-3">
          <template #slotcvelement>
            <p>{{ $t("Bachelor’s Degree in Communication Design") }}</p>
            <p class="subtitlecv"><a class="underlinemobile" href="https://www.polimi.it/">Politecnico di Milano</a>{{ $t(", School of Design (110/110)") }}</p>
          </template>
        </AboutCvElement>

        <AboutCvElement category="2014-2019" class="mt-3">
          <template #slotcvelement>
            <p>{{ $t("Art High School Diploma (Architecture)") }}</p>
            <p class="subtitlecv"><a class="underlinemobile" href="https://www.sacrocuore.org/">Fondazione Sacro Cuore</a>{{ $t(", Milan") }}</p>
          </template>
        </AboutCvElement>

          </b-card-body>
        </b-collapse>
      </b-card>

    </div>


    <div class="accordion lineacc pt-4">
      <b-card no-body class="cardaccordion">
        <b-card-header class="p-0 cardaccordion pb-3" >
          <b-row tag="button" type="button" v-b-toggle.accordion-2 class="text-left d-flex cardaccordion justify-spa accordion-trigger" >
            <b-col cols="auto" class=""> <h4 aria-level="2" class="gradient">{{ $t(" Exhibitions and Project Awards ") }}</h4> </b-col>
            <b-col class="text-right mr-2 ">

              <HeaderIcon
                bare
                id-suffix="-accordion-2"
                :size="30"
                class="accordion-arrow"
                :class="{ 'is-open': opened.accordion2 }"
              />
            </b-col>
          </b-row>
        </b-card-header>

        <b-collapse v-model="opened.accordion2" id="accordion-2" class="cardaccordion pb-4" accordion="">
          <b-card-body >

        <AboutCvElement category="2023, Polimi Design School" class="mt-0">
          <template #slotcvelement>
            <p class="exhibition-title">{{ $t("Belonging / Not Belonging - Indie Magazine for social change at La Stecca 3 exhibition space") }}</p>
            <p class="subtitlecv">{{ $t("Presentation of the ") }}<NuxtLink class="underlinemobile" to="/referto">Referto Magazine</NuxtLink>{{ $locale.state.language === 'it' ? '.' : ' project' }}</p>
          </template>
        </AboutCvElement>

        <AboutCvElement category="2022, FuoriSalone Milan Design Week" class="mt-3">
          <template #slotcvelement>
            <p class="exhibition-title">{{ $t("DesignXDesigner - Polimi Design Student Exhibition at Fuorisalone") }}</p>
            <p class="subtitlecv">{{ $t("Presentation of the ") }}<NuxtLink class="underlinemobile" to="/sourdata">SourData</NuxtLink>{{ $locale.state.language === 'it' ? '.' : ' project' }}</p>
          </template>
        </AboutCvElement>

        <AboutCvElement category="2022, ATS Insubria Workshop" class="mt-3">
          <template #slotcvelement>
            <p>{{ $t("ATS Insubria Social OOH Campaign") }}</p>
            <p class="subtitlecv">{{ $t("BellaScusa was selected for ATS Insubria’s communication campaign against problem gambling.") }}</p>
          </template>
        </AboutCvElement>

          </b-card-body>
        </b-collapse>
      </b-card>

    </div>

    <div class="accordion lineacc pt-4">
      <b-card no-body class="cardaccordion">
        <b-card-header class="p-0 cardaccordion pb-3" >
          <b-row tag="button" type="button" v-b-toggle.accordion-3 class="text-left d-flex cardaccordion justify-spa accordion-trigger" >
            <b-col cols="auto" class=""> <h4 aria-level="2" class="gradient">{{ $t(" Social Initiatives ") }}</h4> </b-col>
            <b-col class="text-right mr-2 ">

              <HeaderIcon
                bare
                id-suffix="-accordion-3"
                :size="30"
                class="accordion-arrow"
                :class="{ 'is-open': opened.accordion3 }"
              />
            </b-col>
          </b-row>
        </b-card-header>

        <b-collapse v-model="opened.accordion3" id="accordion-3" class="cardaccordion pb-4" accordion="">
          <b-card-body >

            <AboutCvElement category="University Politics (2021-2023)" class="mt-0">
          <template #slotcvelement>
            <p>{{ $t("Student Representative") }}</p>
            <p class="subtitlecv">{{ $t("Communication Design Programme Council (CCS), Politecnico di Milano") }}</p>
          </template>
        </AboutCvElement>

        <AboutCvElement category="Volunteering (2021-2024)" class="mt-3">
          <template #slotcvelement>
            <p>{{ $t("Meeting di Rimini - Exhibition Spaces") }}</p>
            <p class="subtitlecv">{{ $t("Collaboration on graphics, panels and exhibition areas") }}</p>
          </template>
        </AboutCvElement>

        <AboutCvElement category="Volunteering (2019-2021)" class="mt-3">
          <template #slotcvelement>
            <p>{{ $t("Sales Clerk at the University Bookstore") }}</p>
            <p class="subtitlecv">{{ $t("CUSL, Politecnico di Milano") }}</p>
          </template>
        </AboutCvElement>

        <AboutCvElement category="Volunteering (every year)" class="mt-3">
          <template #slotcvelement>
            <p>{{ $t("Banco Alimentare and Banco Farmaceutico") }}</p>
            <p class="subtitlecv">{{ $t("Collection of food and medicines for people in need.") }}</p>
          </template>
        </AboutCvElement>

          </b-card-body>
        </b-collapse>
      </b-card>

    </div>

    <div class="accordion lineacc pt-4">
      <b-card no-body class="cardaccordion">
        <b-card-header class="p-0 cardaccordion pb-3" >
          <b-row tag="button" type="button" v-b-toggle.accordion-4 class="text-left d-flex cardaccordion justify-spa accordion-trigger" >
            <b-col cols="auto" class=""> <h4 aria-level="2" class="gradient">{{ $t(" Languages ") }}</h4> </b-col>
            <b-col class="text-right mr-2 ">

              <HeaderIcon
                bare
                id-suffix="-accordion-4"
                :size="30"
                class="accordion-arrow"
                :class="{ 'is-open': opened.accordion4 }"
              />
            </b-col>
          </b-row>
        </b-card-header>

        <b-collapse v-model="opened.accordion4" id="accordion-4" class="cardaccordion pb-4" accordion="">
          <b-card-body >

        <AboutCvElement category="Italian" class="mt-0">
          <template #slotcvelement>
            <p>{{ $t("Native") }}</p>
          </template>
        </AboutCvElement>

        <AboutCvElement category="English" class="mt-3">
          <template #slotcvelement>
            <p>{{ $t("B2 - IELTS Certification") }}</p>
          </template>
        </AboutCvElement>

        <AboutCvElement category="Spanish" class="mt-3">
          <template #slotcvelement>
            <p>{{ $t("Basic") }}</p>
          </template>
        </AboutCvElement>

          </b-card-body>
        </b-collapse>
      </b-card>

    </div>

    <div class="accordion lineacc lineaccsott  pt-4">
      <b-card no-body class="cardaccordion">
        <b-card-header class="p-0 cardaccordion pb-3" >
          <b-row tag="button" type="button" v-b-toggle.accordion-5 class="text-left d-flex cardaccordion justify-spa accordion-trigger" >
            <b-col cols="auto" class=""> <h4 aria-level="2" class="gradient">{{ $t(" Software and Tools ") }}</h4> </b-col>
            <b-col class="text-right mr-2 ">

              <HeaderIcon
                bare
                id-suffix="-accordion-5"
                :size="30"
                class="accordion-arrow"
                :class="{ 'is-open': opened.accordion5 }"
              />
            </b-col>
          </b-row>
        </b-card-header>

        <b-collapse v-model="opened.accordion5" id="accordion-5" class="cardaccordion pb-4" accordion="">
          <b-card-body >

        <AboutCvElement category="Design Tools" class="software-tools-entry mt-0">
          <template #slotcvelement>
            <p>Figma, Illustrator, Photoshop, InDesign, Lightroom, Premiere Pro, iMovie, Audition</p>
          </template>
        </AboutCvElement>

        <AboutCvElement category="Presentations" class="software-tools-entry mt-3">
          <template #slotcvelement>
            <p>Keynote, Figma Slides, PowerPoint, Slides.com</p>
          </template>
        </AboutCvElement>

        <AboutCvElement category="AI Tools" class="software-tools-entry mt-3">
          <template #slotcvelement>
            <p>{{ $t("ChatGPT, Claude, EnvatoLab, Nanobanana, Midjourney, Gemini, Photoshop AI") }}</p>
          </template>
        </AboutCvElement>

        <AboutCvElement category="Digital Signage &amp; Live Production" class="software-tools-entry mt-3">
          <template #slotcvelement>
            <p>FluidNEXT, MagicINFO</p>
          </template>
        </AboutCvElement>

        <AboutCvElement category="Other Tools" class="software-tools-entry mt-3">
          <template #slotcvelement>
            <p>{{ $t("Miro, Word, Excel, Teams, GettyImages") }}</p>
          </template>
        </AboutCvElement>

        <AboutCvElement category="Coding &amp; Website" class="software-tools-entry mt-3">
          <template #slotcvelement>
            <p>{{ $t("HTML, CSS, JavaScript, Nuxt, Figma Site, Vue, Bootstrap, WordPress, Framer") }}</p>
          </template>
        </AboutCvElement>

          </b-card-body>
        </b-collapse>
      </b-card>



    </div>

    <h4 aria-level="2" class="w-100 mt-5 text-center"> <a href="/documents/giovanniclericetti.pdf" target="_blank" style="display: inline-flex; align-items: center;">
      <HeaderIcon symbol="down-right" id-suffix="-resume-mobile" class="mr-2" :size="30" style="flex-shrink: 0" />
      <span class="underlinemobile downloadcv" style="color: black">{{ $t(" Download Resume ") }}</span> </a>
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
        accordion6: true,
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
.accordion-trigger > :first-child { flex: 1; min-width: 0; max-width: none; padding: 0; }
.accordion-trigger > :last-child { flex: 0 0 auto; width: auto; padding: 0 0 0 8px; margin-right: 0 !important; }
.accordion-trigger h4 { text-align: left; margin-bottom: 0; white-space: normal; }
.accordion-arrow {
  display: block;
  flex-shrink: 0;
  transform: rotate(-90deg);
  transition: transform 200ms ease;
}
.accordion-arrow.is-open { transform: rotate(90deg); }
@media (prefers-reduced-motion: reduce) {
  .accordion-arrow { transition: none; }
}
.accordion-trigger:focus-visible { outline: 2px solid #FF4466; outline-offset: 4px; }
</style>

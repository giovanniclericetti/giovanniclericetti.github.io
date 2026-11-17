<template>
  <div>
    <b-row>
      <b-col cols="12" lg="7">
        <h4 aria-level="2" class="gradient"> Professional Experience </h4>


        <AboutWorkExperience />

        <h4 aria-level="2" class="gradient mt-md-5 mt-4"> Software and Tools </h4>

        <AboutCvElement category="Design Tools" class="software-tools-entry">
          <template #slotcvelement>
            <p>Figma, Illustrator, Photoshop, InDesign, Lightroom, Premiere Pro, iMovie, Audition</p>
          </template>
        </AboutCvElement>

        <AboutCvElement category="Presentations" class="software-tools-entry">
          <template #slotcvelement>
            <p>Keynote, Figma Slides, PowerPoint, Slides.com</p>
          </template>
        </AboutCvElement>

        <AboutCvElement category="AI Tools" class="software-tools-entry">
          <template #slotcvelement>
            <p>ChatGPT, Claude, EnvatoLab, Nanobanana, Midjourney, Gemini, Photoshop AI</p>
          </template>
        </AboutCvElement>

        <AboutCvElement category="Digital Signage &amp; Live Production" class="software-tools-entry">
          <template #slotcvelement>
            <p>FluidNEXT, MagicINFO</p>
          </template>
        </AboutCvElement>

        <AboutCvElement category="Other Tools" class="software-tools-entry">
          <template #slotcvelement>
            <p>Miro, Word, Excel, Teams, GettyImages</p>
          </template>
        </AboutCvElement>

        <AboutCvElement category="Coding &amp; Website" class="software-tools-entry">
          <template #slotcvelement>
            <p>HTML, CSS, JavaScript, Nuxt, Figma Site, Vue, Bootstrap, WordPress, Framer</p>
          </template>
        </AboutCvElement>

      </b-col>

      <b-col cols="12" lg="5">
        <h4 aria-level="2" class="gradient"> Education </h4>

        <AboutCvElement category="2022-2025">
          <template #slotcvelement>
            <p>Master’s Degree in Communication Design</p>
            <p class="subtitlecv"><a class="hover-a-underline-animation" href="https://www.polimi.it/">Politecnico di Milano</a>, School of Design (110/110)</p>
          </template>
        </AboutCvElement>

        <AboutCvElement category="2024">
          <template #slotcvelement>
            <p>Erasmus Exchange - Master Digital Design</p>
            <p class="subtitlecv"><a class="hover-a-underline-animation" href="https://cmd-amsterdam.nl/">Hogeschool van Amsterdam</a>, Amsterdam, NL</p>
          </template>
        </AboutCvElement>

        <AboutCvElement category="2019-2022">
          <template #slotcvelement>
            <p>Bachelor’s Degree in Communication Design</p>
            <p class="subtitlecv"><a class="hover-a-underline-animation" href="https://www.polimi.it/">Politecnico di Milano</a>, School of Design (110/110)</p>
          </template>
        </AboutCvElement>

        <AboutCvElement category="2014-2019">
          <template #slotcvelement>
            <p>Art High School Diploma (Architecture)</p>
            <p class="subtitlecv"><a class="hover-a-underline-animation" href="https://www.sacrocuore.org/">Fondazione Sacro Cuore</a>, Milan</p>
          </template>
        </AboutCvElement>

        <h4 aria-level="2" class="gradient mt-md-5 mt-4"> Exhibitions and Project Awards </h4>

        <AboutCvElement category="2023, Polimi Design School">
          <template #slotcvelement>
            <p>Belonging / Not Belonging - Indie Magazine for social change at La Stecca 3 exhibition space</p>
            <p class="subtitlecv">Presentation of the <NuxtLink class="hover-a-underline-animation" to="/referto">Referto Magazine</NuxtLink> project</p>
          </template>
        </AboutCvElement>

        <AboutCvElement category="2022, FuoriSalone Milan Design Week">
          <template #slotcvelement>
            <p>DesignXDesigner - Polimi Design Student Exhibition at Fuorisalone</p>
            <p class="subtitlecv">Presentation of the <NuxtLink class="hover-a-underline-animation" to="/sourdata">SourData</NuxtLink> project</p>
          </template>
        </AboutCvElement>

        <AboutCvElement category="2022, ATS Insubria Workshop">
          <template #slotcvelement>
            <p>ATS Insubria Social OOH Campaign</p>
            <p class="subtitlecv">BellaScusa was selected for ATS Insubria’s communication campaign against problem gambling.</p>
          </template>
        </AboutCvElement>

        <h4 aria-level="2" class="gradient mt-md-5 mt-4"> Social Initiatives </h4>

        <AboutCvElement category="University Politics (2021-2023)">
          <template #slotcvelement>
            <p>Student Representative</p>
            <p class="subtitlecv">Communication Design Programme Council (CCS), Politecnico di Milano</p>
          </template>
        </AboutCvElement>

        <AboutCvElement category="Volunteering (2021-2024)">
          <template #slotcvelement>
            <p>Meeting di Rimini - Exhibition Spaces</p>
            <p class="subtitlecv">Collaboration on graphics, panels and exhibition areas</p>
          </template>
        </AboutCvElement>

        <AboutCvElement category="Volunteering (2019-2021)">
          <template #slotcvelement>
            <p>Sales Clerk at the University Bookstore</p>
            <p class="subtitlecv">CUSL, Politecnico di Milano</p>
          </template>
        </AboutCvElement>

        <AboutCvElement category="Volunteering (every year)">
          <template #slotcvelement>
            <p>Banco Alimentare and Banco Farmaceutico</p>
            <p class="subtitlecv">Collection of food and medicines for people in need.</p>
          </template>
        </AboutCvElement>

        <h4 aria-level="2" class="gradient mt-md-5 mt-4"> Languages </h4>

        <AboutCvElement category="Italian">
          <template #slotcvelement>
            <p>Native</p>
          </template>
        </AboutCvElement>

        <AboutCvElement category="English">
          <template #slotcvelement>
            <p>B2 - IELTS Certification</p>
          </template>
        </AboutCvElement>

        <AboutCvElement category="Spanish">
          <template #slotcvelement>
            <p>Basic</p>
          </template>
        </AboutCvElement>

    <h4 aria-level="2" class="gradient mt-5 ">   <a href="documents/giovanniclericetti.pdf" target="_blank" style="text-decoration: none;">



          <b-icon class="mr-1" shift-v="-3" icon="arrow-down-right-circle-fill"
                  style="width: 35px; height: 35px; color:#FF9A5A"></b-icon>
          <span class="hover-underline-animation gradient downloadcv"> Download Resume </span> </a>
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
  bottom: 1.5px;
  left: 0;
  background-color: black;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.hover-a-underline-animation:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

a:hover {
  text-decoration: none;
  color: black;
}


</style>

<style scoped>
@media (min-width: 992px) {
  .software-tools-entry {
    width: 70%;
  }
}
</style>

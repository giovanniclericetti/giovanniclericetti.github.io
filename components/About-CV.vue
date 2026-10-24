<template>
  <div>
    <b-row>
      <b-col cols="12" lg="7">
        <h4 class="gradient"> Work Experiences </h4>


        <AboutWorkExperience />

        <h4 class="gradient mt-md-5 mt-4"> Software and Skills </h4>

        <AboutCvElement category="Design Tools">
          <template #slotcvelement>
            <p>Figma, Illustrator, Photoshop, InDesign,<br>Lightroom, Premiere Pro, iMovie, Audition</p>
          </template>
        </AboutCvElement>

        <AboutCvElement category="Presentazioni">
          <template #slotcvelement>
            <p>Keynote, Figma Slide, PowerPoint, Slides.com</p>
          </template>
        </AboutCvElement>

        <AboutCvElement category="AI Tools">
          <template #slotcvelement>
            <p>ChatGPT, Claude, EnvatoLab, Nanobanana,<br>Midjourney, Gemini, Photoshop AI</p>
          </template>
        </AboutCvElement>

        <AboutCvElement category="Gestione Impianti Digitali">
          <template #slotcvelement>
            <p>FluidNEXT, MagicINFO</p>
          </template>
        </AboutCvElement>

        <AboutCvElement category="Other Tools">
          <template #slotcvelement>
            <p>Miro, Word, Excel, Teams, GettyImages</p>
          </template>
        </AboutCvElement>

        <AboutCvElement category="Coding &amp; Website">
          <template #slotcvelement>
            <p>HTML, CSS, Javascript, Nuxt, Figma Site,<br>Vue, Bootstrap, Wordpress, Framer</p>
          </template>
        </AboutCvElement>

      </b-col>

      <b-col cols="12" lg="5">
        <h4 class="gradient"> Education </h4>

        <AboutCvElement category="2022-2025">
          <template #slotcvelement>
            <p>Laurea Magistrale in Design della Comunicazione</p>
            <p class="subtitlecv"><a class="hover-a-underline-animation" href="https://www.polimi.it/">Politecnico di Milano</a>, Scuola del Design (110/110)</p>
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
            <p>Laurea Triennale in Design della Comunicazione</p>
            <p class="subtitlecv"><a class="hover-a-underline-animation" href="https://www.polimi.it/">Politecnico di Milano</a>, Scuola del Design (110/110)</p>
          </template>
        </AboutCvElement>

        <AboutCvElement category="2014-2019">
          <template #slotcvelement>
            <p>Liceo Artistico (indirizzo Architettura)</p>
            <p class="subtitlecv"><a class="hover-a-underline-animation" href="https://www.sacrocuore.org/">Fondazione Sacro Cuore</a>, Milano</p>
          </template>
        </AboutCvElement>

        <h4 class="gradient mt-md-5 mt-4"> Exhibitions and Project Awards </h4>

        <AboutCvElement category="2023, Polimi Design School">
          <template #slotcvelement>
            <p>Belonging / Not Belonging - Indie Magazine for<br>social change in spazio espositivo La Stecca 3</p>
            <p class="subtitlecv">Presentazione del progetto Referto Magazine</p>
          </template>
        </AboutCvElement>

        <AboutCvElement category="2022, FuoriSalone Milan Design Week">
          <template #slotcvelement>
            <p>DesignXDesigner - Polimi Design Student<br>Exhibition al Fuorisalone</p>
            <p class="subtitlecv">Presentation of SourData project</p>
          </template>
        </AboutCvElement>

        <AboutCvElement category="2022, ATS Insubria Workshop">
          <template #slotcvelement>
            <p>ATS Insubria Social OOH Campaign</p>
            <p class="subtitlecv">Selezione del progetto BellaScusa per la campagna di comunicazione di ATS Insubria contro il gioco d’azzardo patologico.</p>
          </template>
        </AboutCvElement>

        <h4 class="gradient mt-md-5 mt-4"> Social Initiatives </h4>

        <AboutCvElement category="University Politics">
          <template #slotcvelement>
            <p>Representative of the Course of Study<br>in Communication Design at Politecnico di Milano</p>
          </template>
        </AboutCvElement>

        <AboutCvElement category="University Volunteering">
          <template #slotcvelement>
            <p>Sales Clerk at University Bookstore
              CUSL,<br>Politecnico di Milano</p>
          </template>
        </AboutCvElement>


        <AboutCvElement category="Volunteering">
          <template #slotcvelement>
            <p>Banco Alimentare Volunteer for<br>National Food Collection Day </p>
          </template>
        </AboutCvElement>

        <h4 class="gradient mt-md-5 mt-4"> Languages </h4>

        <AboutCvElement category="Italiano">
          <template #slotcvelement>
            <p>Madrelingua</p>
          </template>
        </AboutCvElement>

        <AboutCvElement category="Inglese">
          <template #slotcvelement>
            <p>B2 - IELTS Certification</p>
          </template>
        </AboutCvElement>

        <AboutCvElement category="Spagnolo">
          <template #slotcvelement>
            <p>Livello Base</p>
          </template>
        </AboutCvElement>

    <h4 class="gradient mt-5 ">   <a href="documents/giovanniclericetti.pdf" target="_blank" style="text-decoration: none;">



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

a:hover {
  text-decoration: none;
  color: black;
}


</style>

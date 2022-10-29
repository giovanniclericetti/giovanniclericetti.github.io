<template>

  <div class="it-back container mt-5">

  <Project-Intro


  pill1="Branding"
  pill2="UX-UI"
  pill3="Coding"
  pill4="Social Media"/>

    <Project-Cover
      cover="https://github.com/giovanniclericetti/giovanniclericetti.github.io/blob/master/static/images/it-back/it-back_cover.png?raw=true"
    />

    <ProjectDescription
      description="
Beginning with reflection on the issue of personal data and privacy,
SourData was born as a company producing devices that monitor the most intimate data,
the only ones yet ever collected, in exchange for money: Coomy for masturbation,
Poopy for feces, and Weezy for breath. The data collected is stored on an SD card, which is later
inserted inside the Hub, to allow it to be shared and obtain remuneration. The shapes of the Hub
recall the imagery of the 'piggy bank,' inside which instead of inserting the usual coins, data
is inserted, personified by the SD. In addition to brand identity design, the SourData experience
was developed in every aspect, from pre-experience to final data sharing. Posters, social content, user
instructions, presentation reels, website, data visualization dashboards, brochures, and related products
were created. All collection devices were physically made, while Coomy and the Hub are functioning
and programmed to monitor and share data on the online server."


team="E. Ceriani, G. Fulghieri, F. Nozza, M. Zagaria"
      role="Brand Identity, Grafica, UX-UI, Presentazione, Storytelling, Editoria, Ricerca Tecnologica,
Programmazione (HTML, CSS, JS, Arduino)"
      delivery="Final Sythesis Lab, 2021-2022"

    />

    <div>

      FOTO1

    </div>

    <b-row>
      <b-col cols="12" md="12" >
        <div class="projectbox">
        <img src="https://github.com/giovanniclericetti/giovanniclericetti.github.io/blob/master/static/images/it-back/it-back_cover.png?raw=true">
        </div>
      </b-col>

      <b-col cols="12" md="6" class="pr-md-0">
        <div class="projectbox">
        <img src="https://github.com/giovanniclericetti/giovanniclericetti.github.io/blob/master/static/images/it-back/it-back_cover.png?raw=true">  </div>
      </b-col>

      <b-col cols="12" md="6" class="pl-md-0">
        <div class="projectbox"> <img src="https://github.com/giovanniclericetti/giovanniclericetti.github.io/blob/master/static/images/it-back/it-back_cover.png?raw=true">  </div>
      </b-col>
      </b-row>

  </div>

</template>

<script>
export default {
  name: 'it-back',
}
</script>

<style>

.projectbox img {
  width: 100%;
  object-fit: contain;
}

.projectbox{
  background-color: white;
  max-height: 600px;
  border-radius: 30px;
  overflow: hidden;
}

</style>

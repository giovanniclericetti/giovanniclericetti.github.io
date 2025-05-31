<template>

  <div class="avi">

    <b-progress
      :value="progress"
      :max="100"
      :height="barHeight"
      :style="computedStyle"
      class="fixed-top custom-bar"
      :striped="striped"
      :animated="animated"
    ></b-progress>

    <div class="container mt-4">

      <ProjectHeader/>

      <Project-Intro
        title="Audiovisual Identity"
        subtitle="Editorial project of an indie independent magazine for
social change to chronicle the lives of health workers"
        pill1="Editorial"
        pill2="Visual"
        pill3="Branding"

      />

      <div cols="12" md="12" class=" mt-md-0 py-md-3 py-md-2 d-none d-md-block "
      >



        <img class="cover-parallax" style="


     background-image: url(/images/covers/hero/avi.jpg)"




             v-prlx.background="{ speed: 0.1 }">
      </div>


      <div cols="12" class="pt-0 my-4 cover-mobile d-block d-md-none" >

        <img class=""
     src="/images/covers/sm/referto_sm.jpg"
        >

      </div>

      <ProjectDescription
        description="
According to the vocabulary, Referto is a clinical document written by a doctor, putting his or her perspective on the patient and the disease on paper. Similarly, REFERTO magazine is the story of healthcare at its most genuine, human and emotional state, delivered directly from the hands of those who dedicate themselves to protecting our health every day. For this project, the first issue of the magazine has been created, focusing on Soccorso (First Aid), with subsequent issues planned on Hospitalisation, Surgery and Prognosis, each with its own unique cover design. The design of this indie magazine for social change evolved from the research phase, which included collecting photographic material, researching sources, producing interviews and writing articles. The REFERTO brand was established, with choices of color, paper and typography tailored to the content being communicated.

"        team="S. Bonfanti, A. Burchiani, E. Ceriani, T. Prinetti"
        role="Brand Identity, Visual, Editorial Layout"
        delivery="Editorial Design Lab, 2023"
        class="my-md-3"
      >

      </ProjectDescription>

      <div>

      </div>

      <b-row class="mt-4">

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img class="img-parallax imgproject h600" style="
     background-image: url(/images/avi/avi4.jpg)"
                 v-prlx.background="{ speed: 0.1 }"></div>
        </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">

        <ProjectDescription2

          title="Ricerca e Impaginato"

          description="
The magazine has 260 pages and is bound in Swiss binding with a fold-out flap. All content is divided into five chapters: '1. The Call', '2. The Wait', '3. The Survey', '4. The Rescue' and '5. The Transport'. Each contains the four sections of interviews, articles, reports and diaries to effectively convey the content. There is also a photo insert in the center of the mag. "

        /> </b-col>

        <b-col cols="12" md="6" class=" d-md-block py-md-3 py-2 px-3">
          <div class="imgbox">
            <img class="img-parallax imgproject h350 ref-pc" style="
     background-image: url(/images/avi/avi2.jpg)"
                 v-prlx.background="{ speed: 0.2 }"></div>
        </b-col>

        <b-col cols="12" md="6" class="d-none d-md-block py-md-3 py-2 px-3">
          <div class="imgbox">
            <img class="img-parallax imgproject h350" style="
     background-image: url(/images/avi/avi3.jpg)"
                 v-prlx.background="{ speed: 0.1 }"></div>
        </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img class="img-parallax imgproject h600" style="
     background-image: url(/images/avi/avi7.jpg)"
                 v-prlx.background="{ speed: 0.1 }"></div>
        </b-col>
        <b-col cols="12" md="6" class=" d-md-block py-md-3 py-2 px-3">
          <div class="imgbox">
            <img class="img-parallax imgproject h400 ref-pc" style="
     background-image: url(/images/avi/avi5.jpg)"
                 v-prlx.background="{ speed: 0.1 }"></div>
        </b-col>

        <b-col cols="12" md="6" class="d-none d-md-block py-md-3 py-2 px-3">
          <div class="imgbox">
            <img class="img-parallax imgproject h400" style="
     background-image: url(/images/avi/avi6.jpg)"
                 v-prlx.background="{ speed: 0.1 }"></div>
        </b-col>

        <b-col cols="12" md="12" class="d-none d-md-block py-md-3 py-2 px-3">
          <div class="imgbox">
            <img class="img-parallax imgproject h400" style="height: 430px;
     background-image: url(/images/avi/avi13.jpg)"
                 v-prlx.background="{ speed: 0.1 }"></div>
        </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">

          <ProjectDescription2

            title="Piattaforma Web"

            description="
The magazine has 260 pages and is bound in Swiss binding with a fold-out flap. All content is divided into five chapters: '1. The Call', '2. The Wait', '3. The Survey', '4. The Rescue' and '5. The Transport'. Each contains the four sections of interviews, articles, reports and diaries to effectively convey the content. There is also a photo insert in the center of the mag. "

          /> </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img class="img-parallax imgproject h600" style="
     background-image: url(/images/avi/avi8.jpg)"
                 v-prlx.background="{ speed: 0.1 }"></div>
        </b-col>

        <b-col cols="12" md="6" class="d-none d-md-block py-md-3 py-2 px-3">
          <div class="imgbox">
            <img class="img-parallax imgproject h400" style="
     background-image: url(/images/avi/avi9.jpg)"
                 v-prlx.background="{ speed: 0.1 }"></div>
        </b-col>

        <b-col cols="12" md="6" class="d-none d-md-block py-md-3 py-2 px-3">
          <div class="imgbox">
            <img class="img-parallax imgproject h400" style="
     background-image: url(/images/avi/avi10.jpg)"
                 v-prlx.background="{ speed: 0.1 }"></div>
        </b-col>

        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">
          <div class="imgbox">
            <img class="img-parallax imgproject h600" style="
     background-image: url(/images/avi/avi15.jpg)"
                 v-prlx.background="{ speed: 0.1 }"></div>
        </b-col>

        <b-col cols="12" md="6" class="d-none d-md-block py-md-3 py-2 px-3">
          <div class="imgbox">
            <img class="img-parallax imgproject h400" style="
     background-image: url(/images/avi/avi12.jpg)"
                 v-prlx.background="{ speed: 0.1 }"></div>
        </b-col>

        <b-col cols="12" md="6" class="d-none d-md-block py-md-3 py-2 px-3">
          <div class="imgbox">
            <img class="img-parallax imgproject h400" style="
     background-image: url(/images/avi/avi16.jpg)"
                 v-prlx.background="{ speed: 0.1 }"></div>
        </b-col>


        <b-col cols="12" md="12" class=" py-md-3 py-2 px-3">

          <ProjectDescription2

            title="Presentation"

            description="
The magazine has 260 pages and is bound in Swiss binding with a fold-out flap. All content is divided into five chapters: '1. The Call', '2. The Wait', '3. The Survey', '4. The Rescue' and '5. The Transport'. Each contains the four sections of interviews, articles, reports and diaries to effectively convey the content. There is also a photo insert in the center of the mag. "

          /> </b-col>

        <b-col cols="12" md="12" class="d-none d-md-block py-md-3 py-2 px-3">
          <div class="imgbox">
            <img class="img-parallax imgproject h600" style="height: 630px;
     background-image: url(/images/avi/avi14.jpg)"
                 v-prlx.background="{ speed: 0.1 }"></div>
        </b-col>




      </b-row>

      <ProjectNextPrevious
        title="Cara Chioggia"
        thumbnail="/images/covers/next/cc-next.jpg
"
        class="column card-large biowhite carachioggia"
        to="carachioggia"
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
  data() {
    return {
      progress: 0,
      barHeight: '4px',                  // Altezza della barra
      bgColor: 'rgba(0, 175, 250, 0)',  // Sfondo della barra (rosso con opacità 20%)
      barColor: '#e0071b',              // Colore della barra
      borderRadius: '0px',               // Bordo arrotondato della barra
      striped: false,                    // Strisce sulla barra (true/false)
      animated: false,                   // Animazione sulle strisce
    };
  },
  computed: {
    computedStyle() {
      return {
        backgroundColor: this.bgColor,
        borderRadius: this.borderRadius,
      };
    },
  },
  mounted() {
    window.addEventListener('scroll', this.updateProgress, { passive: true });
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.updateProgress);
  },
  methods: {
    updateProgress() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      this.progress = (scrollTop / docHeight) * 100;
    },
  },
};
</script>


<style>

.fixed-top {
  z-index: 1031;
}

.progress-bar {
  background-color: rgba(0, 175, 250) !important;
}

.cover-mobile{
  width: 100%;
  height: 300px;
  background-size: contain;
  background-position: center;
  border-radius: 20px;
  overflow: hidden;

  img{
    width: 100%;
  }
}

.avi .subtitle{
  max-width: 55%;
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

  .avi .subtitle   {
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

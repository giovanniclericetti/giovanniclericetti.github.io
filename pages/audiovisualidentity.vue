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
        subtitle="Master’s thesis project exploring audiovisual identity and design strategies in the television industry"
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


      <b-row class="mt-md-4">

        <b-col cols="12" md="7">

          <h4> Project Overview </h4>
          <p>

            Audiovisual Identity is my Master's thesis project in Communication Design at Politecnico di Milano. The work consists of three main project outputs: an editorial paper, an open-source digital platform and a presentation designed both for the final discussion and for teaching purposes. In the current context, in which the television landscape is increasingly saturated and fragmented, videography asserts itself as a strategic language for the construction of recognisable brands. The audiovisual identity thus becomes a powerful tool to strengthen the recognisability and communicative coherence of programmes, channels and platforms. Through a path of theoretical and design research, this thesis analyses the historical and stylistic evolution of videography in Italy, investigating the role of graphic elements, animations and visual codes in defining the identity of audiovisual contents. Interviews with industry professionals (Mirko Pajè, Andrea Chinese, Roberto Bagatti, Umberto Tolino and Florencia Picco) offered crucial insights, confirming the centrality of videography in television branding processes.


          </p>

          <slot name="link2">
          </slot>


        </b-col>

        <b-col cols="12" md="5" class="pl-5">


          <h4 class="mt-4 mt-md-0"> Supervisor </h4>
          <p> Francesco Ermanno Guida </p>

          <h4 class="mt-4 "> Role </h4>
          <p> Research Writing, Brand Identity, Visual, UX-UI, Keynote Presentation, Editorial, Coding </p>

          <h4 class="mt-4 "> Delivery </h4>
          <p> Research-Based Design Project </p>



        </b-col>
      </b-row>

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

          title="Editorial Design"

          description="
The thesis was conceived as an editorial project capable of synthesising the results of the research in an accessible, visually curated form consistent with the theme addressed. A visual identity was designed for the project, based on shades of blue and white, to enhance the contents and highlight the television brands analysed.
"
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

            title="Web Platform"

            description="
Complementing the thesis was Audiovisual Identity Hub, an open-source digital platform designed as a dynamic space to explore videography and television design. The project is not configured as a simple archive, but as an interactive environment in which theory and practice, research and visual testimonies can dialogue. The site is made up of five types of pages, each dedicated to a specific aspect, but an integral part of a single narrative: the introductory landing page, the documentation section, the gallery with the taxonomy of case studies, the detailed pages of the individual case studies and, finally, an About page that reveals the concept and intent of the project.
         " /> </b-col>

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
The last project step involved the creation of a presentation for the graduation speech, which was later adapted as teaching material. The presentation is designed to be a useful tool for lecturers and researchers: a deck of slides and topic sheets that can be reused in the classroom, in laboratories or in training contexts such as the master's course in which I was an assistant.
         " /> </b-col>

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

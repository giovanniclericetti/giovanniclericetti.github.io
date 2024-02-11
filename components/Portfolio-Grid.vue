<template>
  <div>

    <div id="" class="text-center my-5 d-flex justify-content-center">


    </div>

    <b-row ref="projectsContainer" class="" :style="{minHeight: containerHeight + 'px'}" >

      <b-col cols="12" md="6" lg="4">

        <PortfolioCard
          v-bind="projects.sourdata"
          class="sourdata"
        />

        <PortfolioCard
          v-bind="projects.previewpretest"
        />

        <PortfolioCard
          v-bind="projects.aura"
        />

        <PortfolioCard
          :currentCategory="currentCategory"
          v-bind="projects.around"
        />



      </b-col>

      <b-col cols="12" md="6" lg="4">

        <PortfolioCard
          :currentCategory="currentCategory"
          v-bind="projects.bottleneck"
        />

        <PortfolioCard
          :currentCategory="currentCategory"
          v-bind="projects.referto"
        />

        <PortfolioCard
          v-bind="projects.disruptive"
        />





      </b-col>

      <b-col cols="12" md="6" lg="4">

        <PortfolioCard
          :currentCategory="currentCategory"
          v-bind="projects.itback"
        />

        <PortfolioCard
          :currentCategory="currentCategory"
          v-bind="projects.carachioggia"
        />

        <PortfolioCard
          v-bind="projects.quattriny"
        />



      </b-col>


    </b-row>


  </div>
</template>

<script>
export default {
  name: "PortfolioGrid",
  data() {
    return {
      containerHeight: 0,
      projects: {

        disruptive: {
          title: 'Disruptive',
          thumbnail: '/images/cards/disruptive.png',
          projectname: 'Disruptive',
          mobileThumbnail: '/images/cards/disruptive_sm.png',
          bio: 'Design-centered digital exhibition on Sergio Marchionne and his reconstruction story.',
          category: ['ux-ui', 'branding', 'graphic'],
          class: 'column card-large biodark',
          to: "it-back",
          pill1: 'Branding',
          pill2: 'Coding',
          pill3: 'UX-UI',
        },

        itback: {
          title: 'It-Back',
          projectname: 'It-Back',
          thumbnail: '/images/cards/itback.png',
          mobileThumbnail: '/images/cards/itback_sm.png',
          bio: 'Design-centered digital exhibition on Sergio Marchionne and his reconstruction story.',
          category: ['coding', 'ux-ui', 'branding', 'graphic'],
          class: 'column card-medium biowhite',
          to: "it-back",
          pill1: 'ciao',
          pill2: 'ciao',
          pill3: 'ciao',
        },

        sourdata: {
          title: 'SourData',
          projectname: 'SourData',
          thumbnail: '/images/cards/sourdata.png',
          mobileThumbnail: '/images/cards/sourdata_sm.png',
          bio: 'Product-service system  to make money from user’s personal data',
          category: ['coding', 'ux-ui', 'branding', 'graphic'],
          class: 'column card-extralarge biowhite',
          to: "it-back",
          pill1: 'Branding',
          pill2: 'Coding',
          pill3: 'UX-UI',
        },

        previewpretest: {
          title: 'Preview Pretest',
          thumbnail: '/images/cards/previewpretest.png',
          mobileThumbnail: '/images/cards/previewpretest_sm.png',
          bio: 'Series of events dedicated ' +
            'to future Polimi students',
          projectname: 'Preview & Pretest',
          category: ['coding', 'ux-ui', 'branding', 'graphic'],
          class: 'column card-medium biowhite',
          to: "it-back",
          pill1: 'Branding',
          pill2: 'Coding',
          pill3: 'UX-UI',
        },

        referto: {
          title: 'Referto',
          thumbnail: '/images/cards/referto.png',
          mobileThumbnail: '/images/cards/fattididati_sm.png',
          bio: 'Design-centered digital exhibition on Sergio Marchionne and his reconstruction story.',
          category: ['branding', 'graphic', 'ux-ui'],
          class: 'column card-large biodark',
          to: "it-back",
          pill1: 'Branding',
          pill2: 'Coding',
          pill3: 'UX-UI',
          projectname: 'Referto Mag',
        },

        carachioggia: {
          title: 'carachioggia',
          thumbnail: '/images/cards/carachioggia.png',
          mobileThumbnail: '/images/cards/cbct_sm.png',
          bio: 'Design-centered digital exhibition on Sergio Marchionne',
          category: ['coding'],
          class: 'column card-extralarge biowhite',
          to: "it-back",
          pill1: 'Branding',
          pill2: 'Coding',
          pill3: 'UX-UI',
          projectname: 'Cara Chioggia ti scrivo'
        },

        quattriny: {
          title: 'quattriny',
          thumbnail: '/images/cards/quattriny.png',
          mobileThumbnail: '/images/cards/hively_sm.png',
          bio: 'Design-centered digital exhibition on Sergio Marchionne',
          category: ['branding', 'graphic'],
          class: 'column card-small biowhite',
          to: "it-back",
          pill1: 'Branding',
          pill2: 'Coding',
          pill3: 'UX-UI',
          projectname: 'Quattriny'
        },

        around: {
          title: 'around',
          thumbnail: '/images/cards/around.png',
          mobileThumbnail: '/images/cards/bellascusa_sm.png',
          bio: 'Design-centered digital exhibition on Sergio Marchionne',
          category: ['branding', 'graphic'],
          class: 'column card-extrasmall biowhite',
          to: "it-back",
          pill1: 'Branding',
          pill2: 'Coding',
          pill3: 'UX-UI',
          projectname: 'ARound'
        },

        bottleneck: {
          title: 'bottleneck',
          thumbnail: '/images/cards/bottleneck.png',
          mobileThumbnail: '/images/cards/aura_sm.png',
          bio: 'Design-centered digital exhibition on Sergio Marchionne ',
          category: ['branding', 'graphic'],
          class: 'column card-large biowhite',
          to: "it-back",
          pill1: 'Branding',
          pill2: 'Coding',
          pill3: 'UX-UI',
          projectname: 'bottleneck'
        },

        aura: {
          title: 'aura',
          thumbnail: '/images/cards/aura.png',
          mobileThumbnail: '/images/cards/aura_sm.png',
          bio: 'Design-centered digital exhibition on Sergio Marchionne and his reconstruction story.',
          category: ['branding', 'graphic'],
          class: 'column card-extrasmall biowhite',
          to: "it-back",
          pill1: 'Branding',
          pill2: 'Coding',
          pill3: 'UX-UI',
          projectname: 'Aura Energy'
        }


      },
      currentCategory: false
    }
  },
  methods: {},
  mounted() {
    this.containerHeight = this.$refs.projectsContainer.getBoundingClientRect().height
    console.log(this.containerHeight)
  }

}


</script>


<style scoped lang="scss">


.slider {
  background-color: #ECE9E9;
  border-radius: 100px;
  width: max-content;
}

.btn {
  border: none;
  background-color: #ECE9E9;
  cursor: pointer;
  border-radius: 100px;
  padding-left: 20px;
  padding-right: 20px;

}

/* Add a grey background color on mouse-over */
.btn:hover {
  background: #F6F2F2;
  transition: 0.25s ease-out;
}

/* Add a dark background color to the active button */
.btn.active {
  /*background: -webkit-linear-gradient(45deg, #FFA857, #FF4466);
  color: white;*/
  background: white;
}

.biored{
  --color-secondary: #D92121;
}

.biowhite{
  --color-secondary: white;
}

.biodark{
  --color-secondary: #222222;
}

h6{
  --color-secondary: white;
}

@media (max-width: 768px) {

.btn {
  padding-left: 9px;
  padding-right: 9px;
}

  p{
    font-size: 14px;
  }

}

</style>

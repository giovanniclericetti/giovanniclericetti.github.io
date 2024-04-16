<template>
  <div>

    <div id="" class="text-center my-4 d-flex justify-content-center">


    </div>

    <b-row ref="projectsContainer" class="d-md-flex d-none" :style="{minHeight: containerHeight + 'px'}" >

      <b-col cols="12" md="12" lg="4">

        <PortfolioCard
          v-bind="projects.sourdata"
          class="sourdata"
        />

        <PortfolioCard
          v-bind="projects.itback"
          class="it-back"
        />



        <PortfolioCard
          v-bind="projects.quattriny"
          class="quattriny"
        />



      </b-col>



      <b-col cols="12" md="12" lg="4">

        <PortfolioCard
          v-bind="projects.disruptive"
          class="disruptive"
        />

        <PortfolioCard
          class="carachioggia"
          v-bind="projects.carachioggia"
        />

        <PortfolioCard
          v-bind="projects.aura"
          class="aura"
        />




      </b-col>

      <b-col cols="12" md="12" lg="4">

        <PortfolioCard
          v-bind="projects.bottleneck"
          class="bottleneck"
        />

        <PortfolioCard
          class="referto"
          v-bind="projects.referto"
        />

        <PortfolioCard
          v-bind="projects.previewpretest"
          class="previewpretest"
        />

      </b-col>

    </b-row>



    <b-row ref="projectsContainer" class="d-md-none d-block"  :style="{minHeight: containerHeight + 'px'}">

      <b-col cols="12" md="6">

        <PortfolioCard
          v-bind="projects.sourdata"
          class="sourdata"
        />

        <PortfolioCard
          v-bind="projects.bottleneck"
          class="bottleneck"
        />

        <PortfolioCard
          v-bind="projects.referto"
          class="referto"
        />

        <PortfolioCard
          class="disruptive"
          v-bind="projects.disruptive"
        />

        <PortfolioCard
          class="carachioggia"
          v-bind="projects.carachioggia"
        />

        <PortfolioCard
          v-bind="projects.previewpretest"
          class="previewpretest"
        />

        <PortfolioCard
          v-bind="projects.itback"
          class="it-back"
        />

        <PortfolioCard
          v-bind="projects.aura"
          class="aura"
        />

        <PortfolioCard
          v-bind="projects.quattriny"
          class="quattriny"
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
          thumbnail: '/images/cards/disruptive.jpg',
          projectname: 'Disruptive',
          mobileThumbnail: '/images/cards/disruptive_sm.svg',
          bio: 'Design-centered digital exhibition on Sergio Marchionne and his story',
          category: ['ux-ui', 'branding', 'graphic'],
          class: 'column card-medium biodark',
          to: "disruptive",
          pill1: 'UX-UI',
          pill2: 'Exhibition',
          pill3: 'Event',
        },

        itback: {
          title: 'It-Back',
          projectname: 'It-Back',
          thumbnail: '/images/cards/itback.jpg',
          mobileThumbnail: '/images/cards/itback_sm.svg',
          bio: 'Digital experience  aimed at reviving outdated technology products',
          category: ['coding', 'ux-ui', 'branding', 'graphic'],
          class: 'column card-large biowhite',
          to: "it-back",
          pill1: 'Visual',
          pill2: 'UX-UI',
          pill3: 'Coding',
        },

        sourdata: {
          title: 'SourData',
          projectname: 'SourData',
          thumbnail: '/images/cards/sourdata.jpg',
          mobileThumbnail: '/images/cards/sourdata_sm.svg',
          bio: 'Product-service system to make money from user’s personal data',
          category: ['coding', 'ux-ui', 'branding', 'graphic'],
          class: 'column card-extraextralarge biowhite',
          to: "sourdata",
          pill1: 'Interaction',
          pill2: 'UX-UI',
          pill3: 'Branding',
        },

        previewpretest: {
          title: 'Preview Pretest',
          thumbnail: '/images/cards/previewpretest.jpg',
          mobileThumbnail: '/images/cards/preview_sm.svg',
          bio: 'Series of events dedicated to future Polimi students',
          projectname: 'Preview & Pretest',
          category: ['coding', 'ux-ui', 'branding', 'graphic'],
          class: 'column card-medium biowhite',
          to: "previewpretest",
          pill1: 'Branding',
          pill2: 'Social',
          pill3: 'Visual',
        },

        referto: {
          title: 'Referto',
          thumbnail: '/images/cards/referto.jpg',
          mobileThumbnail: '/images/cards/referto_sm.svg',
          bio: 'Indipendent Magazine for social change about lives of health workers',
          category: ['branding', 'graphic', 'ux-ui'],
          class: 'column card-large biodark md-biowhite',
          to: "referto",
          pill1: 'Editorial',
          pill2: 'Visual',
          pill3: 'Branding',
          projectname: 'Referto Magazine',
        },

        carachioggia: {
          title: 'carachioggia',
          thumbnail: '/images/cards/carachioggia.jpg',
          mobileThumbnail: '/images/cards/carachioggia_sm.svg',
          bio: 'Digital experience of letters and stories to relive fishing places in Chioggia ',
          category: ['coding'],
          class: 'column card-extralarge biowhite',
          to: "carachioggia",
          pill1: 'UX-UI',
          pill2: 'Visual',
          pill3: 'Branding',
          projectname: 'Cara Chioggia ti scrivo'
        },

        quattriny: {
          title: 'quattriny',
          thumbnail: '/images/cards/quattriny.jpg',
          mobileThumbnail: '/images/cards/quattriny_sm.svg',
          bio: 'Ironic fictional-branding of a cash provider payment company',
          category: ['branding', 'graphic'],
          class: 'column card-small biowhite',
          to: "quattriny",
          pill1: 'Branding',
          pill2: 'Copywriting',
          pill3: 'Visual',
          projectname: 'Quattriny'
        },

        around: {
          title: 'around',
          thumbnail: '/images/cards/around.jpg',
          mobileThumbnail: '/images/cards/around_sm.svg',
          bio: 'Research and experimentation project on the use of algorithms in translation',
          category: ['branding', 'graphic'],
          class: 'column card-extrasmall biowhite',
          to: "it-back",
          pill1: 'Visual',
          pill2: 'AR',
          pill3: 'Exhibition',
          projectname: 'ARound'
        },

        bottleneck: {
          title: 'bottleneck',
          thumbnail: '/images/cards/bottleneck.jpg',
          mobileThumbnail: '/images/cards/bottleneck_sm.svg',
          bio: 'Digital innovative wellbeing service that categorises and prioritises notifications',
          category: ['branding', 'graphic'],
          class: 'column card-extralarge biowhite',
          to: "bottleneck",
          pill1: 'UX-UI',
          pill2: 'Interaction',
          pill3: 'Branding',
          projectname: 'Bottleneck'
        },

        aura: {
          title: 'aura',
          thumbnail: '/images/cards/aura.jpg',
          mobileThumbnail: '/images/cards/aura_sm.svg',
          bio: 'Brand identity for energy company',
          category: ['branding', 'graphic'],
          class: 'column card-small biowhite',
          to: "aura",
          pill1: 'Branding',
          pill2: 'Visual',
          pill3: 'UI',
          projectname: 'Aura Energy',
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

  .md-biowhite{
    --color-secondary: white;
  }


}

</style>

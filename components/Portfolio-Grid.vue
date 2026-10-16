<template>
  <div>

    <div id="" class="text-center my-4 d-flex justify-content-center">


    </div>

    <b-row class="d-md-flex d-none" >


      <b-col cols="12" md="12" lg="4">

        <PortfolioCard
          v-bind="projects.milan"
          class="acmilan"
        />

        <PortfolioCard
          class="disruptive"
          v-bind="projects.disruptive"
        />


        <PortfolioCard
          v-bind="projects.previewpretest"
          class="previewpretest"
        />

      </b-col>

      <b-col cols="12" md="12" lg="4">

        <PortfolioCard
          v-bind="projects.avi"
          class="avi"
        />

        <PortfolioCard
          v-bind="projects.bottleneck"
          class="bottleneck"
        />

        <PortfolioCard
          class="carachioggia"
          v-bind="projects.carachioggia"
        />

      </b-col>

      <b-col cols="12" md="12" lg="4">

        <PortfolioCard
          v-bind="projects.sourdata"
          class="sourdata"
        />

        <PortfolioCard
          v-bind="projects.avi"
          class="avi"
        />


        <PortfolioCard
          v-bind="projects.referto"
          class="referto"
        />




      </b-col>



    </b-row>



    <b-row class="d-md-none d-block" >

      <b-col cols="12" md="6">

        <PortfolioCard
          v-bind="projects.milan"
          class="acmilan"
        />

        <PortfolioCard
          v-bind="projects.avi"
          class="avi"
        />

        <PortfolioCard
          v-bind="projects.sourdata"
          class="sourdata"
        />

        <PortfolioCard
          v-bind="projects.avi"
          class="avi"
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



      </b-col>

    </b-row>


  </div>
</template>

<script>
export default {
  name: "PortfolioGrid",
  data() {
    return {
      projects: {

        avi: {
          title: 'Audiovisual Identity',
          projectname: 'Audiovisual Identity',
          thumbnail: '/images/covers/cards/avi-card-v2.jpg',
          mobileThumbnail: '/images/covers/cards-sm/avi_sm.jpg',
          bio: 'Research thesis focused on brand strategy and design in the TV industry',
          category: ['coding', 'ux-ui', 'branding', 'graphic'],
          class: 'column card-medium biowhite',
          to: "audiovisualidentity",
          pill1: 'Thesis',
          pill2: 'Editorial',
          pill3: 'Branding',
        },

        milan: {
          title: 'AC Milan',
          projectname: 'AC Milan',
          thumbnail: '/images/covers/cards/milan-card-v2.jpg',
          mobileThumbnail: '/images/covers/cards-sm/milan_sm.jpg',
          bio: 'Production of presentations and visual assets for the Club and its partners',
          category: ['confidential', 'visual', 'branding', 'graphic'],
          class: 'column card-large biowhite',
          to: "acmilan",
          pill1: 'Visual',
          pill2: 'Branding',
          pill3: 'Sport Prod',
        },

        disruptive: {
          title: 'Disruptive',
          thumbnail: '/images/covers/cards/disruptive-card.jpg',
          projectname: 'Disruptive',
          mobileThumbnail: '/images/covers/cards-sm/disruptive_sm.jpg',
          bio: 'Design-centered digital exhibition on Sergio Marchionne and his story',
          category: ['ux-ui', 'branding', 'graphic'],
          class: 'column card-medium biodark',
          to: "disruptive",
          pill1: 'UX-UI',
          pill2: 'Exhibition',
          pill3: 'Event',
        },


        sourdata: {
          title: 'SourData',
          projectname: 'SourData',
          thumbnail: '/images/covers/cards/sourdata-card.jpg',
          mobileThumbnail: '/images/covers/cards-sm/sourdata_sm.jpg',
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
          thumbnail: '/images/covers/cards/preview-card.jpg',
          mobileThumbnail: '/images/covers/cards-sm/preview_sm.jpg',
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
          thumbnail: '/images/covers/cards/referto-card.jpg',
          mobileThumbnail: '/images/covers/cards-sm/referto_sm.jpg',
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
          thumbnail: '/images/covers/cards/carachioggia-card.jpg',
          mobileThumbnail: '/images/covers/cards-sm/carachioggia_sm.jpg',
          bio: 'Digital experience of letters and stories to relive fishing places in Chioggia ',
          category: ['coding'],
          class: 'column card-extralarge biowhite',
          to: "carachioggia",
          pill1: 'UX-UI',
          pill2: 'Visual',
          pill3: 'Branding',
          projectname: 'Cara Chioggia ti scrivo'
        },


        bottleneck: {
          title: 'bottleneck',
          thumbnail: '/images/covers/cards/bottleneck-card.jpg',
          mobileThumbnail: '/images/covers/cards-sm/bottleneck_sm.jpg',
          bio: 'Digital innovative wellbeing service that categorises and prioritises notifications',
          category: ['branding', 'graphic'],
          class: 'column card-extralarge biowhite',
          to: "bottleneck",
          pill1: 'UX-UI',
          pill2: 'Interaction',
          pill3: 'Branding',
          projectname: 'Bottleneck'
        },



      },
      currentCategory: false
    }
  },
  methods: {},

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

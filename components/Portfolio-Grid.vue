<template>
  <div>

    <div id="" class="text-center my-4 d-flex justify-content-center">


    </div>

    <b-row class="d-lg-flex d-none" >


      <b-col cols="12" md="12" lg="4" class="portfolio-column">

        <PortfolioCard
          v-bind="projects.milan2"
          class="acmilan2"
        />

        <PortfolioCard
          class="acmilan"
          v-bind="projects.milan"
        />

        <PortfolioCard
          v-bind="projects.sourdata"
          class="sourdata"
        />


        <div class="column-filler" aria-hidden="true"></div>
      </b-col>

      <b-col cols="12" md="12" lg="4" class="portfolio-column">

        <PortfolioCard
          v-bind="projects.milan3"
          class="acmilan3"
        />

        <PortfolioCard
          v-bind="projects.disruptive"
          class="disruptive"
        />

        <PortfolioCard
          class="previewpretest"
          v-bind="projects.previewpretest"
        />

        <div class="column-filler" aria-hidden="true"></div>
      </b-col>

      <b-col cols="12" md="12" lg="4" class="portfolio-column">

        <PortfolioCard
          v-bind="projects.avi"
          class="avi"
        />

        <PortfolioCard
          v-bind="projects.referto"
          class="referto"
        />


        <PortfolioCard
          v-bind="projects.bottleneck"
          class="bottleneck"
        />

        <PortfolioCard
          v-bind="projects.carachioggia"
          class="carachioggia"
        />





        <div class="column-filler" aria-hidden="true"></div>
      </b-col>



    </b-row>



    <b-row class="d-lg-none d-block" >

      <b-col cols="12" class="compact-project-grid">

        <PortfolioCard mobile-layout
          v-bind="projects.milan3"
          class="acmilan3"
        />

        <PortfolioCard mobile-layout
          v-bind="projects.milan2"
          class="acmilan2"
        />

        <PortfolioCard mobile-layout
          v-bind="projects.avi"
          class="avi d-md-none"
        />

        <PortfolioCard mobile-layout
          v-bind="projects.milan"
          class="acmilan d-none d-md-block"
        />

        <PortfolioCard mobile-layout
          v-bind="projects.referto"
          class="referto"
        />

        <PortfolioCard mobile-layout
          v-bind="projects.bottleneck"
          class="bottleneck"
        />

        <PortfolioCard mobile-layout
          v-bind="projects.carachioggia"
          class="carachioggia"
        />


        <PortfolioCard mobile-layout
          v-bind="projects.previewpretest"
          class="previewpretest d-md-none"
        />

        <PortfolioCard mobile-layout
          v-bind="projects.disruptive"
          class="disruptive d-none d-md-block"
        />

        <PortfolioCard mobile-layout
          v-bind="projects.milan"
          class="acmilan d-md-none"
        />

        <PortfolioCard mobile-layout
          v-bind="projects.avi"
          class="avi d-none d-md-block"
        />

        <PortfolioCard mobile-layout
          class="disruptive d-md-none"
          v-bind="projects.disruptive"
        />

        <PortfolioCard mobile-layout
          v-bind="projects.previewpretest"
          class="previewpretest d-none d-md-block"
        />

        <PortfolioCard mobile-layout
          v-bind="projects.sourdata"
          class="sourdata"
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

        milan3: {
          projectType: 'Work Experience',
          fullResolution: true,
          title: 'ACM Events & Matchday',
          projectname: 'ACM Events & Matchday',
          thumbnail: '/images/acm-partner-visibility/acm3.png',
          mobileThumbnail: '/images/acm-partner-visibility/acm3.png',
          bio: 'Visual design for events, commercial activations, and stadium experiences.',
          class: 'column card-extralarge biowhite',
          to: "acmilan3",
          workInProgress: false,
          pill1: 'Work',
          pill2: 'Commercial',
          pill3: 'Event',
        },


        milan2: {
          projectType: 'Work Experience',
          fullResolution: true,
          title: 'ACM Partner Visibility',
          projectname: 'ACM Partner Visibility',
          thumbnail: '/images/acm-partner-visibility/acm2-card.png',
          mobileThumbnail: '/images/acm-partner-visibility/acm2_sm.png',
          bio: "Visual branding and visibility for the Club's commercial partners.",
          class: 'column card-medium biowhite',
          to: "acm-partner-visibility",
          workInProgress: false,
          pill1: 'Work',
          pill2: 'Brand',
          pill3: 'Commercial',
        },


        avi: {
          projectType: 'Polimi Master Thesis',
          title: 'Audiovisual Identity',
          projectname: 'Audiovisual Identity',
          thumbnail: '/images/covers/cards/avi-card-v2.jpg',
          mobileThumbnail: '/images/covers/cards-sm/avi_sm.jpg',
          bio: 'Research thesis focused on brand strategy and design in the TV industry',
          category: ['coding', 'ux-ui', 'branding', 'graphic'],
          class: 'column card-small biowhite',
          to: "audiovisualidentity",
          pill1: 'Thesis',
          pill2: 'Editorial',
          pill3: 'Branding',
        },

        milan: {
          projectType: 'Work Experience',
          fullResolution: true,
          title: 'ACM Commercial Decks',
          projectname: 'ACM Commercial Decks',
          thumbnail: '/images/covers/cards/milan-card-v2.jpg',
          mobileThumbnail: '/images/covers/cards-sm/milan_sm.jpg',
          bio: 'Design of commercial presentations and visual assets for AC Milan and its partners.',
          category: ['confidential', 'visual', 'branding', 'graphic'],
          class: 'column card-medium biowhite',
          to: "acmilan",
          pill1: 'Work',
          pill2: 'Commercial',
          pill3: 'Presentation',
        },

        disruptive: {
          projectType: 'Personal Project',
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
          projectType: 'Personal Project',
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
          bio: 'Independent Magazine for social change about lives of health workers',
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
          mobileThumbnail: '/images/covers/cards/carachioggia-card.jpg',
          bio: 'Digital experience of letters and stories to relive fishing places in Chioggia ',
          category: ['coding'],
          class: 'column card-small biowhite',
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
          class: 'column card-medium biowhite',
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

.portfolio-column {
  display: flex;
  flex-direction: column;
}

.portfolio-column > .projectcard {
  flex-shrink: 0;
}

.portfolio-column > .projectcard:nth-last-child(2) {
  margin-bottom: 0;
}

.column-filler {
  flex: 1 0 0;
  position: relative;
  overflow: hidden;
  pointer-events: none;
}

.column-filler::after {
  content: '';
  position: absolute;
  inset: 32px 0 0;
  border-radius: 30px;
  background: linear-gradient(to bottom, rgba(200, 200, 200, 0.5), rgba(200, 200, 200, 0));
}


@media (min-width: 768px) and (max-width: 991.98px) {
  .compact-project-grid {
    column-count: 2;
    column-gap: 30px;
  }

  .compact-project-grid > .projectcard {
    min-width: 0;
    break-inside: avoid;
    margin-bottom: 30px;
  }
}



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


@media (max-width: 991.98px) {

.btn {
  padding-left: 9px;
  padding-right: 9px;
}

  p{
    font-size: 14px;
  }

  @media (max-width: 767.98px) {
    .md-biowhite{
      --color-secondary: white;
    }
  }


}

</style>

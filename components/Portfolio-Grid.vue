<template>
  <div>

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
import projectContent from '~/utils/project-content'
export default {
  name: "PortfolioGrid",
  data() {
    return {
      projects: {

        milan3: {
          bio: projectContent.acmilan3.bio,
          pill1: projectContent.acmilan3.pill1,
          pill2: projectContent.acmilan3.pill2,
          pill3: projectContent.acmilan3.pill3,
          projectType: 'Work Experience',
          fullResolution: true,
          title: 'ACM Events & Matchday',
          projectname: 'ACM Events & Matchday',
          thumbnail: '/images/acm-partner-visibility/acm3.png',
          mobileThumbnail: '/images/mobile/events-card.webp',
          class: 'column card-extralarge biowhite',
          to: "acmilan3",
          workInProgress: false,
        },


        milan2: {
          bio: projectContent['acm-partner-visibility'].bio,
          pill1: projectContent['acm-partner-visibility'].pill1,
          pill2: projectContent['acm-partner-visibility'].pill2,
          pill3: projectContent['acm-partner-visibility'].pill3,
          projectType: 'Work Experience',
          fullResolution: true,
          title: 'ACM Partner Visibility',
          projectname: 'ACM Partner Visibility',
          thumbnail: '/images/acm-partner-visibility/acm2-card.png',
          mobileThumbnail: '/images/acm-partner-visibility/acm2_sm.png',
          class: 'column card-medium biowhite',
          to: "acm-partner-visibility",
          workInProgress: false,
        },


        avi: {
          bio: projectContent.audiovisualidentity.bio,
          pill1: projectContent.audiovisualidentity.pill1,
          pill2: projectContent.audiovisualidentity.pill2,
          pill3: projectContent.audiovisualidentity.pill3,
          projectType: 'Polimi Master Thesis',
          title: 'Audiovisual Identity',
          projectname: 'Audiovisual Identity',
          thumbnail: '/images/covers/cards/avi-card.jpg',
          mobileThumbnail: '/images/covers/cards/avi-card.jpg',
          category: ['coding', 'ux-ui', 'branding', 'graphic'],
          class: 'column card-small biowhite',
          to: "audiovisualidentity",
        },

        milan: {
          bio: projectContent.acmilan.bio,
          pill1: projectContent.acmilan.pill1,
          pill2: projectContent.acmilan.pill2,
          pill3: projectContent.acmilan.pill3,
          projectType: 'Work Experience',
          fullResolution: true,
          title: 'ACM Commercial Decks',
          projectname: 'ACM Commercial Decks',
          thumbnail: '/images/covers/cards/milan-card.jpg',
          mobileThumbnail: '/images/covers/cards/milan-card.jpg',
          category: ['confidential', 'visual', 'branding', 'graphic'],
          class: 'column card-medium biowhite',
          to: "acmilan",
        },

        disruptive: {
          bio: projectContent.disruptive.bio,
          pill1: projectContent.disruptive.pill1,
          pill2: projectContent.disruptive.pill2,
          pill3: projectContent.disruptive.pill3,
          projectType: 'Personal Project',
          title: 'Disruptive',
          thumbnail: '/images/covers/cards/disruptive-card.jpg',
          projectname: 'Disruptive',
          mobileThumbnail: '/images/covers/cards-sm/disruptive_sm.jpg',
          category: ['ux-ui', 'branding', 'graphic'],
          class: 'column card-medium biodark',
          to: "disruptive",
        },


        sourdata: {
          bio: projectContent.sourdata.bio,
          pill1: projectContent.sourdata.pill1,
          pill2: projectContent.sourdata.pill2,
          pill3: projectContent.sourdata.pill3,
          title: 'SourData',
          projectname: 'SourData',
          thumbnail: '/images/covers/cards/sourdata-card.jpg',
          mobileThumbnail: '/images/covers/cards-sm/sourdata_sm.jpg',
          category: ['coding', 'ux-ui', 'branding', 'graphic'],
          class: 'column card-extraextralarge biowhite',
          to: "sourdata",
        },

        previewpretest: {
          bio: projectContent.previewpretest.bio,
          pill1: projectContent.previewpretest.pill1,
          pill2: projectContent.previewpretest.pill2,
          pill3: projectContent.previewpretest.pill3,
          projectType: 'Personal Project',
          title: 'Preview Pretest',
          thumbnail: '/images/covers/cards/preview-card.jpg',
          mobileThumbnail: '/images/covers/cards-sm/preview_sm.jpg',
          projectname: 'Preview & Pretest',
          category: ['coding', 'ux-ui', 'branding', 'graphic'],
          class: 'column card-medium biowhite',
          to: "previewpretest",
        },

        referto: {
          bio: projectContent.referto.bio,
          pill1: projectContent.referto.pill1,
          pill2: projectContent.referto.pill2,
          pill3: projectContent.referto.pill3,
          title: 'Referto',
          thumbnail: '/images/covers/cards/referto-card.jpg',
          mobileThumbnail: '/images/covers/cards-sm/referto_sm.jpg',
          category: ['branding', 'graphic', 'ux-ui'],
          class: 'column card-large biodark md-biowhite',
          to: "referto",
          projectname: 'Referto Magazine',
        },

        carachioggia: {
          bio: projectContent.carachioggia.bio,
          pill1: projectContent.carachioggia.pill1,
          pill2: projectContent.carachioggia.pill2,
          pill3: projectContent.carachioggia.pill3,
          title: 'carachioggia',
          thumbnail: '/images/covers/cards/carachioggia-card.jpg',
          mobileThumbnail: '/images/covers/cards/carachioggia-card.jpg',
          category: ['coding'],
          class: 'column card-small biowhite',
          to: "carachioggia",
          projectname: 'Cara Chioggia ti scrivo'
        },


        bottleneck: {
          bio: projectContent.bottleneck.bio,
          pill1: projectContent.bottleneck.pill1,
          pill2: projectContent.bottleneck.pill2,
          pill3: projectContent.bottleneck.pill3,
          title: 'bottleneck',
          thumbnail: '/images/covers/cards/bottleneck-card.jpg',
          mobileThumbnail: '/images/covers/cards/bottleneck-card.jpg',
          category: ['branding', 'graphic'],
          class: 'column card-medium biowhite',
          to: "bottleneck",
          projectname: 'Bottleneck'
        },



      },
      currentCategory: false
    }
  },
  mounted() {
    this.fitObserver = new ResizeObserver(this.scheduleCardTextFit)
    this.fitObserver.observe(this.$el)
    window.addEventListener('resize', this.scheduleCardTextFit)
    document.fonts.ready.then(() => {
      if (!this._isDestroyed) this.scheduleCardTextFit()
    })
    this.scheduleCardTextFit()
  },
  beforeDestroy() {
    this.fitObserver.disconnect()
    window.removeEventListener('resize', this.scheduleCardTextFit)
    cancelAnimationFrame(this.fitFrame)
  },
  methods: {
    scheduleCardTextFit() {
      cancelAnimationFrame(this.fitFrame)
      this.fitFrame = requestAnimationFrame(this.fitCardText)
    },
    fitCardText() {
      // Keep mobile titles fixed; fit the pills to one shared size across cards.
      const mobile = window.innerWidth < 992
      let titleSize = mobile ? 18 : 20
      let pillSize = mobile ? 12 : 14
      const textWidth = (element) => {
        const range = document.createRange()
        range.selectNodeContents(element)
        return range.getBoundingClientRect().width
      }
      this.$el.querySelectorAll('.titlemob').forEach((title) => {
        if (mobile || !title.getClientRects().length) return
        const width = textWidth(title)
        const size = parseFloat(getComputedStyle(title).fontSize)
        if (width) titleSize = Math.min(titleSize, size * (title.clientWidth - 2) / width)
      })
      this.$el.querySelectorAll('.card-tags').forEach((row) => {
        if (!row.getClientRects().length) return
        const style = getComputedStyle(row)
        const available = row.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight) - 2
        const gap = parseFloat(style.columnGap) || 0
        let fixed = gap * Math.max(0, row.querySelectorAll('.pillshome').length - 1)
        let text = 0
        let size = pillSize
        row.querySelectorAll('.pillshome').forEach((pill) => {
          const pillStyle = getComputedStyle(pill)
          const width = textWidth(pill)
          text += width
          fixed += pill.getBoundingClientRect().width - width + parseFloat(pillStyle.marginLeft) + parseFloat(pillStyle.marginRight)
          size = parseFloat(pillStyle.fontSize)
        })
        if (text) pillSize = Math.min(pillSize, size * (available - fixed) / text)
      })
      for (const [property, size] of [['--card-title-size', titleSize], ['--card-pill-size', pillSize]]) {
        const value = `${Math.max(1, Math.floor(size * 10) / 10)}px`
        if (this.$el.style.getPropertyValue(property) !== value) this.$el.style.setProperty(property, value)
      }
    },
  },

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

<template>
  <div>

    <div id="" class="text-center my-5 d-flex justify-content-center">

      <div class="slider p-1">
        <div :class="['btn', !currentCategory && 'active']" @click="currentCategory = false"><p>All</p></div>
        <div :class="['btn', currentCategory === 'ux-ui' && 'active']" @click="currentCategory = 'ux-ui'"><p>UX/UI</p>
        </div>
        <div :class="['btn', currentCategory === 'branding' && 'active']" @click="currentCategory = 'branding'">
          <p>Branding</p>
        </div>
        <div :class="['btn', currentCategory === 'coding' && 'active']" @click="currentCategory = 'coding'">
          <p>Coding</p>
        </div>
        <div :class="['btn', currentCategory === 'graphic' && 'active']" @click="currentCategory = 'graphic'">
          <p>Graphic</p>
        </div>
      </div>
    </div>

    <b-row ref="projectsContainer" class="" :style="{minHeight: containerHeight + 'px'}" >

      <b-col cols="12" md="6" lg="4">

        <PortfolioCard
          :currentCategory="currentCategory"
          v-bind="projects.sourdata"
        >

        </PortfolioCard>

        <PortfolioCard
          :currentCategory="currentCategory"
          v-bind="projects.aura"
        />

        <PortfolioCard
          :currentCategory="currentCategory"
          v-bind="projects.fattididati"
        />

      </b-col>

      <b-col cols="12" md="6" lg="4">


        <PortfolioCard
          :currentCategory="currentCategory"
          v-bind="projects.bellascusa"
        />

        <PortfolioCard
          :currentCategory="currentCategory"
          v-bind="projects.itback"
        />

        <PortfolioCard
          :currentCategory="currentCategory"
          v-bind="projects.hively"
        />

      </b-col>

      <b-col cols="12" md="6" lg="4">



        <PortfolioCard
          :currentCategory="currentCategory"
          v-bind="projects.previewpretest"
        />

        <PortfolioCard
          :currentCategory="currentCategory"
          v-bind="projects.disruptive"
        />

        <PortfolioCard
          :currentCategory="currentCategory"
          v-bind="projects.cbct"
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
          mobileThumbnail: '/images/cards/disruptive_sm.png',
          bio: 'Design-centered digital exhibition on Sergio Marchionne and his reconstruction story.',
          category: ['ux-ui', 'branding', 'graphic'],
          class: 'column card-large biodark',
          to: "it-back"
        },

        itback: {
          title: 'It-Back',
          thumbnail: '/images/cards/itback.png',
          mobileThumbnail: '/images/cards/itback_sm.png',
          bio: 'Design-centered digital exhibition on Sergio Marchionne and his reconstruction story.',
          category: ['coding', 'ux-ui', 'branding', 'graphic'],
          class: 'column card-large biowhite',
          to: "it-back"
        },

        sourdata: {
          title: 'SourData',
          thumbnail: '/images/cards/sourdata.png',
          mobileThumbnail: '/images/cards/sourdata_sm.png',
          bio: 'Design-centered digital exhibition on Sergio Marchionne and his reconstruction story.',
          category: ['coding', 'ux-ui', 'branding', 'graphic'],
          class: 'column card-large biowhite',
          to: "it-back"
        },

        previewpretest: {
          title: 'Preview Pretest',
          thumbnail: '/images/cards/previewpretest.png',
          mobileThumbnail: '/images/cards/previewpretest_sm.png',
          bio: 'Design-centered digital exhibition on Sergio Marchionne and his reconstruction story.',
          category: ['coding', 'ux-ui', 'branding', 'graphic'],
          class: 'column card-medium biowhite',
          to: "it-back"
        },

        fattididati: {
          title: 'FattiDiDati',
          thumbnail: '/images/cards/fattididati.png',
          mobileThumbnail: '/images/cards/fattididati_sm.png',
          bio: 'Design-centered digital exhibition on Sergio Marchionne and his reconstruction story.',
          category: ['branding', 'graphic', 'ux-ui'],
          class: 'column card-medium biodark',
          to: "it-back"
        },

        cbct: {
          title: 'cbct',
          thumbnail: '/images/cards/cbct.png',
          mobileThumbnail: '/images/cards/cbct_sm.png',
          bio: 'Design-centered digital exhibition on Sergio Marchionne and his reconstruction story.',
          category: ['coding'],
          class: 'column card-small biodark',
          to: "it-back"
        },

        hively: {
          title: 'hively',
          thumbnail: '/images/cards/hively.png',
          mobileThumbnail: '/images/cards/hively_sm.png',
          bio: 'Design-centered digital exhibition on Sergio Marchionne and his reconstruction story.',
          category: ['branding', 'graphic'],
          class: 'column card-small biowhite',
          to: "it-back"
        },

        bellascusa: {
          title: 'bellascusa',
          thumbnail: '/images/cards/bellascusa.png',
          mobileThumbnail: '/images/cards/bellascusa_sm.png',
          bio: 'Design-centered digital exhibition on Sergio Marchionne and his reconstruction story.',
          category: ['branding', 'graphic'],
          class: 'column card-small biowhite',
          to: "it-back"
        },

        aura: {
          title: 'aura',
          thumbnail: '/images/cards/aura.png',
          mobileThumbnail: '/images/cards/aura_sm.png',
          bio: 'Design-centered digital exhibition on Sergio Marchionne and his reconstruction story.',
          category: ['branding', 'graphic'],
          class: 'column card-medium biowhite',
          to: "it-back"
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

}

</style>

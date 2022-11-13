<template>
  <div>

    <div id="" class="text-center my-5">
      <div :class="['btn', !currentCategory && 'active']" @click="currentCategory = false"> <p>All</p></div>
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

    <b-row class="">

      <b-col cols="12" md="6" lg="4" >

        <PortfolioCard
          :currentCategory="currentCategory"
          v-bind="projects.sourdata"
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

      </b-col>

      <b-col cols="12" md="6" lg="4">

        <PortfolioCard
          :currentCategory="currentCategory"
          v-bind="projects.itback"
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

        disruptive: {
          title: 'Disruptive',
          thumbnail: '/images/cards/disruptive.png',
          mobileThumbnail: '/images/cards/disruptive_sm.png',
          bio: 'Design-centered digital exhibition on Sergio Marchionne and his reconstruction story.',
          category: 'ux-ui',
          class: 'column card-large',
          to: "it-back"
        },

        itback: {
          title: 'It-Back',
          thumbnail: '/images/cards/itback.png',
          mobileThumbnail: '/images/cards/itback_sm.png',
          bio: 'Design-centered digital exhibition on Sergio Marchionne and his reconstruction story.',
          category: 'coding',
          class: 'column card-large',
          to: "it-back"
        },

        sourdata: {
          title: 'SourData',
          thumbnail: '/images/cards/sourdata.png',
          mobileThumbnail: '/images/cards/sourdata_sm.png',
          bio: 'Design-centered digital exhibition on Sergio Marchionne and his reconstruction story.',
          category: 'branding',
          class: 'column card-large',
          to: "it-back"
        },

        previewpretest: {
          title: 'Preview Pretest',
          thumbnail: '/images/cards/previewpretest.png',
          mobileThumbnail: '/images/cards/previewpretest_sm.png',
          bio: 'Design-centered digital exhibition on Sergio Marchionne and his reconstruction story.',
          category: 'graphic',
          class: 'column card-medium',
          to: "it-back"
        }
      },
      currentCategory: false
    }
  },
  methods: {}

}


</script>


<style scoped>


/* Style the buttons */
.btn {
  border: none;
  background-color: white;
  cursor: pointer;
}

/* Add a grey background color on mouse-over */
.btn:hover {
  background-color: pink;
}

/* Add a dark background color to the active button */
.btn.active {
  background-color: red;
  color: white;
}


</style>

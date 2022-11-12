<template>
  <div>

    <div id="myBtnContainer" class="text-center my-5">
      <button :class="['btn mx-2', !currentCategory && 'active']" @click="currentCategory = false"> All</button>
      <button :class="['btn mx-2', currentCategory === 'ux-ui' && 'active']" @click="currentCategory = 'ux-ui'">UX/UI
      </button>
      <button :class="['btn mx-2', currentCategory === 'branding' && 'active']" @click="currentCategory = 'branding'">
        Branding
      </button>
      <button :class="['btn mx-2', currentCategory === 'coding' && 'active']" @click="currentCategory = 'coding'">
        Coding
      </button>
      <button :class="['btn mx-2', currentCategory === 'graphic' && 'active']" @click="currentCategory = 'graphic'">
        Graphic
      </button>
    </div>

    <b-row>

      <b-col cols="12" md="6" lg="4">

        <PortfolioCard
          :currentCategory="currentCategory"
          v-bind="projects.disruptive"
        />

      </b-col>

      <b-col cols="12" md="6" lg="4">

        <div class="column branding graphic ">
          <div class="content">
            <img src="https://m.media-amazon.com/images/I/71+mhWHnBdL._SL1500_.jpg" alt="Car" style="width:100%">
          </div>
        </div>

      </b-col>

      <b-col cols="12" md="6" lg="4">

        <div class="column branding">
          <div class="content"> ciao
            <img src="https://m.media-amazon.com/images/I/71+mhWHnBdL._SL1500_.jpg" alt="Car" style="width:100%">
          </div>
        </div>

        <div class="column ux-ui">
          <div class="content "> quale
            <img
              src="https://images.unsplash.com/photo-1610878180933-123728745d22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FuYWRhJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              alt="Lights" style="width:100%">
          </div>
        </div>

        <div class="column ux-ui">
          <div class="content">
            <img
              src="https://images.unsplash.com/photo-1610878180933-123728745d22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FuYWRhJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              alt="Lights" style="width:100%">
          </div>
        </div>

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
          thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg',
          mobileThumbnail: '/images/cards/sourdata_sm.png',
          bio: 'Design-centered digital exhibition on Sergio Marchionne and his reconstruction story.',
          category: 'ux-ui',
          layout: 'large',
          class: 'column card-large card-it-back',
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


/* Create three equal columns that floats next to each other */
.column {
  float: left;
  margin-bottom: 20px;
  border: 3px;
  overflow: hidden;
}

.column img {
  transform: scale(1.0);
  transition: 0.3s ease-in-out;
}


.column:hover img {
  transform: scale(1.05);
  transition: 0.3s ease-in-out;
}

/* Clear floats after rows */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Content */
.content {
  background-color: pink;
  overflow: hidden;
}


/* The "show" class is added to the filtered elements */
.show {
  display: block;
}

/* Style the buttons */
.btn {
  border: none;
  outline: none;
  padding: 12px 16px;
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

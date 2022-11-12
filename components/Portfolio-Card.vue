<template>
  <div v-if="!currentCategory || currentCategory === category" class="column projectcard">
    <NuxtLink :to="to">
      <div class="card-background">
        <img :src="thumbnail" class="d-none d-md-block"/>
        <img :src="mobileThumbnail" class="d-md-none"/>
      </div>
      <b-row class="bio  m-3" align-v="center">

        <!--
        <b-col cols="0" class="" align-self="center">
          <b-icon icon="arrow-up-right-circle-fill" style="width: 40px; height: 40px; color:white;"></b-icon>
        </b-col> -->

        <b-col cols="8" md="10" class="pl-3 pt-1" ><h6> {{ bio }} </h6></b-col>

      </b-row>
    </NuxtLink>
  </div>

</template>

<script>
export default {
  name: "PortfolioCard",
  props: {
    title: String,
    thumbnail: String,
    mobileThumbnail: String,
    bio: String,
    category: String,
    layout: String,
    currentCategory: [String, Boolean],
    to: [String],
  },
}
</script>

<style scoped lang="scss">

.projectcard {
  border-radius: 20px;
  overflow: hidden;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .card-background {
    overflow: hidden;
    position: absolute;
    inset: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease-in-out;
    }
  }

  &:hover {

    .card-background img {
      transform: scale(1.05);
    }

  }
}

.bio {
  position: absolute;
  bottom: 0;
}

.bio h6 {
  color: white;
}

.card-small {
  height: 300px;
}

.card-medium {
  height: 400px;
}

.card-large {
  height: 500px;
}

@media (max-width: 768px) {

  .card-small {
    height: 300px;
  }

  .card-medium {
    height: 300px;
  }

  .card-large {
    height: 300px;
  }


}


</style>

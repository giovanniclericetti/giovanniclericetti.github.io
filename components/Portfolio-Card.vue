<template>

    <div class="bg-primary projectcard" >

      <NuxtLink :to="to">

        <div class="card-background">

        <img class=" img-parallax d-none d-md-block"
             :style="{ backgroundImage: 'url(' + thumbnail + ')' }"
             v-prlx.background="{ speed: 0.05 }"/>

        </div>

          <img :src="mobileThumbnail" class="d-md-none"/>


        <b-row class="bio mx-1 my-2">

          <b-col cols="12" md="10" class=""><h4 style="color: var(--color-secondary);"> SourData {{  }} </h4></b-col>
          <b-col cols="12" md="10" class="">
            <p2 style="color: var(--color-secondary);"> {{ bio }} </p2>
          </b-col>

          <b-col cols="12" md="10" class="">
            <b-badge pill class="pillshome mx-0 mr-1 my-3 p-1 px-2"> {{ pill1 }}</b-badge>
            <b-badge pill class="pillshome mx-0 mr-1 my-3 p-1 px-2"> {{ pill2 }}</b-badge>
            <b-badge pill class="pillshome mx-0 mr-1 my-3 p-1 px-2"> {{ pill3 }}</b-badge>
          </b-col>

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
    currentCategory: [String, Boolean],
    to: [String],
    pill1: String,
    pill2: String,
    pill3: String,
  },
}
</script>

<style scoped lang="scss">

h6{
  color: white;
}


.pillshome {
  border-radius: 20px;
  background-color: white;
  opacity: 0.8;
  border: none;
  font-family: 'DM Sans';
  font-weight: 400;
  font-size: 14px;
  color:var(--color-primary)}

.projectcard {
  border-radius: 30px;
  position: relative;
  margin-bottom: 32px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out; /* Applicato qui */

  .card-background {
    position: absolute;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    inset: 0;
    height: 100%;
    transition: transform 0.5s ease-in-out; /* Aggiunto qui */

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &:hover .card-background {
    transform: scale(1.03); /* Aggiunto qui */
  }
}




.bio {
  position: absolute;
  bottom: 0;
  line-height: 18px;
}

.bio h6 {

}

.card-small {
  height: 350px;
}

.card-medium {
  height: 450px;
}

.card-large {
  height: 500px;
}


.card-extralarge {
  height: 600px;
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

  .projectcard {
    margin-bottom: 16px;
  }


}


</style>

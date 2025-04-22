<template>

    <div class=" projectcard" >

      <NuxtLink :to="to">

        <div class="card-background">

        <img class=" imgproject d-none d-md-block"
             :style="{ backgroundImage: 'url(' + thumbnail + ')' }"
             v-prlx.background="{ speed: 0.04 }"/>

          <img class="imgproject imgmobile d-md-none"
               :style="{ backgroundImage: 'url(' + mobileThumbnail + ')' }"
               />

        </div>

        <b-row class="bio mx-1 my-2">

          <b-col cols="12" md="10" class=""><h4 class="titlemob" style="color: var(--color-secondary);">  {{ projectname }} </h4></b-col>
          <b-col cols="9" md="10" class="">
            <p2 style="color: var(--color-secondary)"> {{ bio }} </p2>
          </b-col>

          <b-col cols="12" md="10" class="">
            <b-badge pill class="pillshome mx-0 mr-1 my-2 my-md-3 p-1 px-2"> {{ pill1 }}</b-badge>
            <b-badge pill class="pillshome mx-0 mr-1 my-2 my-md-3 p-1 px-2"> {{ pill2 }}</b-badge>
            <b-badge pill class="pillshome terzapill mx-0 mr-1 my-2 my-md-3 p-1 px-2"> {{ pill3 }}</b-badge>
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
    to: [String],
    pill1: String,
    pill2: String,
    pill3: String,
    projectname: String,
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
  color:var(--color-success)}

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
    inset: 0;
    height: 100%;
    transform-origin: center;
    transform: scale(1.01);
    transition: transform 0.5s ease-in-out;

    img {
      height: 100%;
      object-fit: cover;
    }
  }

  &:hover .card-background {
    transform: scale(1.05); /* Aggiunto qui */
  }
}




.bio {
  position: absolute;
  bottom: 0;
  line-height: 18px;
}

.bio h6 {

}

.card-extrasmall {
  height: 250px;
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
  height: 550px;
}

.card-extraextralarge {
  height: 620px;
}

.terzapill{
  visibility: visible;
}

.imgmobile{

  background-position: center;
  background-repeat: no-repeat;


}

@media (max-width: 768px) {

  .card-extrasmall {
    height: 200px;
  }

  .card-small {
    height: 200px;
  }

  .sourdata {
      --color-success: #FF5880;
  }

  .card-medium {
    height: 250px;
  }

  .card-large {
    height: 250px;
  }

  .card-extralarge {
    height: 300px;
  }

  .card-extraextralarge {
    height: 300px;
  }

  .projectcard {
    margin-bottom: 16px;
    border-radius: 30px;
  }

  .titlemob{
    line-height: 50%;
  }

  .md-biowhite{
    --color-secondary: white;
  }

}


</style>

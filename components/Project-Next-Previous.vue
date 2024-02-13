<template>

  <div class="container-fluid my-5">

    <div class="d-flex justify-content-center mx-0">
    <div class="text-center">

      <div cols="12" md="10" class="">
        <p2 style=""> Next Project {{ bio }} </p2>
      </div>
      <div cols="12" md="10" class=""><h4 style="color: var(--color-primary);">  {{ nextproject }} </h4></div>
    </div>
    </div>

      <div class="d-flex justify-content-center">

    <div class="nextcard">

      <NuxtLink :to="to">

        <div class="card-background">
          <img :src="thumbnail" class="d-none d-md-block"/>
          <img :src="mobileThumbnail" class="d-md-none"/>
        </div>

      </NuxtLink>

      <b-row align-v="end" class="my-3" style="position: absolute; bottom: 0px; width: 100%;">

        <b-col cols="" md="" class="text-left pl-3 p-0 gradient">
<NuxtLink to="/"> <img src="~static/favicon.svg" style="width: 36px; height: 36px;"/> </NuxtLink>       </b-col>

        <b-col cols="" md="" class="text-right px-3">
          <b-badge pill class="pillshome mx-0 mr-1  p-1 px-2"> {{ pill1 }}</b-badge>
          <b-badge pill class="pillshome mx-0 mr-1  p-1 px-2"> {{ pill2 }}</b-badge>
          <b-badge pill class="pillshome mx-0 mr-0  p-1 px-2"> {{ pill3 }}</b-badge>
        </b-col>

      </b-row>
    </div>



      </div>

  </div>

</template>

<script>


export default {
  name: "ProjectNextPrevious",
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
    nextproject: String,
  },
}





</script>

<style scoped>

.pillshome {
  border-radius: 20px;
  background-color: white;
  opacity: 0.8;
  border: none;
  font-family: 'DM Sans';
  font-weight: 400;
  font-size: 14px;
  color:var(--color-primary)}

.nextcard {
  border-radius: 30px;
  overflow: hidden;
  width: 60%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  height: 200px;
}

.card-background {
  overflow: hidden;
  position: absolute;
  inset: 0;

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease-in-out;
}


}

</style>

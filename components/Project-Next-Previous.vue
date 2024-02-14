<template>

  <div class="container-fluid my-5 py-5">

    <div class="d-flex justify-content-center mx-0">

    <div class="text-center">

      <div cols="12" md="10" class="">
        <p1 style=""> Next Project {{ bio }} </p1>
      </div>
      <div cols="12" md="10" class=""><h4 style="color: var(--color-primary);">  {{ nextproject }} </h4></div>
    </div>
    </div>

      <div class="d-flex justify-content-center">

    <div class="nextcard bg-warning">

      <NuxtLink :to="to">

        <div class="card-background">
          <img :src="thumbnail" class="d-none d-md-block"/>
          <img :src="mobileThumbnail" class="d-md-none"/>
        </div>

      </NuxtLink>

      <b-row align-v="end" class=" p-0 m-0 pb-1 mb-2" style="position: absolute; bottom: 0px; width: 100%;">

        <b-col cols="12" md="6" class="text-left ">
          <NuxtLink to="/" class="">
<div class="d-flex align-items-center">
            <b-icon icon="arrow-up-right-circle-fill" style="width: 38px; height: 38px; color:var(--color-warning); opacity: 0.8" />

            <p2 class="px-2" style="text-decoration: none; color:var(--color-warning; line-height: 120%; opacity: 0.9">Digital experience  aimed at reviving outdated technology products</p2>

</div>



          </NuxtLink>     </b-col>

        <b-col cols="12" md="" class="text-right">
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
  transition: transform 0.3s ease-in-out;

.card-background {
  position: absolute;
  background-position: center;
  background-repeat: no-repeat;
  inset: 0;
  height: 100%;
  transform-origin: center;
  transform: scale(1.01);
  transition: transform 0.5s ease-in-out;

&:hover .card-background {
   transform: scale(1.05); /* Aggiunto qui */
 }
}

.card-background img {
  height: 100%;
  object-fit: cover;
}



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
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease-in-out;
}
}

&:hover .card-background {
   transform: scale(1.05); /* Aggiunto qui */
 }
}






</style>

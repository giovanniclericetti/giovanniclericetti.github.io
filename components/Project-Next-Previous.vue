<template>

  <div class="container-fluid my-5 py-5">

    <div class="d-flex justify-content-center mx-0">

    <div class="text-center">

      <div cols="12" md="10" class="">
        <p1 style=""> Go to Next Project {{ bio }} </p1>
      </div>
      <div cols="12" md="10" class="d-none d-md-block"><h4 style="color: var(--color-primary);">  {{ nextproject }} </h4></div>
    </div>
    </div>

      <div class="d-flex justify-content-center mt-2 mt-md-0">

    <div class="nextcard bg-warning">

      <NuxtLink :to="to">

        <div class="card-background row justify-content-center" >
          <img :src="thumbnail" class=""/>
        </div>

      </NuxtLink>

      <b-row align-v="end" class=" p-0 m-0 pb-1 mb-2" style="position: absolute; bottom: 0px; width: 100%;">

        <b-col cols="12" md="6" class="text-left ">
          <NuxtLink to="/" class="">
<div class="d-flex align-items-center">
            <b-icon icon="arrow-up-right-circle-fill" style="width: 38px; height: 38px; color: white; opacity: 0.8" />

            <p2 class="px-2" style="text-decoration: none; color: white; line-height: 120%; opacity: 0.9"> {{bionext}} </p2>

</div>



          </NuxtLink>     </b-col>

        <b-col cols="12" md="" class="text-right d-none d-md-block">
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
    bio: String,
    category: String,
    currentCategory: [String, Boolean],
    to: [String],
    pill1: String,
    pill2: String,
    pill3: String,
    nextproject: String,
    bionext: String,
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
}

.card-background img {
  height: 100%;
  object-fit: cover;
}

&:hover .card-background {
   transform: scale(1.05); /* Aggiunto qui */
 }

}

@media (max-width: 768px) {

.nextcard {
  border-radius: 20px;
  height: 170px;
  width: 100%;
}

}



</style>

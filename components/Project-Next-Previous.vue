<template>

  <div class="container-fluid project-next my-5 py-5">

    <div class="d-flex justify-content-center mx-0">

    <div class="text-center">

      <div cols="12" md="10" class="">
        <p1 style="">{{ $t(" Go to Next Project ") }}{{ $t(bio) }} </p1>
      </div>
      <div cols="12" md="10" class="next-project-title"><h4 style="color: var(--color-primary);">  {{ $t(nextproject) }} </h4></div>
    </div>
    </div>

      <div class="d-flex justify-content-center mt-2 mt-md-0">

    <NuxtLink :to="to" :aria-label="$t(nextproject)" class="nextcard">



        <div class="card-background row justify-content-center" >
          <!-- Keep native dimensions: the existing crop depends on intrinsic image size. -->
          <NuxtImg :src="thumbnail" alt="" loading="lazy" decoding="async" />
        </div>



      <b-row align-v="end" class=" p-0 m-0 pb-1 mb-2" style="position: absolute; bottom: 0px; width: 100%;">

        <b-col cols="12" md="6" class="text-left ">

<div class="d-flex align-items-center">
            <b-icon icon="arrow-up-right-circle-fill" style="flex-shrink: 0; width: 38px; height: 38px; color: white; opacity: 0.8" />

            <p2 class="px-2" style="text-decoration: none; color: white; line-height: 120%; opacity: 0.9"> {{ $t(bionext) }} </p2>

</div>



          </b-col>

        <b-col cols="12" md="" class="text-right d-none d-md-block next-project-pills">
          <b-badge pill class="pillshome mx-0 mr-1  p-1 px-2"> {{ $t(pill1, `${translationId}.pill1`) }}</b-badge>
          <b-badge pill class="pillshome mx-0 mr-1  p-1 px-2"> {{ $t(pill2, `${translationId}.pill2`) }}</b-badge>
          <b-badge v-if="pill3" pill class="pillshome mx-0 mr-0  p-1 px-2"> {{ $t(pill3, `${translationId}.pill3`) }}</b-badge>
        </b-col>

      </b-row>

    </NuxtLink>



      </div>

  </div>

</template>

<script>


export default {
  computed: {
    translationId() { return this.to.replace(/^\/|\/$/g, '') },
  },
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

<style scoped lang="scss">

.next-project-pills {
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
}

.pillshome {
  border-radius: 20px;
  background-color: var(--color-primary);
  opacity: 1;
  border: none;
  font-family: 'Bricolage Grotesque';
  font-weight: 600;
  font-size: 14px;
  color: #fff}


.nextcard {
  display: block;
  text-decoration: none;
  border-radius: 20px;
  overflow: hidden;
  width: 60%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  height: 200px;
  transition: transform 0.3s ease-in-out;

.card-background {
  pointer-events: none;
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




@media (max-width: 767.98px) {
  .project-next { padding: 0 !important; margin-block: 56px !important; }
  .next-project-title { margin: 8px 0 16px; }
  .next-project-title h4 { font-size: 18px; line-height: 1.3; }
  .nextcard { height: 210px; }
  .nextcard > .row:not(.card-background) { padding-top: 60px !important; margin-bottom: 0 !important; padding-bottom: 16px !important; background: linear-gradient(transparent, rgba(0,0,0,.78)); }
  .nextcard p2 { font-size: 14px; line-height: 1.45 !important; opacity: 1 !important; }
  .nextcard .card-background { transform: none; margin: 0; }
  .nextcard .card-background img { width: 100%; height: 100%; object-fit: cover; }
}
@media (prefers-reduced-motion: reduce) {
  .nextcard, .nextcard .card-background { transition: none; }
  .nextcard:hover .card-background { transform: none; }
}

</style>

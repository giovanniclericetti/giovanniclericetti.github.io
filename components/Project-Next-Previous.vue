<template>
  <div class="container-fluid  my-5">

    <div class="projectcard">
      <NuxtLink :to="to">
        <div class="card-background">
          <img :src="thumbnail" class="d-none d-md-block"/>
          <img :src="mobileThumbnail" class="d-md-none"/>
        </div>
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

.projectcard {
  border-radius: 30px;
  overflow: hidden;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  margin-bottom: 32px;}

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

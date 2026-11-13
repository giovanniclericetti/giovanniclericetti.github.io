<template>

  <div>

    <h1 class="titoloprog"> {{ title }} </h1>
    <h3 role="paragraph" class="subtitle"> {{ subtitle }}</h3>

    <div class="project-pills d-md-block d-none">
      <b-badge pill class="pills mx-0 mr-2 p-2 px-3"> {{ pill1 }}</b-badge>
      <b-badge pill class="pills mx-0 mr-2  p-2 px-3"> {{ pill2 }}</b-badge>
      <b-badge v-if="pill3" pill class="pills mx-0 mr-2 my-3 p-2 px-3"> {{ pill3 }}</b-badge>
    </div>

    <div class="project-pills d-block d-md-none">
      <b-badge pill class="pillsmob mx-0 mr-1 my-2  p-1 px-2"> {{ pill1 }}</b-badge>
      <b-badge pill class="pillsmob mx-0 mr-1 my-2  p-1 px-2"> {{ pill2 }}</b-badge>
      <b-badge v-if="pill3" pill class="pillsmob mx-0 mr-1 my-2  p-1 px-2"> {{ pill3 }}</b-badge>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Project-Intro',
  props: ['pill1', 'pill2', 'pill3', 'pill4', 'title', 'subtitle']


}
</script>

<style>
.project-pills {
  white-space: nowrap;
  max-width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
}


.titoloprog {
  font-size: 64px;
}

.subtitle {
  line-height: 120%;
}

.pillsmob {
  border-radius: 20px;
  background-color: var(--color-primary);
  border: none;
  font-family: 'DM Sans';
  font-weight: 400;
  font-size: 14px;
  color:white}

@media (max-width: 767.98px) {
  .pillsmob { font-size: 13px; }

  .subtitle {
    max-width: 100vw;
    line-height: 120%;
  }

  .titoloprog{
    width: 90%;
    font-size: clamp(28px, 7.5vw, 40px);
    line-height: 1.05;
    overflow-wrap: anywhere;
    padding-top: 5px;
  }
}


</style>


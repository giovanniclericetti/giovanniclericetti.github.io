<template>

  <div>

    <h1> {{ title }} </h1>
    <h3 class="subtitle"> {{ subtitle }}</h3>

    <div class="d-md-block d-none">
      <b-badge pill class="pills mx-0 mr-2 p-2 px-3"> {{ pill1 }}</b-badge>
      <b-badge pill class="pills mx-0 mr-2  p-2 px-3"> {{ pill2 }}</b-badge>
      <b-badge pill class="pills mx-0 mr-2 my-3 p-2 px-3"> {{ pill3 }}</b-badge>
    </div>

    <div class="d-block d-md-none">
      <b-badge pill class="pillsmob mx-0 mr-1 my-2  p-1 px-2"> {{ pill1 }}</b-badge>
      <b-badge pill class="pillsmob mx-0 mr-1 my-2  p-1 px-2"> {{ pill2 }}</b-badge>
      <b-badge pill class="pillsmob mx-0 mr-1 my-2  p-1 px-2"> {{ pill3 }}</b-badge>
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

@media (max-width: 768px) {

  .subtitle {
    max-width: 100vw;
    line-height: 120%;
  }
}


</style>


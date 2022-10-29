
<template>

  <div >

    <h1> It-Back </h1>
    <h3 class="subtitle">Designing a digital experience aimed at reviving those outdated technology products, giving them a new value.</h3>

    <b-badge pill class="pills mx-0 mr-2 my-3 p-2 px-3"> {{pill1}}</b-badge>
    <b-badge pill class="pills mx-0 mr-2 my-3 p-2 px-3"> {{pill2}}</b-badge>
    <b-badge pill class="pills mx-0 mr-2 my-3 p-2 px-3"> {{pill3}}</b-badge>
    <b-badge pill class="pills mx-0 my-3 p-2 px-3"> {{pill4}}</b-badge>

  </div>
</template>

<script>
export default {
  name: 'Project-Intro',
  props: ['pill1', 'pill2', 'pill3', 'pill4']


}
</script>

<style>

.subtitle{
  max-width: 60%;
  line-height: 120%;
}

@media (max-width: 768px) {

  .subtitle{
    max-width: 100vw;
    line-height: 120%;
  }}


</style>


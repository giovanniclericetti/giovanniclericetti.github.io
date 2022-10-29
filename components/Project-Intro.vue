
<template>

  <div style="background-color: aqua">

    <h1> It-Back </h1>
    <h3 class="subtitle">Designing a digital experience aimed at reviving those outdated technology products, giving them a new value.</h3>

    <b-badge pill class="pills mx-0 mr-2 my-3 p-2 px-3"> {{pill1}}</b-badge>
    <b-badge pill class="pills mx-0 mr-2 my-3 p-2 px-3"> {{pill2}}</b-badge>
    <b-badge pill class="pills mx-0 mr-2 my-3 p-2 px-3"> {{pill3}}</b-badge>
    <b-badge pill class="pills mx-0 my-3 p-2 px-3"> {{pill4}}</b-badge>

    <h3>H3 - Subtitles Small</h3>
    <h4>H4 - Paragraph</h4>
    <h5>H5 - Header Footer</h5>
    <h6>H6 - Mini Paragraph</h6>
    <p>bella bro</p>

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
  max-width: 60vw;
}


</style>


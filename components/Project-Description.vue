<template>

  <b-row>
    <b-col cols="12" md="7">

    <h4> Project </h4>
     <p> {{ description }} </p>


    </b-col>
    <b-col cols="12" md="5">

      <h4 class="mt-2 mt-md-0"> Team </h4>
      <p> {{ team }} </p>

      <h4 class="mt-4"> Role </h4>
      <p> {{ role }} </p>

      <h4 class="mt-4"> Delivery </h4>
      <p> {{ delivery }} </p>

    </b-col>
  </b-row>

</template>

<script>
export default {
  name: "Project-Description",
  props: ['description', 'team', 'role', 'delivery']
}
</script>

<style scoped>

</style>

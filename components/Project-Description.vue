<template>
<div class="">
  <b-row>
    <b-col cols="12" md="7">

    <h4> Project Overview </h4>
     <p> {{ description }} </p>

      <slot name="link2">
      </slot>


    </b-col>

    <b-col cols="12" md="5" style="">


      <h4 class="mt-4 mt-md-0"> Team </h4>
      <p v-html="formatTeam(team)"></p>

      <h4 class="mt-4"> Role </h4>
      <p> {{ role }} </p>

      <h4 class="mt-4"> Delivery </h4>
      <p> {{ delivery }} </p>

      <slot name="link">
      </slot>

    </b-col>
  </b-row>
</div>

</template>

<script>
export default {
  name: "Project-Description",
  props: ['description', 'team', 'role', 'delivery'],
  methods: {
    formatTeam(team) {
      return team.replace(/\n/g, '<br>')
    }}
}
</script>

<style scoped>

</style>

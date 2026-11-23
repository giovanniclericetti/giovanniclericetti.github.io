<template>
<div class="">
  <b-row>
    <b-col cols="12" md="7">

    <h4 aria-level="2"> {{ overviewTitle }} </h4>
     <slot name="overview-copy"><p> {{ description }} </p></slot>

      <slot name="link2">
      </slot>


    </b-col>

    <b-col cols="12" md="5" style="">


      <h4 aria-level="2" class="mt-4 mt-md-0"> Team </h4>
      <p v-html="formatTeam(team)"></p>

      <h4 aria-level="2" class="mt-4"> {{ roleTitle }} </h4>
      <p> {{ role }} </p>

      <h4 aria-level="2" class="mt-4"> Delivery </h4>
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
  props: {
    description: String,
    team: String,
    role: String,
    delivery: String,
    overviewTitle: { type: String, default: 'Project Overview' },
    roleTitle: { type: String, default: 'Role' },
  },
  methods: {
    formatTeam(team) {
      return team.replace(/\n/g, '<br>')
    }}
}
</script>

<style scoped>

</style>

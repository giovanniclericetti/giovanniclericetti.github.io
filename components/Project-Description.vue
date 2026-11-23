<template>
<div class="">
  <b-row>
    <b-col cols="12" md="7">

    <h4 aria-level="2">{{ $t(" Project Overview ", `${translationId}.overviewTitle`) }}</h4>
     <slot name="overview-copy"><p> {{ $t(description) }} </p></slot>

      <slot name="link2">
      </slot>


    </b-col>

    <b-col cols="12" md="5" style="">


      <h4 aria-level="2" class="mt-4 mt-md-0">{{ $t(" Team ") }}</h4>
      <p v-html="formatTeam(team)"></p>

      <h4 aria-level="2" class="mt-4">{{ $t(" Role ") }}</h4>
      <slot name="role-copy"><p> {{ $t(role) }} </p></slot>

      <h4 aria-level="2" class="mt-4">{{ $t(" Delivery ") }}</h4>
      <p> {{ $t(delivery, `${translationId}.delivery`) }} </p>

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
  computed: {
    translationId() { return this.$route.path.replace(/^\/|\/$/g, '') },
  },
  methods: {
    formatTeam(team) {
      return team.replace(/\n/g, '<br>')
    }}
}
</script>

<style scoped>

</style>

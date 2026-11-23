<template>
  <p>{{ before }}<strong v-if="highlight">{{ highlight }}</strong>{{ after }}</p>
</template>

<script>
export default {
  name: 'ProjectCopy',
  props: {
    text: { type: String, default: '' },
    emphasis: { type: String, default: '' },
  },
  computed: {
    position() { return this.emphasis ? this.text.indexOf(this.emphasis) : -1 },
    before() { return this.position < 0 ? this.text : this.text.slice(0, this.position) },
    highlight() { return this.position < 0 ? '' : this.emphasis },
    after() { return this.position < 0 ? '' : this.text.slice(this.position + this.emphasis.length) },
  },
}
</script>

<style scoped>
strong { font-weight: 600; }
</style>

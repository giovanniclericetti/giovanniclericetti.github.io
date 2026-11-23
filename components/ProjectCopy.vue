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
    localizedText() { return this.$t(this.text) },
    localizedEmphasis() { return this.$t(this.emphasis) },
    position() { return this.localizedEmphasis ? this.localizedText.indexOf(this.localizedEmphasis) : -1 },
    before() { return this.position < 0 ? this.localizedText : this.localizedText.slice(0, this.position) },
    highlight() { return this.position < 0 ? '' : this.localizedEmphasis },
    after() { return this.position < 0 ? '' : this.localizedText.slice(this.position + this.localizedEmphasis.length) },
  },
}
</script>

<style scoped>
strong { font-weight: 600; }
</style>

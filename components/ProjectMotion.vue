<template>
  <video
    ref="video"
    :aria-label="$t(label)"
    :src="src"
    :poster="poster"
    :width="width"
    :height="height"
    :style="{ aspectRatio: `${width} / ${height}` }"
    controls
    playsinline
    muted
    loop
    preload="none"
    class="project-motion"
  />
</template>

<script>
export default {
  name: 'ProjectMotion',
  props: {
    src: { type: String, required: true },
    poster: { type: String, required: true },
    width: { type: Number, required: true },
    height: { type: Number, required: true },
    label: { type: String, default: 'Project animation' },
  },
  mounted() {
    this.motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    this.compactQuery = window.matchMedia(
      '(max-width: 991.98px), (pointer: coarse)'
    )
    this.motionQuery.addEventListener('change', this.updatePlayback)
    this.compactQuery.addEventListener('change', this.updatePlayback)
    // Phones use native, user-initiated playback, including in low-power mode.
    this.observer = new IntersectionObserver(
      ([entry]) => {
        this.inView = entry.isIntersecting
        this.updatePlayback()
      },
      { threshold: 0.25 }
    )
    this.observer.observe(this.$refs.video)
  },
  beforeDestroy() {
    this.observer.disconnect()
    this.motionQuery.removeEventListener('change', this.updatePlayback)
    this.compactQuery.removeEventListener('change', this.updatePlayback)
  },
  methods: {
    updatePlayback() {
      const video = this.$refs.video
      if (
        !this.inView ||
        this.motionQuery.matches ||
        this.compactQuery.matches
      ) {
        video.pause()
      } else {
        video.play().catch(() => {})
      }
    },
  },
}
</script>

<style scoped>
.project-motion {
  display: block;
  width: 100%;
  height: auto;
}
</style>

<template>
  <transition name="back-to-top">
    <button
      v-if="visible"
      type="button"
      class="back-to-top-button"
      :aria-label="$locale.state.language === 'it' ? 'Torna in cima' : 'Back to top'"
      @click="scrollToTop"
    >
      <HeaderIcon :gradient="false" :size="36" />
    </button>
  </transition>
</template>

<script>
export default {
  name: 'BackToTop',
  data() {
    return { visible: false }
  },
  watch: {
    '$route.path'() {
      this.visible = false
      this.$nextTick(this.scheduleVisibility)
    },
  },
  mounted() {
    window.addEventListener('scroll', this.scheduleVisibility, { passive: true })
    window.addEventListener('resize', this.scheduleVisibility)
    this.scheduleVisibility()
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scheduleVisibility)
    window.removeEventListener('resize', this.scheduleVisibility)
    cancelAnimationFrame(this.frame)
  },
  methods: {
    scheduleVisibility() {
      cancelAnimationFrame(this.frame)
      this.frame = requestAnimationFrame(() => {
        this.visible = window.innerWidth < 992 &&
          window.scrollY > Math.max(320, window.innerHeight * 0.6)
      })
    },
    scrollToTop() {
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' })
      document.getElementById('main-content')?.focus({ preventScroll: true })
    },
  },
}
</script>

<style scoped>
.back-to-top-button {
  position: fixed;
  right: max(12px, env(safe-area-inset-right));
  bottom: max(16px, env(safe-area-inset-bottom));
  z-index: 1040;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  padding: 6px;
  border: 0;
  border-radius: 12px;
  background: transparent;
  color: #333;
  cursor: pointer;
}
.back-to-top-button svg {
  transform: rotate(90deg);
}
.back-to-top-enter-active,
.back-to-top-leave-active {
  transition: opacity 180ms ease, transform 180ms ease;
}
.back-to-top-enter,
.back-to-top-leave-to {
  opacity: 0;
  transform: translateY(8px);
}
@media (min-width: 992px) {
  .back-to-top-button { display: none; }
}
@media (prefers-reduced-motion: reduce) {
  .back-to-top-enter-active,
  .back-to-top-leave-active { transition: none; }
}
</style>

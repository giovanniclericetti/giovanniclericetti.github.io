<template>
  <div class="project-scroll-progress" aria-hidden="true">
    <div
      class="project-scroll-progress-fill"
      :style="{ transform: 'scaleX(' + progress + ')' }"
    />
  </div>
</template>

<script>
export default {
  name: 'ProjectScrollProgress',
  data() {
    return { progress: 0 }
  },
  mounted() {
    this.updateProgress()
    window.addEventListener('scroll', this.updateProgress, { passive: true })
    window.addEventListener('resize', this.updateProgress)
    if (typeof ResizeObserver !== 'undefined') {
      this.resizeObserver = new ResizeObserver(this.updateProgress)
      this.resizeObserver.observe(document.body)
    }
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.updateProgress)
    window.removeEventListener('resize', this.updateProgress)
    if (this.resizeObserver) this.resizeObserver.disconnect()
  },
  methods: {
    updateProgress() {
      if (window.innerWidth < 992) return
      const height = document.documentElement.scrollHeight - window.innerHeight
      this.progress = height > 0
        ? Math.min(1, Math.max(0, window.scrollY / height))
        : 0
    },
  },
}
</script>

<style scoped>
.project-scroll-progress {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 4px;
  z-index: 1031;
  pointer-events: none;
}

.project-scroll-progress-fill {
  width: 100%;
  height: 100%;
  background-color: var(--color-primary, #FF5881);
  transform-origin: left;
  transition: transform 0.6s ease;
}

@media (max-width: 991.98px) {
  .project-scroll-progress {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .project-scroll-progress-fill {
    transition: none;
  }
}
</style>

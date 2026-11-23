<template>
  <div class="about-image-ribbon" aria-hidden="true">
    <div ref="track" class="ribbon-track">
      <div v-for="copy in 2" :key="copy" class="ribbon-group">
        <div
          v-for="(photo, index) in photos"
          :key="index"
          class="ribbon-card"
        >
          <PortfolioImage
            :src="photo"
            alt=""
            loading="eager"
            sizes="(min-width: 992px) 240px, (min-width: 768px) 160px, 134px"
            class="ribbon-photo"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutImageRibbon',
  data() {
    return {
      photos: [1, 2, 3, 4, 5, 6].map((number) => `/images/aboutme/ribbon/${number}.png`),
    }
  },
  mounted() {
    this.scrollDirection = 1
    this.lastScrollY = Math.max(0, window.scrollY)
    this.motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    this.motionQuery.addEventListener('change', this.configureMotion)
    this.configureMotion()
    window.addEventListener('scroll', this.onScroll, { passive: true })
    document.addEventListener('visibilitychange', this.updateVisibility)
    if ('IntersectionObserver' in window) {
      this.observer = new IntersectionObserver(([entry]) => {
        this.inView = entry.isIntersecting
        this.updateVisibility()
      })
      this.observer.observe(this.$el)
    }
  },
  beforeDestroy() {
    if (this.animation) this.animation.cancel()
    if (this.observer) this.observer.disconnect()
    window.removeEventListener('scroll', this.onScroll)
    document.removeEventListener('visibilitychange', this.updateVisibility)
    this.motionQuery.removeEventListener('change', this.configureMotion)
  },
  methods: {
    configureMotion() {
      if (this.animation) this.animation.cancel()
      this.animation = null
      if (!this.$refs.track.animate) return
      // Each identical group includes its trailing gap, keeping the loop seamless.
      this.animation = this.$refs.track.animate([
        { transform: 'translateX(-50%)' },
        { transform: 'translateX(0)' },
      ], { duration: 42000, iterations: Infinity, easing: 'linear' })
      this.animation.currentTime = 42000
      this.animation.playbackRate = this.scrollDirection
      // Restart at the identical loop boundary when reverse playback reaches zero.
      this.animation.onfinish = () => {
        this.animation.currentTime = 42000
        this.updateVisibility()
      }
      this.updateVisibility()
    },
    onScroll() {
      const scrollY = Math.max(0, Math.min(window.scrollY,
        document.documentElement.scrollHeight - window.innerHeight))
      const delta = scrollY - this.lastScrollY
      this.lastScrollY = scrollY
      if (!delta) return
      const direction = delta > 0 ? 1 : -1
      if (direction === this.scrollDirection) return
      this.scrollDirection = direction
      if (this.animation) this.animation.updatePlaybackRate(direction)
    },
    updateVisibility() {
      if (!this.animation) return
      if (document.hidden || this.inView === false || this.motionQuery.matches) this.animation.pause()
      else this.animation.play()
    },

  },
}
</script>

<style scoped>
.about-image-ribbon {
  width: 100vw;
  margin-left: calc(50% - 50vw);
  overflow: hidden;
  user-select: none;
}

.ribbon-track {
  display: flex;
  width: max-content;
  will-change: transform;
}

.ribbon-group {
  display: flex;
  flex: none;
  gap: 20px;
  padding-right: 20px;
}

.ribbon-card {
  flex: none;
  width: auto;
  height: 180px;
  aspect-ratio: 4 / 3;
  border-radius: 35px;
  overflow: hidden;
}

.ribbon-photo {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (min-width: 768px) and (max-width: 991.98px) {
  .ribbon-card { height: 120px; }
}

@media (max-width: 767.98px) {
  .ribbon-card { height: 100px; border-radius: 35px; }
  .ribbon-group { gap: 16px; padding-right: 16px; }
}

@media (prefers-reduced-motion: reduce) {
  .ribbon-track { will-change: auto; }
}
</style>

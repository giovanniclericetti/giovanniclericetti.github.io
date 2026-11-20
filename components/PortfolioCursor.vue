<template>
  <div class="portfolio-cursor" :class="{ 'is-visible': visible, 'is-active': active }" :style="{ color }" aria-hidden="true">
    <div ref="ring" class="portfolio-cursor-ring"><span /></div>
    <div ref="dot" class="portfolio-cursor-dot" />
  </div>
</template>

<script>
export default {
  data() {
    return { visible: false, active: false, color: '#FF6E60' }
  },
  watch: {
    '$route.path'() {
      this.hide()
      this.$nextTick(this.updateColor)
    },
  },
  mounted() {
    this.pointerMedia = window.matchMedia('(hover: hover) and (pointer: fine)')
    this.motionMedia = window.matchMedia('(prefers-reduced-motion: reduce)')
    this.position = { x: 0, y: 0, ringX: 0, ringY: 0 }
    this.updateColor()
    window.addEventListener('pointermove', this.move, { passive: true })
    window.addEventListener('pointerover', this.over, { passive: true })
    window.addEventListener('blur', this.hide)
    window.addEventListener('scroll', this.onScroll, { passive: true })
    document.documentElement.addEventListener('pointerleave', this.hide)
    this.pointerMedia.addEventListener('change', this.hide)
  },
  beforeDestroy() {
    this.hide()
    window.removeEventListener('pointermove', this.move)
    window.removeEventListener('pointerover', this.over)
    window.removeEventListener('blur', this.hide)
    window.removeEventListener('scroll', this.onScroll)
    document.documentElement.removeEventListener('pointerleave', this.hide)
    this.pointerMedia.removeEventListener('change', this.hide)
  },
  methods: {
    updateColor(target) {
      const page = this.$parent.$refs.page
      const card = this.$route.path === '/' && target instanceof Element
        ? target.closest('.projectcard')
        : null
      if (card) {
        this.color = '#FFFFFF'
        return
      }
      const root = page && page.$el
      this.color = root && root.nodeType === 1
        ? window.getComputedStyle(root).getPropertyValue('--color-primary').trim() || '#FF6E60'
        : '#FF6E60'
    },
    over(event) {
      this.updateTarget(event.target)
    },
    updateTarget(target) {
      this.updateColor(target)
      if (!(target instanceof Element)) return
      const disabled = target.closest(':disabled, [aria-disabled="true"], [inert]')
      const pointer = window.getComputedStyle(target).cursor === 'pointer'
      this.active = !disabled && (!!target.closest('a[href], button, summary, [role="button"], [role="link"], label[for], input[type="submit"], input[type="button"], input[type="checkbox"], input[type="radio"]') || pointer)
    },
    onScroll() {
      if (this.visible) this.updateTarget(document.elementFromPoint(this.position.x, this.position.y))
    },
    move(event) {
      if (!this.pointerMedia.matches || event.pointerType === 'touch') {
        this.hide()
        return
      }
      const p = this.position
      p.x = event.clientX
      p.y = event.clientY
      if (!this.visible) {
        p.ringX = p.x
        p.ringY = p.y
        this.updateColor()
        this.updateTarget(event.target)
      }
      this.visible = true
      this.$refs.dot.style.transform = `translate3d(${p.x}px, ${p.y}px, 0)`
      if (!this.frame) this.animate()
    },
    animate() {
      const p = this.position
      const amount = this.motionMedia.matches ? 1 : 0.11
      p.ringX += (p.x - p.ringX) * amount
      p.ringY += (p.y - p.ringY) * amount
      this.$refs.ring.style.transform = `translate3d(${p.ringX}px, ${p.ringY}px, 0)`
      if (Math.abs(p.x - p.ringX) + Math.abs(p.y - p.ringY) > 0.1) {
        this.frame = window.requestAnimationFrame(this.animate)
      } else {
        this.frame = null
      }
    },
    hide() {
      this.visible = false
      this.active = false
      window.cancelAnimationFrame(this.frame)
      this.frame = null
    },
  },
}
</script>

<style>
.portfolio-cursor {
  position: fixed;
  inset: 0;
  z-index: 100005;
  pointer-events: none;
  opacity: 0;
}

.portfolio-cursor.is-visible { opacity: 1; }

.portfolio-cursor-ring,
.portfolio-cursor-dot {
  position: absolute;
  top: 0;
  left: 0;
  will-change: transform;
}

.portfolio-cursor-dot::after {
  content: '';
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: currentColor;
  transform: translate(-50%, -50%);
}

.portfolio-cursor-ring span {
  display: block;
  width: 42px;
  height: 42px;
  border: 2px solid currentColor;
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(1);
  transition: transform 0.2s ease-out, border-width 0.2s ease-out;
}

.portfolio-cursor.is-active .portfolio-cursor-ring span {
  transform: translate(-50%, -50%) scale(1.6);
  border-width: 1px;
}

@media (prefers-reduced-motion: reduce) {
  .portfolio-cursor-ring span { transition: none; }
}

@media (hover: none), (pointer: coarse) {
  .portfolio-cursor { display: none; }
}
</style>

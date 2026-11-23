<template>
  <div class="portfolio-shell">
    <a href="#main-content" class="skip-link">Skip to content</a>
    <main id="main-content" tabindex="-1"><Nuxt ref="page"/></main>
    <PortfolioCursor />
  </div>
</template>

<script>
import { portfolioSeo } from '~/utils/portfolio-seo'
import { imagePreloads, imageFallback } from '~/utils/image-head'
export default {
  name: "DefaultLayout",
  watch: {
    '$route.path'() { this.$nextTick(this.setupReveal) },
  },
  mounted() {
    this.setupReveal()
    this.revealMutation = new MutationObserver(() => this.setupReveal())
    this.revealMutation.observe(this.$el.querySelector('main'), { childList: true, subtree: true })
  },
  beforeDestroy() {
    if (this.revealObserver) this.revealObserver.disconnect()
    if (this.revealMutation) this.revealMutation.disconnect()
  },
  methods: {
    setupReveal() {
      if (this.revealObserver) this.revealObserver.disconnect()
      if (this.$route.path === '/' || this.$el.querySelector('main .index')) {
        this.$el.querySelectorAll('.page-reveal').forEach((target) => {
          target.classList.remove('page-reveal', 'is-revealed')
        })
        return
      }
      if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
      this.revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (!isIntersecting) return
          target.classList.add('is-revealed')
          this.revealObserver.unobserve(target)
        })
      }, { threshold: 0, rootMargin: '0px 0px -32px 0px' })
      const targets = this.$el.querySelectorAll('main h1, main h3, main h4, main p, .projectcard, .gallery-row, .imgbox, .cover-parallax, .cover-mobile, .nextcard, .footer, .about .row')
      targets.forEach((target) => {
        if (target.closest('.projectcard, .nextcard, .footer') !== target && target.closest('.projectcard, .nextcard, .footer')) return
        target.classList.add('page-reveal')
        this.revealObserver.observe(target)
      })
    },
  },
  head() {
    return {
      ...portfolioSeo(this.$route.path),
      noscript: [{ hid: 'image-fallback', innerHTML: imageFallback(this.$route.path) }],
      __dangerouslyDisableSanitizersByTagID: { 'image-fallback': ['innerHTML'] },
      link: [
        ...imagePreloads(this.$route.path),
        { rel: 'preload', as: 'font', type: 'font/ttf', href: '/font/bricolage-grotesque-variable.ttf', crossorigin: 'anonymous' }
      ]
    }
  }
}
</script>


<style>
.page-reveal { opacity: 0; transition: opacity 650ms ease; }
.page-reveal.is-revealed, .page-reveal:focus-within { opacity: 1; }
.media-loading {
  background-color: #e9e6e6;
  background-image: linear-gradient(105deg, transparent 30%, rgba(255,255,255,.7) 50%, transparent 70%);
  background-size: 220% 100%;
  animation: media-shimmer 1.5s ease-in-out infinite;
}
.media-error { background-color: #e9e6e6; }
@keyframes media-shimmer { from { background-position: 100% 0; } to { background-position: -100% 0; } }
@media (prefers-reduced-motion: reduce) {
  .page-reveal { opacity: 1; transition: none; }
  .media-loading { animation: none; }
}
@media (min-width: 768px) {
  .project-pills .pills { color: #fff; background-color: var(--color-primary); }
}


body {
  background-color: #F6F2F2;
}

::selection {
  background-color: var(--color-primary);
  color: #ffffff;
}

h1 {
  font-family: 'Bricolage Grotesque', sans-serif;
  color: var(--color-primary);
  font-size: 64pt;
  font-weight: 800;
}

h2 {
  font-family: 'Bricolage Grotesque';
  font-size: 32px;
  font-weight: 400;
}

h3 {
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 130%;
}

h4 {
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: 20px;
  font-weight: 800;
  color: var(--color-primary);
}

h5 {
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: 18px;
  font-weight: 800;
}

h6 {
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: 15px;
  font-weight: 800;
  color: rgba(0, 0, 0, 0.5);
}

p {
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: 18px;
  font-weight: 400;
  margin: 0px;
}

p2 {
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: 14px;
}

.gradient {
  background: -webkit-linear-gradient(45deg, #FFA857, #FF4466);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: fit-content;
  --color-primary: #FF6E60;
}

.sourdata {
  --color-primary: #FF5880;
  --color-secondary: #3741DC;
  --color-success: #3741DC;
  --color-warning: white;


}

.acmilan {
  --color-primary: #e0071b;
  --color-success: #e0071b;
}

.acmilan2 {
  --color-primary: #e0071b;
}

.acmilan3 {
  --color-primary: #e0071b;
}


.avi {
  --color-primary: #00AFFA;
  --color-success: #00AFFA
}

.previewpretest {
  --color-primary: #33D09D;
  --color-success: #4BC3D7;
}

.carachioggia {
  --color-primary: #5E5F3C;
  --color-success: #5E5F3C;
}


.around {
  --color-primary: #5650D8;
  --color-success: #5650D8;
}

.disruptive {
  --color-primary: #3C83ED;
  --color-success: #70A4E0;
}

.bottleneck {
  --color-primary: #3C646A;
  --color-secondary: green;
  --color-success: #3A6069;
}



.referto {
  --color-primary: #D92121;
  --color-success: #CB0A00;
}

.imgproject{
  width: 100%;
  background-size: cover;
  height: 600px;
  border-radius: 20px;
  background-color: white;
  transform-origin: center;
  transform: scale(1.01);
}


.imgbox{
  overflow: hidden;
  border-radius: 20px;
}

.pills {
  border-radius: 20px;
  background-color: var(--color-primary);
  border: none;
  font-family: 'Bricolage Grotesque';
  font-weight: 400;
  font-size: 16px;
}

.hover-underline-animation {
  display: inline-block;
  position: relative;
  color: var(--color-primary);
}

.hover-underline-animation:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: var(--color-primary);
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}


.h350{
  height: 350px
}

.h400{
  height: 400px
}

.h500 {
  height: 500px;
}

.h600 {
  height: 600px;
}

.h700 {
  height: 700px;
}

.cover-parallax{
  width: 100%;
  height: 400px;
  background-size: cover;
  border-radius: 20px;
  background-color: white;
}

.cover-mobile {
  width: 100%;
  height: 300px;
  background-size: contain;
  background-position: 50%;
  border-radius: 20px;
  overflow: hidden;
}

.subtitlecv{
  font-size: 16px;
}

.about .subtitlecv,
.about .cvpar h6 {
  color: #808080;
}

.about .exhibition-title {
  line-height: 1.25;
}

.subtitlecv a,
.subtitlecv a:hover {
  color: inherit;
}

.subtitlecv .hover-a-underline-animation:after {
  background-color: currentColor;
}

.prllx-small{
  height: 400px;
}

.projectbox {
  background-color: white;
  max-height: 600px;
  border-radius: 20px;
  overflow: hidden;
}

.hover-underline-animation:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

@font-face {
  font-family: 'Bricolage Grotesque';
  font-style: normal;
  font-weight: 200 800;
  font-display: swap;
  src: url(/font/bricolage-grotesque-variable.ttf) format('truetype');
}

@media (max-width: 768px) {

h1{
  font-size: 52px;
}


h2 {
  font-size: 24px;
}

h3{
  font-size: 20px;
}

  h4 {;
    font-size: 20px;
  }


  p{
    font-size: 16px;
  }

  .cover-parallax{
    width: 100%;
height: 300px;
    background-size: cover;
    border-radius: 20px;
    background-repeat: no-repeat;
    background-color: white;
    background-position: center;
  }


  .imgproject{
    background-size: cover; /* QUI PER IMG*/
    border-radius: 20px;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
  }



  .h400{
    height: 150px;
  }

  .h500 {
    height: 260px;
  }

  .h600 {
    height: 250px;
  }



  .imgbox{
    border-radius: 20px;
  }

  .projectbox {
    max-height: 600px;
    border-radius: 20px;
  }

  .pills {
    border-radius: 20px;
    background-color: var(--color-primary);
    border: none;
    font-family: 'Bricolage Grotesque';
    font-weight: 400;
    font-size: 12px;
  }




}




/* Slightly denser typography on phones only. */
@media (max-width: 767.98px) {
  h1 { font-size: 48px; }
  h2 { font-size: 22px; }
  h3 { font-size: 19px; }
  h4 { font-size: 18px; }
  h5 { font-size: 17px; }
  h6 { font-size: 14px; }
  p { font-size: 15px; }
  p2 { font-size: 13px; }
}

</style>

<style src="~/static/styles/mobile.css"></style>

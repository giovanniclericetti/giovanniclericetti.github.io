<template>

<div class="about">

  <div class="container mt-4 pb-5">

    <About-Header/>

    <div class="about-sections">
    <div>

      <h1 v-if="$locale.state.language === 'en'" class="titleindex english-intro">My background at <a class="name gradient about-inline-link" href="https://www.polimi.it/">Polimi</a> and my experience with <a class="name gradient about-inline-link intro-link-word" href="https://www.acmilan.com/">AC Milan</a><br class="d-none d-lg-block"> have shaped my design mindset, combining a flexible approach, creativity and visual sensitivity to adapt to different contexts.</h1>
      <h1 v-else class="titleindex">Il percorso di studi al <a class="name gradient about-inline-link" href="https://www.polimi.it/">Polimi</a> e l’esperienza con <a class="name gradient about-inline-link intro-link-word" href="https://www.acmilan.com/">AC Milan</a> hanno dato forma al mio modo di progettare, che unisce metodo, creatività e sensibilità visiva per rispondere alle esigenze di contesti diversi.</h1>

    </div>



    <AboutPhoto
      class="d-md-none"
    />

    <AboutTablet class="d-none d-md-block d-lg-none" />

    <About-Box class="d-lg-block d-none" />

    <section class="about-expertise" :aria-label="$t(&quot;Areas of Expertise&quot;)">
      <div class="expertise-columns">
        <div class="expertise-column">
          <div class="expertise-panel">
          <h6 aria-level="3" class="gradient mb-3 expertise-heading">{{ $t("Brand Design") }}</h6>
          <div class="expertise-divider" aria-hidden="true"></div>
          <ul class="expertise-list">
          <li>{{ $t("Brand Identity", "about.expertise.0") }}</li>
          <li>{{ $t("Partnership Design", "about.expertise.1") }}</li>
          <li>{{ $t("Venue & Co-Branding", "about.expertise.2") }}</li>
          </ul>
          </div>
        </div>
        <div class="expertise-column">
          <div class="expertise-panel">
          <h6 aria-level="3" class="gradient mb-3 expertise-heading">{{ $t("Events & Production") }}</h6>
          <div class="expertise-divider" aria-hidden="true"></div>
          <ul class="expertise-list">
          <li>{{ $t("Events & Activations", "about.expertise.3") }}</li>
          <li>{{ $t("Live Production", "about.expertise.4") }}</li>
          <li>{{ $t("Matchday Content", "about.expertise.5") }}</li>
          </ul>
          </div>
        </div>
        <div class="expertise-column">
          <div class="expertise-panel">
          <h6 aria-level="3" class="gradient mb-3 expertise-heading">{{ $t("Digital & Editorial") }}</h6>
          <div class="expertise-divider" aria-hidden="true"></div>
          <ul class="expertise-list">
          <li>{{ $t("UX/UI Design", "about.expertise.6") }}</li>
          <li>{{ $t("Editorial & Presentations", "about.expertise.7") }}</li>
          <li>{{ $t("Research & Architecture", "about.expertise.8") }}</li>
          </ul>
          </div>
        </div>
      </div>
    </section>



    <About-CV class="about-cv-desktop d-none d-lg-block"/>
    <About-CV-Accordion class="about-cv-mobile d-lg-none d-block"/>
    </div>



  </div>

  <PortfolioFooter class="mt-md-5"/>

</div>

</template>

<script>
  export default {
    name: "About-Me",
    mounted() {
      if (!('IntersectionObserver' in window) ||
          window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      const targets = this.$el.querySelectorAll([
        '.about-cv-desktop > .row > div > h4',
        '.about-cv-desktop > .row > div > .cvpar',
        '.about-cv-desktop .work-experience-item',
        '.about-cv-mobile > .accordion',
        '.about-cv-mobile > h4'
      ].join(', '));

      this.revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (!isIntersecting) return;
          target.classList.add('is-revealed');
          this.revealObserver.unobserve(target);
        });
      }, { threshold: 0, rootMargin: '0px 0px -40px 0px' });

      targets.forEach((target) => {
        target.classList.add('about-reveal');
        this.revealObserver.observe(target);
      });
    },
    beforeDestroy() {
      if (this.revealObserver) this.revealObserver.disconnect();
    },
    computed: {
      age() {
        const currentYear = new Date().getFullYear();
        return currentYear - 2001;
      }
    }
}
</script>

<style scoped>
.titleindex strong { font-weight: 600; }
.intro-link-word { white-space: nowrap; }
.about-expertise {
  margin-top: -28px;
  text-align: center;
}

.expertise-columns {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.expertise-heading {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 2.4em;
  flex-shrink: 0;
  font-size: 20px;
  margin-left: auto;
  margin-right: auto;
}

.expertise-divider {
  flex-shrink: 0;
  width: 100%;
  height: 2px;
  margin: 0 0 20px;
  background: linear-gradient(45deg, #FFA857, #FF4466);
}

.expertise-column {
  padding: 24px 16px;
  background: white;
  border-radius: 35px;
}

.expertise-panel {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 8px;
  background: transparent;
}

.expertise-list li + li::before {
  content: '';
  display: block;
  width: 100%;
  height: 2px;
  position: absolute;
  top: 0;
  left: 0;
  background: #DADADA;
}

.expertise-list {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  flex: 1;
  gap: 0;
  margin: 0;
  padding: 0;
  list-style: none;
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: 16px;
  line-height: 1.4;
}

.expertise-list li {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 0;
}

@media (min-width: 992px) {
  .about-expertise {
    margin-top: -60px;
  }
}

@media (min-width: 768px) and (max-width: 991.98px) {
  .expertise-column {
    padding-inline: 8px;
  }
}

@media (max-width: 767.98px) {
  .expertise-columns {
    grid-template-columns: 1fr;
  }

  .expertise-column {
    padding: 24px 20px;
  }


}

.about-inline-link {
  display: inline-block;
  position: relative;
}

.about-inline-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 5px;
  width: 100%;
  height: 3px;
  background: linear-gradient(45deg, #FFA857, #FF4466);
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.about-inline-link:hover::after,
.about-inline-link:focus-visible::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

@media (prefers-reduced-motion: reduce) {
  .about-inline-link::after {
    transition: none;
  }
}

.name {
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: 34px;
  text-decoration: none;
  font-weight: 800;
}

.titleindex { font-family: 'Bricolage Grotesque'; font-size: 32px; font-weight: 400; color: inherit; }

.about .titleindex {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 95%;
  margin-bottom: 0;
}

.about {
  --color-primary: #FF6A68;
  overflow-x: clip;
}

.about-sections {
  display: flex;
  flex-direction: column;
  gap: 48px;
  margin-top: 48px;
}

@media (min-width: 992px) {
  .about .titleindex {
    width: 100%;
    text-wrap: balance;
  }

  .about-sections {
    gap: 80px;
    margin-top: 96px;
  }
}

@media (min-width: 768px) and (max-width: 991.98px) {
  .about .titleindex {
    width: 91.666667%;
    font-size: 24px;
    line-height: 140%;
  }

  .name { font-size: 30px; }
}

/* Scale introductory copy smoothly through tablet and desktop widths. */
@media (min-width: 768px) {
  .about .titleindex {
    font-size: clamp(20px, 2.25vw, 32px);
    text-wrap: balance;
  }

  .about .titleindex .name {
    font-size: 1.0625em;
  }
}

@media (min-width: 992px) {
  .about .titleindex.english-intro {
    width: 83.333333%;
  }

  .about .intro-phrase {
    white-space: nowrap;
  }
}

@media (max-width: 767.98px) {
  .about .name {
    font-size: 1.0625em;
  }

  .about .titleindex {
    text-align: left;
    margin-left: 0;
    margin-right: auto;
    width: 100%;
    font-size: clamp(20px, 5.2vw, 24px);
    line-height: 1.4;
  }
}
@media (max-width: 767.98px) {
  .about-expertise { margin-top: 0; text-align: left; }
  .expertise-columns { gap: 12px; }
  .expertise-column { padding: 20px; border-radius: 35px; }
  .expertise-panel { padding: 0; }
  .expertise-heading { min-height: 0; justify-content: flex-start; margin-left: 0; font-size: 20px; }
  .expertise-divider { margin-bottom: 12px; }
  .expertise-list { display: block; font-size: 15px; }
  .expertise-list li { justify-content: flex-start; padding: 6px 0; }
  .expertise-list li + li::before { display: none; }
}

</style>

<style>
.about .resume-gradient {
  position: relative;
  isolation: isolate;
  overflow: hidden;
}

.about .resume-gradient::before {
  content: '';
  position: absolute;
  inset: -100%;
  z-index: -1;
  pointer-events: none;
  background: conic-gradient(from 0deg, #FFA857, #FF754F, #FF4466, #FF7B93, #FFA857);
  opacity: 0.5;
  animation: resume-gradient-flow 4s linear infinite;
}

@keyframes resume-gradient-flow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@media (prefers-reduced-motion: reduce) {
  .about .resume-gradient::before {
    animation: none;
  }
}

.about .about-reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 850ms ease, transform 850ms cubic-bezier(0.22, 1, 0.36, 1);
}

.about .about-reveal.is-revealed,
.about .about-reveal:focus-within {
  opacity: 1;
  transform: none;
}

@media (prefers-reduced-motion: reduce) {
  .about .about-reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }
}

</style>

<template>

<div class="about">

  <div class="container mt-4 pb-5">

    <About-Header/>

    <div class="about-sections">
    <div>

      <h1 class="titleindex">After graduating in Communication Design from <a class="name gradient about-inline-link" href="https://www.polimi.it/">Polimi</a>, I now work with <a class="name gradient about-inline-link" href="https://www.acmilan.com/">AC Milan</a>, combining creativity and strategy across visual identities, digital experiences and live environments.</h1>

    </div>



    <AboutPhoto
      class="d-md-none"
    />

    <AboutTablet class="d-none d-md-block d-lg-none" />

    <About-Box class="d-lg-block d-none" />

    <section class="about-expertise d-none d-md-block" aria-label="Areas of Expertise">
      <div class="expertise-columns">
        <div class="expertise-column">
          <div class="expertise-panel">
          <h6 aria-level="3" class="gradient mb-3 expertise-heading">Brand Design</h6>
          <div class="expertise-divider" aria-hidden="true"></div>
          <ul class="expertise-list">
          <li>Brand Identity &amp; Visual Systems</li>
          <li>Partnership &amp; Commercial Design</li>
          <li>Venue Branding &amp; Co-Branding</li>
          </ul>
          </div>
        </div>
        <div class="expertise-column">
          <div class="expertise-panel">
          <h6 aria-level="3" class="gradient mb-3 expertise-heading">Events &amp; Production</h6>
          <div class="expertise-divider" aria-hidden="true"></div>
          <ul class="expertise-list">
          <li>Event Branding &amp; Brand Activations</li>
          <li>Live Visual Production</li>
          <li>Matchday &amp; Stadium Content</li>
          </ul>
          </div>
        </div>
        <div class="expertise-column">
          <div class="expertise-panel">
          <h6 aria-level="3" class="gradient mb-3 expertise-heading">Digital &amp; Editorial</h6>
          <div class="expertise-divider" aria-hidden="true"></div>
          <ul class="expertise-list">
          <li>UX/UI &amp; Digital Experiences</li>
          <li>Editorial &amp; Presentation Design</li>
          <li>Research &amp; Information Architecture</li>
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
  font-size: 20px;
  margin-left: auto;
  margin-right: auto;
}

.expertise-divider {
  width: 100%;
  height: 2px;
  margin: 0 0 20px;
  background: linear-gradient(45deg, #FFA857, #FF4466);
}

.expertise-column {
  padding: 24px 16px;
  background: white;
  border-radius: 24px;
}

.expertise-panel {
  height: 100%;
  padding: 8px;
  background: transparent;
}

.expertise-list li + li::before {
  content: '';
  display: block;
  width: 100%;
  height: 2px;
  margin-bottom: 14px;
  background: #DADADA;
}

.expertise-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 14px;
  margin: 0;
  padding: 0;
  list-style: none;
  font-family: 'DM Sans', sans-serif;
  font-size: 16px;
  line-height: 1.4;
}

@media (min-width: 992px) {
  .about-expertise {
    margin-top: -60px;
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
  font-family: 'title-regular';
  font-size: 34px;
  text-decoration: none;
}

.titleindex { font-family: 'DM Sans'; font-size: 32px; font-weight: 400; color: inherit; }

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

@media (max-width: 767.98px) {
  .about .name {
    font-size: 21px;
  }

  .about .titleindex {
    text-align: left;
    margin-left: 0;
    margin-right: auto;
    width: 90%;
    font-size: 19px;
    line-height: 1.3;
  }
}
</style>

<style>
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

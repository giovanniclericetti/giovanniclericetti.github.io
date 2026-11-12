<template>

<div class="about">

  <div class="container mt-4 pb-5">

    <About-Header/>

    <div class="about-sections">
    <div>

      <h2 class="titleindex">

        My name is <span class="name gradient"> Giovanni</span>.
        I'm {{ age }} years old and I come from Milan.
        I'm passionate and curious about discovering,
        learning and understanding aspects of reality and the forms it can take.


      </h2>

    </div>

    <AboutPhoto
      class="d-md-none"
    />

    <AboutTablet class="d-none d-md-block d-lg-none" />

    <About-Box class="d-lg-block d-none" />

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

.about .titleindex {
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

@media (max-width: 768px) {

  .name{
    font-size: 30px;}

  .titleindex{
    width: 100%;
    line-height: 140%
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

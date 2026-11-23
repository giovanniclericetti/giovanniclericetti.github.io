<template>
  <div class="about-tablet">
    <div class="about-tablet-grid">
      <div v-responsive-background="'/images/aboutme/aboutme.png'" data-image-src="/images/aboutme/aboutme.png" data-parallax-image v-parallax class="tile portrait">
        <span class="sr-only">Giovanni Clericetti</span>
      </div>

      <a class="tile social instagram" href="https://www.instagram.com/giovanniclericetti.png/" target="_blank" rel="noopener" aria-label="Instagram">
        <img src="~/static/images/aboutme/instagram.svg" alt="">
      </a>

      <a class="tile social mail" href="mailto:giovanni.clericetti@gmail.com" aria-label="Mail">
        <img src="~/static/images/aboutme/mail.svg" alt="">
      </a>

      <a class="tile resume resume-gradient" href="/documents/giovanniclericetti.pdf" target="_blank" rel="noopener">
        <h4>My Resume</h4>
        <PortfolioImage src="/images/aboutme/cvbox.png" alt="" sizes="273px" />
      </a>

      <a class="tile linkedin" href="https://www.linkedin.com/in/giovanniclericetti/" target="_blank" rel="noopener" aria-label="Check my LinkedIn">
        <img src="~/static/images/aboutme/checklinkedin.svg" alt="">
      </a>
    </div>


  </div>
</template>

<script>
export default {
  name: 'AboutTablet',
}
</script>

<style scoped>
.about-tablet-grid {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 16px;
}

.tile {
  min-width: 0;
  overflow: hidden;
  border-radius: 35px;
  background: white;
}

.portrait {

  background-size: cover;
  background-position: center;
  grid-column: 1 / 11;
  grid-row: 1 / 3;
  position: relative;
}

.social {
  grid-column: 11 / 13;
  aspect-ratio: 1;
}

.instagram { grid-row: 1; }
.mail { grid-row: 2; }

.social img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.resume {
  grid-column: 1 / 9;
  height: 150px;
  text-align: center;
  text-decoration: none;
  background: linear-gradient(114deg, #FFC793 -8.26%, #FF7B93 106.3%);
}

.resume h4 {
  margin: 20px 0 16px;
  color: white;
  font-size: 24px;
}

.resume img {
  display: block;
  width: 60%;
  height: auto;
  margin: 0 auto;
}

.linkedin {
  grid-column: 9 / 13;
  display: flex;
  align-items: center;
  justify-content: center;
}

.linkedin img { width: 80%; height: auto; }

a:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 3px;
}
</style>

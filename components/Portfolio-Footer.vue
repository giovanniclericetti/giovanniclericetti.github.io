<template>
  <footer class="container-fluid footer">
    <div class="footer-layout">
      <LanguagePicker class="footer-language" />

      <p class="copyright">Designed &amp; Coded by Giovanni Clericetti, 2026</p>

      <nav class="footer-links" aria-label="Contact links">
        <a href="https://www.linkedin.com/in/giovanniclericetti/" target="_blank" rel="noopener noreferrer" class="social hover-underline-animation">LinkedIn <span class="social-arrow" aria-hidden="true">↗</span></a>
        <a href="mailto:giovanni.clericetti@gmail.com" class="social hover-underline-animation">Mail <span class="social-arrow" aria-hidden="true">↗</span></a>
      </nav>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'PortfolioFooter',
}
</script>

<style scoped>
.footer {
  background-color: #ECE9E9;
  --color-primary: #000;
  border-radius: 60px 60px 0 0;
  padding: 48px 64px;
  color: #000;
  font-family: 'Bricolage Grotesque', sans-serif;
  font-weight: 500;
}

.footer-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
  align-items: center;
  gap: 24px;
}

.footer-links {
  display: flex;
  align-items: center;
  gap: 24px;
  justify-self: end;
}

.social {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  color: inherit;
  font-size: 18px;
  text-decoration: none;
}

.social-arrow {
  margin-left: 4px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
}

@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url('/font/inter-arrow-500.ttf') format('truetype');
  unicode-range: U+2197;
}

.copyright {
  margin: 0;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.4;
}

.footer-language {
  position: relative;
  justify-self: start;
  margin: 0;
}

@media (max-width: 1199.98px) {
  .footer { padding-inline: 32px; }
  .footer-layout { gap: 20px; }
  .footer-links { gap: 20px; }
}

@media (max-width: 991.98px) {
  .footer { padding: 32px var(--mobile-gutter, 24px); }
  .footer-layout {
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 24px 16px;
    max-width: 690px;
    margin-inline: auto;
  }
  .footer-links { grid-column: 2; grid-row: 1; gap: 16px; }
  .social { font-size: 16px; }
  .footer-language { grid-column: 1; grid-row: 1; }
  .copyright { grid-column: 1 / -1; grid-row: 2; }
}

</style>

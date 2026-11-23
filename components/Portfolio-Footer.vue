<template>
  <footer class="container-fluid footer">
    <div class="footer-layout">
      <label class="footer-language">
        <span class="sr-only">Language</span>
        <select v-model="language" aria-label="Language">
          <option value="en">English</option>
          <option value="it">Italiano</option>
        </select>
        <svg class="language-chevron" width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="m4 6 4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </label>

      <p class="copyright">Designed &amp; Coded by Giovanni Clericetti, 2026</p>

      <nav class="footer-links" aria-label="Contact links">
        <a href="https://www.linkedin.com/in/giovanniclericetti/" target="_blank" rel="noopener noreferrer" class="social hover-underline-animation">LinkedIn</a>
        <a href="mailto:giovanni.clericetti@gmail.com" class="social hover-underline-animation">Mail</a>
      </nav>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'PortfolioFooter',
  data() {
    // Visual language selector only; site translation will be connected separately.
    return { language: 'en' }
  },
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

.social::after {
  bottom: 8px;
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

.footer-language select {
  display: block;
  appearance: none;
  -webkit-appearance: none;
  min-height: 44px;
  width: 138px;
  padding: 10px 38px 10px 16px;
  border: 1px solid #c5c1c1;
  border-radius: 14px;
  background: transparent;
  color: inherit;
  font: inherit;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 180ms ease, border-color 180ms ease;
}

.footer-language select:hover {
  background-color: #f6f2f2;
  border-color: #888;
}

.language-chevron {
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
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
  .footer-language select { width: 128px; min-height: 48px; }
  .copyright { grid-column: 1 / -1; grid-row: 2; }
}

@media (prefers-reduced-motion: reduce) {
  .footer-language select { transition: none; }
}
</style>

<template>
  <details ref="picker" class="language-picker" @keydown.esc.prevent.stop="close(true)">
    <summary ref="trigger" :aria-label="$t(&quot;Language&quot;)">
      <span>{{ selectedLabel }}</span>
      <svg class="language-chevron" width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="m4 6 4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </summary>
    <div class="language-options" role="group" :aria-label="$t(&quot;Choose language&quot;)">
      <button v-for="option in languages" :key="option.code" type="button"
        :aria-pressed="language === option.code" :lang="option.code"
        @click="select(option.code)">
        <span>{{ option.label }}</span>
        <svg v-if="language === option.code" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="m3 8 3 3 7-7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
    </div>
  </details>
</template>

<script>
export default {
  name: 'LanguagePicker',
  data() {
    return { languages: [{ code: 'en', label: 'English' }, { code: 'it', label: 'Italiano' }] }
  },
  computed: {
    language() { return this.$locale.state.language },
    selectedLabel() { return this.languages.find(option => option.code === this.language).label },
  },
  mounted() { document.addEventListener('click', this.onOutsideClick) },
  beforeDestroy() { document.removeEventListener('click', this.onOutsideClick) },
  methods: {
    select(code) { this.$locale.setLanguage(code); this.close(true) },
    close(restoreFocus = false) {
      this.$refs.picker.open = false
      if (restoreFocus) this.$refs.trigger.focus()
    },
    onOutsideClick(event) {
      if (!this.$el.contains(event.target)) this.close()
    },
  },
}
</script>

<style scoped>
.language-picker {
  position: relative;
  width: 138px;
  font: inherit;
  color: #222;
}
summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 44px;
  padding: 10px 16px;
  border: 1px solid #c5c1c1;
  border-radius: 16px;
  list-style: none;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 180ms ease, border-color 180ms ease;
}
summary::-webkit-details-marker { display: none; }
summary:hover,
.language-picker[open] summary { background: #f6f2f2; border-color: #ff9a78; }
.language-chevron { flex-shrink: 0; transition: transform 180ms ease; }
.language-picker[open] .language-chevron { transform: rotate(180deg); }
.language-options {
  position: absolute;
  z-index: 20;
  bottom: calc(100% + 10px);
  left: 0;
  min-width: 174px;
  padding: 6px;
  border: 1px solid #e2dada;
  border-radius: 20px;
  background: #f6f2f2;
  box-shadow: 0 8px 24px rgba(45, 27, 27, .12);
}
.language-options button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  min-height: 44px;
  padding: 10px 12px;
  border: 0;
  border-radius: 14px;
  background: transparent;
  color: inherit;
  font: inherit;
  font-size: 16px;
  text-align: left;
  cursor: pointer;
}
.language-options button:hover { background: #ece9e9; }
.language-options button[aria-pressed="true"] {
  background: linear-gradient(110deg, #ffe3cb, #ffd4dd);
  color: #6a2930;
}
summary:focus-visible,
.language-options button:focus-visible { outline: 2px solid #bd3553; outline-offset: 2px; }
@media (max-width: 991.98px) {
  .language-picker { width: 116px; }
  summary { min-height: 48px; padding-inline: 12px; }
}
@media (prefers-reduced-motion: reduce) {
  summary, .language-chevron { transition: none; }
}
</style>

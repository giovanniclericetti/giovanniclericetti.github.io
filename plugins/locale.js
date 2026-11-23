import Vue from 'vue'
import { translate, languageStorageKey, isLanguage } from '~/utils/locale'

export default (_, inject) => {
  // A separate state for each Nuxt app also keeps static generation isolated.
  const state = Vue.observable({ language: 'en' })
  const locale = {
    state,
    setLanguage(language) {
      if (!isLanguage(language)) return
      state.language = language
      if (process.client) {
        try { window.localStorage.setItem(languageStorageKey, language) } catch (_) {}
        Vue.nextTick(() => window.dispatchEvent(new Event('resize')))
      }
    },
    restore() {
      if (!process.client) return
      try {
        const saved = window.localStorage.getItem(languageStorageKey)
        if (isLanguage(saved)) locale.setLanguage(saved)
      } catch (_) {}
    },
  }
  inject('locale', locale)
  inject('t', value => translate(value, state.language))
}

import italian from '../locales/it.json'

export const languageStorageKey = 'portfolio-language'
export const isLanguage = language => language === 'en' || language === 'it'

// English is the source language. Preserve spaces around inline links and emphasis.
export function translate(value, language) {
  if (language !== 'it' || typeof value !== 'string') return value
  const key = value.replace(/\s+/g, ' ').trim()
  if (!Object.prototype.hasOwnProperty.call(italian, key)) return value
  return (/^\s/.test(value) ? ' ' : '') + italian[key] + (/\s$/.test(value) ? ' ' : '')
}

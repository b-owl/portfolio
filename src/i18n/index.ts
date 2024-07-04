import i18next from 'i18next'
import { createI18nStore } from 'svelte-i18next'
import { enTranslation } from './en'
import { faTranslation } from './fa'
import { deTranslation } from './de'

i18next.init({
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: {
      translation: enTranslation,
    },
    fa: {
      translation: faTranslation,
    },
    de: {
      translation: deTranslation,
    },
  },
})

export const i18n = createI18nStore(i18next)

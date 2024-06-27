// src/store.ts
import { writable } from 'svelte/store'

function createSettingsStore() {
  const { subscribe, update } = writable({
    currentTheme: 'light' as 'light' | 'dark' | 'night',
    currentLang: 'en' as 'en' | 'fa',
    settings: false,
  })

  return {
    subscribe,
    setTheme: (theme: 'light' | 'dark' | 'night') => {
      update(s => ({ ...s, currentTheme: theme }))
      localStorage.setItem('currentTheme', theme)
    },
    setLang: (lang: 'en' | 'fa') => {
      update(s => ({ ...s, currentLang: lang }))
      localStorage.setItem('currentLang', lang)
    },
  }
}

export const settingsStore = createSettingsStore()

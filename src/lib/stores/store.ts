// src/store.ts
import { writable } from 'svelte/store'


function createSettingsStore() {
  
  const { subscribe, update } = writable({
    currentTheme: 'night' as string,
    currentLang: 'en' as string,
    settings: false,
  })
  
  return {
    subscribe,
    setTheme: (theme: string) => {
      update(s => ({ ...s, currentTheme: theme }))
      localStorage.setItem('currentTheme', theme)
    },
    setLang: (lang: string) => {
      update(s => ({ ...s, currentLang: lang }))
      localStorage.setItem('currentLang', lang)
    },
  }
}

export let isLoading = writable(true)
export const settingsStore = createSettingsStore()

<script lang="ts">
  import { onMount } from 'svelte'
  import 'tailwindcss/tailwind.css'
  import './styles.css'
  import Header from '$lib/components/Header.svelte'
  import ContactShortcut from '$lib/components/ContactShortcut.svelte'
  import Settings from '$lib/components/Settings.svelte'
  import { settingsStore } from '$lib/store'

  let currentTheme: string
  let currentLang: string

  onMount(() => {
    settingsStore.subscribe(({ currentTheme: theme, currentLang: lang }) => {
      currentTheme = theme
      currentLang = lang
    })
    currentTheme = localStorage.getItem('currentTheme') || ''
    currentLang = localStorage.getItem('currentLang') || ''

  })
</script>

<div
  dir={currentLang === 'fa' ? 'rtl' : 'ltr'}
  data-theme={currentTheme}
  class="app rtl:font-soltan font-robotoBold"
>
  <Header />
  <ContactShortcut />
  <Settings />

  <main>
    <slot />
  </main>
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
</style>

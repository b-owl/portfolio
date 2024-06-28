<script lang="ts">
  import { onMount } from 'svelte'
  import 'tailwindcss/tailwind.css'
  import './styles.css'
  import Header from '$lib/components/common/Header.svelte'
  import ContactShortcut from '$lib/components/common/ContactShortcut.svelte'
  import Settings from '$lib/components/common/Settings.svelte'
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
  import { i18n } from '../i18n/index'
</script>

<!-- <svelte:head>
  <html lang={$i18n.language} />
</svelte:head> -->

<div
  dir={$i18n.language === 'fa' ? 'rtl' : 'ltr'}
  data-theme={currentTheme}
  class="overflow-hidden rtl:font-soltan font-robotoBold"
>
  <Header />
  <ContactShortcut />
  <Settings />

  <main>
    <slot />
  </main>
</div>

<style>
</style>

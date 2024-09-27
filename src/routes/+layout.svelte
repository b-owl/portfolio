<script lang="ts">
  import { onMount } from 'svelte'
  import 'tailwindcss/tailwind.css'
  import './styles.css'
  import Header from '$lib/components/common/Header.svelte'
  import ContactShortcut from '$lib/components/common/ContactShortcut.svelte'
  import Settings from '$lib/components/common/Settings.svelte'
  import { settingsStore, isLoading } from '$lib/stores/store'
  import { i18n } from '../i18n/index'
  import Loading from '$lib/components/Loading.svelte'

  let currentTheme: string
  let currentLang: string

  onMount(() => {
    settingsStore.subscribe(({ currentTheme: theme, currentLang: lang }) => {
      currentTheme = theme
      currentLang = lang
    })
    currentTheme = localStorage.getItem('currentTheme') || ''
    currentLang = localStorage.getItem('currentLang') || ''

    setTimeout(() => {
      isLoading.set(false)
    }, 5000)
  })
</script>

<div
  dir={$i18n.language === 'fa' ? 'rtl' : 'ltr'}
  lang={$i18n.language}
  data-theme={currentTheme}
  class="overflow-hidden rtl:font-soltan font-robotoBold"
>
  {#if $isLoading}
    <Loading />
  {/if}
  
  <Header />
  <ContactShortcut />
  <Settings />

  <main>
    <slot />
  </main>
</div>

<style>
</style>

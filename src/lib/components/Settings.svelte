<script lang="ts">
  import Icon from '@iconify/svelte'
  import { settingsStore } from '../store'
  import { onMount } from 'svelte'

  // Simple translation function
  function t(key: string): string {
    const translations: { [key: string]: string } = {
      settings: 'Settings',
      changeLang: 'Change Language',
      fa: 'Farsi',
      en: 'English',
      themeOptions: 'Theme Options',
      light: 'Light',
      dark: 'Dark',
      night: 'Night',
      themeColors: 'Theme Colors',
    }
    return translations[key] || key
  }

  let currentTheme: 'light' | 'dark' | 'night'
  let currentLang: 'en' | 'fa'
  let settings: boolean = false

  onMount(() => {
    const prevTheme = localStorage.getItem('currentTheme')
    prevTheme && settingsStore.setTheme(prevTheme as 'light' | 'dark' | 'night')

    const prevLang = localStorage.getItem('currentLang')
    prevLang && settingsStore.setLang(prevLang as 'en' | 'fa')
  })

  settingsStore.subscribe(value => {
    currentTheme = value.currentTheme
    currentLang = value.currentLang
    settings = value.settings
  })

  function setTheme(event: Event): void {
    const target = event.target as HTMLInputElement
    settingsStore.setTheme(target.value as 'light' | 'dark' | 'night')
  }

  function setLang(event: Event): void {
    const target = event.target as HTMLInputElement
    settingsStore.setLang(target.value as 'en' | 'fa')
  }

  function setSettings(value: boolean): void {
    settings = value
  }
</script>

<button
  type="button"
  on:click={() => setSettings(true)}
  class="fixed z-10 text-2xl font-semibold bottom-6 right-6 md:text-3xl"
>
  <Icon icon="ci:settings" />
</button>

<section
  class={`${settings ? 'visible' : 'invisible'} fixed z-30 h-full w-full`}
>
  <button
    on:click={() => setSettings(false)}
    class="absolute top-0 left-0 -z-10 w-full h-full overlay bg-half-transparent-dark"
  ></button>

  <div
    class={`${
      settings ? 'translate-x-0' : 'translate-x-full'
    } transition-all fixed right-0 h-full p-5 w-96 bg-secondary/45 border-l rtl:border-r backdrop-blur-sm`}
  >
    <div class="flex justify-between w-full py-3 text-xl font-semibold">
      <h3>{t('settings')}</h3>
      <button type="button" on:click={() => setSettings(false)}>
        <Icon font-size="1.6rem" icon="iconamoon:close-circle-1-duotone" />
      </button>
    </div>

    <div class="w-full py-3 border-t-1">
      <h3 class="mb-4">{t('changeLang')}</h3>
      <div class="flex items-center gap-1">
        <input
          type="radio"
          bind:group={$settingsStore.currentLang}
          class="cursor-pointer"
          id="fa"
          value="fa"
          on:change={setLang}
        />
        <label class="text-sm" for="fa">
          {t('fa')}
        </label>
      </div>
      <div class="flex items-center gap-1">
        <input
          type="radio"
          bind:group={$settingsStore.currentLang}
          class="cursor-pointer"
          id="en"
          value="en"
          on:change={setLang}
        />
        <label class="text-sm" for="en">
          {t('en')}
        </label>
      </div>
    </div>

    <div class="w-full py-3 border-t-1">
      <h3 class="mb-4">{t('themeOptions')}</h3>
      <div class="flex items-center gap-1">
        <input
          type="radio"
          bind:group={$settingsStore.currentTheme}
          class="cursor-pointer"
          id="light"
          value="light"
          on:change={setTheme}
        />
        <label class="text-sm" for="light">
          {t('light')}
        </label>
      </div>
      <div class="flex items-center gap-1">
        <input
          type="radio"
          bind:group={$settingsStore.currentTheme}
          class="cursor-pointer"
          id="dark"
          value="dark"
          on:change={setTheme}
        />
        <label class="text-sm" for="dark">
          {t('dark')}
        </label>
      </div>
      <div class="flex items-center gap-1">
        <input
          type="radio"
          bind:group={$settingsStore.currentTheme}
          class="cursor-pointer"
          id="night"
          value="night"
          on:change={setTheme}
        />
        <label class="text-sm" for="night">
          {t('night')}
        </label>
      </div>
    </div>
  </div>
</section>

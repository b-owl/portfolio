<script lang="ts">
  import Icon from '@iconify/svelte'
  import { settingsStore } from '$lib/stores/store'
  import { onMount } from 'svelte'
  import { i18n } from '../../../i18n/index'
  import { EnFlag, IrFlag, DeFlag } from '$lib/assets/dummy'

  let currentTheme: string
  let currentLang: string
  let settings: boolean = false

  const themes = [
    {
      bg: '#0F172A',
      color: '#ffffff',
      main: '#818CF8',
      secondary: '#F471B5',
      name: 'night',
    },
    {
      bg: '#ECEFF4',
      color: '#000000',
      main: '#81A1C1',
      secondary: '#4C566A',
      name: 'nord',
    },
    {
      bg: '#121C22',
      color: '#ffffff',
      main: '#FD6F9C',
      secondary: '#1B262C',
      name: 'sunset',
    },
    {
      bg: '#ECE3CA',
      color: '#000000',
      main: '#A4CBB4',
      secondary: '#DC8850',
      name: 'retro',
    },
    {
      bg: '#202020',
      color: '#ffffff',
      main: '#7C909A',
      secondary: '#23282E',
      name: 'business',
    },
    {
      bg: '#2A303C',
      color: '#ffffff',
      main: '#FF7D5C',
      secondary: '#C792E9',
      name: 'dim',
    },
  ]

  $: languages = [
    {
      code: 'en',
      name: $i18n.t('en'),
      flagsrc: EnFlag,
    },
    {
      code: 'fa',
      name: $i18n.t('fa'),
      flagsrc: IrFlag,
    },
    {
      code: 'de',
      name: $i18n.t('de'),
      flagsrc: DeFlag,
    },
  ]

  onMount(() => {
    const prevTheme = localStorage.getItem('currentTheme')
    if (prevTheme) settingsStore.setTheme(prevTheme as string)

    const prevLang = localStorage.getItem('currentLang')
    if (prevLang) {
      settingsStore.setLang(prevLang as string)
      $i18n.changeLanguage(prevLang)
    }
  })

  settingsStore.subscribe(value => {
    currentTheme = value.currentTheme
    currentLang = value.currentLang
    settings = value.settings
  })

  function setTheme(event: Event): void {
    const target = event.target as HTMLInputElement
    settingsStore.setTheme(target.value as string)
  }

  function setLang(event: Event): void {
    const target = event.target as HTMLInputElement
    settingsStore.setLang(target.value as string)
    $i18n.changeLanguage(target.value)
  }

  function setSettings(value: boolean): void {
    settings = value
  }
</script>

<button
  type="button"
  on:click={() => setSettings(true)}
  class="fixed z-20 text-2xl font-semibold bottom-6 right-6 md:text-3xl"
>
  <Icon icon="ci:settings" />
</button>

<section
  class={`fixed z-30 h-full w-full ${settings ? 'visible' : 'invisible'}`}
>
  <button
    on:click={() => setSettings(false)}
    class="absolute top-0 left-0 w-full h-full -z-10 overlay bg-half-transparent-dark"
  ></button>

  <div
    class={`transition-all fixed right-0 h-full p-5 w-96 bg-secondary/45 border-l rtl:border-r backdrop-blur-sm ${
      settings ? 'translate-x-0' : 'translate-x-full'
    }`}
  >
    <div class="flex justify-between w-full py-3 text-xl font-semibold">
      <h3>{$i18n.t('settings')}</h3>
      <button type="button" on:click={() => setSettings(false)}>
        <Icon font-size="1.6rem" icon="iconamoon:close-circle-1-duotone" />
      </button>
    </div>

    <div class="w-full py-3 border-t-1">
      <h3 class="mb-4">{$i18n.t('changeLang')}</h3>
      {#each languages as lang}
        <div class="flex items-center gap-1 mb-2">
          <input
            type="radio"
            bind:group={$settingsStore.currentLang}
            class="hidden"
            id={lang.code}
            value={lang.code}
            on:change={setLang}
          />
          <label
            class="flex items-center justify-between w-full p-2 text-sm rounded-md cursor-pointer bg-secondary/30"
            for={lang.code}
          >
            <div class="flex items-center gap-2">
              <img class="w-5 h-full" src={lang.flagsrc} alt="lang-flag" />
              {#if $settingsStore.currentLang === lang.code}
                <Icon icon="mdi:check" class="text-lg" />
              {/if}
              <span>{lang.name}</span>
            </div>
            <span class="text-xs opacity-70 font-robotoBold"
              >{lang.code.toUpperCase()}</span
            >
          </label>
        </div>
      {/each}
    </div>

    <div class="w-full py-3 border-t-1">
      <h3 class="mb-4">{$i18n.t('themeOptions')}</h3>

      {#each themes as theme}
        <div class="flex items-center gap-1 mb-2">
          <input
            type="radio"
            bind:group={$settingsStore.currentTheme}
            class="hidden"
            id={theme.name}
            value={theme.name}
            on:change={setTheme}
          />
          <label
            class="flex items-center justify-between w-full p-2 text-sm rounded-md cursor-pointer"
            for={theme.name}
            style="background-color: {theme.bg}; color: {theme.color};"
          >
            <div class="flex items-center gap-2">
              {#if $settingsStore.currentTheme === theme.name}
                <Icon icon="mdi:check" class="text-lg" />
              {/if}
              <h4>{$i18n.t(theme.name)}</h4>
            </div>
            <div class="flex items-center gap-2">
              <div
                class="w-6 h-6 rounded-md"
                style="background-color: {theme.main};"
              ></div>
              <div
                class="w-6 h-6 rounded-md"
                style="background-color: {theme.secondary};"
              ></div>
            </div>
          </label>
        </div>
      {/each}
    </div>
  </div>
</section>

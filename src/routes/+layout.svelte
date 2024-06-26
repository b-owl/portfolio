<script>
  import 'tailwindcss/tailwind.css'
  import './styles.css'

  import Header from '$lib/components/Header.svelte'
  import ContactShortcut from '$lib/components/ContactShortcut.svelte'
</script>

<div data-theme="sunset" class="app rtl:font-soltan font-robotoBold">
  <Header />
  <ContactShortcut />

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

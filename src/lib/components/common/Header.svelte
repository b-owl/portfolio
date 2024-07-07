<script>
  import { page } from '$app/stores'
  import { i18n } from '../../../i18n'
  import { base } from '$app/paths';
</script>

<header class="fixed top-0 z-20 w-full -translate-x-1/2 left-1/2">
  <nav class="flex justify-center" dir="ltr">
    <ul
      dir={$i18n.language === 'fa' ? 'rtl' : 'ltr'}
      class="relative flex items-center justify-center h-12 p-0 px-6 m-0 rounded-ee-3xl rounded-es-3xl bg-secondary/40 backdrop-filter backdrop-blur-sm"
    >
      {#each [{ path: '/', label: $i18n.t('navItem1') }, { path: `${base}/about`, label: $i18n.t('navItem2') }, { path: `${base}/service`, label: $i18n.t('navItem3') }, { path: `${base}/projects`, label: $i18n.t('navItem4') }, { path: `${base}/contact`, label: $i18n.t('navItem5') }] as { path, label }}
        <li
          class="relative h-full"
          aria-current={$page.url.pathname === path ? 'page' : undefined}
        >
          <a
            href={path}
            class="flex h-full items-center px-2 font-bold text-xs uppercase tracking-widest transition-colors duration-200 {$page
              .url.pathname === path
              ? 'before:content-[""] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:border-[6px] before:border-transparent before:border-t-primary'
              : ''}"
          >
            {label}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</header>

<style lang="scss">
  @media (max-width: 468px) {
    a {
      @apply text-[0.55rem];
    }
  }
</style>

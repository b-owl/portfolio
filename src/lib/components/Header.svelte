<script>
  import { page } from '$app/stores'
</script>

<header class="absolute top-0 left-1/2 -translate-x-1/2 z-10">
  <nav class="flex justify-center" dir="ltr">
    <ul
      class="rounded-ee-3xl rounded-es-3xl px-6 relative p-0 m-0 h-12 flex justify-center items-center bg-secondary/40 backdrop-filter backdrop-blur-sm"
    >
      {#each [{ path: '/', label: 'Home' }, { path: '/about', label: 'About' }, { path: '/service', label: 'Service' }, { path: '/portfolio', label: 'Portfolio' }, { path: '/contact', label: 'Contact' }] as { path, label }}
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

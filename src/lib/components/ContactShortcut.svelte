<script>
  import { onMount } from 'svelte'
  import Icon from '@iconify/svelte'
  import { writable } from 'svelte/store'

  let iconsLoaded = writable(false)

  const socialLinks = [
    {
      href: 'https://www.instagram.com/eule_blauu',
      icon: 'line-md:instagram',
    },
    {
      href: 'https://www.github.com/b-owl',
      icon: 'line-md:github-loop',
    },
    {
      href: 'https://www.linkedin.com/in/mehdikeramti',
      icon: 'line-md:linkedin',
    },
    { href: 'https://t.me/blue_0wl', icon: 'line-md:telegram' },
  ]

  onMount(() => {
    setTimeout(() => {
      iconsLoaded.set(true)
    }, 100)
  })
</script>

<aside>
  <div
    class="fixed z-10 flex-col items-center justify-center hidden gap-3 ltr:font-summer top-52 -left-2 md:flex rtl:font-casablanca"
  >
    {#each socialLinks as link}
      <a
        target="_blank"
        rel="noreferrer"
        class="contactlink hover:scale-150"
        href={link.href}
      >
        {#if $iconsLoaded}
          <Icon icon={link.icon} class="icon fade-in" />
        {:else}
          <div class="skeleton-loader"></div>
        {/if}
      </a>
    {/each}

    <div
      class="w-1 mx-3 light:border-black h-14 border-r-1 dark:border-white"
    ></div>
    <p class="m-5 mt-8 -rotate-90 rtl:font-bold">Follow Me</p>
  </div>
</aside>

<style lang="scss">
  .icon {
    width: 24px;
    height: 24px;
  }

  .skeleton-loader {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: linear-gradient(
      90deg,
      rgba(#ccc, 0.2) 25%,
      rgba(#ccc, 0.5) 50%,
      rgba(#ccc, 0.2) 75%
    );
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
  }

  .fade-in {
    animation: fadeIn 0.3s ease-in;
  }

  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Your other styles here */
</style>

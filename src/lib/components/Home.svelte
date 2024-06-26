<script>
  import { onMount, getContext, tick } from 'svelte'
  import { fade } from 'svelte/transition'
  import { MePic } from '$lib/assets/dummy'
  import CVfile from '$lib/assets/cv.pdf'
  import { writable } from 'svelte/store'
  import { fly } from 'svelte/transition'

  let iconsLoaded = writable(true)
  let skills = ['webdev', 'frontEnd', 'designer']
  let currentSkillIndex = 0
  let currentSkill = ''
  let isDeleting = false
  let snowflakes = []

  // Typewriter effect
  async function typewriter() {
    const skill = skills[currentSkillIndex]

    if (!isDeleting && currentSkill === skill) {
      isDeleting = true
      await new Promise(resolve => setTimeout(resolve, 2000))
    } else if (isDeleting && currentSkill === '') {
      isDeleting = false
      currentSkillIndex = (currentSkillIndex + 1) % skills.length
      await new Promise(resolve => setTimeout(resolve, 500))
    }

    const nextSkill = isDeleting
      ? currentSkill.slice(0, -1)
      : skill.slice(0, currentSkill.length + 1)

    currentSkill = nextSkill

    const delay = isDeleting ? 100 : 200
    setTimeout(typewriter, delay)
  }

  // Snowfall effect
  function createSnowflake() {
    return {
      x: Math.random() * window.innerWidth,
      y: -10,
      size: Math.random() * 3 + 2,
      speed: Math.random() * 1.5 + 0.5,
    }
  }

  function updateSnowflakes() {
    snowflakes = snowflakes
      .map(flake => ({
        ...flake,
        y: flake.y + flake.speed,
        x: flake.x + Math.sin(flake.y * 0.01) * 0.5,
      }))
      .filter(flake => flake.y < window.innerHeight)

    while (snowflakes.length < 80) {
      snowflakes.push(createSnowflake())
    }

    requestAnimationFrame(updateSnowflakes)
  }

  onMount(() => {
    setTimeout(() => {
      iconsLoaded.set(false)
      typewriter()
    }, 100)
    updateSnowflakes()
  })
</script>

<div
  class="flex flex-col items-start justify-center w-full h-screen p-10 overflow-hidden activeSection md:pl-48 gap-14"
>
  <div class="snowfall">
    {#each snowflakes as flake}
      <div
        class="bg-blue-500 snowflake"
        style="left: {flake.x}px; top: {flake.y}px; width: {flake.size}px; height: {flake.size}px;"
      ></div>
    {/each}
  </div>

  {#if $iconsLoaded}
    <div class="w-full space-y-8">
      <div class="relative w-52">
        <div
          class="h-6 rounded bg-gradient-to-r from-gray-300/20 via-gray-300/50 to-gray-300/20 animate-pulse"
        ></div>
      </div>

      <div class="space-y-2">
        <div
          class="w-2/4 h-10 rounded bg-gradient-to-r from-gray-300/20 via-gray-300/50 to-gray-300/20 animate-pulse"
        ></div>
        <div
          class="w-1/3 h-10 rounded bg-gradient-to-r from-gray-300/20 via-gray-300/50 to-gray-300/20 animate-pulse"
        ></div>
      </div>

      <div class="flex items-center justify-start space-x-5">
        <div
          class="w-32 h-10 rounded bg-gradient-to-r from-gray-300/20 via-gray-300/50 to-gray-300/20 animate-pulse"
        ></div>
        <div
          class="w-32 h-10 rounded bg-gradient-to-r from-gray-300/20 via-gray-300/50 to-gray-300/20 animate-pulse"
        ></div>
      </div>
    </div>
  {:else}
    <div class="relative w-52">
      <h2 class="absolute z-10 text-xl font-semibold rtl:font-casablanca">
        Mehdi Keramati
      </h2>
      <!-- style="background: {$currentColor}" -->
      <span
        class="absolute w-10 h-10 bg-blue-500 rounded-full rtl:-right-3 rtl:-top-3 -left-4 -top-2"
      ></span>
    </div>

    <h1
      class="p-2 text-3xl font-semibold md:text-4xl lg:text-5xl ltr:font-summer"
    >
      I'm
      <span class="titleSkills">
        {currentSkill}
      </span>
      <span class="cursor">|</span>
    </h1>

    <div class="flex items-center justify-center font-semibold gap-x-5">
      <button
        type="button"
        class="relative w-32 px-4 py-6 text-blue-200 md:w-36 cursor-grab"
        id="buttonAnime"
      >
        <h5 class="w-full h-full absolute left-0 top-3.5 z-10">welcome</h5>
        <span class="absolute top-0 left-0 z-0 w-full h-full clip-path"></span>
      </button>
      <a href={CVfile} download="cv.pdf">
        <button type="button" class="w-32 px-4 py-6 md:w-36">
          download CV
        </button>
      </a>
    </div>
    <div
      in:fly={{ y: 200, duration: 1000 }}
      class="absolute hidden w-2/5 me lg:bottom-0 ltr:right-32 rtl:left-32"
    >
      <img src={MePic} alt="me" />
    </div>
  {/if}
</div>

<style>
  .clip-path {
    clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
  }

  .cursor {
    animation: blink 0.7s infinite;
  }

  @keyframes blink {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  .snowfall {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .snowflake {
    position: absolute;
    border-radius: 50%;
    opacity: 0.5;
  }

  @media only screen and (min-width: 1250px) {
    .me {
      display: block !important;
    }
  }

  .clip-path {
    animation: clipPath 3s linear infinite;
    background-color: rgb(24, 75, 117);
  }

  @keyframes clipPath {
    0%,
    100% {
      clip-path: polygon(
        0% 45%,
        15% 44%,
        32% 50%,
        54% 60%,
        70% 61%,
        84% 59%,
        100% 52%,
        100% 100%,
        0% 100%
      );
    }
    50% {
      clip-path: polygon(
        0% 60%,
        16% 65%,
        34% 66%,
        51% 62%,
        67% 50%,
        84% 45%,
        100% 46%,
        100% 100%,
        0% 100%
      );
    }
  }

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }

  .animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
</style>

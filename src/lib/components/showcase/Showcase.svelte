<script lang="ts">
  import { onMount } from 'svelte'
  import { i18n } from '../../../i18n'
  import Project from './Project.svelte'

  import {
    getPortfolioData,
    getPortfolioTitle,
  } from '$lib/stores/ShowcasesData'
  import type { ProjectDataType } from '../../../types/showcases.d.ts'

  let portfolioTitle: any
  let portfolioData: any

  $: {
    if ($i18n) {
      portfolioTitle = getPortfolioTitle($i18n)
      portfolioData = getPortfolioData($i18n)
    }
  }

  let delay: boolean = false
  let work: ProjectDataType[] = []
  let template: boolean = false
  let templateGern: string = 'ReactJS'
  let activeTabTemplate: boolean[] = [true, false]
  let gern: string = 'All'
  let activeTab: boolean[] = [true, false, false, false, false]

  $: {
    if (gern === 'All') {
      work = portfolioData[0]?.all
    } else if (gern === 'App') {
      work = portfolioData[0].app
    } else if (gern === 'Templates') {
      template = true
      if (templateGern === 'ReactJS') {
        work = portfolioData[0].templates[0].react
      } else if (templateGern === 'VanillaJS') {
        work = portfolioData[0].templates[0].vanillaJS
      }
    } else if (gern === 'Games') {
      work = portfolioData[0].games
    } else if (gern === 'GraphicDesign') {
      work = portfolioData[0].graphicDesign
    }
  }

  onMount(() => {
    delay = !!portfolioData
  })

  function setGernAndTab(name: any, activetab: boolean[]): void {
    activeTab = activetab
    gern = name
    template = name === 'Templates' || name === 'قالب'
  }

  function setTemplateGern(gern: string): void {
    templateGern = gern
    activeTabTemplate =
      gern === 'ReactJS' || gern === 'ری اکت' ? [true, false] : [false, true]
  }
</script>

<section
  class="flex flex-col w-screen min-h-screen pt-20 mx-auto scale-effect activeSection md:w-4/5"
>
  {#if delay}
    <div style="animation-delay: 1s">
      <div class="relative mb-10">
        <h3
          class="absolute z-10 text-xl -translate-x-1/2 rtl:font-TitrPlus left-1/2"
        >
          {$i18n.t('projects')}
        </h3>
        <span
          class="bg-secondary left-1/2 -top-1.5 -translate-x-1/2 rounded-full absolute w-8 h-8"
        ></span>
      </div>

      <h1
        class="my-5 text-2xl text-center md:text-4xl ltr:font-summer rtl:font-casablanca"
      >
        {$i18n.t('seeProjects')}
      </h1>
      <div class="w-3/5 h-1 mx-auto bg-secondary md:w-2/5">
        <div
          class="relative w-10 h-1 bg-base-100 left-2/4 -translate-x-2/4 rtl:translate-x-2/4 rtl:-left-2/4"
        >
          <span class="absolute w-2 h-1 rounded-full bg-accent left-2"></span>
          <span class="absolute w-2 h-1 rounded-full bg-accent left-6"></span>
        </div>
      </div>
    </div>
  {/if}

  <div
    style="animation-delay: 1s"
    class="flex items-center justify-center w-3/4 h-20 gap-2 mx-auto mt-10 text-xs text-center md:gap-4 md:text-md"
  >
    {#each portfolioTitle as { gern, name, activetab }, idx}
      <button
        type="button"
        class={`
           ${activeTab[idx] ? 'bg-secondary' : ''}
           p-2 py-1 mb-10 font-semibold md:p-4 md:py-2 rounded-2xl`}
        on:click={() => setGernAndTab(gern, activetab)}
      >
        {name}
      </button>
    {/each}
  </div>

  <div
    class="grid grid-cols-1 gap-5 pb-20 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 place-items-center"
  >
    {#if template}
      <div
        class="col-span-1 m-5 -mt-5 text-xs text-center sm:col-span-2 md:col-span-3 xl:col-span-4 md:text-md"
      >
        <button
          class={`p-2 py-1 md:p-4 md:py-2 rounded-2xl
          ${activeTabTemplate[0] ? 'bg-secondary' : ''}
          `}
          type="button"
          on:click={() => setTemplateGern('ReactJS')}
        >
          {$i18n.t('reactjs')}
        </button>
        <button
          class={`p-2 py-1 md:p-4 md:py-2 rounded-2xl
          ${activeTabTemplate[1] ? 'bg-secondary' : ''}
          `}
          type="button"
          on:click={() => setTemplateGern('VanillaJS')}
        >
          {$i18n.t('vanillajs')}
        </button>
      </div>
    {/if}

    {#each work as { pic, title, projectName, githubLink, viewOnline }, idx}
      <Project {pic} {title} {projectName} {githubLink} {viewOnline} />
    {/each}
  </div>
</section>

<style>
  .scale-effect {
    animation: scaleUp 0.4s ease-in-out forwards;
  }

  @keyframes scaleUp {
    from {
      transform: scale(0.3);
    }
    to {
      transform: scale(1);
    }
  }
</style>

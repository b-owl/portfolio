<script lang="ts">
  import { MePicCarton } from '$lib/assets/dummy'
  import Icon from '@iconify/svelte'
  import { i18n } from '../../../i18n'

  $: aboutData = [
    {
      skill: $i18n.t('aboutSkills1'),
      description: $i18n.t('aboutSkills1Description1'),
      icon: 'ph:code-duotone',
    },
    {
      skill: $i18n.t('aboutSkills2'),
      description: $i18n.t('aboutSkills1Description2'),
      icon: 'ph:code-duotone',
    },
    {
      skill: $i18n.t('aboutSkills3'),
      description: $i18n.t('aboutSkills1Description3'),
      icon: 'ph:brain-duotone',
    },
    {
      skill: $i18n.t('aboutSkills5'),
      description: $i18n.t('aboutSkills1Description5'),
      icon: 'icon-park-twotone:owl',
    },
  ]
</script>

<section
  class="relative z-10 flex items-center justify-center w-full py-20 mx-auto min-h-auto activeSection md:w-10/12 p-14 lg:p-10 md:gap-x-16 lg:h-screen"
>
  <div class="hidden h-92 xl:block basis-1/3">
    <div
      style=" z-index: -1"
      class="absolute rounded-full glass bg-secondary w-72 h-72 top-36 left-14 rtl:right-14"
    />
    <img
      class="w-full h-full scale-effect"
      src={MePicCarton}
      alt="Mehdi Keramati"
    />
  </div>
  <div class="basis-full xl:basis-2/3">
    <div class="relative">
      <h2 class="absolute z-10 text-xl rtl:font-TitrPlus ltr:font-summer">
        {$i18n.t('about')}
      </h2>
      <span
        class="absolute w-10 h-10 rounded-full glass bg-secondary rtl:-right-3 rtl:-top-3 -left-4 -top-2"
      />
    </div>

    <div class="flex flex-col items-start">
      <h1
        class="mt-10 mb-5 text-2xl font-semibold md:text-3xl lg:text-4xl rtl:font-casablanca"
      >
        {$i18n.t('helloName')}
      </h1>
      <div class="w-20 h-1 m-2 mb-4 glass bg-secondary" />
      <p class="text-sm text-gray-400 text-md">{$i18n.t('AboutDescreption')}</p>
    </div>
    <div class="grid gap-8 mt-12 md:grid-cols-2 gap-y-12">
      {#each aboutData as { skill, description, icon }}
        <div class="flex items-center gap-8 md:justify-between">
          <div class="relative">
            <h2 class="absolute z-10 text-xl font-semibold -left-2 -top-1">
              <!-- <svelte:component this={icon} /> -->
              <Icon {icon} />
            </h2>
            <span
              class="absolute w-8 h-8 rounded-full glass bg-secondary -left-6 -top-4"
            />
          </div>

          <div>
            <h3 class="text-lg rtl:font-TitrPlus font-summer">{skill}</h3>
            <p class="mt-2 text-xs text-gray-400">{description}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .scale-effect {
    animation: scaleUp 0.4s ease-in-out forwards;
  }

  @keyframes scaleUp {
    from {
      transform: scale(0.5);
    }
    to {
      transform: scale(1);
    }
  }
</style>

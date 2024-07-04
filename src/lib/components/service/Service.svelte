<script lang="ts">
  import { onMount } from 'svelte'
  import { register } from 'swiper/element/bundle'
  import { i18n } from '../../../i18n'
  import Icon from '@iconify/svelte'

  $: serviceData = [
    {
      skill: $i18n.t('html'),
      description: $i18n.t('htmlDescription'),
      icon: 'ph:house',
    },
    {
      skill: $i18n.t('css'),
      description: $i18n.t('cssDescription'),
      icon: 'ph:house',
    },
    {
      skill: $i18n.t('js'),
      description: $i18n.t('jsDescription'),
      icon: 'ph:house',
    },
    {
      skill: $i18n.t('react'),
      description: $i18n.t('reactDescription'),
      icon: 'ph:house',
    },
    {
      skill: $i18n.t('sass'),
      description: $i18n.t('sassDescription'),
      icon: 'ph:house',
    },
    {
      skill: $i18n.t('tailwind'),
      description: $i18n.t('tailwindDescription'),
      icon: 'ph:house',
    },
    {
      skill: $i18n.t('bootstrap'),
      description: $i18n.t('bootstrapDescription'),
      icon: 'ph:house',
    },
    {
      skill: $i18n.t('photoshop'),
      description: $i18n.t('photoshopDescription'),
      icon: 'ph:house',
    },
  ]

  let swiperEl: HTMLElement

  onMount(() => {
    Object.assign(swiperEl, {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        clickable: true,
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      injectStyles: [
        `
      .swiper-pagination-bullet {
           background-color: transparent;
           border: 1px solid ;
           opacity: 1;
           width: 10px;
           height: 10px;
       }
       .swiper-pagination-bullet-active {
           background-color: aqua !important;
           box-shadow:
             0 0 0.5rem aqua,
             0 0 1rem aqua;
        }
      `,
      ],
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1224: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1446: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      },
    })

    // @ts-ignore
    swiperEl.initialize()
  })

  register()
</script>

<section
  class="flex flex-col justify-start w-screen h-screen pt-20 mx-auto overflow-hidden scale-effect md:w-4/5"
>
  <div>
    <div class="relative mb-10">
      <h3
        class="absolute z-10 text-xl -translate-x-1/2 left-1/2 rtl:font-TitrPlus"
      >
        {$i18n.t('skills')}
      </h3>
      <span
        class="bg-secondary left-1/2 -top-1.5 -translate-x-1/2 rounded-full absolute w-8 h-8"
      />
    </div>

    <h1
      class="my-5 text-2xl text-center md:text-4xl rlt:font-casablanca ltr:font-summer"
    >
      {$i18n.t('seeSkills')}
    </h1>
    <div class="w-3/5 h-1 mx-auto bg-secondary md:w-2/5">
      <div
        class="relative w-10 h-1 left-2/4 -translate-x-2/4 rtl:-left-2/4 rtl:translate-x-2/4 bg-base-100"
      >
        <span
          class="absolute w-2 h-1 mx-2 rounded-full rtl:mx-0 rtl:left-2 bg-accent"
        />
        <span
          class="absolute w-2 h-1 mx-2 rounded-full rtl:mx-0 rtl:left-6 left-4 bg-accent"
        />
      </div>
    </div>
  </div>

  <swiper-container
    bind:this={swiperEl}
    init="false"
    class="w-full px-10 mt-20 md:px-0 h-72"
    style="direction: ltr"
  >
    {#each serviceData as { icon, skill, description }}
      <swiper-slide>
        <div
          class="flex flex-col w-full p-3 border rounded-md border-base-300 item hover:bg-accent/30 h-60 gap-y-4 hover:cursor-grab"
          style="direction: {$i18n.language === 'fa' ? 'rtl' : 'ltr'}"
        >
          <h2 class="text-xl">
            <Icon {icon} />
          </h2>
          <h3 class="text-xl font-summer">{skill}</h3>
          <p class="text-sm text-gray-500 description">
            {description}
          </p>
        </div>
      </swiper-slide>
    {/each}
  </swiper-container>
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

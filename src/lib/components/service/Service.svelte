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
  class="w-screen min-h-screen mx-auto md:w-4/5 flex justify-start mt-10 flex-col pt-10"
>
  <div>
    <div class="relative mb-10">
      <h3
        class="text-xl absolute left-1/2 -translate-x-1/2 z-10 rtl:font-TitrPlus"
      >
        {$i18n.t('skills')}
      </h3>
      <span
        class="bg-secondary left-1/2 -top-1.5 -translate-x-1/2 rounded-full absolute w-8 h-8"
      />
    </div>

    <h1
      class="text-2xl md:text-4xl my-5 text-center rlt:font-casablanca ltr:font-summer"
    >
      {$i18n.t('seeSkills')}
    </h1>
    <div class="bg-secondary w-3/5 md:w-2/5 mx-auto h-1">
      <div
        class="relative w-10 h-1 left-2/4 -translate-x-2/4 rtl:-left-2/4 rtl:translate-x-2/4"
      >
        <span class="absolute rounded-full rtl:mx-0 rtl:left-2 w-2 h-1 mx-2" />
        <span
          class="absolute rounded-full rtl:mx-0 rtl:left-6 left-4 w-2 h-1 mx-2"
        />
      </div>
    </div>
  </div>

  <swiper-container
    bind:this={swiperEl}
    init="false"
    class="mt-20 px-10 md:px-0 h-72 w-full"
    style="direction: ltr"
  >
    {#each serviceData as { icon, skill, description }}
      <swiper-slide>
        <div
          class="item hover:bg-accent/30 border-2 p-3 w-full h-60 flex flex-col gap-y-4 hover:cursor-grab rounded-md"
          style="direction: {$i18n.language === 'fa' ? 'rtl' : 'ltr'}"
        >
          <h2 class="text-xl">
            <Icon {icon} />
          </h2>
          <h3 class="text-xl font-summer">{skill}</h3>
          <p class="description text-sm text-gray-500">
            {description}
          </p>
        </div>
      </swiper-slide>
    {/each}
  </swiper-container>
</section>

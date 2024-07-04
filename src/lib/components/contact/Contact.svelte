<script lang="ts">
  import { setupContact } from './Contact'
  import { ContactPic } from '$lib/assets/dummy'
  import { i18n } from '../../../i18n'
  import { fly } from 'svelte/transition'

  const { AlertClassname, LoadingClassname, form, sendEmail } = setupContact()
</script>

<section
  class="flex items-center justify-center min-h-screen p-10 py-20 mx-auto activeSection lg:w-4/5 md:p-20 lg:p-10 md:gap-x-16"
>
  <div class="relative z-10 hidden rounded-md lg:block lg:basis-1/3 h-92">
    <div
      class="absolute bottom-0 left-0 w-full h-full rounded-lg bg-secondary opacity-20"
    />
    <img
      in:fly={{ x: -200, duration: 400 }}
      class="z-20 w-full h-full"
      src={ContactPic}
      alt=""
    />
  </div>

  <div class="h-full mt-8 basis-full lg:basis-2/3">
    <div class="flex flex-col items-start w-full h-full">
      <div class="relative w-full">
        <h2
          class="absolute z-10 text-xl rtl:font-semibold rtl:font-TitrPlus ltr:font-summer"
        >
          {$i18n.t('contact')}
        </h2>
        <span
          class="absolute w-10 h-10 rounded-full bg-secondary rtl:-right-4 -left-4 -top-2"
        />
      </div>

      <h1
        class="mt-10 mb-5 text-4xl font-semibold ltr:font-robotoBold rtl:font-casablanca"
      >
        {$i18n.t('getInTouch')}
      </h1>
      <div class="w-20 h-1 m-2 mb-4 bg-secondary" />
      <p class="text-sm text-base-content">{$i18n.t('contactDescription')}</p>
    </div>

    <div
      style="left: {$i18n.language === 'fa' ? '2rem' : '80%'}"
      class="{$AlertClassname} alert text-md rtl:font-soltan rtl:font-semibold"
    >
      {$i18n.t('messageSended')}
      <span class="bg-success" />
    </div>

    <form bind:this={$form} on:submit={sendEmail}>
      <div class="flex flex-col w-full gap-3 my-10 md:flex-row">
        <div class="relative h-10 border rounded-md md:basis-2/4 border-base-300">
          <label
            class="px-2 rtl:px-5 flex items-center justify-center ltr:font-summer rtl:right-4 rtl:w-4 absolute left-4 -top-2.5 bg-base-100 rtl:font-semibold text-sm"
            for="name"
          >
            {$i18n.t('yourName')}
          </label>
          <input
            name="user_name"
            class="w-full h-full p-4 text-red-400 bg-transparent valid:text-green-400"
            id="name"
            type="text"
            required
          />
        </div>
        <div class="relative h-10 border rounded-md md:basis-2/4 border-base-300">
          <label
            class="px-2 rtl:px-5 flex items-center justify-center ltr:font-summer rtl:right-4 rtl:w-4 absolute left-4 -top-2.5 bg-base-100 rtl:font-semibold text-sm"
            for="email"
          >
            {$i18n.t('yourEmail')}
          </label>
          <input
            name="user_email"
            class="w-full h-full p-4 text-red-400 bg-transparent valid:text-green-400"
            type="email"
            required
          />
        </div>
      </div>
      <div class="relative">
        <label
          class="px-2 rtl:px-5 flex items-center justify-center ltr:font-summer rtl:right-4 rtl:w-4 absolute left-4 -top-2.5 bg-base-100 rtl:font-semibold text-sm"
          for="textarea"
        >
          {$i18n.t('yourMessage')}
        </label>
        <textarea
          name="message"
          class="w-full p-4 bg-transparent border rounded-md resize-y border-base-300 h-36"
          id="textarea" 
          cols="30"
          rows="10"
        />
      </div>

      <button
        type="submit"
        class="mt-4 font-semibold cursor-pointer btn btn-outline border-base-300"
      >
        {#if $LoadingClassname}
          <span class={$LoadingClassname} />
        {:else}
          {$i18n.t('sendMessage')}
        {/if}
      </button>
    </form>
  </div>
</section>

<style lang="scss">
  .alert {
    z-index: 9;
    display: none;
    width: 10rem;
    height: 3rem;
    border-radius: 0.5rem;
    position: fixed;
    top: 3rem;
    align-items: center;
    justify-content: center;
    font-family: impact !important;
    overflow: hidden;
    animation-delay: 2s;
    span {
      height: 0.2rem;
      width: 100%;
      position: fixed;
      bottom: 0;
      animation: progres 2s linear forwards;
    }
    &.activeAlert {
      display: flex;
      animation: alert 2.5s ease-in-out forwards;
    }
  }
  @keyframes progres {
    from {
      left: 0;
    }
    to {
      left: 100%;
    }
  }
  @keyframes alert {
    0% {
      transform: scale(0.5);
    }
    10% {
      transform: scale(1);
    }
    90% {
      transform: scale(1);
    }
    95% {
      opacity: 1;
      transform: scale(1.2);
    }
    100% {
      opacity: 0;
      transform: scale(0.7);
    }
  }
</style>

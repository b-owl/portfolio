<script lang="ts">
  import { i18n } from '../../i18n'
</script>

<div
  style="direction: ltr;"
  class="flex flex-col items-center justify-center w-screen h-screen fixed top-0 left-0 z-50 bg-gray-800"
>
  <h1
    class="relative mb-12 text-4xl text-blue-400 loadingAnimation ltr:mr-10 rtl:font-soltan rtl:text-3xl"
  >
    {$i18n.t('loading')}
    <span class="absolute -right-4 rtl:-left-4" style="--j: 1;">.</span>
    <span class="absolute -right-8 rtl:-left-8" style="--j: 2;">.</span>
    <span class="absolute -right-12 rtl:-left-12" style="--j: 3;">.</span>
  </h1>
  <div class="flex items-center justify-center gap-2 hand">
    {#each [1, 2, 3, 4] as i}
      <div
        style="--i: {i};"
        class="finger finger-{['one', 'two', 'three', 'four'][
          i - 1
        ]} relative flex flex-col items-center justify-between w-10 bg-base-300 rounded-2xl"
        class:h-28={i === 1}
        class:h-32={i === 2 || i === 4}
        class:h-40={i === 3}
      >
        <span class="absolute w-3/4 h-1 bg-blue-400 top-3"></span>
        <span class="absolute w-3/4 h-1 bg-blue-400 top-5"></span>
        <span
          class="absolute w-8 h-8 bg-blue-400 bottom-2 rounded-t-3xl rounded-b-xl"
        ></span>
      </div>
    {/each}
    <div
      style="--i: 4;"
      class="relative flex flex-col items-center justify-between w-12 h-10 finger finger-five bg-base-300 rounded-tr-xl rounded-br-3xl"
    >
      <span class="absolute left-0 w-10 h-5 bg-base-300 -top-4"></span>
    </div>
  </div>
</div>

<style lang="scss">
  // Variables
  $animation-duration: 0.4s;
  $animation-type: linear;
  $animation-direction: alternate;
  $animation-iteration: infinite;
  $finger-delay-multiplier: 0.1s;
  $dot-delay-multiplier: 0.1s;
  $translate-amount: -1rem;

  // Mixins
  @mixin animation(
    $name,
    $duration: $animation-duration,
    $timing-function: $animation-type,
    $direction: $animation-direction,
    $iteration: $animation-iteration,
    $delay: 0s
  ) {
    animation: $name $duration $timing-function $direction $iteration;
    animation-delay: $delay;
  }

  // Loading Animation
  .loadingAnimation {
    > span {
      @include animation(dot, 0.5s);
      animation-delay: calc(#{$dot-delay-multiplier} * var(--j));
    }
  }

  @keyframes dot {
    to {
      transform: translateY($translate-amount);
    }
  }

  // Finger Animation
  .finger {
    @include animation(finger);
    animation-delay: calc(#{$finger-delay-multiplier} * var(--i));

    &-five {
      @include animation(finger5);

      > span {
        clip-path: polygon(
          33% 74%,
          52% 84%,
          70% 91%,
          100% 100%,
          0 100%,
          0 48%,
          17% 63%
        );
      }
    }
  }

  @keyframes finger {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY($translate-amount);
    }
  }

  @keyframes finger5 {
    from {
      transform: translateY(0) rotate(8deg);
    }
    to {
      transform: translateY($translate-amount) rotate(-8deg);
    }
  }
</style>

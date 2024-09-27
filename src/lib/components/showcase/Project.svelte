<script lang="ts">
  import { i18n } from '../../../i18n'

  export let pic: string
  export let title: string
  export let projectName: string
  export let githubLink: string
  export let viewOnline: string
</script>

<section class="{pic} bg-center bg-contain bg-no-repeat w-3/4 md:w-full h-64">
  <div
    class="project-item flex flex-col items-center justify-center w-full h-full gap-4 overflow-hidden opacity-0 hover:opacity-100 bg-base-200/85 rounded-md"
  >
    <span
      class="text-accent title-text text-sm ltr:font-summer rtl:font-TitrPlus"
    >
      {title}
    </span>
    <h3
      style="text-shadow: 1px 1px 2px aqua;"
      class="-mt-3 text-xl font-semibold rtl:font-soltan ltr:font-robotoBold"
    >
      {projectName}
    </h3>

    <div class="flex gap-4 cursor-pointer rtl:font-casablanca">
      <a
        target="_blank"
        rel="noreferrer"
        class="btn btn-sm link bg-secondary px-2 py-1 text-sm -translate-x-24 rounded-lg shadow-md"
        href={githubLink}
      >
        {$i18n.t('viewGithub')}
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        class="btn btn-sm link bg-secondary px-2 py-1 text-sm translate-x-24 rounded-lg shadow-md"
        href={viewOnline}
      >
        {$i18n.t('liveDemo')}
      </a>
    </div>
  </div>
</section>

<style>
  .project-item {
    transition: 0.5s opacity;
  }
  .project-item .link {
    transition: 0.5s transform;
    text-decoration: none;
  }
  .project-item:hover .link {
    transform: translateX(0);
  }
  .project-item .title-text {
    transform: translateY(5rem);
    transition: 0.3s transform;
  }
  .project-item:hover .title-text {
    transform: translateY(0);
  }
</style>

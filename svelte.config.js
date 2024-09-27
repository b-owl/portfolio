import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
  adapter: adapter(),
  paths: {
    base: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  },
  prerender: {
    handleHttpError: ({ path, status }) => {
      // Suppress 404s for certain paths during prerendering if necessary
      if (status === 404) {
        console.warn(`404 error encountered for path: ${path}`);
        return;
      }
      throw new Error(`${status} error for path: ${path}`);
    },
  },
}

}
export default config

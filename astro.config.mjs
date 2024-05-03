import { defineConfig } from 'astro/config';
import { astroImageTools } from "astro-imagetools";

import svelte from "@astrojs/svelte";

export default defineConfig({
  integrations: [svelte(), astroImageTools]
});
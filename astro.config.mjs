import { defineConfig } from 'astro/config';
import htmx from 'astro-htmx';

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [htmx()],
  output: "server",
  adapter: netlify()
});
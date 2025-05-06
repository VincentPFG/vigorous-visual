import { defineConfig } from 'astro/config';
import htmx from 'astro-htmx';
import netlify from "@astrojs/netlify";

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  integrations: [htmx(), alpinejs()],
  output: "server",
  adapter: netlify()
});
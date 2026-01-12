import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

export default defineConfig({
  site: "https://elegant-yeot-ad658ea.netlify.app/",
  integrations: [preact()]
});
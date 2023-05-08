import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  css: ["./src/styles/fonts.css" // path to your CSS file
  ],
  integrations: [react()]
});
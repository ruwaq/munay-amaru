import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://munay.flowclicker.cc',
  output: 'static',
  build: {
    format: 'directory'
  }
});

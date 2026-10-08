import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// VITE_BASE: the path the site is served from; '/' at tools.hyderabad.urbanobservatory.in.
export default defineConfig({
  base: process.env.VITE_BASE || '/',
  plugins: [react()],
});

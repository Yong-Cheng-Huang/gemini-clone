// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/gemini-clone/', // 這裡的路徑應該是你的 GitHub Pages 儲存庫名稱
});
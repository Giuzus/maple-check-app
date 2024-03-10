/// <reference types="vitest" />
import { defineConfig } from "vite";
import { defaultExclude } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.md"],
  base: "https://giuzus.github.io/maple-check-app",
  test: {
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
    exclude: [...defaultExclude],
    coverage: {
      enabled: true,
      exclude: ["src/main.tsx"],
      include: ["src/**/*.tsx"],
      provider: "v8",
      reporter: ["lcov", "text", "html"],
      // thresholds: {
      //   lines: 90,
      //   statements: 90,
      //   branches: 90,
      //   functions: 90,
      // },
    },
  },
});

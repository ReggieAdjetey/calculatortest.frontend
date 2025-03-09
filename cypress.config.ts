import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:8002"
  },
  video: true,
  retries: {
    experimentalStrategy: "detect-flake-and-pass-on-threshold",
    experimentalOptions: {
      maxRetries: 3,
      passesRequired: 1
    },
    openMode: true,
    runMode: true
  }
});
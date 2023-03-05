import { defineConfig } from "cypress";
import { readPdfFile } from "cypress/scripts/read-pdf";

const data = {};

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        readPdfFile,
        setValue: (params) => {
          const { key, value } = params;
          data[key] = value;
          return value;
        },
        getValue: (params) => {
            const { key } = params;
            return data[key] || null;
        }
      })
    },
    trashAssetsBeforeRuns: false,
    taskTimeout: 60000
  },
});

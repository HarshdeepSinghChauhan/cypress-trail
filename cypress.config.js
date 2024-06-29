const { defineConfig } = require('cypress')
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({
  e2e: {
    // defaultCommandTimeout: 5000,
    // supportFile: "cypress/support/index.js",
    excludeSpecPattern: [
      '**/1-getting-started/*',
      '**/2-advanced-examples/*'
      // Add more patterns as needed
    ],
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports/mocha',
      overwrite: false,
      html: true,
      json: true
    },
    setupNodeEvents (on, config) {
      // implement node event listeners here
      on('task', { downloadFile })
    }
  }
})

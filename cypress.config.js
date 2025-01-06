const { defineConfig } = require('cypress')

module.exports = defineConfig({
  //video: false,
  //screenshotOnRunFailure: false,
  useTsLoader: true,

  defaultCommandTimeout: 60000,
  experimentalMemoryManagement: true,
  numTestsKeptInMemory: 20,
  viewportWidth: 1280,
  viewportHeight: 800,
  e2e: {
    baseUrl: "https://www.saucedemo.com/",
    setupNodeEvents(on, config) {
      this.defaultCommandTimeout = 60000
    },
  },
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'tests/test-output-[hash].xml',
    toConsole: true,
    attachments: true,
  },
  retries: {
    // Configure retry attempts for `cypress run`
    // Default is 0
    runMode: 2,
    // Configure retry attempts for `cypress open`
    // Default is 0
    openMode: 0,
  },
})

const {defineConfig} = require('cypress')

module.exports = defineConfig({
    //video: false,
    //screenshotOnRunFailure: false,
    useTsLoader: true,

    viewportWidth: 1280,
    viewportHeight: 800,
    e2e: {
        specPattern: "cypress/e2e/**/*.{cy,spec}.{js,ts}",
        watchForFileChanges: false,
        chromeWebSecurity: false,
        blockHosts: ["https://events.backtrace.io"],
        baseUrl: "https://www.saucedemo.com/",
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

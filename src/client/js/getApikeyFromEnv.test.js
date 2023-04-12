const { getApiKeyFromEnv } = require("./nlpChecker")


describe('Check for api key from env', () => {
    test('To get apikey from env',  () => {
     var apiKey = getApiKeyFromEnv("api12345678")
        expect(apiKey).toBe("api12345678")
      })
  })
  
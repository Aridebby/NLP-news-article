const { getUserInput } = require("./formHandler")


describe('Check for user input', () => {
    test('To get user input',  () => {
     var userinput = getUserInput('UserInput')
        expect(userinput).toBe("UserInput")
      })
    
  })
  
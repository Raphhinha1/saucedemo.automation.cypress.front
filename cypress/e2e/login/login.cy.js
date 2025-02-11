import LoginPage from "../../page/login-page";

const testCases = {
    username: 'standard_user',
    password: 'secret_sauce'
}

describe('Test in login', () => {
    beforeEach(() => {
        cy.visit("")
    });
    it(`Test Case 1: Login with ${testCases.username}`, () => {
        LoginPage.login(testCases.username, testCases.password)
        LoginPage.verifyLoginSuccess()
    });
    it('Test Case 2: Login with invalid username', () => {
        LoginPage.login('invalid_user', testCases.password)
        LoginPage.verifyLoginFailed("Epic sadface: Username and password do not match any user in this service")
    })
    it('Test Case 3: Login with invalid password', () => {
        LoginPage.login(testCases.username, 'invalid_password')
        LoginPage.verifyLoginFailed("Epic sadface: Username and password do not match any user in this service")
    });
    it('Test Case 4: Login with empty username and password', () => {
        LoginPage.login('', '')
        LoginPage.verifyLoginFailed("Epic sadface: Username is required")
    });
});

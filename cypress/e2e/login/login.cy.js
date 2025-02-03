import LoginPage from "../../page/login-page";

const testCases = [
    {
        username: 'standard_user',
        password: 'secret_sauce'
    },
    {
        username: 'visual_user',
        password: 'secret_sauce'
    }
];

describe('Test in login', () => {
    testCases.forEach((testCase, index) => {
        it(`Test Case ${index + 1}: Login with ${testCase.username}`, () => {
            cy.visit("")
            LoginPage.login(testCase.username, testCase.password)
            LoginPage.verifyLoginSuccess()
        });
    });
});

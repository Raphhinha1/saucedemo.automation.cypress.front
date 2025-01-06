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
    // {
    //     username: 'problem_user',
    //     password: 'secret_sauce'
    // },
    // {
    //     username: 'locked_out_user',
    //     password: 'secret_sauce'
    // },
    // {
    //     username: 'performance_glitch_user',
    //     password: 'secret_sauce'
    // }, {
    //     username: 'error_user',
    //     password: 'secret_sauce'
    // }, {
    //     username: 'locked_out_user',
    //     password: 'secret_sauce'
    // },
];
describe('Test in login', () => {
    testCases.forEach((testCase, index) => {
        it(`Test Case ${index + 1}: Login with ${testCase.username}`, () => {
            cy.visit("")
            LoginPage.login(testCase.username, testCase.password)
        });
    });
});

import LoginPage from "../../page/login-page";
import InventoryPage from "../../page/inventory-page";

const cartTestCases = [
    {
        item: "Sauce Labs Backpack",
        username: "standard_user",
        password: "secret_sauce",
    },
    {
        item: "Sauce Labs Bike Light",
        username: "standard_user",
        password: "secret_sauce",
    },
    {
        item: "Sauce Labs Bolt T-Shirt",
        username: "standard_user",
        password: "secret_sauce",
    },
    {
        item: "Sauce Labs Onesie",
        username: "standard_user",
        password: "secret_sauce",
    },
    {
        item: "Sauce Labs Fleece Jacket",
        username: "standard_user",
        password: "secret_sauce",
    },
    {
        item: "Sauce Labs Onesie",
        username: "standard_user",
        password: "secret_sauce",
    },
];

describe('Test in inventory', () => {
    cartTestCases.forEach((testCase, index) => {
        it(`Test Case ${index + 1}: Login and add "${testCase.item}" to cart`, () => {
            cy.visit("", {retryOnStatusCodeFailure: true})
            LoginPage.login(testCase.username, testCase.password)
            LoginPage.verifyLoginSuccess()
            InventoryPage.addToCart(testCase.item)
            InventoryPage.verifyItemAddedToCart(testCase.item)
        });
    });
});

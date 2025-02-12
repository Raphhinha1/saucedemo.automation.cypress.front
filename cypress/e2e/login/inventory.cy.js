import LoginPage from "../../page/login-page";
import InventoryPage from "../../page/inventory-page";

const cartTestCases = [
    {
        item: "Sauce Labs Backpack",
    },
    {
        item: "Sauce Labs Bike Light",
    },
    {
        item: "Sauce Labs Bolt T-Shirt",
    },
    {
        item: "Sauce Labs Onesie",
    },
    {
        item: "Sauce Labs Fleece Jacket",
    },
    {
        item: "Sauce Labs Onesie",
    },
];

describe('Test in inventory', () => {
    cartTestCases.forEach((testCase, index) => {
        it(`Test Case ${index + 1}: Login and add "${testCase.item}" to cart`, () => {
            cy.visit(Cypress.env('BASE_URL'))
            LoginPage.login(Cypress.env('USERNAME'), Cypress.env('PASSWORD'))
            LoginPage.verifyLoginSuccess()
            InventoryPage.addToCart(testCase.item)
            InventoryPage.verifyItemAddedToCart(testCase.item)
        });
    });
});

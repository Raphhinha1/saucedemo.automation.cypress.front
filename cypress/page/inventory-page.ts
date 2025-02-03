export default class InventoryPage {
    static addToCart(itemName: string) {
        cy.get('[data-test="inventory-item-name"]').contains(itemName).should('exist');

        const formattedItemName = itemName
            .toLowerCase()
            .replace(/ /g, '-')
            .replace(/[^a-z0-9-]/g, '');

        cy.get(`#add-to-cart-${formattedItemName}`).click();
    }
    static verifyItemAddedToCart(itemName: string) {
        cy.get('.shopping_cart_badge').should('have.text', '1');
        cy.get('.shopping_cart_link').click();
        cy.get('[data-test="inventory-item-name"]').contains(itemName).should('exist');
    }
}

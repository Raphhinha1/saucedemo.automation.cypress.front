export default class LoginPage {
    static login(username: string, password: string) {
        if (username)
            cy.get('#user-name').type(username)
        if (password)
            cy.get('#password').type(password)
        cy.get('#login-button').click()
    }

    static verifyLoginSuccess() {
        cy.get('[data-test="title"]').should("have.text", "Products");
    }

    static verifyLoginFailed(textError:string) {
        cy.get('[data-test="error"]').should("have.text", textError);
    }
}
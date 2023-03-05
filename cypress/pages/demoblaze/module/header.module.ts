import CartPage from "../cart.page";

export default class HeaderModule {
    public openCartPage(): CartPage {
        cy
            .get('#cartur')
            .click()
            .waitUntil(() => cy.get('.success').should('be.visible'));
        return new CartPage();
    }
}
export default class CartPage {
    public verifyProductWithNameExistsInCart(product: string | any): CartPage {
        cy
            .get('.success > td')
            .eq(1)
            .should('have.text', product);
        return this;
    }
}
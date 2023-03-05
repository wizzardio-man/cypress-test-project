export default class ProductPage {
    public verifyProductCanBeAddedToCart(): ProductPage {
        const stub = cy.stub();
        cy.on('window:alert', stub);

        cy
            .get('.btn-success')
            .click()
            .wait(1000)
            .then(() => {
                expect(stub.getCall(0)).to.be.calledWith('Product added.');
            });
        return this;
    }

    public addProductNameToTestVariable(): void {
        cy
            .get('.name')
            .invoke('text')
            .then((text) => {
                cy.task('setValue', {
                    key: 'productname',
                    value: text
                });
            });
    }
}
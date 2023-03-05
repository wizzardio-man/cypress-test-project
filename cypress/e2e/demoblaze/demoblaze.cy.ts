import Env, { getEnvProperty } from "cypress/commands/env-prop.commands";
import { navigateToDemoblazePage } from "cypress/commands/navigate.commands";
import HomePage from "cypress/pages/demoblaze/home.page";
import PhonesList from "cypress/pages/demoblaze/module/phones-list.module";
import ProductPage from "cypress/pages/demoblaze/product.page";

describe('demoblaze app tests', () => {
    const demoblazePage = new HomePage();
    let phoneListModule: PhonesList;
    let productPage: ProductPage;

    before(() => {
        const username = getEnvProperty(Env.DEMOBLAZE_LOGIN);
        const password = getEnvProperty(Env.DEMOBLAZE_PASS);
        navigateToDemoblazePage();
        demoblazePage.clickLoginButton()
            .loginAsUser(username, password);
    });

    it('add the cheapest phone to the cart', () => {
        phoneListModule = demoblazePage.categoriesModule.openPhonesList();
        phoneListModule.findChepestPhonePrice()
            .then((cheapestPhonePrice) => {
                productPage = phoneListModule.openPhoneCartWithThePrice(cheapestPhonePrice);
                productPage.verifyProductCanBeAddedToCart()
                    .addProductNameToTestVariable();

                cy.task('getValue', { key: 'productname' })
                    .then((productName) => {
                        demoblazePage
                            .headerModule.openCartPage()
                            .verifyProductWithNameExistsInCart(productName);
                    });
            })
    });
})
import CategoriesModule from "./module/categories.module";
import HeaderModule from "./module/header.module";
import LoginModule from "./module/login.module";
import PhonesList from "./module/phones-list.module";

export default class HomePage {
    public clickLoginButton(): LoginModule {
        cy
            .get('#login2')
            .click();

        const loginModule = new LoginModule();
        loginModule.waitForModuleToBeVisible();
        return loginModule;
    }

    public get phonesListModule(): PhonesList {
        return new PhonesList();
    }

    public get categoriesModule(): CategoriesModule {
        return new CategoriesModule();
    }

    public get headerModule(): HeaderModule {
        return new HeaderModule();
    }
}
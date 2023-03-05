import PhonesList from "./phones-list.module";

export default class CategoriesModule {
    private clickOnCategory(category: string): void {
        cy
            .get(`a[onclick="byCat('${category}')"]`)
            .click();
    }

    public openPhonesList(): PhonesList {
        this.clickOnCategory('phone');
        return new PhonesList();
    }
}
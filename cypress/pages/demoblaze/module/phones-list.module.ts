import ProductPage from "../product.page";

export default class PhonesList {
    private get priceBlockSelector(): string {
        return '.card-block h5';
    }

    public getPhonePrices(): Promise<number[]> {
        return new Promise((res) => {
            cy
            .get(this.priceBlockSelector)
            .then(($els) => {
                return (
                    Cypress.$.makeArray($els).map((el) => el.innerText)
                  )
            })
            .then((result) => {
                const toIntResult = result.map((item) => Number.parseInt(item.replace('$', ''), 10));
                res(toIntResult);
            });
        });
    }

    public findChepestPhonePrice(): Promise<number> {
        return new Promise((res) => {
            this.getPhonePrices()
            .then(prices => {
                const cheapestPrice = prices.sort()[0];
                res(cheapestPrice);
            });
        });
    }

    public openPhoneCartWithThePrice(price: number): ProductPage {
        cy
            .contains('.card', `$${price}`)
            .find('a')
            .first()
            .click();
        return new ProductPage();
    }
}
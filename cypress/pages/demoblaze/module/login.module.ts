export default class LoginModule {
    private get loginInputSelector(): string {
        return '#loginusername';
    }

    public waitForModuleToBeVisible(): void {
        cy
            .waitUntil(() => cy.get(this.loginInputSelector).should('be.visible'));
    }

    public loginAsUser(login: string, pass: string): void {
        cy
            .wait(500)
            .get(this.loginInputSelector)
            .type(login)
            .get('#loginpassword')
            .type(pass)
            .get('button[onclick="logIn()"]')
            .click();
        }
}
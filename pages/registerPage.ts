import { Page } from "@playwright/test";

export class RegisterPage {
    constructor(public page: Page) {}

    async enterFirstName(firstname: string) {
        await this.page.locator("#input-firstname").type(firstname);
    }

    async enterLastName(lastname: string) {
        await this.page.locator("#input[name='lastname']").type(lastname);
    }

    async isSubscribeChecked() {
        // Implement your logic for checking subscription here
    }
}

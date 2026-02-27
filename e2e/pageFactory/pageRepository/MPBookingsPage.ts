import { MPBookingsPageObjects } from '@objects/MPBookingsPageObjects';
import { WebActions } from '@lib/WebActions';
import type { Page } from '@playwright/test';

let webActions: WebActions;

export class MPBookingsPage extends MPBookingsPageObjects {
  readonly page: Page;

  constructor(page: Page) {
    super();
    this.page = page;
    webActions = new WebActions(this.page);
  }

  async verifyAt(): Promise<void> {
    await webActions.verifyPageElement(MPBookingsPageObjects.BOOKINGS_MENU.replace(`/locuser`, process.env.MP_TEST_USER));
    await webActions.verifyURL(MPBookingsPageObjects.PAGE_URL);
  }
 
  async accessDashboard(): Promise<void> {
    await webActions.clickElementByRole("button", "avatar");
    await webActions.clickElementByRole('link', 'Dashboard');    
  }
}

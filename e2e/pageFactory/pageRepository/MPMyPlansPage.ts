import { MPMyPlansPageObjects } from '@objects/MPMyPlansPageObjects';
import { WebActions } from '@lib/WebActions';
import type { Page } from '@playwright/test';

let webActions: WebActions;

export class MPMyPlansPage extends MPMyPlansPageObjects {
  readonly page: Page;

  constructor(page: Page) {
    super();
    this.page = page;
    webActions = new WebActions(this.page);
  }

  async verifyAt(): Promise<void> {
    await webActions.verifyPageElement(MPMyPlansPageObjects.MY_PLANS_MENU.replace(`/locuser`, process.env.MP_TEST_USER));
    await webActions.verifyURL(MPMyPlansPageObjects.PAGE_URL);
  }
 
  async accessDashboard(): Promise<void> {
    await webActions.clickElementByRole("button", "avatar");
    await webActions.clickElementByRole('link', 'Dashboard');    
  }
}

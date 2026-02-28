import { MPHelpSupportPageObjects } from '@objects/MPHelpSupportPageObjects';
import { WebActions } from '@lib/WebActions';
import type { Page } from '@playwright/test';

let webActions: WebActions;

export class MPHelpSupportPage extends MPHelpSupportPageObjects {
  readonly page: Page;

  constructor(page: Page) {
    super();
    this.page = page;
    webActions = new WebActions(this.page);
  }

  async verifyAtFAQs(): Promise<void> {
    await webActions.verifyPageElement(MPHelpSupportPageObjects.FAQ_MENU.replace(`/locuser`, process.env.MP_TEST_USER));
    await webActions.verifyURL(MPHelpSupportPageObjects.FAQ_PAGE_URL);
  }

  async verifyAtHelp(): Promise<void> {
    await webActions.verifyPageElement(MPHelpSupportPageObjects.HELP_DESK_MENU.replace(`/locuser`, process.env.MP_TEST_USER));
    await webActions.verifyURL(MPHelpSupportPageObjects.HELP_DESK_PAGE_URL);
  }

  async accessDashboard(): Promise<void> {
    await webActions.clickElementByRole("button", "avatar");
    await webActions.clickElementByRole('link', 'Dashboard');    
  }

  async accessHelpDesk(): Promise<void> {
    await webActions.clickElementByRole('link', 'Help desk');    
  }

}

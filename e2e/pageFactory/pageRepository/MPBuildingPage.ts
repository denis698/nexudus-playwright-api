import { MPBuildingPageObjects } from '@objects/MPBuildingPageObjects';
import { WebActions } from '@lib/WebActions';
import type { Page } from '@playwright/test';

let webActions: WebActions;

export class MPBuildingPage extends MPBuildingPageObjects {
  readonly page: Page;

  constructor(page: Page) {
    super();
    this.page = page;
    webActions = new WebActions(this.page);
  }

  async verifyAtAva(): Promise<void> {
    await webActions.verifyPageElement(MPBuildingPageObjects.AVAILABILITY_MENU.replace(`/locuser`, process.env.MP_TEST_USER));
    await webActions.verifyURL(MPBuildingPageObjects.AVA_PAGE_URL);
  }

  async verifyAtEnv(): Promise<void> {
    await webActions.verifyPageElement(MPBuildingPageObjects.ENVIRONMENT_MENU.replace(`/locuser`, process.env.MP_TEST_USER));
    await webActions.verifyURL(MPBuildingPageObjects.ENV_PAGE_URL);
  }
 
  async accessDashboard(): Promise<void> {
    await webActions.clickElementByRole("button", "avatar");
    await webActions.clickElementByRole('link', 'Dashboard');    
  }

  async accessEnvironment(): Promise<void> {
    await webActions.clickElementByRole('link', 'Environment');    
  }
}

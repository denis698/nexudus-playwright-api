import { MPAccountPageObjects } from '@objects/MPAccountPageObjects';
import { WebActions } from '@lib/WebActions';
import type { Page } from '@playwright/test';

let webActions: WebActions;

export class MPAccountPage extends MPAccountPageObjects {
  readonly page: Page;

  constructor(page: Page) {
    super();
    this.page = page;
    webActions = new WebActions(this.page);
  }

  async verifyAtAcc(): Promise<void> {
    await webActions.verifyPageElement(MPAccountPageObjects.ACCOUNT_MENU.replace(`/locuser`, process.env.MP_TEST_USER));
    await webActions.verifyURL(MPAccountPageObjects.ACCOUNT_PAGE_URL);
  }

  async verifyAtBdt(): Promise<void> {
    await webActions.verifyPageElement(MPAccountPageObjects.BILLING_MENU.replace(`/locuser`, process.env.MP_TEST_USER));
    await webActions.verifyURL(MPAccountPageObjects.BILLING_PAGE_URL);
  }

  async verifyAtPbn(): Promise<void> {
    await webActions.verifyPageElement(MPAccountPageObjects.PLANS_MENU.replace(`/locuser`, process.env.MP_TEST_USER));
    await webActions.verifyURL(MPAccountPageObjects.PLANS_PAGE_URL);
  }

  async verifyAtDPf(): Promise<void> {
    await webActions.verifyPageElement(MPAccountPageObjects.DIRECTORY_MENU.replace(`/locuser`, process.env.MP_TEST_USER));
    await webActions.verifyURL(MPAccountPageObjects.DIRECTORY_PAGE_URL);
  }

  async verifyAtId(): Promise<void> {
    await webActions.verifyPageElement(MPAccountPageObjects.IDENTITY_MENU.replace(`/locuser`, process.env.MP_TEST_USER));
    await webActions.verifyURL(MPAccountPageObjects.IENTITY_PAGE_URL);
  }

  async verifyAtFil(): Promise<void> {
    await webActions.verifyPageElement(MPAccountPageObjects.FILES_MENU.replace(`/locuser`, process.env.MP_TEST_USER));
    await webActions.verifyURL(MPAccountPageObjects.FILES_PAGE_URL);
  }

  async verifyAtSet(): Promise<void> {
    await webActions.verifyPageElement(MPAccountPageObjects.SETTINGS_MENU.replace(`/locuser`, process.env.MP_TEST_USER));
    await webActions.verifyURL(MPAccountPageObjects.SETTINGS_PAGE_URL);
  }

  async accessDashboard(): Promise<void> {
    await webActions.clickElementByRole("button", "avatar");
    await webActions.clickElementByRole('link', 'Dashboard');    
  }

  async accessBillingDetails(): Promise<void> {
    await webActions.clickElementByRole('link', 'Billing details');    
  }

  async accessPlanBenefits(): Promise<void> {
    await webActions.clickElementByRole('link', 'Plans and benefits');    
  }

  async accessDirectoryProfile(): Promise<void> {
    await webActions.clickElementByRole('link', 'Directory profile');    
  }

  async accessIdentityChecks(): Promise<void> {
    await webActions.clickElementByRole('link', 'Identity checks');    
  }

  async accessFiles(): Promise<void> {
    await webActions.clickElementByRole('link', 'Files');    
  }

  async accessSettings(): Promise<void> {
    await webActions.clickElementByRole('link', 'Settings');    
  }

}

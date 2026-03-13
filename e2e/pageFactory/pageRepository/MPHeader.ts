import { MPHeaderObjects } from '@objects/MPHeaderObjects';
import { WebActions } from '@lib/WebActions';
import type { Page } from '@playwright/test';

let webActions: WebActions;

export class MPHeader extends MPHeaderObjects {
  readonly page: Page;

  constructor(page: Page) {
    super();
    this.page = page;
    webActions = new WebActions(this.page);
  }

  async verifyAt(): Promise<void> {
    await webActions.verifyPageElement(MPHeaderObjects.HEADER);
  }

  async clickOnMenuWithName(name:string): Promise<void> {
    await webActions.clickElementByFirstRole('button', name);
  }

  async focusOnMenuWithName(name:string): Promise<void> {
    await webActions.focusOnElementByFirstRole('button', name);
  }

  async delayInTest(time: number): Promise<void> {
    await webActions.delay(time);
  }

  async hoverOverMenuWithName(name:string): Promise<void> {
    await webActions.hoverOverElementByFirstRole('button', name);
  }
 
  async accessMarketing(): Promise<void> {
    await webActions.clickElement(MPHeaderObjects.PROFILE_ICON);
  }

  async accessProfileMenu(): Promise<void> {
    await webActions.clickElementByRole("button", "avatar");
  }
  
  async accessDashboard(): Promise<void> {
    await this.accessProfileMenu();
    await webActions.clickElementByRole('link', 'Dashboard');    
  }

  async accessInvoices(): Promise<void> {
    await this.accessProfileMenu();
    await webActions.clickElementByRole('link', 'Invoices');    
  }

  async accessMyActivityInvoices(): Promise<void> {
    await this.accessProfileMenu();
    await webActions.clickElementByExactRole('link', 'My activity arrow-right icon');   
    await webActions.clickElementByNthRole('link', 'Invoices');
  }
  
  async accessBookings(): Promise<void> {
    await this.accessProfileMenu();
    await webActions.clickElementByExactRole('link', 'Bookings');    
  }
  
  async accessMyPlans(): Promise<void> {
    await this.accessProfileMenu();
    await webActions.clickElementByExactRole('link', 'My plan');    
  }

  async accessBuilding(): Promise<void> {
    await this.accessProfileMenu();
    await webActions.clickElementByExactRole('link', 'Building arrow-right icon');    
    await webActions.clickElementByExactRole('link', 'Availability');  
  }

  async accessAccount(): Promise<void> {
    await this.accessProfileMenu();
    await webActions.clickElementByExactRole('link', 'Account');    
  }

  async accessSettings(): Promise<void> {
    await this.accessProfileMenu();
    await webActions.clickElementByExactRole('link', 'Settings');    
  }

  async accessFAQs(): Promise<void> {
    await this.accessProfileMenu();
    await webActions.clickElementByExactRole('link', 'Help & support arrow-right icon');
    await webActions.clickElementByExactRole('link', 'FAQs');    
  }

  async accessHelpSupport(): Promise<void> {
    await this.accessProfileMenu();
    await webActions.clickElementByExactRole('link', 'Help & support arrow-right icon');
    await webActions.clickElementByExactRole('link', 'Help desk');    
  }

  async logout(): Promise<void> {
    await this.accessProfileMenu();
    await webActions.clickElementByRole('button', 'Sign out');    
  }
  
  async isElementVisibleByFirstRole(role:any, name:string): Promise<boolean> {
    return await webActions.isVisibleByFirstRole(role, name)
  }

  async isMenusVisibleFirstRole(role:any, name:string): Promise<boolean> {
    return await webActions.isVisibleByFirstRole(role, name)
  }

  async waitUntilMenuVisibleWithName(role:any,name:string): Promise<void> {
    await webActions.waitUntilElementVisible(role,name);
  }

}

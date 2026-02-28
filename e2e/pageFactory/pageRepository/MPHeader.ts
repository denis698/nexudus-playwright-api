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
 
  async accessMarketing(): Promise<void> {
    await webActions.clickElement(MPHeaderObjects.PROFILE_ICON);
  }
  
  async accessDashboard(): Promise<void> {
    await webActions.clickElementByRole("button", "avatar");
    await webActions.clickElementByRole('link', 'Dashboard');    
  }

  async accessInvoices(): Promise<void> {
    await webActions.clickElementByRole("button", "avatar");
    await webActions.clickElementByRole('link', 'Invoices');    
  }
  
  async accessBookings(): Promise<void> {
    await webActions.clickElementByRole("button", "avatar");
    await webActions.clickElementByExactRole('link', 'Bookings');    
  }
  
  async accessMyPlans(): Promise<void> {
    await webActions.clickElementByRole("button", "avatar");
    await webActions.clickElementByExactRole('link', 'My plan');    
  }

  async accessBuilding(): Promise<void> {
    await webActions.clickElementByRole("button", "avatar");
    await webActions.clickElementByExactRole('link', 'Building arrow-right icon');    
    await webActions.clickElementByExactRole('link', 'Availability');  
  }

  async accessAccount(): Promise<void> {
    await webActions.clickElementByRole("button", "avatar");
    await webActions.clickElementByExactRole('link', 'Account');    
  }

  async accessSettings(): Promise<void> {
    await webActions.clickElementByRole("button", "avatar");
    await webActions.clickElementByExactRole('link', 'Settings');    
  }

  async accessFAQs(): Promise<void> {
    await webActions.clickElementByRole("button", "avatar");
    await webActions.clickElementByExactRole('link', 'Help & support arrow-right icon');
    await webActions.clickElementByExactRole('link', 'FAQs');    
  }

  async accessHelpSupport(): Promise<void> {
    await webActions.clickElementByRole("button", "avatar");
    await webActions.clickElementByExactRole('link', 'Help & support arrow-right icon');
    await webActions.clickElementByExactRole('link', 'Help desk');    
  }

  async logout(): Promise<void> {
    await webActions.clickElementByRole("button", "avatar");
    await webActions.clickElementByRole('button', 'Sign out');    
  }
}

import { MPInvoicesPageObjects } from '@objects/MPInvoicesPageObjects';
import { WebActions } from '@lib/WebActions';
import type { Page } from '@playwright/test';

let webActions: WebActions;

export class MPInvoicesPage extends MPInvoicesPageObjects {
  readonly page: Page;

  constructor(page: Page) {
    super();
    this.page = page;
    webActions = new WebActions(this.page);
  }

  async verifyAt(): Promise<void> {
    await webActions.verifyPageElement(MPInvoicesPageObjects.INVOICE_MENU.replace(`/locuser`, process.env.MP_TEST_USER));
    await webActions.verifyURL(MPInvoicesPageObjects.INVOICE_PAGE_URL);
  }
 
  async accessDashboard(): Promise<void> {
    await webActions.clickElementByRole("button", "avatar");
    await webActions.clickElementByRole('link', 'Dashboard');    
  }

  async accessBookings(): Promise<void> {
    await webActions.clickElementByRole('link', 'Bookings');    
  }

  async accessVisitors(): Promise<void> {
    await webActions.clickElementByRole('link', 'Visitors');    
  }

  async accessDeliveries(): Promise<void> {
    await webActions.clickElementByRole('link', 'Deliveries');    
  }

  async accessEvents(): Promise<void> {
    await webActions.clickElementByRole('link', 'Events');    
  }

  async accessCourses(): Promise<void> {
    await webActions.clickElementByRole('link', 'Courses');    
  }

  async verifyAtBook(): Promise<void> {
    await webActions.verifyPageElement(MPInvoicesPageObjects.BOOKINGS_MENU.replace(`/locuser`, process.env.MP_TEST_USER));
    await webActions.verifyURL(MPInvoicesPageObjects.BOOKINGS_PAGE_URL);
  }

  async verifyAtVis(): Promise<void> {
    await webActions.verifyPageElement(MPInvoicesPageObjects.VISITORS_MENU.replace(`/locuser`, process.env.MP_TEST_USER));
    await webActions.verifyURL(MPInvoicesPageObjects.VISITORS_PAGE_URL);
  }

  async verifyAtDel(): Promise<void> {
    await webActions.verifyPageElement(MPInvoicesPageObjects.DELIVERIES_MENU.replace(`/locuser`, process.env.MP_TEST_USER));
    await webActions.verifyURL(MPInvoicesPageObjects.DELIVERIES_PAGE_URL);
  }

  async verifyAtEve(): Promise<void> {
    await webActions.verifyPageElement(MPInvoicesPageObjects.EVENTS_MENU.replace(`/locuser`, process.env.MP_TEST_USER));
    await webActions.verifyURL(MPInvoicesPageObjects.EVENTS_PAGE_URL);
  }

  async verifyAtCou(): Promise<void> {
    await webActions.verifyPageElement(MPInvoicesPageObjects.COURSES_MENU.replace(`/locuser`, process.env.MP_TEST_USER));
    await webActions.verifyURL(MPInvoicesPageObjects.COURSES_PAGE_URL);
  }

}

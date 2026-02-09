import { MPBookingsMeetingRoomsPageObjects } from '@objects/MPBookingsMeetingRoomsPageObjects';
import { WebActions } from '@lib/WebActions';
import { type Page } from '@playwright/test';

let webActions: WebActions;

export class MPBookingsMeetingRoomsPage extends MPBookingsMeetingRoomsPageObjects {
  readonly page: Page;

  constructor(page: Page) {
    super();
    this.page = page;
    webActions = new WebActions(this.page);
  }

  async verifyAt(): Promise<void> {
    await webActions.verifyPageElement(MPBookingsMeetingRoomsPageObjects.BOOKING_FILTER);
    await webActions.verifyURL(MPBookingsMeetingRoomsPageObjects.PAGE_URL);
    await webActions.verifyTitle(MPBookingsMeetingRoomsPageObjects.PAGE_TITLE);
  }

  async isCalendarViewVisibleWithName(name:string): Promise<boolean> {
    return await webActions.isVisibleByRole('button', name);
  }

}

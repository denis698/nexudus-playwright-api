import { expect } from "@playwright/test";
import test from '@lib/BaseTest';

test.beforeEach(async ({ mpMarketingPage, mpLoginPage }) => {
  // Given the user is not logged in
  // When the user navigates to the MP Marketing website
  await mpMarketingPage.navigateTo(process.env.MP_TEST_MARKETING_PAGE_URL);
  // And the user entered the MP_LOCATION_PASSWORD
  await mpLoginPage.login(String(process.env.MP_LOCATION_PASSWORD));
  await mpMarketingPage.verifyAt();
});

test.describe('Navigation', () => {
  test(`@NPA_001 @smoke @mp.navigation - sign-in displayed for not logged in user`, async ({ mpMarketingPage, }) => {
    // Then the Sign in button should be visible after the page is loaded
    const defaultCalendarView = await mpMarketingPage.isElementVisibleWithName('Sign in');
    expect(defaultCalendarView).toBeTruthy()
  });
});

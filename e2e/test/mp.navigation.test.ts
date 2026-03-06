import test from '@lib/BaseTest';
import menuData from './testdata/mp/navigation/profile_menu.json';
import { expect } from '@playwright/test';

test.beforeEach(async ({ mpLoginPage }) => {
  await mpLoginPage.navigateTo(process.env.MP_TEST_LOGIN_PAGE_URL);
  await mpLoginPage.login(String(process.env.MP_LOCATION_PASSWORD));
});

test.describe('navigation', () => {
  test(`@NPA_01 @smoke @mp.nav - access member portal`, async ({ mpMarketingPage }) => {
    await mpMarketingPage.navigateTo(process.env.MP_TEST_MARKETING_PAGE_URL);
    await mpMarketingPage.verifyAt();
    await mpMarketingPage.isElementVisibleWithName('Sign in');
  });
});

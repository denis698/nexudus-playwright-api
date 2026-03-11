import test from '@lib/BaseTest';
import menuData from './testdata/mp/navigation/profile_menu.json';
import { expect } from '@playwright/test';

test.beforeEach(async ({ mpLoginPage }) => {
  await mpLoginPage.navigateTo(process.env.MP_TEST_MARKETING_PAGE_URL);
  await mpLoginPage.login(String(process.env.MP_LOCATION_PASSWORD)); 
});

test.describe('navigation->menus', () => {
  test(`@NHA_01 @smoke @mp.nav.menu - bookings menu`, async ({mpHeader,mpMarketingPage}) => {
    await mpMarketingPage.verifyAt();   
    const bookingMenuOptions  = ["Day offices",
                                 "Event spaces",
                                 "Hot desks",
                                 "Kitchens",
                                 "Labs",
                                 "Meeting rooms",
                                 "Other",
                                 "Hot desks",
                                 "Kitchens",
                                 "Labs",
                                 "Meeting rooms",
                                 "Other",
                                 "Storage units",
                                 "Treatment rooms"];    

    await mpHeader.accessMenuWithName('Bookings');
    for (var option of bookingMenuOptions) {
      console.log("booking menu option: " + option);
      const isOptionVisible = await mpHeader.isElementVisibleByFirstRole('link', option);
      expect(isOptionVisible).toBeTruthy();
    }
  });

  test(`@NHA_02 @smoke @mp.nav.menu - store manu`, async ({mpHeader,mpMarketingPage }) => {
    await mpMarketingPage.verifyAt();   
    const storeMenuOptions  = ["Booking features",
                               "Booking products",
                               "Credit bundles",
                               "Day passes",
                               "Other products",
                               "Stationary"];    

    await mpHeader.accessMenuWithName('Store');
    for (var option of storeMenuOptions) {
      console.log("store menu option: " + option);
      const isOptionVisible = await mpHeader.isElementVisibleByFirstRole('link', option);
      expect(isOptionVisible).toBeTruthy();
    }
  });

  test(`@NHA_03 @smoke @mp.nav.menu - membeships menu`, async ({mpHeader,mpMarketingPage }) => {
    await mpMarketingPage.verifyAt();   
    const membershipsMenuOptions  = ["Dedicated desks",
                                     "Full-time plans",
                                     "Hot desks",
                                     "Other Plans",
                                     "Part-time dedicated desks",
                                     "Part-time hot-desks",
                                     "Part-time plans",
                                     "Part-time private offices",
                                     "Private offices",
                                     "Storage",
                                     "Virtual offices",
                                     "Virtual plans"];    

    await mpHeader.accessMenuWithName('Memberships');
    for (var option of membershipsMenuOptions) {
      console.log("memberships menu option: " + option);
      const isOptionVisible = await mpHeader.isElementVisibleByFirstRole('link', option);
      expect(isOptionVisible).toBeTruthy();
    }
  });

  test(`@NHA_04 @smoke @mp.nav.menu - community menu`, async ({mpHeader,mpMarketingPage }) => {
    await mpMarketingPage.verifyAt();   
    const communityMenuOptions  = ["Perks",
                                   "Discussion boards",
                                   "Directory",
                                   "Articles",
                                   "Events",
                                   "Courses"];    

    await mpHeader.accessMenuWithName('Community');
    for (var option of communityMenuOptions) {
      console.log("community menu option: " + option);
      const isOptionVisible = await mpHeader.isElementVisibleByFirstRole('link', option);
      expect(isOptionVisible).toBeTruthy();
    }
  });

});

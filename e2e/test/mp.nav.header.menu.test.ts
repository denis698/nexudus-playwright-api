import test from '@lib/BaseTest';
import { expect } from '@playwright/test';

test.beforeEach(async ({ mpLoginPage }) => {
  await mpLoginPage.navigateTo(process.env.MP_TEST_MARKETING_PAGE_URL);
  await mpLoginPage.login(String(process.env.MP_LOCATION_PASSWORD)); 
});

test.describe('navigation->menus', () => {
  test(`@NHA_01 @smoke @mp.header.menu - bookings`, async ({mpHeader,mpMarketingPage}) => {
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

    await mpHeader.clickOnMenuWithName('Bookings');
    for (var option of bookingMenuOptions) {
      const isOptionVisible = await mpHeader.isElementVisibleByFirstRole('link', option);
      expect(isOptionVisible).toBeTruthy();
    }
  });

  test(`@NHA_02 @smoke @mp.header.menu - store`, async ({mpHeader,mpMarketingPage }) => {
    await mpMarketingPage.verifyAt(); 
    const storeMenuOptions  =   ["Booking features",
                                 "Booking products",
                                 "Credit bundles",
                                 "Day passes",
                                 "Other products",
                                 "Stationary"];
    
    await mpHeader.delayInTest(5000); //temp code
    //await mpHeader.focusOnMenuWithName('Store');
    await mpHeader.clickOnMenuWithName('Store');
    await mpHeader.pressEnter();
    //await mpHeader.delayInTest(2000); //temp code - adding a delay for menu to expand

    for (var option of storeMenuOptions) {
      const isOptionVisible = await mpHeader.isElementVisibleByFirstRole('link', option);
      expect(isOptionVisible).toBeTruthy();
    }
  });

  test(`@NHA_03 @smoke @mp.header.menu - membeships`, async ({mpHeader,mpMarketingPage }) => {
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

    await mpHeader.clickOnMenuWithName('Memberships');
    for (var option of membershipsMenuOptions) {
      const isOptionVisible = await mpHeader.isElementVisibleByFirstRole('link', option);
      expect(isOptionVisible).toBeTruthy();
    }
  });

  test(`@NHA_04 @smoke @mp.header.menu - community`, async ({mpHeader,mpMarketingPage }) => {
    await mpMarketingPage.verifyAt();   
    const communityMenuOptions  = ["Perks",
                                   "Discussion boards",
                                   "Directory",
                                   "Articles",
                                   "Events",
                                   "Courses"];    

    await mpHeader.clickOnMenuWithName('Community');
    for (var option of communityMenuOptions) {
      const isOptionVisible = await mpHeader.isElementVisibleByFirstRole('link', option);
      expect(isOptionVisible).toBeTruthy();
    }
  });

});

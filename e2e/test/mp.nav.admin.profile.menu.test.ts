import test from '@lib/BaseTest';
import menuData from './testdata/mp/navigation/profile_menu.json';
import { expect } from '@playwright/test';

test.beforeEach(async ({mpLoginPage,mpDashboardPage}) => {
  await mpLoginPage.navigateTo(process.env.MP_TEST_LOGIN_PAGE_URL);
  await mpLoginPage.login(String(process.env.MP_LOCATION_PASSWORD));
  await mpLoginPage.loginAs(String(process.env.MP_TEST_ADMIN_USERNAME), String(process.env.MP_TEST_ADMIN_PASSWORD));
  await mpDashboardPage.verifyAt();  
});

test.describe('navigation->user-profile-menu', () => {
  test(`@NPA_02 @smoke @mp.nav - [admin] check user-profile-menu->page editor->admin->switch account`, async ({mpLoginPage,mpDashboardPage}) => {
    const menuOptions = await mpDashboardPage.getProfileMenu();
    expect(menuOptions).toContain("Admin");
    expect(menuOptions).toContain("Page Editor");
    expect(menuOptions).toContain("Switch account");
  }); 
});

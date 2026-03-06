import test from '@lib/BaseTest';
import menuData from './testdata/mp/navigation/profile_menu.json';
import { expect } from '@playwright/test';

test.beforeEach(async ({ mpLoginPage, mpDashboardPage }) => {
  await mpLoginPage.navigateTo(process.env.MP_TEST_LOGIN_PAGE_URL);
  await mpLoginPage.login(String(process.env.MP_LOCATION_PASSWORD));
  await mpLoginPage.loginAs(String(process.env.MP_TEST_USERNAME), String(process.env.MP_TEST_PASSWORD));
  await mpDashboardPage.verifyAt();  
});

test.describe('navigation->user-profile-menu', () => {
  test(`@NPA_02 @smoke @mp.nav - user-profile-menu`, async ({mpDashboardPage}) => {
    const menuOptions = await mpDashboardPage.getProfileMenu();
    expect(menuOptions).toContain(menuData.dashboard_menu);
    expect(menuOptions).not.toContain("Switch account");
    expect(menuOptions).not.toContain("Page Editor");
    expect(menuOptions).not.toContain("Switch account");
  });

  test(`@NPA_03 @smoke @mp.nav - access dashboard`, async ({mpHeader,mpDashboardPage }) => {
    await mpHeader.accessDashboard();
    await mpDashboardPage.verifyAt();   
  });

  test(`@NPA_04 @smoke @mp.nav - access invoices`, async ({mpHeader,mpInvoicesPage }) => {
    await mpHeader.accessInvoices();
    await mpInvoicesPage.verifyAt();    
  });

  test(`@NPA_05 @smoke @mp.nav - access bookings`, async ({mpHeader,mpBookingsPage }) => {
    await mpHeader.accessBookings();
    await mpBookingsPage.verifyAt();
  });

  test(`@NPA_06 @smoke @mp.nav - access my plans`, async ({mpHeader,mpMyPlansPage }) => {
    await mpHeader.accessMyPlans();
    await mpMyPlansPage.verifyAt();
  });

  test(`@NPA_07 @smoke @mp.nav - access help & support`, async ({mpHeader,mpHelpSupportPage }) => {
    await mpHeader.accessFAQs();
    await mpHelpSupportPage.verifyAtFAQs();
    await mpHelpSupportPage.accessHelpDesk();
    await mpHelpSupportPage.verifyAtHelp();
  });

  test(`@NPA_08 @smoke @mp.nav - access my activity`, async ({mpHeader,mpInvoicesPage }) => {
    await mpHeader.accessMyActivityInvoices()
    await mpInvoicesPage.verifyAt();
    await mpInvoicesPage.accessBookings();
    await mpInvoicesPage.verifyAtBook();
    await mpInvoicesPage.accessVisitors();
    await mpInvoicesPage.verifyAtVis();
    await mpInvoicesPage.accessDeliveries();
    await mpInvoicesPage.verifyAtDel();
    await mpInvoicesPage.accessEvents();
    await mpInvoicesPage.verifyAtEve();
    await mpInvoicesPage.accessCourses();
    await mpInvoicesPage.verifyAtCou();
  });

  test(`@NPA_09 @smoke @mp.nav - access building`, async ({mpHeader,mpBuildingPage }) => {
    await mpHeader.accessBuilding();
    await mpBuildingPage.verifyAtAva();
    await mpBuildingPage.accessEnvironment();
    await mpBuildingPage.verifyAtEnv();
  });

  test(`@NPA_10 @smoke @mp.nav - access account`, async ({mpHeader,mpAccountPage }) => {
    await mpHeader.accessAccount();
    await mpAccountPage.verifyAtAcc();
    await mpAccountPage.accessBillingDetails();
    await mpAccountPage.verifyAtBdt();
    await mpAccountPage.accessPlanBenefits();
    await mpAccountPage.verifyAtPbn();
    await mpAccountPage.accessDirectoryProfile();
    await mpAccountPage.verifyAtDPf();
    await mpAccountPage.accessIdentityChecks();
    await mpAccountPage.verifyAtId();
    await mpAccountPage.accessFiles();
    await mpAccountPage.verifyAtFil();
    await mpAccountPage.accessSettings();
    await mpAccountPage.verifyAtSet();
  });

  test(`@NPA_11 @smoke @mp.nav - access settings`, async ({mpHeader,mpSettingsPage }) => {
    await mpHeader.accessSettings();
    await mpSettingsPage.verifyAt();
  });

  test(`@NPA_12 @smoke @mp.nav - sign out`, async ({mpHeader, mpMarketingPage}) => {
    await mpHeader.logout();
    await mpMarketingPage.verifyAt();
    await mpMarketingPage.isElementVisibleWithName('Sign in');
  });

  test(`@NPA_13 @smoke @mp.nav - access marketing`, async ({mpHeader,mpMarketingPage }) => {
    await mpHeader.accessMarketing();
    await mpMarketingPage.verifyAt();
  });
});

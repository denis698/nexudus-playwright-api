export class MPAccountPageObjects {
  protected static PAGE_TITLE = `Your profile - Denis Gershengoren [London Office]`;
  
  protected static ACCOUNT_PAGE_URL = `/user/profile/personal`;
  protected static ACCOUNT_MENU = `.section-menu [href="/locuser/user/profile/personal"]`;
  
  protected static BILLING_PAGE_URL = `/user/profile/billing`;
  protected static BILLING_MENU = `.section-menu [href="/locuser/user/profile/billing"]`;
  
  protected static PLANS_PAGE_URL = `/user/plans`;
  protected static PLANS_MENU = `.section-menu [href="/locuser/user/plans"]`;
  
  protected static DIRECTORY_PAGE_URL = `/user/profile/directory`;
  protected static DIRECTORY_MENU = `.section-menu [href="/locuser/user/profile/directory"]`;
  
  protected static IENTITY_PAGE_URL = `/user/identity-checks`;
  protected static IDENTITY_MENU = `.section-menu [href="/locuser/user/identity-checks"]`;
  
  protected static FILES_PAGE_URL = `/user/files`;
  protected static FILES_MENU = `.section-menu [href="/locuser/user/files"]`;
  
  //TEMP SELECTOR - we need to add another 4 tabs
  protected static SETTINGS_PAGE_URL = `/user/profile/settings/bookings`;
  protected static SETTINGS_MENU = `.section-menu [href="/locuser/user/profile/settings"]`;
}

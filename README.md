## To Install and run Playwright Tests ⚡
1. - run: npm install    
   - run: npm install --save dotenv
   - run: npm i -D monocart-reporter
   - run: npx playwright install --with-deps
   - run: npm install -D @playwright/test@latest
2. - create a file ".env" with content by the template:
#AP
NEXUDUS_ROOT_DOMAIN='https://spaces.nexudus.com/'
AP_TEST_BASE_URL='https://dashboard-staging.nexudus.com/'
AP_TEST_USERNAME=''
AP_TEST_PASSWORD=''

MP_TEST_LOCATION_1=''
AT_TEST_LOCATION_2=''
AT_TEST_LOCATION_3=''
#MP
MP_TEST_MARKETING_PAGE_URL=''
MP_TEST_LOGIN_PAGE_URL=''
MP_TEST_USERNAME=''
MP_TEST_PASSWORD=''
MP_TEST_ADMIN_USERNAME=''
MP_TEST_ADMIN_PASSWORD=''
MP_LOCATION_PASSWORD=''

#API
API_TEST_SPACES_URL='https://spaces.nexudus.com/api/token'
API_TEST_SPACES_USERS_URL='https://spaces.nexudus.com/api/sys/users?page=1&size=25'
API_TEST_SPACES_USER_URL='https://spaces.nexudus.com/api/sys/users/1417844674'
API_TEST_SPACES_BUS_SETTINGS_URL='https://spaces.nexudus.com/api/sys/businesssettings?page=1&size=1000'
API_TEST_SPACES_BUS_SETTING_URL='https://spaces.nexudus.com/api/sys/businesssettings'
API_TEST_BASE_URL='https://dashboard.nexudus.com/'
API_TEST_USERNAME=''
API_TEST_PASSWORD=''

3. run tests: npm test:chrome
    - i.e. npx playwright test -g"@smoke" --project="chrome"

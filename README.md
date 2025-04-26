# Playwright Test Suite

This repository contains automated tests for web applications using [Playwright](https://playwright.dev/).



### Key Files and Directories

- **`playwright.config.ts`**: Configuration file for Playwright tests.
- **`tests/`**: Contains your custom test files.
- **`tests-examples/`**: Example test files provided for reference.
- **`playwright-report/`**: Stores HTML reports generated after test runs.
- **`test-results/`**: Stores test artifacts like screenshots and traces.

## Getting Started

**Application Under Test**: [OrangeHRM Demo Website](https://opensource-demo.orangehrmlive.com)

### Prerequisites

- Node.js (v16 or higher)
- npm 

### Test cases
### Login-001: Log in Successfully

```bash
1. Navigate to the OrangeHRM website
2. Verify that the login page elements
3. Log in with valid credentials, enter Username = Admin and Password = admin123, then click on the Login button
4. Verify that the management dashboard page is displayed
5. Verify that the "Recruitment" left menu is visible
6. Open the user profile menu and select "Logout"
```

### Login-002: Log in Unsuccessfully

```bash
1. Navigate to the OrangeHRM website
2. Verify that the login page displays with Username and Password fields
3. Click on the Login button without entering any credentials
4. Verify that a "Required" error is shown for both username and password
5. Enter Username = Admin1 and Password = admin123, then click on the Login button
6. Verify that an "Invalid credentials" message is displayed
7. Enter Username = Admin and Password = admin123, then click on the Login button
8. Verify that the management page is displayed
9. Open the user profile menu and select "Logout"
```
### Run test

1. Run all tests
   ```bash
    npx playwright test
   ```
2. Run a specific test file:
   ```bash
    npx playwright test tests/example.spec.ts
   ```
3. Run tests in headed mode:
   ```bash
    npx playwright test --headed
   ```
4. Generate an HTML report:
   ```bash
    npx playwright show-report
   ```

### Debugging Tests
   ```bash
    npx playwright test --debug
   ```

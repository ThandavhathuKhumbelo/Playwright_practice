import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://quality-engineering-labs.vercel.app/');
  await page.getByLabel('Main navigation').getByRole('link', { name: 'Customers' }).click();
  await page.getByTestId('view-cust-9').click();
  await page.getByTestId('close-cust-modal').click();
  await expect(page.getByTestId('cust-modal')).not.toBeVisible();
});
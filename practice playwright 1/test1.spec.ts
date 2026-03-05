// testing  if a user can add transaction
import { test, expect } from '@playwright/test';

test('adding transaction', async ({ page }) => {
  await page.goto('https://quality-engineering-labs.vercel.app/');
  await page.getByLabel('Main navigation').getByRole('link', { name: 'Transactions' }).click();
  await page.getByTestId('txn-input').click();
  await page.getByTestId('txn-input').fill('clothing');
  await page.getByTestId('txn-amount').click();
  await page.getByTestId('txn-amount').fill('200');
  await page.getByTestId('txn-type').selectOption('expense');
  await page.getByTestId('add-txn-btn').click();
  await expect(page.getByText('200')).toBeVisible();
});
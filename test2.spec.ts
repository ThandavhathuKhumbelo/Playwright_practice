import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://quality-engineering-labs.vercel.app/');
  await page.getByRole('link', { name: 'Product Catalog' }).click();
  await page.getByTestId('product-card-5').getByText('R100.0020 in stock').click();
  await page.getByRole('button', { name: 'Add to cart' }).click();
 await expect(page.getByTestId('cart-item-5')).toContainText('R100.00');
});


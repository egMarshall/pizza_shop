import { setupWorker } from 'msw/browser';
import { env } from '@/env';
import { signInMock } from './sign-in-mock';
import { registerRestaurantMock } from './register-restaurant-mock';
import { getDayOrdersAmountMock } from './get-day-orders-amount-mock';
import { getMonthOrdersAmountMock } from './get-month-orders-amount-mock';
import { getMonthCanceledOrdersAmountMock } from './get-month-canceled-orders-amount-mock';
import { getMonthRevenueAmountMock } from './get-month-revenue-mock';
import { getDailyRevenueInPeriodMock } from './get-daily-revenue-in-period-mock';
import { getPopularProductsMock } from './get-popular-products-mock';

export const worker = setupWorker(
  signInMock,
  registerRestaurantMock,
  getDayOrdersAmountMock,
  getMonthOrdersAmountMock,
  getMonthCanceledOrdersAmountMock,
  getMonthRevenueAmountMock,
  getDailyRevenueInPeriodMock,
  getPopularProductsMock,
);

export async function enableMocks() {
  if (env.MODE !== 'test') {
    return;
  }

  await worker.start();
}

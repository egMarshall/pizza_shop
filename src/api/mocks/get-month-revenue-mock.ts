import { http, HttpResponse } from 'msw';
import { GetMonthRevenueAmountResponse } from '../get-month-revenue';

export const getMonthRevenueAmountMock = http.get<never, never, GetMonthRevenueAmountResponse>(
  '/metrics/month-receipt',
  async () => {
    return HttpResponse.json({
      receipt: 2000,
      diffFromLastMonth: -30,
    });
  },
);

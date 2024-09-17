import { http, HttpResponse } from 'msw';
import { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period';

export const getDailyRevenueInPeriodMock = http.get<never, never, GetDailyRevenueInPeriodResponse>(
  '/metrics/daily-receipt-in-period',
  async () => {
    return HttpResponse.json([
      {
        date: '2021-08-01',
        receipt: 1000,
      },
      {
        date: '2021-08-02',
        receipt: 2000,
      },
      {
        date: '2021-08-03',
        receipt: 3000,
      },
    ]);
  },
);

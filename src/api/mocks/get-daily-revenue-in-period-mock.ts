import { http, HttpResponse } from 'msw';
import { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period';

export const getDailyRevenueInPeriodMock = http.get<never, never, GetDailyRevenueInPeriodResponse>(
  '/metrics/daily-receipt-in-period',
  async () => {
    return HttpResponse.json([
      {
        date: '01/08/2024',
        receipt: 1000,
      },
      {
        date: '02/08/2024',
        receipt: 2000,
      },
      {
        date: '03/08/2024',
        receipt: 3000,
      },
      {
        date: '04/08/2024',
        receipt: 7000,
      },
      {
        date: '05/08/2024',
        receipt: 2000,
      },
      {
        date: '06/08/2024',
        receipt: 4000,
      },
      {
        date: '07/08/2024',
        receipt: 3000,
      },
    ]);
  },
);

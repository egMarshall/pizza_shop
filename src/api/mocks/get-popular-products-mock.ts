import { http, HttpResponse } from 'msw';
import { GetPopularProductsResponse } from '../get-popular-products';

export const getPopularProductsMock = http.get<never, never, GetPopularProductsResponse>(
  '/metrics/popular-products',
  async () => {
    return HttpResponse.json([
      {
        product: 'Product 1',
        amount: 100,
      },
      {
        product: 'Product 2',
        amount: 200,
      },
      {
        product: 'Product 3',
        amount: 300,
      },
      {
        product: 'Product 4',
        amount: 400,
      },
      {
        product: 'Product 5',
        amount: 500,
      },
    ]);
  },
);

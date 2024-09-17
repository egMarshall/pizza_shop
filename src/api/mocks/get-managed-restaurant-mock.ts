import { http, HttpResponse } from 'msw';

import { GetManagedRestaurantResponse } from '../get-managed-restaurant';

export const getManagedRestaurantMock = http.get<never, never, GetManagedRestaurantResponse>(
  '/managed-restaurant',
  () => {
    return HttpResponse.json({
      createdAt: new Date(),
      description: 'A description of the restaurant',
      id: '12345',
      name: "John Doe's Restaurant",
      updatedAt: null,
      managerId: '12345',
    });
  },
);

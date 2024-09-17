import { http, HttpResponse } from 'msw';
import { RegisterRestaurantBody } from '../register-restaurant';

export const registerRestaurantMock = http.post<never, RegisterRestaurantBody>('/restaurants', async ({ request }) => {
  const { restaurantName, managerName, email, phone } = await request.json();

  if (restaurantName === 'Pizza Shop') {
    return new HttpResponse(null, {
      status: 201,
    });
  }

  if (managerName === 'John Doe') {
    return new HttpResponse(null, {
      status: 201,
    });
  }

  if (email === 'johndoe@email.com') {
    return new HttpResponse(null, {
      status: 201,
    });
  }

  if (phone === '1234567890') {
    return new HttpResponse(null, {
      status: 201,
    });
  }
  return new HttpResponse(null, { status: 400 });
});

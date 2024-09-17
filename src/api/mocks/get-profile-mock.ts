import { http, HttpResponse } from 'msw';

import { GetProfileResponse } from '../get-profile';

export const getProfileMock = http.get<never, never, GetProfileResponse>('/me', () => {
  return HttpResponse.json({
    createdAt: new Date(),
    email: 'johndoe@email.com',
    id: '12345',
    name: 'John Doe',
    phone: '1234567890',
    role: 'manager',
    updatedAt: null,
  });
});

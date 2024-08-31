import { api } from '@/lib/axios';

interface GetProfileResponse {
  id: string;
  email: string;
  name: string;
  phone: string | null;
  role: 'manager' | 'costumer';
  createdAt: Date | null;
  updatedAt: Date | null;
}

export async function getProfile() {
  const response = await api.get<GetProfileResponse>('/me');

  return response.data;
}

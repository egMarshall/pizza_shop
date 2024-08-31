import { api } from '@/lib/axios';

interface UpdateProfileBody {
  name: string;
  description: string | null;
}

export async function updateUserProfile({ description, name }: UpdateProfileBody) {
  await api.put('/profile', { name, description });
}

import { api } from '@/lib/axios';

export interface DeleteOrderQuery {
  orderId: string;
}

export async function cancelOrder({ orderId }: DeleteOrderQuery) {
  await api.patch(`/orders/${orderId}/cancel`);
}

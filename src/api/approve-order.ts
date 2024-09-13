import { api } from '@/lib/axios';

export interface ApproveOrderQuery {
  orderId: string;
}

export async function approvelOrder({ orderId }: ApproveOrderQuery) {
  await api.patch(`/orders/${orderId}/approve`);
}

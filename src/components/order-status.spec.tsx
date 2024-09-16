import { render } from '@testing-library/react';
import { OrderStatus } from './order-status';

describe('Order Status', () => {
  it('Should display the right text based on order status Pending', () => {
    const wrapper = render(<OrderStatus status="pending" />);
    const statusText = wrapper.getByText('Pendente');
    const badgeElement = wrapper.getByTestId('badge');
    expect(badgeElement).toHaveClass('bg-slate-400');
    expect(statusText).toBeInTheDocument();
  });

  it('Should display the right text based on order status Canceled', () => {
    const wrapper = render(<OrderStatus status="canceled" />);
    const statusText = wrapper.getByText('Cancelado');
    const badgeElement = wrapper.getByTestId('badge');
    expect(badgeElement).toHaveClass('bg-rose-500');
    expect(statusText).toBeInTheDocument();
  });

  it('Should display the right text based on order status Processing', () => {
    const wrapper = render(<OrderStatus status="processing" />);
    const statusText = wrapper.getByText('Em Preparo');
    const badgeElement = wrapper.getByTestId('badge');
    expect(badgeElement).toHaveClass('bg-yellow-500');
    expect(statusText).toBeInTheDocument();
  });

  it('Should display the right text based on order status Delivering', () => {
    const wrapper = render(<OrderStatus status="delivering" />);
    const statusText = wrapper.getByText('Entregando');
    const badgeElement = wrapper.getByTestId('badge');
    expect(badgeElement).toHaveClass('bg-yellow-500');
    expect(statusText).toBeInTheDocument();
  });

  it('Should display the right text based on order status Delivered', () => {
    const wrapper = render(<OrderStatus status="delivered" />);
    const statusText = wrapper.getByText('Entregue');
    const badgeElement = wrapper.getByTestId('badge');
    expect(badgeElement).toHaveClass('bg-emerald-500');
    expect(statusText).toBeInTheDocument();
  });
});

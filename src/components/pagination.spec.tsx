import { render } from '@testing-library/react';
import { Pagination } from './pagination';
import userEvent from '@testing-library/user-event';

const onPageChangeCallback = vi.fn();

describe('Pagination', () => {
  beforeEach(() => {
    onPageChangeCallback.mockClear();
  });

  it('Should display the right amount of pages and results', () => {
    const wrapper = render(
      <Pagination pageIndex={0} totalCount={200} perPage={10} onPageChange={onPageChangeCallback} />,
    );

    expect(wrapper.getByText('Página 1 de 20')).toBeInTheDocument();
    expect(wrapper.getByText('Total de 200 items(s)')).toBeInTheDocument();
  });

  it('Should be able to navigate to the next page', async () => {
    const user = userEvent.setup();

    const wrapper = render(
      <Pagination pageIndex={0} totalCount={200} perPage={10} onPageChange={onPageChangeCallback} />,
    );

    const nextPageButton = wrapper.getByRole('button', {
      name: 'Próxima Página',
    });

    await user.click(nextPageButton);

    expect(onPageChangeCallback).toHaveBeenCalledWith(1);
  });

  it('Should be able to navigate to the previous page', async () => {
    const user = userEvent.setup();

    const wrapper = render(
      <Pagination pageIndex={1} totalCount={200} perPage={10} onPageChange={onPageChangeCallback} />,
    );

    const previousPageButton = wrapper.getByRole('button', {
      name: 'Página Anterior',
    });

    await user.click(previousPageButton);

    expect(onPageChangeCallback).toHaveBeenCalledWith(0);
  });

  it('Should be able to navigate to the first page', async () => {
    const user = userEvent.setup();

    const wrapper = render(
      <Pagination pageIndex={5} totalCount={200} perPage={10} onPageChange={onPageChangeCallback} />,
    );

    const firstPageButton = wrapper.getByRole('button', {
      name: 'Primeira Página',
    });

    await user.click(firstPageButton);

    expect(onPageChangeCallback).toHaveBeenCalledWith(0);
  });

  it('Should be able to navigate to the last page', async () => {
    const user = userEvent.setup();

    const wrapper = render(
      <Pagination pageIndex={0} totalCount={200} perPage={10} onPageChange={onPageChangeCallback} />,
    );

    const lastPageButton = wrapper.getByRole('button', {
      name: 'Última Página',
    });

    await user.click(lastPageButton);

    expect(onPageChangeCallback).toHaveBeenCalledWith(19);
  });
});

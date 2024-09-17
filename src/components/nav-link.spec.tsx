import { render } from '@testing-library/react';
import { NavLink } from './nav-link';
import { MemoryRouter } from 'react-router-dom';

describe('NavLink', () => {
  it('Should highlight the active page link', () => {
    const wrapper = render(
      <>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/home">Home</NavLink>
      </>,
      {
        wrapper: ({ children }) => {
          return <MemoryRouter initialEntries={['/about']}>{children}</MemoryRouter>;
        },
      },
    );

    expect(wrapper.getByText('About')).toHaveAttribute('data-current', 'true');
    expect(wrapper.getByText('Home')).toHaveAttribute('data-current', 'false');
  });
});

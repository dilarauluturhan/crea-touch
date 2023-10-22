import { render, screen } from '@testing-library/react';
import User from './components/user/User';

describe('User component test', () => {
  test('Should render user component text Login', () => {
    render(<User />);
    const element = screen.getByText('Login');
    expect(element).toBeInTheDocument();
  })

  test('Should render user component text Signup', () => {
    render(<User />);
    const element = screen.getByText('Sign up');
    expect(element).toBeInTheDocument();
  })
})

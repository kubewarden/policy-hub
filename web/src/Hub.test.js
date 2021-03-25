import { render, screen } from '@testing-library/react';
import Hub from './Hub';

test('renders Policy Hub link', () => {
  render(<Hub />);
  const linkElement = screen.getByText(/Policy Hub/i);
  expect(linkElement).toBeInTheDocument();
});

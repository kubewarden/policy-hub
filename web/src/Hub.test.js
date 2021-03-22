import { render, screen } from '@testing-library/react';
import Hub from './Hub';

test('renders learn react link', () => {
  render(<Hub />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

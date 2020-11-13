/* eslint-disable */
import { render, screen } from '@testing-library/react';
import App from './App';

it("renders without crashing", () => {
  shallow(<App />);
});

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Call Dad/i);
  expect(linkElement).toBeInTheDocument();
});

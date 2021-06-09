import { render, screen } from '@testing-library/react';
import App from './App';

test('renders calculator heading', () => {
  render(<App />);
  const calculatorElement = screen.getByText(/CALCULATOR/i);
  expect(calculatorElement).toBeInTheDocument();
});

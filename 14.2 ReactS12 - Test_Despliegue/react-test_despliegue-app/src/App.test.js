import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('search the page title (h1)', () => {
    render(<App />);
    const title = screen.getByText('Prueba de testing');
    expect(title).toBeInTheDocument();
  });

  test('search notes title', () => {
    render(<App />);
    const title = screen.getByText('Notes:');
    expect(title).toBeInTheDocument();
  });

  // test can be called IT
  it('search the togglable title', () => {
    render(<App />);
    const title = screen.getByText('Togglable:');
    expect(title).toBeInTheDocument();
  });
});
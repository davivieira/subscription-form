import { screen, fireEvent } from '@testing-library/react';
import NavBar from './NavBar';
import { renderWithWrappers } from '../../utils';

describe('NavBar', () => {
  beforeEach(() => {
    // Mock the window location object
    Object.defineProperty(window, 'location', {
      value: {
        pathname: '/',
        reload: jest.fn(),
      },
      writable: true,
    });
  });

  it('should render correctly', () => {
    renderWithWrappers(<NavBar />);

    expect(screen.getByText('Subscription Form (React + TypeScript + Vite)')).toBeInTheDocument();
  });

  it('should reload the page when clicking the title on the home page', () => {
    const reloadMock = jest.fn();
    window.location.reload = reloadMock;

    renderWithWrappers(<NavBar />);

    const title = screen.getByText('Subscription Form (React + TypeScript + Vite)');
    fireEvent.click(title);

    expect(reloadMock).toHaveBeenCalled();
  });

  it('should not reload the page when clicking the title on a different page', () => {
    // Change pathname to simulate a different page
    Object.defineProperty(window, 'location', {
      value: {
        pathname: '/other',
        reload: jest.fn(),
      },
      writable: true,
    });

    const reloadMock = jest.fn();
    window.location.reload = reloadMock;

    renderWithWrappers(<NavBar />);

    const title = screen.getByText('Subscription Form (React + TypeScript + Vite)');
    fireEvent.click(title);

    expect(reloadMock).not.toHaveBeenCalled();
  });
});

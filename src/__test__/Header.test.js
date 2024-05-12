import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Components/Header';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Header Component', () => {
  test('renders header with correct title and description', () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    const titleElement = screen.getByText(/Little Lemon/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders reserve table button with correct text and link', () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    const reserveButton = screen.getByRole('button', { name: /Reserve Table/i });
    expect(reserveButton).toBeInTheDocument();
    expect(reserveButton.closest('a')).toHaveAttribute('href', '/reservation');
  });

  test('renders hero image with correct alt text', () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    const heroImage = screen.getByAltText(/Hero img/i);
    expect(heroImage).toBeInTheDocument();
  });
});
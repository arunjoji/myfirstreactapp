import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Reservation from '../Components/Reservation';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Reservation Component', () => {
  test('renders reservation form with input fields and labels', () => {
    render(
      <Router>
        <Reservation setRData={() => {}} />
      </Router>
    );
    const dateInput = screen.getByLabelText(/Choose Date/i);
    const timeSelect = screen.getByLabelText(/Choose Time/i);
    const guestsInput = screen.getByLabelText(/Number of Guests/i);
    const occasionSelect = screen.getByLabelText(/Occasion/i);
    const submitButton = screen.getByRole('button', { name: /Make Your Reservation/i });

    expect(dateInput).toBeInTheDocument();
    expect(timeSelect).toBeInTheDocument();
    expect(guestsInput).toBeInTheDocument();
    expect(occasionSelect).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test('handles input change correctly', () => {
    render(
      <Router>
        <Reservation setRData={() => {}} />
      </Router>
    );

    const dateInput = screen.getByLabelText(/Choose Date/i);
    const timeSelect = screen.getByLabelText(/Choose Time/i);
    const guestsInput = screen.getByLabelText(/Number of Guests/i);
    const occasionSelect = screen.getByLabelText(/Occasion/i);

    fireEvent.change(dateInput, { target: { value: '2024-05-20' } });
    fireEvent.change(timeSelect, { target: { value: '17:00' } });
    fireEvent.change(guestsInput, { target: { value: '5' } });
    fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });

    expect(dateInput.value).toBe('2024-05-20');
    expect(timeSelect.value).toBe('17:00');
    expect(guestsInput.value).toBe('5');
    expect(occasionSelect.value).toBe('Birthday');
  });
});

import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react-native';
import App from '../src/App';

describe('Registration password validation', () => {
  it('shows all password requirements including minimum length and digit', () => {
    render(<App />);

    fireEvent.changeText(screen.getByPlaceholderText('password'), 'Pass!');

    expect(screen.getByTestId('password-min-length-msg')).toHaveTextContent(
      'Must be at least 8 characters long'
    );
    expect(screen.getByTestId('password-uppercase-msg')).toHaveTextContent(
      'Must contain one uppercase letter'
    );
    expect(screen.getByTestId('password-lowercase-msg')).toHaveTextContent(
      'Must contain one lowercase letter'
    );
    expect(screen.getByTestId('password-special-msg')).toHaveTextContent(
      'Must contain one special character'
    );
    expect(screen.getByTestId('password-digit-msg')).toHaveTextContent(
      'Must contain one digit'
    );
  });

  it('rejects a password that is missing a digit', () => {
    render(<App />);

    const passwordInput = screen.getByPlaceholderText('password');

    fireEvent.changeText(passwordInput, 'Password!');
    fireEvent(passwordInput, 'blur');

    expect(
      screen.getByText(
        'Password must be at least 8 characters and include uppercase, lowercase, special character, and digit'
      )
    ).toBeVisible();
  });
});

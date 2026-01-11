import * as React from 'react';
import { render, screen } from '@testing-library/react-native';

import App from '../src/App';

it('renders correctly', () => {
  render(<App />);
  expect(screen.getByText('Email')).toBeVisible()
});

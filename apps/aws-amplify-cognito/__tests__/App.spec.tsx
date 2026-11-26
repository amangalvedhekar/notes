import * as React from 'react';
import { render, screen } from '@testing-library/react-native';

import App from '../src/App';

it('renders correctly', async () => {
  render(<App />);
  expect(await screen.findByText('Email')).toBeVisible();
});

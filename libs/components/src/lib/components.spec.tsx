import React from 'react';
import { render } from '@testing-library/react-native';

import Components from './components';

describe('Components', () => {
  it('should render successfully', () => {
    const { root } = render(<Components />);
    expect(root).toBeTruthy();
  });
});

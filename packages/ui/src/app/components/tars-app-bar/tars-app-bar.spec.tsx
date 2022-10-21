import { render } from '@testing-library/react';

import TarsAppBar from './tars-app-bar';

describe('TarsAppBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TarsAppBar />);
    expect(baseElement).toBeTruthy();
  });
});

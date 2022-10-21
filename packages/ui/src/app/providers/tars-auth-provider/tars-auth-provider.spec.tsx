import { render } from '@testing-library/react';

import TarsAuthProvider from './tars-auth-provider';

describe('TarsAuthProvider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TarsAuthProvider />);
    expect(baseElement).toBeTruthy();
  });
});

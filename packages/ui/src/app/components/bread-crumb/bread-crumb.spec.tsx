import { render } from '@testing-library/react';

import BreadCrumb from './bread-crumb';

describe('BreadCrumb', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BreadCrumb />);
    expect(baseElement).toBeTruthy();
  });
});

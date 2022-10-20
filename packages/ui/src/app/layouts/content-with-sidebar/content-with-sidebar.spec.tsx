import { render } from '@testing-library/react';

import ContentWithSidebar from './content-with-sidebar';

describe('ContentWithSidebar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ContentWithSidebar />);
    expect(baseElement).toBeTruthy();
  });
});

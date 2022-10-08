import * as React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Elevated, { ElevationHeight } from './index';

const setup = (Component: React.ReactElement) => render(Component);

afterEach(cleanup);

const elevations: ElevationHeight[] = [0, 1, 2, 3, 4];

test.each(elevations)('it works with elevations', (elevation) => {
    const { container } = setup(
        <Elevated elevation={elevation}>Hello world</Elevated>
    );
    expect(container.firstChild).toMatchSnapshot();
});

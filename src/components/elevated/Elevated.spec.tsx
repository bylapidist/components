import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';

import { ThemeProvider } from '../theme-provider';
import { Elevated, ElevationHeight } from './index';

const setup = (Elevated: React.ReactElement) =>
    render(<ThemeProvider>{Elevated}</ThemeProvider>);

test('it works', () => {
    const { container } = setup(<Elevated>Hello world</Elevated>);
    expect(container.firstChild).toMatchSnapshot();
});

test('it works with elevations', () => {
    const elevations: ElevationHeight[] = ['1', '2', '3', '4'];

    elevations.forEach((elevation) => {
        const { container } = setup(
            <Elevated elevation={elevation}>Hello world</Elevated>
        );
        expect(container.firstChild).toMatchSnapshot();
    });
});

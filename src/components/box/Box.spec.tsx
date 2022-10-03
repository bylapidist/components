import * as React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';

import { ThemeProvider } from '../theme-provider';
import { Box, BoxProps, Gutter } from './index';

const setup = (props?: BoxProps) =>
    render(
        <ThemeProvider>
            <Box {...props}>Hello world!</Box>
        </ThemeProvider>
    );

const gutters: Gutter[] = [0, 1, 2, 3, 4];

afterEach(cleanup);

test.each(gutters)('it works', (gutter) => {
    const { container } = setup({ gutter });
    expect(container.firstChild).toMatchSnapshot();
});

test.each(gutters)('it works with gutterX', (gutterX) => {
    const { container } = setup({ gutterX });
    expect(container.firstChild).toMatchSnapshot();
});

test.each(gutters)('it works with gutterY', (gutterY) => {
    const { container } = setup({ gutterY });
    expect(container.firstChild).toMatchSnapshot();
});

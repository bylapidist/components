import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';

import { ThemeProvider } from './index';
import { Box } from '../box';

test('it works', () => {
    const { container } = render(
        <ThemeProvider>
            <Box styles={{ margin: '2' }}>Hello world!</Box>
            <Box styles={{ margin: '3' }}>Hello world!</Box>
        </ThemeProvider>
    );
    expect(container.firstChild).toMatchSnapshot();
});

test('it works with breakpoints', () => {
    const { container } = render(
        <ThemeProvider>
            <Box
                styles={{
                    margin: '2',
                    breakpoints: { xl: { margin: '3' } }
                }}
            >
                Hello world!
            </Box>
        </ThemeProvider>
    );
    expect(container.firstChild).toMatchSnapshot();
});

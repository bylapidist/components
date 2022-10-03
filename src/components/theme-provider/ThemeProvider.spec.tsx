import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';

import { ThemeProvider } from './index';
import { Box } from '../box';

test('it works', () => {
    const { container } = render(
        <ThemeProvider>
            <Box>Hello world!</Box>
            <Box>Hello world!</Box>
        </ThemeProvider>
    );
    expect(container.firstChild).toMatchSnapshot();
});

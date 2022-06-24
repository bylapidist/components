import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';

import { Spinner } from './index';
import { ThemeProvider } from '../theme-provider';

const setup = () =>
    render(
        <ThemeProvider>
            <Spinner />
        </ThemeProvider>
    );

test('it works', () => {
    const { container } = setup();
    expect(container.firstChild).toMatchSnapshot();
});

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';

import { Text, TextPropType } from './index';
import { ThemeProvider } from '../theme-provider';

const setup = (
    props?: TextPropType,
    children: React.ReactElement = <p>Hello world!</p>
) =>
    render(
        <ThemeProvider>
            <Text {...props}>{children}</Text>
        </ThemeProvider>
    );

test('it works with defaults', () => {
    const { container } = setup();
    expect(container.firstChild).toMatchSnapshot();
});

test('it works with styles', () => {
    const { container } = setup({
        styles: {
            width: '1/2'
        }
    });
    expect(container.firstChild).toMatchSnapshot();
});

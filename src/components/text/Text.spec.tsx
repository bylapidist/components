import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';

import { Text } from './index';
import { BaseProps } from '../shared-types';
import { ThemeProvider } from '../theme-provider';

const setup = (
    props?: BaseProps,
    children: React.ReactElement = <>Hello world!</>
) =>
    render(
        <ThemeProvider>
            <Text {...props}>{children}</Text>
        </ThemeProvider>
    );

test('it works with defaults', () => {
    const { container } = setup({
        children: 'Hello world'
    });
    expect(container.firstChild).toMatchSnapshot();
});

test('it works with paragraphs', () => {
    const { container } = setup({
        children: [
            <p key="1">Hello world</p>,
            <p key="2">Hello world</p>,
            <p key="3">Hello world</p>
        ]
    });
    expect(container.firstChild).toMatchSnapshot();
});

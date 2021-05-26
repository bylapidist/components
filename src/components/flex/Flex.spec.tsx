import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';

import { Flex, FlexPropType } from './index';
import { ThemeProvider } from '../theme-provider';

const setup = (
    props?: FlexPropType,
    children: React.ReactElement = <p>Hello world!</p>
) =>
    render(
        <ThemeProvider>
            <Flex {...props}>{children}</Flex>
        </ThemeProvider>
    );

test('it works', () => {
    const { container } = setup();
    expect(container.firstChild).toMatchSnapshot();
});

test('it works with styles', () => {
    const { container } = setup({
        styles: {
            flex: '1 1 auto',
            padding: '2'
        }
    });
    expect(container.firstChild).toMatchSnapshot();
});

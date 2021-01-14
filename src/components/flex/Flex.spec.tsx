import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Flex } from './index';
import { ThemeProvider } from '../theme-provider';

test('it works', () => {
    const tree = renderer
        .create(
            <ThemeProvider>
                <Flex>
                    <p>Hello world!</p>
                </Flex>
            </ThemeProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works with styles', () => {
    const tree = renderer
        .create(
            <ThemeProvider>
                <Flex
                    styles={{
                        flex: '1 1 auto',
                        padding: '2'
                    }}
                >
                    <p>Hello world!</p>
                </Flex>
            </ThemeProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

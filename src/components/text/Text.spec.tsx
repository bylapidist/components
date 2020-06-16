import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Text } from './index';
import { ThemeProvider } from '../theme-provider';

test('it works with defaults', () => {
    const tree = renderer
        .create(
            <ThemeProvider>
                <Text>Hello world!</Text>
            </ThemeProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works with styles', () => {
    const tree = renderer
        .create(
            <ThemeProvider>
                <Text
                    styles={{
                        width: '1/2'
                    }}
                >
                    Hello world!
                </Text>
            </ThemeProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

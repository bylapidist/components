import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { ThemeProvider } from './index';
import { Box } from '../box';

test('it works', () => {
    const tree = renderer
        .create(
            <ThemeProvider>
                <Box styles={{ margin: '2' }}>Hello world!</Box>
                <Box styles={{ margin: '3' }}>Hello world!</Box>
            </ThemeProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works with breakpoints', () => {
    const tree = renderer
        .create(
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
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works with theme', () => {
    const tree = renderer
        .create(
            <ThemeProvider theme={{ sizes: { '2': '20px' } }}>
                <Box styles={{ margin: '2' }}>Hello world!</Box>
                <Box styles={{ margin: '3' }}>Hello world!</Box>
            </ThemeProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

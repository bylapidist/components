import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Box } from './index';
import { ThemeProvider } from '../theme-provider';

test('it works plain', () => {
    const tree = renderer
        .create(
            <ThemeProvider>
                <Box>
                    <p>Hello world!</p>
                </Box>
            </ThemeProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works with padding', () => {
    const tree = renderer
        .create(
            <ThemeProvider>
                <Box
                    styles={{
                        padding: '2'
                    }}
                >
                    <p>Hello world!</p>
                </Box>
            </ThemeProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works with margin', () => {
    const tree = renderer
        .create(
            <ThemeProvider>
                <Box
                    styles={{
                        margin: '2'
                    }}
                >
                    <p>Hello world!</p>
                </Box>
            </ThemeProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works with backgroundColor', () => {
    const tree = renderer
        .create(
            <ThemeProvider>
                <Box
                    styles={{
                        backgroundColor: {
                            group: 'grey',
                            shade: 'base'
                        }
                    }}
                >
                    <p>Hello world!</p>
                </Box>
            </ThemeProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works with borderRadius', () => {
    const tree = renderer
        .create(
            <ThemeProvider>
                <Box
                    styles={{
                        borderRadius: '2'
                    }}
                >
                    <p>Hello world!</p>
                </Box>
            </ThemeProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works with borderWidth', () => {
    const tree = renderer
        .create(
            <ThemeProvider>
                <Box
                    styles={{
                        borderWidth: '2'
                    }}
                >
                    <p>Hello world!</p>
                </Box>
            </ThemeProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works with borderColor', () => {
    const tree = renderer
        .create(
            <ThemeProvider>
                <Box
                    styles={{
                        borderColor: {
                            group: 'grey',
                            shade: 'base'
                        }
                    }}
                >
                    <p>Hello world!</p>
                </Box>
            </ThemeProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works with variable borderColors', () => {
    const tree = renderer
        .create(
            <ThemeProvider>
                <Box
                    styles={{
                        borderTopColor: {
                            group: 'grey',
                            shade: 'base'
                        },
                        borderRightColor: {
                            group: 'primary',
                            shade: 'base'
                        },
                        borderLeftColor: {
                            group: 'secondary',
                            shade: 'base'
                        },
                        borderBottomColor: {
                            group: 'tertiary',
                            shade: 'base'
                        }
                    }}
                >
                    <p>Hello world!</p>
                </Box>
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
                        breakpoints: {
                            xl: {
                                fontSize: '2',
                                marginBottom: '2'
                            }
                        }
                    }}
                >
                    <p>Hello world!</p>
                </Box>
            </ThemeProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

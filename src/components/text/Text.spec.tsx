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

test('it works with fontFamily', () => {
    const tree = renderer
        .create(
            <ThemeProvider>
                <Text fontFamily="mono">Hello world!</Text>
            </ThemeProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works with fontWeight', () => {
    const tree = renderer
        .create(
            <ThemeProvider>
                <Text fontWeight="normal">Hello world!</Text>
            </ThemeProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works with fontSize', () => {
    const tree = renderer
        .create(
            <ThemeProvider>
                <Text fontSize={3}>Hello world!</Text>
            </ThemeProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works with textColor', () => {
    const tree = renderer
        .create(
            <ThemeProvider>
                <Text textColor={{ colorGroup: 'base', colorShade: 'white' }}>
                    Hello world!
                </Text>
            </ThemeProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works with lineHeight', () => {
    const tree = renderer
        .create(
            <ThemeProvider>
                <Text lineHeight="normal">Hello world!</Text>
            </ThemeProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works with letterSpacing', () => {
    const tree = renderer
        .create(
            <ThemeProvider>
                <Text letterSpacing="normal">Hello world!</Text>
            </ThemeProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works with textAlign', () => {
    const tree = renderer
        .create(
            <ThemeProvider>
                <Text textAlign="left">Hello world!</Text>
            </ThemeProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Heading } from './index';
import { ThemeProvider } from '../theme-provider';

test('it works as h1', () => {
    const tree = renderer
        .create(
            <ThemeProvider>
                <Heading size={1}>H1</Heading>
            </ThemeProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works as h2', () => {
    const tree = renderer
        .create(
            <ThemeProvider>
                <Heading size={2}>H2</Heading>
            </ThemeProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works as h3', () => {
    const tree = renderer
        .create(
            <ThemeProvider>
                <Heading size={3}>H3</Heading>
            </ThemeProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works as h4', () => {
    const tree = renderer
        .create(
            <ThemeProvider>
                <Heading size={4}>H4</Heading>
            </ThemeProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works as h5', () => {
    const tree = renderer
        .create(
            <ThemeProvider>
                <Heading size={5}>H5</Heading>
            </ThemeProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works as h6', () => {
    const tree = renderer
        .create(
            <ThemeProvider>
                <Heading size={6}>H6</Heading>
            </ThemeProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works overriding fontSize', () => {
    const tree = renderer
        .create(
            <ThemeProvider>
                <Heading size={6} fontSize={10}>
                    H6
                </Heading>
            </ThemeProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works overriding fontWeight', () => {
    const tree = renderer
        .create(
            <ThemeProvider>
                <Heading size={6} fontWeight="black">
                    H6
                </Heading>
            </ThemeProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

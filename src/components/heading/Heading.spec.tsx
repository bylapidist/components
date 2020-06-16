import React from 'react';
import renderer from 'react-test-renderer';
import styled from 'styled-components';
import 'jest-styled-components';

import { createHeading, Heading } from './index';
import { ThemeProvider } from '../theme-provider';

test('it works mapping to correct heading level', () => {
    const Component = createHeading(styled.h1, 1);
    const tree = renderer.create(
        <ThemeProvider>
            <Component />
        </ThemeProvider>
    );
    expect(tree.root.findByType('h1')).toBeTruthy();
});

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

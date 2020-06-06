import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Container } from './index';
import { ThemeProvider } from '../theme-provider';

test('it works', () => {
    const tree = renderer
        .create(
            <ThemeProvider>
                <Container>
                    <p>Hello world!</p>
                </Container>
            </ThemeProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works with maxWidth', () => {
    const tree = renderer
        .create(
            <ThemeProvider>
                <Container maxWidth="1/2">
                    <p>Hello world!</p>
                </Container>
            </ThemeProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Logo } from './index';
import { ThemeProvider } from '../theme-provider';

test('it works', () => {
    const tree = renderer
        .create(
            <ThemeProvider>
                <Logo size="32px" />
            </ThemeProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works thinking', () => {
    const tree = renderer
        .create(
            <ThemeProvider>
                <Logo size="32px" thinking />
            </ThemeProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works animated', () => {
    const tree = renderer
        .create(
            <ThemeProvider>
                <Logo size="32px" animated />
            </ThemeProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works with different colours', () => {
    const tree = renderer
        .create(
            <ThemeProvider>
                <Logo
                    size="32px"
                    bUpColor="#111"
                    bDownColor="#222"
                    dColor="#333"
                />
            </ThemeProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

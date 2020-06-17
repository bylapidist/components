import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Logo } from './index';
import { ThemeProvider } from '../theme-provider';

test('it works', () => {
    const tree = renderer
        .create(
            <ThemeProvider>
                <Logo />
            </ThemeProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works thinking', () => {
    const tree = renderer
        .create(
            <ThemeProvider>
                <Logo thinking />
            </ThemeProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works animated', () => {
    const tree = renderer
        .create(
            <ThemeProvider>
                <Logo animated />
            </ThemeProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

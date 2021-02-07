import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { ThemeProvider } from '../theme-provider';
import { StatusPanel } from './index';

test('it works', () => {
    const tree = renderer
        .create(
            <ThemeProvider>
                <StatusPanel kind="primary">Hello world</StatusPanel>
            </ThemeProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works with different kind', () => {
    const tree = renderer
        .create(
            <ThemeProvider>
                <StatusPanel kind="secondary">Hello world</StatusPanel>
            </ThemeProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works with heading and value', () => {
    const tree = renderer
        .create(
            <ThemeProvider>
                <StatusPanel
                    kind="secondary"
                    heading="test heading"
                    value={34823.3}
                >
                    Hello world
                </StatusPanel>
            </ThemeProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works with different symbol', () => {
    const tree = renderer
        .create(
            <ThemeProvider>
                <StatusPanel
                    kind="secondary"
                    heading="test heading"
                    symbol="%"
                    symbolPrefixed={false}
                    value={33.3}
                >
                    Hello world
                </StatusPanel>
            </ThemeProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

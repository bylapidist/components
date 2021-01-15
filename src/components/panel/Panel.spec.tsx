import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { ThemeProvider } from '../theme-provider';
import { Panel } from './index';

test('it works', () => {
    const tree = renderer
        .create(
            <ThemeProvider>
                <Panel kind="primary">Hello world</Panel>
            </ThemeProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works with different kind', () => {
    const tree = renderer
        .create(
            <ThemeProvider>
                <Panel kind="secondary">Hello world</Panel>
            </ThemeProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { ThemeProvider } from '../theme-provider';
import { PanelHeading } from './index';

test('it works', () => {
    const tree = renderer
        .create(
            <ThemeProvider>
                <PanelHeading kind="primary">Hello world</PanelHeading>
            </ThemeProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works with different kind and size', () => {
    const tree = renderer
        .create(
            <ThemeProvider>
                <PanelHeading size={3} kind="secondary">
                    Hello world
                </PanelHeading>
            </ThemeProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

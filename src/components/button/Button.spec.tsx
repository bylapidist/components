import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { ThemeProvider } from '../theme-provider';
import { Button } from './index';

test('it works', () => {
    const tree = renderer
        .create(
            <ThemeProvider>
                <Button type="button" kind="primary">
                    Hello world
                </Button>
            </ThemeProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works with size', () => {
    const tree = renderer
        .create(
            <ThemeProvider>
                <Button type="button" kind="secondary" small>
                    Hello world
                </Button>
            </ThemeProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works with ghost', () => {
    const tree = renderer
        .create(
            <ThemeProvider>
                <Button type="button" kind="secondary" ghost>
                    Hello world
                </Button>
            </ThemeProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

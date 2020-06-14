import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Image } from './index';
import { ThemeProvider } from '../theme-provider';

test('it works', () => {
    const tree = renderer
        .create(
            <ThemeProvider>
                <Image src="https://placehold.it/500x500" alt="image" />
            </ThemeProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works with styles', () => {
    const tree = renderer
        .create(
            <ThemeProvider>
                <Image
                    styles={{
                        width: '1/2'
                    }}
                    src="https://placehold.it/500x500"
                    alt="image"
                />
            </ThemeProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

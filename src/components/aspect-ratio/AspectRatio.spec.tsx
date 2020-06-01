import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { AspectRatio } from './index';
import { ThemeProvider } from '../theme-provider';

test('it works with string ratio', () => {
    const tree = renderer
        .create(
            <ThemeProvider>
                <AspectRatio ratio={'1/3'}>
                    <p>Hello world!</p>
                </AspectRatio>
            </ThemeProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works with object ratio', () => {
    const tree = renderer
        .create(
            <ThemeProvider>
                <AspectRatio ratio={{ x: 1, y: 3 }}>
                    <p>Hello world!</p>
                </AspectRatio>
            </ThemeProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works with an inner image', () => {
    const img = <img src="https://catpictures.test" alt="cats" />;
    const tree = renderer
        .create(
            <ThemeProvider>
                <AspectRatio ratio={{ x: 1, y: 3 }}>{img}</AspectRatio>
            </ThemeProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

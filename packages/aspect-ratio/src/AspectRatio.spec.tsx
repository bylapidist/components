import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import AspectRatio from './index';

test('it works with string ratio', () => {
    const tree = renderer
        .create(
            <AspectRatio ratio={'1/3'}>
                <p>Hello world!</p>
            </AspectRatio>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works with object ratio', () => {
    const tree = renderer
        .create(
            <AspectRatio ratio={{ x: 1, y: 3 }}>
                <p>Hello world!</p>
            </AspectRatio>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

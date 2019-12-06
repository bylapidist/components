import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Image from './index';

test('it works', () => {
    const tree = renderer
        .create(
            <Image>
                <p>Hello world!</p>
            </Image>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

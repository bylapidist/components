import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Title from './index';

test('it works', () => {
    const tree = renderer
        .create(
            <Title>
                <p>Hello world!</p>
            </Title>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

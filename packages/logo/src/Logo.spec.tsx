import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Logo from './index';

test('it works', () => {
    const tree = renderer
        .create(
            <Logo>
                <p>Hello world!</p>
            </Logo>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

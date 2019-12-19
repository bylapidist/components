import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import NavBar from './index';

test('it works', () => {
    const tree = renderer
        .create(
            <NavBar>
                <p>Hello world!</p>
            </NavBar>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

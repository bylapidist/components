import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Link from './index';

test('it works', () => {
    const tree = renderer
        .create(
            <Link>
                <p>Hello world!</p>
            </Link>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

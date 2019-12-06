import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Card from './index';

test('it works', () => {
    const tree = renderer
        .create(
            <Card>
                <p>Hello world!</p>
            </Card>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Grid from './index';

test('it works', () => {
    const tree = renderer
        .create(
            <Grid>
                <p>Hello world!</p>
            </Grid>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

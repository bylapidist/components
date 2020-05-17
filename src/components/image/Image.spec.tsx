import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Image } from './index';

test('it works', () => {
    const tree = renderer
        .create(<Image src="https://placehold.it/500x500" alt="image" />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

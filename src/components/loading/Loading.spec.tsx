import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Loading } from './index';

test('it works', () => {
    const tree = renderer.create(<Loading />).toJSON();
    expect(tree).toMatchSnapshot();
});

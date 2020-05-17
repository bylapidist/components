import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Paragraph } from './index';

test('it works', () => {
    const tree = renderer.create(<Paragraph>Hello world!</Paragraph>).toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works with size', () => {
    const tree = renderer
        .create(<Paragraph size="large">Hello world!</Paragraph>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works with weight', () => {
    const tree = renderer
        .create(<Paragraph weight="bold">Hello world!</Paragraph>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

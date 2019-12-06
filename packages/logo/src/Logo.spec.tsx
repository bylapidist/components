import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Logo from './index';

test('it works', () => {
    const tree = renderer.create(<Logo size="32px" />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works thinking', () => {
    const tree = renderer.create(<Logo size="32px" thinking />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works animated', () => {
    const tree = renderer.create(<Logo size="32px" animated />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works with different colours', () => {
    const tree = renderer
        .create(
            <Logo size="32px" bUpColor="#fff" bDownColor="#fff" dColor="#fff" />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

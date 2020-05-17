import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Container from './index';

test('it works', () => {
    const tree = renderer
        .create(
            <Container>
                <p>Hello world!</p>
            </Container>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works with maxWidth', () => {
    const tree = renderer
        .create(
            <Container maxWidth="600px">
                <p>Hello world!</p>
            </Container>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works with padding', () => {
    const tree = renderer
        .create(
            <Container padding="60px">
                <p>Hello world!</p>
            </Container>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

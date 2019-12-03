import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Button } from './index';

test('it works', () => {
    const tree = renderer.create(<Button text="Click me" />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works as block', () => {
    const tree = renderer.create(<Button text="Click me" block />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works as block loading', () => {
    const tree = renderer
        .create(<Button text="Click me" block loading />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works as block outline', () => {
    const tree = renderer
        .create(<Button text="Click me" block outline />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works as disabled', () => {
    const tree = renderer.create(<Button text="Click me" disabled />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works as outline small', () => {
    const tree = renderer
        .create(<Button text="Click me" outline small />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works as small loading', () => {
    const tree = renderer
        .create(<Button text="Click me" small loading />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works as outline small disabled', () => {
    const tree = renderer
        .create(<Button text="Click me" outline disabled small />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

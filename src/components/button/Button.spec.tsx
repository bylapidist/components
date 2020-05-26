import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import {
    Button,
    DangerButton,
    PrimaryButton,
    SecondaryButton,
    TertiaryButton
} from './index';

test('it works as default', () => {
    const tree = renderer.create(<Button text="Click me" />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works as primary', () => {
    const tree = renderer.create(<PrimaryButton text="Click me" />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works as secondary', () => {
    const tree = renderer.create(<SecondaryButton text="Click me" />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works as tertiary', () => {
    const tree = renderer.create(<TertiaryButton text="Click me" />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works as danger', () => {
    const tree = renderer.create(<DangerButton text="Click me" />).toJSON();
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

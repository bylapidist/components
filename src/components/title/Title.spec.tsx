import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Title, TitleBySize } from './index';

test('it works as h1', () => {
    const tree = renderer.create(<Title size={1}>H1</Title>).toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works as h2', () => {
    const tree = renderer.create(<Title size={2}>H2</Title>).toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works as h3', () => {
    const tree = renderer.create(<Title size={3}>H3</Title>).toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works as h4', () => {
    const tree = renderer.create(<Title size={4}>H4</Title>).toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works as h5', () => {
    const tree = renderer.create(<Title size={5}>H5</Title>).toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works as h6', () => {
    const tree = renderer.create(<Title size={6}>H6</Title>).toJSON();
    expect(tree).toMatchSnapshot();
});

test('it maps to the correct title element', () => {
    const tree = renderer.create(<TitleBySize size={3}>H3</TitleBySize>);
    expect(tree).toMatchSnapshot();
    expect(tree.root.findByType('h3')).toBeTruthy();
});

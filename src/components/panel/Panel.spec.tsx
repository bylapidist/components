import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Panel } from './index';

test('it works', () => {
    const tree = renderer
        .create(
            <Panel>
                <p>Hello world!</p>
            </Panel>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works with elevated', () => {
    const tree = renderer
        .create(
            <Panel elevated>
                <p>Hello world!</p>
            </Panel>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works with rounded', () => {
    const tree = renderer
        .create(
            <Panel rounded>
                <p>Hello world!</p>
            </Panel>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works with outline', () => {
    const tree = renderer
        .create(
            <Panel outline>
                <p>Hello world!</p>
            </Panel>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works with color', () => {
    const tree = renderer
        .create(
            <Panel color="#555" outline>
                <p>Hello world!</p>
            </Panel>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works with outline and color', () => {
    const tree = renderer
        .create(
            <Panel color="#555" outline>
                <p>Hello world!</p>
            </Panel>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works with outline and color and elevated', () => {
    const tree = renderer
        .create(
            <Panel color="#555" outline elevated>
                <p>Hello world!</p>
            </Panel>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

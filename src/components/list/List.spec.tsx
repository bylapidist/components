import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { List } from './index';

test('it works with strings', () => {
    const tree = renderer
        .create(
            <List
                items={[
                    { item: 'hello', key: 'test1' },
                    { item: 'world', key: 'test2' }
                ]}
            />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works with elements', () => {
    const tree = renderer
        .create(
            <List
                items={[
                    { item: <p>hello</p>, key: 'test1' },
                    { item: <p>world</p>, key: 'test2' }
                ]}
            />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works with ordered', () => {
    const tree = renderer
        .create(
            <List
                items={[
                    { item: 'hello', key: 'test1' },
                    { item: 'world', key: 'test2' }
                ]}
                type="ol"
            />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works with unordered', () => {
    const tree = renderer
        .create(
            <List
                items={[
                    { item: 'hello', key: 'test1' },
                    { item: 'world', key: 'test2' }
                ]}
                type="ul"
            />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Layout from './index';

test('it works', () => {
    const tree = renderer
        .create(
            <Layout
                header={<p>Header</p>}
                sidebar={<p>Sidebar</p>}
                main={<p>Main</p>}
                footer={<p>Footer</p>}
            />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works without sidebar', () => {
    const tree = renderer
        .create(
            <Layout
                header={<p>Header</p>}
                main={<p>Main</p>}
                footer={<p>Footer</p>}
            />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works without header', () => {
    const tree = renderer
        .create(
            <Layout
                sidebar={<p>Sidebar</p>}
                main={<p>Main</p>}
                footer={<p>Footer</p>}
            />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works without footer', () => {
    const tree = renderer
        .create(
            <Layout
                header={<p>Header</p>}
                sidebar={<p>Sidebar</p>}
                main={<p>Main</p>}
            />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works nested', () => {
    const tree = renderer
        .create(
            <Layout
                header={<p>Header</p>}
                sidebar={<p>Sidebar</p>}
                main={<p>Main</p>}
                footer={<p>Footer</p>}
            >
                <Layout sidebar={<p>Sidebar</p>} main={<p>Nested</p>} />
            </Layout>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

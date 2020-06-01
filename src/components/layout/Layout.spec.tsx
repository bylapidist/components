import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Layout } from './index';
import { ThemeProvider } from '../theme-provider';

test('it works', () => {
    const tree = renderer
        .create(
            <ThemeProvider>
                <Layout
                    header={<p>Header</p>}
                    sidebar={<p>Sidebar</p>}
                    main={<p>Main</p>}
                    footer={<p>Footer</p>}
                />
            </ThemeProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works without sidebar', () => {
    const tree = renderer
        .create(
            <ThemeProvider>
                <Layout
                    header={<p>Header</p>}
                    main={<p>Main</p>}
                    footer={<p>Footer</p>}
                />
            </ThemeProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works without header', () => {
    const tree = renderer
        .create(
            <ThemeProvider>
                <Layout
                    sidebar={<p>Sidebar</p>}
                    main={<p>Main</p>}
                    footer={<p>Footer</p>}
                />
            </ThemeProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works without footer', () => {
    const tree = renderer
        .create(
            <ThemeProvider>
                <Layout
                    header={<p>Header</p>}
                    sidebar={<p>Sidebar</p>}
                    main={<p>Main</p>}
                />
            </ThemeProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works nested', () => {
    const tree = renderer
        .create(
            <ThemeProvider>
                <Layout
                    header={<p>Header</p>}
                    sidebar={<p>Sidebar</p>}
                    main={<p>Main</p>}
                    footer={<p>Footer</p>}
                >
                    <Layout sidebar={<p>Sidebar</p>} main={<p>Nested</p>} />
                </Layout>
            </ThemeProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';

import { List, ListProps } from './index';
import { ThemeProvider } from '../theme-provider';

const setup = (props: ListProps) =>
    render(
        <ThemeProvider>
            <List {...props} />
        </ThemeProvider>
    );

test('it works with strings', () => {
    const { container } = setup({
        items: [
            { item: 'hello', key: 'test1' },
            { item: 'world', key: 'test2' }
        ],
        type: 'ol'
    });
    expect(container.firstChild).toMatchSnapshot();
});

test('it works with elements', () => {
    const { container } = setup({
        items: [
            { item: <p>hello</p>, key: 'test1' },
            { item: <p>world</p>, key: 'test2' }
        ],
        type: 'ol'
    });
    expect(container.firstChild).toMatchSnapshot();
});

test('it works with ordered', () => {
    const { container } = setup({
        items: [
            { item: 'hello', key: 'test1' },
            { item: 'world', key: 'test2' }
        ],
        type: 'ol'
    });
    expect(container.firstChild).toMatchSnapshot();
});

test('it works with unordered', () => {
    const { container } = setup({
        items: [
            { item: 'hello', key: 'test1' },
            { item: 'world', key: 'test2' }
        ],
        type: 'ul'
    });
    expect(container.firstChild).toMatchSnapshot();
});

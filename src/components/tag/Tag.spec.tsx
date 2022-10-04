import * as React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';

import { KindType } from '../types';
import { ThemeProvider } from '../theme-provider';
import { Tag } from './index';

const setup = (Component: React.ReactElement) =>
    render(<ThemeProvider>{Component}</ThemeProvider>);

afterEach(cleanup);

const kinds: KindType[] = ['primary', 'secondary', 'tertiary', 'danger'];

test.each(kinds)('it works', (kind) => {
    const { container, getByText } = setup(<Tag kind={kind}>Hello world</Tag>);
    expect(getByText('Hello world')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
});

test.each(kinds)('it works with namespace', (kind) => {
    const { container, getByText } = setup(
        <Tag kind={kind} namespace="namespace">
            Hello world
        </Tag>
    );
    expect(getByText('Hello world')).toBeTruthy();
    expect(getByText('namespace')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
});

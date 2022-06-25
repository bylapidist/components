import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';

import { ThemeProvider } from '../theme-provider';
import { Tag } from './index';

const setup = (Tag: React.ReactElement) =>
    render(<ThemeProvider>{Tag}</ThemeProvider>);

test('it works', () => {
    const { container } = setup(<Tag kind="primary">Hello world</Tag>);
    expect(container.firstChild).toMatchSnapshot();
});

test('it works with namespace', () => {
    const { container } = setup(
        <Tag namespace="namespace" kind="primary">
            Hello world
        </Tag>
    );
    expect(container.firstChild).toMatchSnapshot();
});

test('it works with href', () => {
    const { container } = setup(
        <Tag href="https://href.test" kind="primary">
            Hello world
        </Tag>
    );
    expect(container.firstChild).toMatchSnapshot();
});

test('it works with namespace and href', () => {
    const { container } = setup(
        <Tag namespace="namespace" href="https://href.test" kind="primary">
            Hello world
        </Tag>
    );
    expect(container.firstChild).toMatchSnapshot();
});

import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';

import { Heading, HeadingProps } from './index';
import { ThemeProvider } from '../theme-provider';

const setup = (
    props?: HeadingProps,
    children: React.ReactElement = <p>Hello world!</p>
) =>
    render(
        <ThemeProvider>
            <Heading {...props}>{children}</Heading>
        </ThemeProvider>
    );

test('it works mapping to correct heading level', () => {
    const { getByRole } = setup();
    expect(getByRole('heading').nodeName).toBe('H1');
});

test('it works as h1', () => {
    const { container, getByRole } = setup({ size: 1 });
    expect(getByRole('heading').nodeName).toBe('H1');
    expect(container.firstChild).toMatchSnapshot();
});

test('it works as h2', () => {
    const { container, getByRole } = setup({ size: 2 });
    expect(getByRole('heading').nodeName).toBe('H2');
    expect(container.firstChild).toMatchSnapshot();
});

test('it works as h3', () => {
    const { container, getByRole } = setup({ size: 3 });
    expect(getByRole('heading').nodeName).toBe('H3');
    expect(container.firstChild).toMatchSnapshot();
});

test('it works as h4', () => {
    const { container, getByRole } = setup({ size: 4 });
    expect(getByRole('heading').nodeName).toBe('H4');
    expect(container.firstChild).toMatchSnapshot();
});

test('it works as h5', () => {
    const { container, getByRole } = setup({ size: 5 });
    expect(getByRole('heading').nodeName).toBe('H5');
    expect(container.firstChild).toMatchSnapshot();
});

test('it works as h6', () => {
    const { container, getByRole } = setup({ size: 6 });
    expect(getByRole('heading').nodeName).toBe('H6');
    expect(container.firstChild).toMatchSnapshot();
});

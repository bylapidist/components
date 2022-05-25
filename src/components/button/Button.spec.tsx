import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';

import { ThemeProvider } from '../theme-provider';
import { Button } from './index';

const setup = (button: React.ReactElement) =>
    render(<ThemeProvider>{button}</ThemeProvider>);

test('it works', () => {
    const { container } = setup(
        <Button type="button" kind="primary">
            Hello world
        </Button>
    );
    expect(container.firstChild).toMatchSnapshot();
});

test('it works with size small', () => {
    const { container } = setup(
        <Button type="button" kind="secondary" sizes="small">
            Hello world
        </Button>
    );
    expect(container.firstChild).toMatchSnapshot();
});

test('it works with size medium', () => {
    const { container } = setup(
        <Button type="button" kind="secondary" sizes="small">
            Hello world
        </Button>
    );
    expect(container.firstChild).toMatchSnapshot();
});

test('it works with size large', () => {
    const { container } = setup(
        <Button type="button" kind="secondary" sizes="small">
            Hello world
        </Button>
    );
    expect(container.firstChild).toMatchSnapshot();
});

test('it works with ghost', () => {
    const { container } = setup(
        <Button type="button" kind="secondary" ghost>
            Hello world
        </Button>
    );
    expect(container.firstChild).toMatchSnapshot();
});

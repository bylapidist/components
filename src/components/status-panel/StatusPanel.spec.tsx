import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';

import { ThemeProvider } from '../theme-provider';
import { StatusPanel } from './index';

const setup = (statusPanel: React.ReactElement) =>
    render(<ThemeProvider>{statusPanel}</ThemeProvider>);

test('it works', () => {
    const { container } = setup(
        <StatusPanel kind="primary">Hello world</StatusPanel>
    );
    expect(container.firstChild).toMatchSnapshot();
});

test('it works with different kind', () => {
    const { container } = setup(
        <StatusPanel kind="secondary">Hello world</StatusPanel>
    );
    expect(container.firstChild).toMatchSnapshot();
});

test('it works with heading and value', () => {
    const { container } = setup(
        <StatusPanel kind="secondary" heading="test heading" value={34823.3}>
            Hello world
        </StatusPanel>
    );
    expect(container.firstChild).toMatchSnapshot();
});

test('it works with different symbol', () => {
    const { container } = setup(
        <StatusPanel
            kind="secondary"
            heading="test heading"
            symbol="%"
            symbolPrefixed={false}
            value={33.3}
        >
            Hello world
        </StatusPanel>
    );
    expect(container.firstChild).toMatchSnapshot();
});

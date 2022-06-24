import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';

import { ThemeProvider } from '../theme-provider';
import { Panel } from './index';

const setup = (panel: React.ReactElement) =>
    render(<ThemeProvider>{panel}</ThemeProvider>);

test('it works', () => {
    const { container } = setup(<Panel kind="primary">Hello world</Panel>);
    expect(container.firstChild).toMatchSnapshot();
});

test('it works with different kind', () => {
    const { container } = setup(<Panel kind="secondary">Hello world</Panel>);
    expect(container.firstChild).toMatchSnapshot();
});

test('it works loading', () => {
    const { container } = setup(<Panel kind="secondary" loading>Hello world</Panel>);
    expect(container.firstChild).toMatchSnapshot();
});

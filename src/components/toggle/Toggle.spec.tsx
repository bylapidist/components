import * as React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';

import { KindType } from '../types';
import { ThemeProvider } from '../theme-provider';
import { Toggle } from './index';

const setup = (Component: React.ReactElement) =>
    render(<ThemeProvider>{Component}</ThemeProvider>);

afterEach(cleanup);

const kinds: KindType[] = ['primary', 'secondary', 'tertiary', 'danger'];

test.each(kinds)('it works', (kind) => {
    const { container } = setup(<Toggle kind={kind}>Hello world</Toggle>);
    expect(container.firstChild).toMatchSnapshot();
});

test.each(kinds)('it works with checked', (kind) => {
    const { container } = setup(
        <Toggle kind={kind} checked>
            Hello world
        </Toggle>
    );
    expect(container.firstChild).toMatchSnapshot();
});

import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';

import { ThemeProvider } from '../theme-provider';
import { Panel } from './index';

const setup = (panel: React.ReactElement) =>
    render(<ThemeProvider>{panel}</ThemeProvider>);

test('it works', () => {
    const { container } = setup(<Panel>Hello world</Panel>);
    expect(container.firstChild).toMatchSnapshot();
});

test('it works with heading', () => {
    const { container, getByText } = setup(
        <Panel heading="heading">
            body
        </Panel>
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(getByText('heading')).toBeTruthy();
    expect(getByText('body')).toBeTruthy();
});

test('it works loading', () => {
    const { container } = setup(<Panel loading>Hello world</Panel>);
    expect(container.firstChild).toMatchSnapshot();
});

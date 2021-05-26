import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';

import { ThemeProvider } from '../theme-provider';
import { PanelHeading } from './index';

const setup = (panelHeading: React.ReactElement) =>
    render(<ThemeProvider>{panelHeading}</ThemeProvider>);

test('it works', () => {
    const { container } = setup(
        <PanelHeading kind="primary">Hello world</PanelHeading>
    );
    expect(container.firstChild).toMatchSnapshot();
});

test('it works with different kind and size', () => {
    const { container } = setup(
        <PanelHeading size={3} kind="secondary">
            Hello world
        </PanelHeading>
    );
    expect(container.firstChild).toMatchSnapshot();
});

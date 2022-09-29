import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';

import { ThemeProvider } from '../theme-provider';
import { ButtonKind } from '../button';
import { Toggle } from './index';

const setup = (Toggle: React.ReactElement) =>
    render(<ThemeProvider>{Toggle}</ThemeProvider>);

const kinds: ButtonKind[] = ['primary', 'secondary', 'tertiary', 'danger'];

test('it works', () => {
    kinds.forEach((kind) => {
        const { container } = setup(<Toggle kind={kind}>Hello world</Toggle>);
        expect(container.firstChild).toMatchSnapshot();
    });
});

test('it works with checked', () => {
    kinds.forEach((kind) => {
        const { container } = setup(
            <Toggle kind={kind} checked>
                Hello world
            </Toggle>
        );
        expect(container.firstChild).toMatchSnapshot();
    });
});

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';

import { Logo, LogoProps } from './index';
import { ThemeProvider } from '../theme-provider';

const setup = (props?: LogoProps) =>
    render(
        <ThemeProvider>
            <Logo {...props} />
        </ThemeProvider>
    );

test('it works', () => {
    const { container } = setup();
    expect(container.firstChild).toMatchSnapshot();
});

test('it works thinking', () => {
    const { container } = setup({ thinking: true });
    expect(container.firstChild).toMatchSnapshot();
});

test('it works animated', () => {
    const { container } = setup({ animated: true });
    expect(container.firstChild).toMatchSnapshot();
});

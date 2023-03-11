import * as React from 'react';
import { vi, describe, expect, test, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { Themes } from '@lapidist/styles';
import './matchMedia.mock';
import ThemeProvider from './index';

const setup = (Component: React.ReactElement) => render(Component);

afterEach(() => {
    vi.resetAllMocks();
    cleanup();
});

const themes: Themes[] = ['light', 'dark'];

describe('ThemeProvider', () => {
    test('it works with defaults', () => {
        const { container } = setup(<ThemeProvider>Hello world</ThemeProvider>);
        expect(container.firstChild).toMatchSnapshot();
    });

    test.each(themes)('it works with themes', (theme) => {
        const { container } = setup(
            <ThemeProvider theme={theme}>Hello world</ThemeProvider>
        );
        expect(container.firstChild).toMatchSnapshot();
    });

    test.skip('it works with prefers-dark-mode', () => {
        setup(<ThemeProvider>Hello world</ThemeProvider>);
        expect(window?.matchMedia).toHaveBeenCalledTimes(1);
    });

    test('it works with default testId', () => {
        setup(<ThemeProvider>Hello world</ThemeProvider>);
        expect(screen.getByTestId('ThemeProvider')).toBeTruthy();
    });

    test('it works with specified testId', () => {
        setup(<ThemeProvider testId={'TestId'}>Hello world</ThemeProvider>);
        expect(screen.getByTestId('TestId')).toBeTruthy();
    });

    test('it works with as', () => {
        setup(<ThemeProvider as="span">Hello world</ThemeProvider>);
        expect(screen.getByTestId('ThemeProvider').nodeName).toBe('SPAN');
    });

    test('it works with className', () => {
        setup(<ThemeProvider className="test">Hello world</ThemeProvider>);
        expect(
            screen.getByTestId('ThemeProvider').classList.contains('test')
        ).toBeTruthy();
    });
});

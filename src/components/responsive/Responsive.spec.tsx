import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { StateMock } from '@react-mock/state';

import { Responsive } from './index';
import { ThemeProvider } from '../theme-provider';

// https://jestjs.io/docs/en/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn()
    }))
});

test('it works with renderComponent prop', () => {
    const renderFunction = jest.fn(() => <p>hello world</p>);
    const component = renderer.create(
        <ThemeProvider>
            <Responsive breakpoint="md" renderComponent={renderFunction} />
        </ThemeProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    expect(renderFunction).toBeCalled();
});

test('it works with children', () => {
    const tree = renderer
        .create(
            <ThemeProvider>
                <StateMock state={{ matches: 'md' }}>
                    <Responsive breakpoint="md">
                        <p>hello world</p>
                    </Responsive>
                </StateMock>
            </ThemeProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works with children and renders null with no matches', () => {
    const tree = renderer
        .create(
            <ThemeProvider>
                <StateMock state={{ matches: null }}>
                    <Responsive breakpoint="md">
                        <p>hello world</p>
                    </Responsive>
                </StateMock>
            </ThemeProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

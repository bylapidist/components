import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { StateMock } from '@react-mock/state';

import { Responsive } from './index';

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
    const renderFunction = jest.fn((device) => <p>{device}</p>);
    renderer.create(
        <Responsive device="mobile-large" renderComponent={renderFunction} />
    );
    expect(renderFunction).toBeCalled();
});

test('it works with children', () => {
    const tree = renderer
        .create(
            <StateMock state={{ matches: 'mobile-large' }}>
                <Responsive device="mobile-large">
                    <p>hello world</p>
                </Responsive>
            </StateMock>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works with children and renders null with no matches', () => {
    const tree = renderer
        .create(
            <StateMock state={{ matches: null }}>
                <Responsive device="mobile-large">
                    <p>hello world</p>
                </Responsive>
            </StateMock>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

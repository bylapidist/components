import React from 'react';
import { describe, expect, test, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import Component from './index';

const setup = (Component: React.ReactElement) => render(Component);

afterEach(cleanup);

describe('Component', () => {
    describe('as prop', () => {
        test('it falls back to div', () => {
            setup(<Component>Hello world</Component>);
            expect(screen.getByTestId('Component').nodeName).toBe('DIV');
        });

        test('it works with HTML element', () => {
            setup(<Component as="button">Hello world</Component>);
            expect(screen.getByTestId('Component').nodeName).toBe('BUTTON');
            expect(screen.getByRole('button')).toBeTruthy();
        });

        test('it works with React component', () => {
            const TestComponent = ({ status }: { status: string }) => (
                <p>test {status}</p>
            );
            setup(<Component as={TestComponent} status="info" />);
            expect(screen.getByText('test info')).toBeTruthy();
        });
    });

    describe('testId prop', () => {
        test('it works with default testId', () => {
            setup(<Component>Hello world</Component>);
            expect(screen.getByTestId('Component')).toBeTruthy();
        });

        test('it works with specified testId', () => {
            setup(<Component data-testid="TestId">Hello world</Component>);
            expect(screen.getByTestId('TestId')).toBeTruthy();
        });
    });

    test('it works with className', () => {
        setup(<Component className="test">Hello world</Component>);
        expect(
            screen.getByTestId('Component').classList.contains('test')
        ).toBeTruthy();
    });
});

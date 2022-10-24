import * as React from 'react';
import { describe, expect, test, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import { KindType } from '../types';
import Button, { ButtonSize } from './index';

const setup = (Component: React.ReactElement) => render(Component);

afterEach(cleanup);

const variants: ButtonSize[] = ['small', 'medium', 'large'];

const kinds: KindType[] = ['primary', 'secondary', 'tertiary', 'danger'];

describe('Button', () => {
    test('it works with defaults', () => {
        const { container } = setup(<Button>Hello world</Button>);
        expect(screen.getByRole('button')).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();
    });

    test.each(variants)('it works with variants', (variant) => {
        const { container } = setup(
            <Button variant={variant}>Hello world</Button>
        );
        expect(container.firstChild).toMatchSnapshot();
    });

    test.each(kinds)('it works with kinds', (kind) => {
        const { container } = setup(<Button kind={kind}>Hello world</Button>);
        expect(container.firstChild).toMatchSnapshot();
    });

    test('it works loading', () => {
        const { container } = setup(<Button loading>Hello world</Button>);
        expect(container.firstChild).toMatchSnapshot();
    });

    test('it works disabled', () => {
        const { container } = setup(<Button disabled>Hello world</Button>);
        expect(container.firstChild).toMatchSnapshot();
    });

    test('it works with default testId', () => {
        setup(<Button>Hello world</Button>);
        expect(screen.getByTestId('Button')).toBeTruthy();
    });

    test('it works with default testId', () => {
        setup(<Button>Hello world</Button>);
        expect(screen.getByTestId('Button')).toBeTruthy();
    });

    test('it works with specified testId', () => {
        setup(<Button testId={'TestId'}>Hello world</Button>);
        expect(screen.getByTestId('TestId')).toBeTruthy();
    });

    test('it works with as', () => {
        setup(<Button as="span">Hello world</Button>);
        expect(screen.getByTestId('Button').nodeName).toBe('SPAN');
    });

    test('it works with className', () => {
        setup(<Button className="test">Hello world</Button>);
        expect(
            screen.getByTestId('Button').classList.contains('test')
        ).toBeTruthy();
    });
});

import React from 'react';
import { describe, expect, test, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import { SizeType } from '../../types';
import Link from './index';

const setup = (Component: React.ReactElement) => render(Component);

afterEach(cleanup);

const sizes: SizeType[] = ['small', 'medium', 'large'];

describe('Link', () => {
    test('it works with defaults', () => {
        const { container } = setup(<Link href="#">Hello world</Link>);
        expect(container.firstChild).toMatchSnapshot();
    });

    test.each(sizes)('it works with sizes', (size) => {
        const { container } = setup(
            <Link href="#" size={size}>
                Hello world
            </Link>
        );
        expect(container.firstChild).toMatchSnapshot();
    });

    test('it works with default testId', () => {
        setup(<Link>Hello world</Link>);
        expect(screen.getByTestId('Link')).toBeTruthy();
    });

    test('it works with specified testId', () => {
        setup(<Link testId={'TestId'}>Hello world</Link>);
        expect(screen.getByTestId('TestId')).toBeTruthy();
    });

    test('it works with as', () => {
        setup(<Link as="button">Hello world</Link>);
        expect(screen.getByTestId('Link').nodeName).toBe('BUTTON');
    });

    test('it works with className', () => {
        setup(<Link className="test">Hello world</Link>);
        expect(
            screen.getByTestId('Link').classList.contains('test')
        ).toBeTruthy();
    });
});

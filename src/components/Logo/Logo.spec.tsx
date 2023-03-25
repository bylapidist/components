import * as React from 'react';
import { describe, expect, test, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import Logo, { LogoAnimationType } from './index';

const setup = (Component: React.ReactElement) => render(Component);

afterEach(cleanup);

const animations: LogoAnimationType[] = ['fade', 'slide'];

describe('Logo', () => {
    test('it works', () => {
        const { container } = setup(<Logo />);
        expect(container.firstChild).toMatchSnapshot();
    });

    test.each(animations)('it works with animations', (animation) => {
        const { container } = setup(<Logo animation={animation} />);
        expect(container.firstChild).toMatchSnapshot();
    });

    test('it works with default testId', () => {
        setup(<Logo />);
        expect(screen.getByTestId('Logo')).toBeTruthy();
    });

    test('it works with specified testId', () => {
        setup(<Logo testId={'TestId'} />);
        expect(screen.getByTestId('TestId')).toBeTruthy();
    });

    test('it works with as', () => {
        setup(<Logo as="span" />);
        expect(screen.getByTestId('Logo').nodeName).toBe('SPAN');
    });

    test('it works with className', () => {
        setup(<Logo className="test" />);
        expect(
            screen.getByTestId('Logo').classList.contains('test')
        ).toBeTruthy();
    });
});

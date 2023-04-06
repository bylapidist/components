import React from 'react';
import { describe, expect, test, afterEach, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import { LevelType, SizeType } from '../types';
import Toggle from './index';

const setup = (Component: React.ReactElement) => render(Component);

afterEach(cleanup);

const sizes: SizeType[] = ['small', 'medium', 'large'];
const levels: LevelType[] = ['primary', 'secondary', 'tertiary', 'danger'];

describe('Toggle', () => {
    test('it works with defaults', () => {
        const { container } = setup(<Toggle>Hello world</Toggle>);
        expect(screen.getByRole('checkbox')).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();
    });

    test.each(sizes)('it works with sizes', (size) => {
        const { container } = setup(<Toggle size={size}>Hello world</Toggle>);
        expect(container.firstChild).toMatchSnapshot();
    });

    test.each(levels)('it works with levels', (level) => {
        const { container } = setup(<Toggle level={level}>Hello world</Toggle>);
        expect(container.firstChild).toMatchSnapshot();
    });

    test('it works disabled', () => {
        const { container } = setup(<Toggle disabled>Hello world</Toggle>);
        expect(container.firstChild).toMatchSnapshot();
    });

    test('it works with default testId', () => {
        setup(<Toggle>Hello world</Toggle>);
        expect(screen.getByTestId('Toggle')).toBeTruthy();
    });

    test('it works with default testId', () => {
        setup(<Toggle>Hello world</Toggle>);
        expect(screen.getByTestId('Toggle')).toBeTruthy();
    });

    test('it works with specified testId', () => {
        setup(<Toggle testId={'TestId'}>Hello world</Toggle>);
        expect(screen.getByTestId('TestId')).toBeTruthy();
    });

    test('it works with as', () => {
        setup(<Toggle as="span">Hello world</Toggle>);
        expect(screen.getByTestId('Toggle').nodeName).toBe('SPAN');
    });

    test('it works with toggle', () => {
        const handleOnToggle = vi.fn();
        const { getByRole } = setup(<Toggle onToggle={handleOnToggle} />);
        fireEvent.click(getByRole('checkbox'));
        expect(handleOnToggle).toHaveBeenCalledOnce();
    });

    test('it works with className', () => {
        setup(<Toggle className="test">Hello world</Toggle>);
        expect(
            screen.getByTestId('Toggle').classList.contains('test')
        ).toBeTruthy();
    });
});

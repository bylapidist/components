import React from 'react';
import { describe, expect, test, afterEach, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import { LevelType, SizeType } from '../../types';
import Checkbox from './index';

const setup = (Component: React.ReactElement) => render(Component);

afterEach(cleanup);

const sizes: SizeType[] = ['small', 'medium', 'large'];
const levels: LevelType[] = ['primary', 'secondary', 'tertiary', 'danger'];

describe('Checkbox', () => {
    test('it works with defaults', () => {
        const { container } = setup(<Checkbox>Hello world</Checkbox>);
        expect(screen.getByRole('checkbox')).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();
    });

    test.each(sizes)('it works with sizes', (size) => {
        const { container } = setup(<Checkbox size={size}>Hello world</Checkbox>);
        expect(container.firstChild).toMatchSnapshot();
    });

    test.each(levels)('it works with levels', (level) => {
        const { container } = setup(<Checkbox level={level}>Hello world</Checkbox>);
        expect(container.firstChild).toMatchSnapshot();
    });

    test('it works disabled', () => {
        const { container } = setup(<Checkbox disabled>Hello world</Checkbox>);
        expect(container.firstChild).toMatchSnapshot();
    });

    test('it works with default testId', () => {
        setup(<Checkbox>Hello world</Checkbox>);
        expect(screen.getByTestId('Checkbox')).toBeTruthy();
    });

    test('it works with default testId', () => {
        setup(<Checkbox>Hello world</Checkbox>);
        expect(screen.getByTestId('Checkbox')).toBeTruthy();
    });

    test('it works with specified testId', () => {
        setup(<Checkbox testId={'TestId'}>Hello world</Checkbox>);
        expect(screen.getByTestId('TestId')).toBeTruthy();
    });

    test('it works with as', () => {
        setup(<Checkbox as="span">Hello world</Checkbox>);
        expect(screen.getByTestId('Checkbox').nodeName).toBe('SPAN');
    });

    test('it works with toggle', () => {
        const handleOnCheckbox = vi.fn();
        const { getByRole } = setup(<Checkbox onCheckbox={handleOnCheckbox} />);
        fireEvent.click(getByRole('checkbox'));
        expect(handleOnCheckbox).toHaveBeenCalledOnce();
    });

    test('it works with className', () => {
        setup(<Checkbox className="test">Hello world</Checkbox>);
        expect(
            screen.getByTestId('Checkbox').classList.contains('test')
        ).toBeTruthy();
    });
});

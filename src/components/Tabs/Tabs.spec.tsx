import React from 'react';
import { vi, describe, expect, test, afterEach } from 'vitest';
import { cleanup, render, screen, fireEvent } from '@testing-library/react';

import { SizeType } from '../types';
import Tabs from './index';

const setup = (Component: React.ReactElement) => render(Component);

const mockLinks = [
    { children: 'Tab1', href: '#tab1' },
    { children: 'Tab2', href: '#tab2' }
];

afterEach(cleanup);

const sizes: SizeType[] = ['small', 'medium', 'large'];
describe('Tabs', () => {
    test('it works with defaults', () => {
        const { container } = setup(<Tabs links={mockLinks} />);
        expect(container.firstChild).toMatchSnapshot();
    });

    test.each(sizes)('it works with sizes', (size) => {
        const { container } = setup(<Tabs links={mockLinks} size={size} />);
        expect(container.firstChild).toMatchSnapshot();
    });

    test('it works with default testId', () => {
        setup(<Tabs links={mockLinks} />);
        expect(screen.getByTestId('Tabs')).toBeTruthy();
    });

    test('it works with specified testId', () => {
        setup(<Tabs links={mockLinks} testId="TestId" />);
        expect(screen.getByTestId('TestId')).toBeTruthy();
    });

    test('it works with className', () => {
        setup(<Tabs links={mockLinks} className="test" />);
        expect(
            screen.getByTestId('Tabs').classList.contains('test')
        ).toBeTruthy();
    });

    test('updates activeTab state and calls onChangeTab when a tab is clicked', () => {
        const handleChangeTab = vi.fn();
        setup(<Tabs links={mockLinks} onChangeTab={handleChangeTab} />);

        fireEvent.click(screen.getByText('Tab2'));
        expect(handleChangeTab).toHaveBeenCalledWith(1);
    });
});

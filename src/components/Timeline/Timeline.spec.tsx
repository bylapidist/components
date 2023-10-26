import React from 'react';
import { describe, expect, test, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import { SizeType } from '../types';
import Timeline from './index';

const setup = (Component: React.ReactElement) => render(Component);

const mockItems = [
    {
        urlTitle: 'LendInvest',
        title: 'Senior Software Engineer',
        from: 'Apr 2021',
        to: 'Present',
        url: 'https://www.lendinvest.com/'
    },
    {
        urlTitle: 'Golden Charter',
        title: 'Frontend Software Developer',
        from: 'Feb 2020',
        to: 'Apr 2021',
        url: 'https://www.goldencharter.co.uk/'
    }
];

afterEach(cleanup);

const sizes: SizeType[] = ['small', 'medium', 'large'];
describe('Timeline', () => {
    test('it works with defaults', () => {
        const { container } = setup(<Timeline items={mockItems} />);
        expect(container.firstChild).toMatchSnapshot();
    });

    test.each(sizes)('it works with sizes', (size) => {
        const { container } = setup(<Timeline items={mockItems} size={size} />);
        expect(container.firstChild).toMatchSnapshot();
    });

    test('it works with default testId', () => {
        setup(<Timeline items={mockItems} />);
        expect(screen.getByTestId('Timeline')).toBeTruthy();
    });

    test('it works with specified testId', () => {
        setup(<Timeline items={mockItems} testId="TestId" />);
        expect(screen.getByTestId('TestId')).toBeTruthy();
    });

    test('it works with as', () => {
        setup(<Timeline items={mockItems} as="span" />);
        expect(screen.getByTestId('Timeline').nodeName).toBe('SPAN');
    });

    test('it works with className', () => {
        setup(<Timeline items={mockItems} className="test" />);
        expect(
            screen.getByTestId('Timeline').classList.contains('test')
        ).toBeTruthy();
    });
});

import React from 'react';
import { describe, expect, test, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import Heading from './index';
import { TextFamilyType, TextWeightType } from '../Text';
import { SizeType } from '../types';

const setup = (Component: React.ReactElement) => render(Component);

afterEach(cleanup);

const sizes: SizeType[] = ['large', 'medium', 'small'];
const families: TextFamilyType[] = ['body', 'heading', 'serif', 'mono'];
const weights: TextWeightType[] = ['regular', 'medium', 'bold'];

describe('Heading', () => {
    test('it works with defaults', () => {
        const { container } = setup(<Heading>Hello world</Heading>);
        expect(screen.getByRole('heading').nodeName).toBe('H1');
        expect(container.firstChild).toMatchSnapshot();
    });

    test.each(sizes)('it works with sizes', (size) => {
        const { container } = setup(<Heading size={size}>Hello world</Heading>);
        expect(container.firstChild).toMatchSnapshot();
    });

    test.each(families)('it works with families', (family) => {
        const { container } = setup(
            <Heading family={family}>Hello world</Heading>
        );
        expect(container.firstChild).toMatchSnapshot();
    });

    test.each(weights)('it works with weights', (weight) => {
        const { container } = setup(
            <Heading weight={weight}>Hello world</Heading>
        );
        expect(container.firstChild).toMatchSnapshot();
    });

    test('it works with default testId', () => {
        setup(<Heading>Hello world</Heading>);
        expect(screen.getByTestId('Heading')).toBeTruthy();
    });

    test('it works with specified testId', () => {
        setup(<Heading testId={'TestId'}>Hello world</Heading>);
        expect(screen.getByTestId('TestId')).toBeTruthy();
    });

    test('it works with as', () => {
        setup(<Heading as="span">Hello world</Heading>);
        expect(screen.getByTestId('Heading').nodeName).toBe('SPAN');
    });

    test('it works with className', () => {
        setup(<Heading className="test">Hello world</Heading>);
        expect(
            screen.getByTestId('Heading').classList.contains('test')
        ).toBeTruthy();
    });
});

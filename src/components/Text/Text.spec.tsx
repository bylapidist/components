import * as React from 'react';
import { describe, expect, test, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import { SizeType } from '../types';
import Text, { TextFamilyType, TextWeightType } from './index';

const setup = (Component: React.ReactElement) => render(Component);

afterEach(cleanup);

const sizes: SizeType[] = ['small', 'medium', 'large'];
const families: TextFamilyType[] = ['sans', 'serif', 'mono'];
const weights: TextWeightType[] = ['regular', 'medium', 'bold'];

describe('Text', () => {
    test('it works with defaults', () => {
        const { container } = setup(<Text>Hello world</Text>);
        expect(container.firstChild).toMatchSnapshot();
    });

    test.each(sizes)('it works with sizes', (size) => {
        const { container } = setup(<Text size={size}>Hello world</Text>);
        expect(container.firstChild).toMatchSnapshot();
    });

    test.each(families)('it works with families', (family) => {
        const { container } = setup(<Text family={family}>Hello world</Text>);
        expect(container.firstChild).toMatchSnapshot();
    });

    test.each(weights)('it works with weights', (weight) => {
        const { container } = setup(<Text weight={weight}>Hello world</Text>);
        expect(container.firstChild).toMatchSnapshot();
    });

    test('it works with default testId', () => {
        setup(<Text>Hello world</Text>);
        expect(screen.getByTestId('Text')).toBeTruthy();
    });

    test('it works with specified testId', () => {
        setup(<Text testId={'TestId'}>Hello world</Text>);
        expect(screen.getByTestId('TestId')).toBeTruthy();
    });

    test('it works with as', () => {
        setup(<Text as="span">Hello world</Text>);
        expect(screen.getByTestId('Text').nodeName).toBe('SPAN');
    });

    test('it works with className', () => {
        setup(<Text className="test">Hello world</Text>);
        expect(
            screen.getByTestId('Text').classList.contains('test')
        ).toBeTruthy();
    });
});

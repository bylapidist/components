import * as React from 'react';
import { describe, expect, test, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import { SizeType } from '../types';
import Box from './index';

const setup = (Component: React.ReactElement) => render(Component);

afterEach(cleanup);

const gutters: SizeType[] = ['none', 'small', 'medium', 'large'];
const elevations: SizeType[] = ['none', 'small', 'medium', 'large'];

describe('Box', () => {
    test.each(gutters)('it works with gutters', (gutter) => {
        const { container } = setup(<Box gutter={gutter}>Hello world</Box>);
        expect(container.firstChild).toMatchSnapshot();
    });

    test.each(elevations)('it works with elevations', (elevation) => {
        const { container } = setup(
            <Box elevation={elevation}>Hello world</Box>
        );
        expect(container.firstChild).toMatchSnapshot();
    });

    test.each(gutters)('it works with gutterXs', (gutterX) => {
        const { container } = setup(<Box gutterX={gutterX}>Hello world</Box>);
        expect(container.firstChild).toMatchSnapshot();
    });

    test.each(gutters)('it works with gutterYs', (gutterY) => {
        const { container } = setup(<Box gutterY={gutterY}>Hello world</Box>);
        expect(container.firstChild).toMatchSnapshot();
    });

    test('it works with default testId', () => {
        setup(<Box gutter={gutters[0]}>Hello world</Box>);
        expect(screen.getByTestId('Box')).toBeTruthy();
    });

    test('it works with specified testId', () => {
        setup(
            <Box gutter={gutters[0]} testId={'TestId'}>
                Hello world
            </Box>
        );
        expect(screen.getByTestId('TestId')).toBeTruthy();
    });

    test('it works with as', () => {
        setup(
            <Box gutter={gutters[0]} as="span">
                Hello world
            </Box>
        );
        expect(screen.getByTestId('Box').nodeName).toBe('SPAN');
    });

    test('it works with className', () => {
        setup(
            <Box gutter={gutters[0]} className="test">
                Hello world
            </Box>
        );
        expect(
            screen.getByTestId('Box').classList.contains('test')
        ).toBeTruthy();
    });
});

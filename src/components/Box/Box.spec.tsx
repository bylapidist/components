import React from 'react';
import { describe, expect, test, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import { SizeType } from '../types';
import Box from './index';

// Helper function to render the component
const renderComponent = (component: React.ReactElement) => render(component);

// Clean up after each test
afterEach(cleanup);

// Define arrays for gutter and elevation sizes
const gutterSizes: SizeType[] = ['none', 'small', 'medium', 'large'];
const elevationSizes: SizeType[] = ['none', 'small', 'medium', 'large'];

describe('Box Component', () => {
    // Test gutter variations
    test.each(gutterSizes)('it works with gutter: %s', (gutter) => {
        const { container } = renderComponent(
            <Box gutter={gutter}>Hello world</Box>
        );
        expect(container.firstChild).toMatchSnapshot();
    });

    // Test elevation variations
    test.each(elevationSizes)('it works with elevation: %s', (elevation) => {
        const { container } = renderComponent(
            <Box elevation={elevation}>Hello world</Box>
        );
        expect(container.firstChild).toMatchSnapshot();
    });

    // Test gutterX variations
    test.each(gutterSizes)('it works with gutterX: %s', (gutterX) => {
        const { container } = renderComponent(
            <Box gutterX={gutterX}>Hello world</Box>
        );
        expect(container.firstChild).toMatchSnapshot();
    });

    // Test gutterY variations
    test.each(gutterSizes)('it works with gutterY: %s', (gutterY) => {
        const { container } = renderComponent(
            <Box gutterY={gutterY}>Hello world</Box>
        );
        expect(container.firstChild).toMatchSnapshot();
    });

    // Test default testId
    test('it works with default testId', () => {
        renderComponent(<Box gutter={gutterSizes[0]}>Hello world</Box>);
        expect(screen.getByTestId('Box')).toBeTruthy();
    });

    // Test specified testId
    test('it works with specified testId', () => {
        renderComponent(
            <Box gutter={gutterSizes[0]} testId={'TestId'}>
                Hello world
            </Box>
        );
        expect(screen.getByTestId('TestId')).toBeTruthy();
    });

    // Test 'as' prop
    test('it works with as prop', () => {
        renderComponent(
            <Box gutter={gutterSizes[0]} as="span">
                Hello world
            </Box>
        );
        expect(screen.getByTestId('Box').nodeName).toBe('SPAN');
    });

    // Test className prop
    test('it works with className prop', () => {
        renderComponent(
            <Box gutter={gutterSizes[0]} className="test">
                Hello world
            </Box>
        );
        expect(
            screen.getByTestId('Box').classList.contains('test')
        ).toBeTruthy();
    });
});

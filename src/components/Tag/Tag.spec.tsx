import * as React from 'react';
import { describe, expect, test, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import type { LevelType } from '../types';
import Tag from './index';

const setup = (Component: React.ReactElement) => render(Component);

afterEach(cleanup);

const kinds: LevelType[] = ['primary', 'secondary', 'tertiary', 'danger'];

describe('Tag', () => {
    test.each(kinds)('it works with kind', (kind) => {
        const { container } = setup(<Tag kind={kind}>Hello world</Tag>);
        expect(container.firstChild).toMatchSnapshot();
    });

    test.each(kinds)('it works with namespace', (kind) => {
        const { container } = setup(
            <Tag kind={kind} namespace="npm">
                Hello world
            </Tag>
        );
        expect(container.firstChild).toMatchSnapshot();
    });

    test('it works with default testId', () => {
        setup(<Tag>Hello world</Tag>);
        expect(screen.getByTestId('Tag')).toBeTruthy();
    });

    test('it works with specified testId', () => {
        setup(<Tag testId={'TestId'}>Hello world</Tag>);
        expect(screen.getByTestId('TestId')).toBeTruthy();
    });

    test('it works with as', () => {
        setup(<Tag as="span">Hello world</Tag>);
        expect(screen.getByTestId('Tag').nodeName).toBe('SPAN');
    });

    test('it works with className', () => {
        setup(<Tag className="test">Hello world</Tag>);
        expect(
            screen.getByTestId('Tag').classList.contains('test')
        ).toBeTruthy();
    });
});

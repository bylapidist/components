import * as React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Elevated, { ElevationHeight } from './index';

const setup = (Component: React.ReactElement) => render(Component);

afterEach(cleanup);

const elevations: ElevationHeight[] = [0, 1, 2, 3, 4];

test.each(elevations)('it works with elevations', (elevation) => {
    const { container } = setup(
        <Elevated elevation={elevation}>Hello world</Elevated>
    );
    expect(container.firstChild).toMatchSnapshot();
});

test('it works with default testId', () => {
    const { getByTestId } = setup(
        <Elevated elevation={elevations[0]}>Hello world</Elevated>
    );
    expect(getByTestId('Elevated')).toBeTruthy();
});

test('it works with specified testId', () => {
    const { getByTestId } = setup(
        <Elevated elevation={elevations[0]} testId={'TestId'}>
            Hello world
        </Elevated>
    );
    expect(getByTestId('TestId')).toBeTruthy();
});

test('it works with as', () => {
    const { getByTestId } = setup(
        <Elevated elevation={elevations[0]} as="span">
            Hello world
        </Elevated>
    );
    expect(getByTestId('Elevated').nodeName).toBe('SPAN');
});

test('it works with className', () => {
    const { getByTestId } = setup(
        <Elevated elevation={elevations[0]} className="test">
            Hello world
        </Elevated>
    );
    expect(getByTestId('Elevated').classList.contains('test')).toBeTruthy();
});

import * as React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import AspectRatio, { Ratio } from './index';

const setup = (Component: React.ReactElement) => render(Component);

afterEach(cleanup);

const ratios: Ratio[] = ['1/1', '1/2', '3/2', '4/3', '16/9', '9/16'];

test.each(ratios)('it works with ratios', (ratio) => {
    const { container } = setup(
        <AspectRatio ratio={ratio}>Hello world</AspectRatio>
    );
    expect(container.firstChild).toMatchSnapshot();
});

test('it works with default testId', () => {
    const { getByTestId } = setup(
        <AspectRatio ratio={ratios[0]}>Hello world</AspectRatio>
    );
    expect(getByTestId('AspectRatio')).toBeTruthy();
});

test('it works with specified testId', () => {
    const { getByTestId } = setup(
        <AspectRatio ratio={ratios[0]} testId={'TestId'}>
            Hello world
        </AspectRatio>
    );
    expect(getByTestId('TestId')).toBeTruthy();
});

test('it works with as', () => {
    const { getByTestId } = setup(
        <AspectRatio ratio={ratios[0]} as="span">
            Hello world
        </AspectRatio>
    );
    expect(getByTestId('AspectRatio').nodeName).toBe('SPAN');
});

test('it works with className', () => {
    const { getByTestId } = setup(
        <AspectRatio ratio={ratios[0]} className="test">
            Hello world
        </AspectRatio>
    );
    expect(getByTestId('AspectRatio').classList.contains('test')).toBeTruthy();
});

import * as React from 'react';
import { render } from '@testing-library/react';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import '@testing-library/jest-dom';
import 'jest-styled-components';

import { ThemeProvider } from '../theme-provider';
import { Button } from './index';

const setup = (Component: React.ReactElement) =>
    render(<ThemeProvider>{Component}</ThemeProvider>);

test('it works with size small', () => {
    const { container } = setup(
        <Button type="button" kind="secondary" variant="small">
            Hello world
        </Button>
    );
    expect(container.firstChild).toMatchSnapshot();
});

test('it works with size medium', () => {
    const { container } = setup(
        <Button type="button" kind="secondary" variant="medium">
            Hello world
        </Button>
    );
    expect(container.firstChild).toMatchSnapshot();
});

test('it works with size large', () => {
    const { container } = setup(
        <Button type="button" kind="secondary" variant="large">
            Hello world
        </Button>
    );
    expect(container.firstChild).toMatchSnapshot();
});

test('it works with loading', () => {
    const { container } = setup(
        <Button type="button" kind="secondary" variant="medium" loading>
            Hello world
        </Button>
    );
    expect(container.firstChild).toMatchSnapshot();
});

test('it works with anchor', () => {
    const { container } = setup(
        <Button
            as="a"
            kind="secondary"
            variant="medium"
            href="https://google.com"
            target="_blank"
        >
            Hello world
        </Button>
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(container.querySelectorAll('a').length).toBe(1);
    expect(container.querySelector('a')).toHaveAttribute(
        'href',
        'https://google.com'
    );
    expect(container.querySelector('a')).toHaveAttribute('target', '_blank');
});

test('it works with icon', () => {
    const { container } = setup(
        <Button type="button" kind="secondary" variant="medium" icon={faCircle}>
            Hello world
        </Button>
    );
    expect(container.firstChild).toMatchSnapshot();
});

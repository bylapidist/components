import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';

import { ThemeProvider } from '../theme-provider';
import { Link, LinkProps } from './index';

const setup = (props?: LinkProps) =>
    render(
        <ThemeProvider>
            <Link {...props}>Hello world!</Link>
        </ThemeProvider>
    );

test('it works', () => {
    const { container } = setup({ href: '#' });
    expect(container.firstChild).toMatchSnapshot();
});

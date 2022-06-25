import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';

import { ThemeProvider } from '../theme-provider';
import { Link, LinkPropType } from './index';

const setup = (
    props?: LinkPropType,
    children: React.ReactElement = <p>Hello world!</p>
) =>
    render(
        <ThemeProvider>
            <Link {...props}>{children}</Link>
        </ThemeProvider>
    );

test('it works', () => {
    const { container } = setup({ href: '#' });
    expect(container.firstChild).toMatchSnapshot();
});

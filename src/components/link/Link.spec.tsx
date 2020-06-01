import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { ThemeProvider } from '../theme-provider';
import { Link } from './index';

test('it works', () => {
    const tree = renderer
        .create(
            <ThemeProvider>
                <Link href="#">Hello world</Link>
            </ThemeProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

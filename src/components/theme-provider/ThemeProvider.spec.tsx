import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { ThemeProvider } from './index';

test('it works', () => {
    const tree = renderer
        .create(
            <ThemeProvider>
                <p>Hello world!</p>
            </ThemeProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

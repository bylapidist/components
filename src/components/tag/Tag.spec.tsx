import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';

import { ThemeProvider } from '../theme-provider';
import { Tag } from './index';

const setup = (Tag: React.ReactElement) =>
    render(<ThemeProvider>{Tag}</ThemeProvider>);

test('it works', () => {
    const { container } = setup(<Tag kind="primary">Hello world</Tag>);
    expect(container.firstChild).toMatchSnapshot();
});

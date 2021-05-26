import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';

import { AspectRatio, AspectRatioProps } from './index';
import { ThemeProvider } from '../theme-provider';

const setup = (
    props?: AspectRatioProps,
    children: React.ReactElement = <p>Hello world!</p>
) =>
    render(
        <ThemeProvider>
            <AspectRatio {...props}>{children}</AspectRatio>
        </ThemeProvider>
    );

test('it works with string ratio', () => {
    const { container } = setup({ ratio: '1/3' });
    expect(container.firstChild).toMatchSnapshot();
});

test('it works with object ratio', () => {
    const { container } = setup({ ratio: { x: 1, y: 3 } });
    expect(container.firstChild).toMatchSnapshot();
});

test('it works with an inner image', () => {
    const img = <img src="https://catpictures.test" alt="cats" />;
    const { container } = setup({ ratio: { x: 1, y: 3 } }, img);
    expect(container.firstChild).toMatchSnapshot();
});

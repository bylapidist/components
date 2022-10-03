import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { Image, ImageProps } from './index';
import { ThemeProvider } from '../theme-provider';

const setup = (props?: ImageProps) =>
    render(
        <ThemeProvider>
            <Image {...props} />
        </ThemeProvider>
    );

test('it works', () => {
    const { container } = setup({
        src: 'https://placehold.it/500x500',
        alt: 'image'
    });
    expect(container.firstChild).toMatchSnapshot();
});

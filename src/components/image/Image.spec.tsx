import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';

import { Image, ImagePropType } from './index';
import { ThemeProvider } from '../theme-provider';

const setup = (props?: ImagePropType) =>
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

test('it works with styles', () => {
    const { container } = setup({
        src: 'https://placehold.it/500x500',
        alt: 'image',
        styles: {
            width: '1/2'
        }
    });
    expect(container.firstChild).toMatchSnapshot();
});

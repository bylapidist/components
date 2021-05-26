import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';

import { Box, BoxProps } from './index';
import { ThemeProvider } from '../theme-provider';

const setup = (
    props?: BoxProps,
    children: React.ReactElement = <p>Hello world!</p>
) =>
    render(
        <ThemeProvider>
            <Box {...props}>{children}</Box>
        </ThemeProvider>
    );

test('it works plain', () => {
    const { container } = setup();
    expect(container.firstChild).toMatchSnapshot();
});

test('it works with padding', () => {
    const { container } = setup({
        styles: {
            padding: '2'
        }
    });
    expect(container.firstChild).toMatchSnapshot();
});

test('it works with margin', () => {
    const { container } = setup({
        styles: {
            margin: '2'
        }
    });
    expect(container.firstChild).toMatchSnapshot();
});

test('it works with backgroundColor', () => {
    const { container } = setup({
        styles: {
            backgroundColor: {
                group: 'grey',
                shade: 'base'
            }
        }
    });
    expect(container.firstChild).toMatchSnapshot();
});

test('it works with borderRadius', () => {
    const { container } = setup({
        styles: {
            borderRadius: '2'
        }
    });
    expect(container.firstChild).toMatchSnapshot();
});

test('it works with borderWidth', () => {
    const { container } = setup({
        styles: {
            borderWidth: '2'
        }
    });
    expect(container.firstChild).toMatchSnapshot();
});

test('it works with borderColor', () => {
    const { container } = setup({
        styles: {
            borderColor: {
                group: 'grey',
                shade: 'base'
            }
        }
    });
    expect(container.firstChild).toMatchSnapshot();
});

test('it works with variable borderColors', () => {
    const { container } = setup({
        styles: {
            borderTopColor: {
                group: 'grey',
                shade: 'base'
            },
            borderRightColor: {
                group: 'primary',
                shade: 'base'
            },
            borderLeftColor: {
                group: 'secondary',
                shade: 'base'
            },
            borderBottomColor: {
                group: 'tertiary',
                shade: 'base'
            }
        }
    });
    expect(container.firstChild).toMatchSnapshot();
});

test('it works with breakpoints', () => {
    const { container } = setup({
        styles: {
            breakpoints: {
                xl: {
                    fontSize: '2',
                    marginBottom: '2'
                }
            }
        }
    });
    expect(container.firstChild).toMatchSnapshot();
});

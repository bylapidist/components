import React from 'react';
import styled from 'styled-components';
import { breakpoint, centeredHorizontal, relative } from '../design-tokens';
import { defaultTheme } from '../theme-provider';

export interface ContainerProps {
    /** The Container's id. */
    readonly id?: string;
    /** The Container's classname. */
    readonly className?: string;
    /** The Container's children. */
    readonly children?: React.ReactNode;
    /** The Container's max width. */
    readonly maxWidth?: string;
    /** The Container's padding. */
    readonly padding?: string;
}

export const Container: React.FC<ContainerProps> = styled.div<ContainerProps>`
    ${relative()};
    ${centeredHorizontal()};

    max-width: ${(props): string =>
        props.maxWidth || defaultTheme.breakpoints.laptop.l};
    padding: ${(props): string => props.padding || defaultTheme.sizing.m};

    @media ${breakpoint('tablet-large')} {
        padding: ${(props): string => props.padding || defaultTheme.sizing.s};
    }
`;

Container.displayName = 'Container';

import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import {
    breakpoint,
    centeredHorizontal,
    relative,
    PropsWithIdAndClassname
} from '../../utilities';

export interface ContainerProps
    extends PropsWithIdAndClassname,
        PropsWithChildren<{}> {
    /** The Container's max width. */
    readonly maxWidth?: string;
    /** The Container's padding. */
    readonly padding?: string;
}

export const Container: React.FC<ContainerProps> = styled.div<ContainerProps>`
    ${relative()};
    ${centeredHorizontal()};

    max-width: ${(props): string => props.maxWidth || '100%'};
    padding: ${(props): string => props.padding || '0'};

    @media ${breakpoint('tablet-large')} {
        padding: ${(props): string => props.padding || '0'};
    }
`;

Container.displayName = 'Container';

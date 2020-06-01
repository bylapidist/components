import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { centeredHorizontal, PropsWithIdAndClassname } from '../../utilities';
import { Box, BoxProps } from '../box';
import { getWidth, NumberOrString } from '../theme-provider/theme';

export interface ContainerProps
    extends BoxProps,
        PropsWithIdAndClassname,
        PropsWithChildren<{}> {
    readonly maxWidth?: NumberOrString;
}

export const Container: React.FC<ContainerProps> = styled(Box)<ContainerProps>`
    ${centeredHorizontal()};

    ${(props): string =>
        props.maxWidth
            ? `max-width: ${getWidth(props.theme, props.maxWidth)}`
            : `max-width: 100%`};
`;

Container.displayName = 'Container';

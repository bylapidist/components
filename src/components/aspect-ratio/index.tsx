import * as React from 'react';
import styled, { ThemeProps } from 'styled-components';
import { Theme } from '@lapidist/styles';
import { BaseProps } from '../shared-types';

export type Ratio = { x: number | string; y: number | string };

export interface AspectRatioProps {
    readonly ratio: string | Ratio;
}

export type StyledAspectRatioProps = BaseProps &
    AspectRatioProps &
    ThemeProps<Theme>;

const splitRatio = (ratioProp: string): Ratio => ({
    x: ratioProp.split('/')[0],
    y: ratioProp.split('/')[1] || 1
});

const ratio = (ratioProp: string | Ratio): Ratio =>
    Object.prototype.hasOwnProperty.call(ratioProp, 'x') &&
    Object.prototype.hasOwnProperty.call(ratioProp, 'y')
        ? (ratioProp as Ratio)
        : splitRatio(`${ratioProp}`);

const calculatePaddingBottom = (ratioProp: string | Ratio): string =>
    `calc(100% / (${ratio(ratioProp).x} / ${ratio(ratioProp).y}))`;

const StyledAspectRatio = styled.div<StyledAspectRatioProps>`
    position: relative;
    overflow: hidden;
    height: 100%;

    > :first-child {
        position: absolute;
        object-fit: scale-down;
        object-position: 50% 50%;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
    }
    > img {
        height: auto;
    }

    ${({ ratio }) => `
        :before {
            display: block;
            content: '';
            padding-bottom: ${calculatePaddingBottom(ratio)};
        }
    `}
`;

export const AspectRatio = (props: BaseProps & AspectRatioProps) => (
    <StyledAspectRatio
        {...props}
        data-testid={props.testId}
        as={props.as || 'div'}
    />
);

AspectRatio.displayName = 'AspectRatio';

import * as React from 'react';
import styled, {
    css,
    DefaultTheme,
    FlattenInterpolation,
    ThemeProps
} from 'styled-components';
import { mergeStyles } from '@lapidist/styles';
import { Box, BoxProps } from '../box';
import { AspectRatio } from '../aspect-ratio';
import {
    fadeIn,
    slideDown,
    slideRight,
    slideUpLeft,
    thinking
} from './animations';

export type LogoPropType = BoxProps & React.HTMLProps<HTMLDivElement>;

export interface LogoProps {
    readonly animated?: boolean;
    readonly thinking?: boolean;
}

interface TriangleProps {
    readonly points: string;
    readonly animated: boolean;
    readonly thinking: boolean;
}

const logoAnimation = (
    props: TriangleProps,
    slideAnimation: FlattenInterpolation<
        ThemeProps<DefaultTheme>
    > | null = null,
    thinkingAnimation: FlattenInterpolation<
        ThemeProps<DefaultTheme>
    > | null = null,
    delay = '0'
): FlattenInterpolation<ThemeProps<DefaultTheme>> => css`
    ${props.animated && !props.thinking && slideAnimation};
    ${props.thinking && thinkingAnimation};
    animation-delay: ${delay};
`;

const Triangle: React.FC<TriangleProps> = styled.polygon<TriangleProps>`
    fill: ${(props): string => props.color || ''};
`;

const BUp: React.FC<TriangleProps> = styled(Triangle)`
    ${(props): FlattenInterpolation<ThemeProps<DefaultTheme>> =>
        logoAnimation(props, slideRight(), thinking())};

    fill: ${(props): string => props.theme.colors.tertiary.base || ''};
`;

const BDown: React.FC<TriangleProps> = styled(Triangle)`
    ${(props): FlattenInterpolation<ThemeProps<DefaultTheme>> =>
        logoAnimation(props, slideUpLeft(), thinking(), '0.1s')};

    fill: ${(props): string => props.theme.colors.primary.base || ''};
`;

const D: React.FC<TriangleProps> = styled(Triangle)`
    ${(props): FlattenInterpolation<ThemeProps<DefaultTheme>> =>
        logoAnimation(props, slideDown(), thinking(), '0.2s')};

    fill: ${(props): string => props.theme.colors.secondary.base || ''};
`;

const LogoBox: React.FC<BoxProps & LogoProps> = styled(Box)<
    BoxProps & LogoProps
>`
    overflow: hidden;
    ${fadeIn()}
`;

export const Logo: React.FC<LogoProps & LogoPropType> = ({
    as = 'div',
    styles,
    animated = false,
    thinking = false,
    ...restProps
}) => (
    <>
        <LogoBox as={as} styles={mergeStyles({}, styles)} {...restProps}>
            <AspectRatio ratio="1/1">
                <svg preserveAspectRatio="none" viewBox="0 0 64 64">
                    <BUp
                        points="0,0 0,32 32,32"
                        animated={animated}
                        thinking={thinking}
                    />
                    <BDown
                        points="0,32 0,64 32,64"
                        animated={animated}
                        thinking={thinking}
                    />
                    <D
                        points="32,0 32,64 64,32"
                        animated={animated}
                        thinking={thinking}
                    />
                </svg>
            </AspectRatio>
        </LogoBox>
    </>
);

Logo.displayName = 'Logo';

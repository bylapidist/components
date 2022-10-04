import * as React from 'react';
import styled, {
    css,
    FlattenInterpolation,
    ThemeProps
} from 'styled-components';
import { BaseProps, Theme } from '../types';
import { AspectRatio } from '../aspect-ratio';
import {
    fadeIn,
    slideDown,
    slideRight,
    slideUpLeft,
    thinking
} from './animations';

export interface LogoProps extends React.HTMLProps<HTMLDivElement> {
    readonly animated?: boolean;
    readonly thinking?: boolean;
}

export type StyledLogoProps = BaseProps & LogoProps & ThemeProps<Theme>;

export const StyledLogo = styled.div<StyledLogoProps>`
    ${fadeIn()}
    overflow: hidden;
`;

interface TriangleProps {
    readonly points: string;
    readonly animated: boolean;
    readonly thinking: boolean;
}

const logoAnimation = (
    props: TriangleProps,
    slideAnimation: FlattenInterpolation<ThemeProps<Theme>> | null = null,
    thinkingAnimation: FlattenInterpolation<ThemeProps<Theme>> | null = null,
    delay = '0'
): FlattenInterpolation<ThemeProps<Theme>> => css`
    ${props.animated && !props.thinking && slideAnimation};
    ${props.thinking && thinkingAnimation};
    animation-delay: ${delay};
`;

const Triangle = styled.polygon<TriangleProps>`
    fill: ${(props) => props.color || ''};
`;

const BUp = styled(Triangle)<TriangleProps>`
    ${(props): FlattenInterpolation<ThemeProps<Theme>> =>
        logoAnimation(props, slideRight(), thinking())};
    fill: ${(props) => props.theme.colors.tertiary.base || ''};
`;

const BDown = styled(Triangle)<TriangleProps>`
    ${(props) => logoAnimation(props, slideUpLeft(), thinking(), '0.1s')};
    fill: ${(props) => props.theme.colors.primary.base || ''};
`;

const D = styled(Triangle)<TriangleProps>`
    ${(props) => logoAnimation(props, slideDown(), thinking(), '0.2s')};
    fill: ${(props) => props.theme.colors.secondary.base || ''};
`;

export const Logo = (props: BaseProps & LogoProps) => (
    <StyledLogo {...props} data-testid={props.testId} as={props.as || 'div'}>
        <AspectRatio ratio="1/1">
            <svg preserveAspectRatio="none" viewBox="0 0 64 64">
                <BUp
                    points="0,0 0,32 32,32"
                    animated={props.animated || false}
                    thinking={props.thinking || false}
                />
                <BDown
                    points="0,32 0,64 32,64"
                    animated={props.animated || false}
                    thinking={props.thinking || false}
                />
                <D
                    points="32,0 32,64 64,32"
                    animated={props.animated || false}
                    thinking={props.thinking || false}
                />
            </svg>
        </AspectRatio>
    </StyledLogo>
);

Logo.displayName = 'Logo';

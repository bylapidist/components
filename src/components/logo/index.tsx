import React from 'react';
import styled, {
    css,
    DefaultTheme,
    FlattenInterpolation,
    ThemeProps
} from 'styled-components';
import {
    slideRight,
    slideDown,
    slideUpLeft,
    stripUnit,
    relative,
    thinking,
    PropsWithIdAndClassname
} from '../../utilities';

export interface LogoProps extends PropsWithIdAndClassname {
    readonly bUpColor?: string;
    readonly bDownColor?: string;
    readonly dColor?: string;
    readonly size: string;
    readonly animated?: boolean;
    readonly thinking?: boolean;
}

const bUp = (offset: number): string =>
    `0,0 0,${offset * 0.5} ${offset * 0.5},${offset * 0.5}`;

const bDown = (offset: number): string =>
    `0,${offset * 0.5} 0,${offset} ${offset * 0.5},${offset}`;

const d = (offset: number): string =>
    `${offset * 0.5},0 ${offset * 0.5},${offset} ${offset},${offset * 0.5}`;

interface TriangleProps {
    readonly points: string;
    readonly color: string | undefined;
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

const SVGLogo: React.FC<LogoProps> = ({
    id,
    className,
    bUpColor,
    bDownColor,
    dColor,
    size = '60px',
    animated = false,
    thinking = false
}) => (
    <svg id={id} className={className}>
        <BUp
            points={bUp(stripUnit(size))}
            color={bUpColor}
            animated={animated}
            thinking={thinking}
        />
        <BDown
            points={bDown(stripUnit(size))}
            color={bDownColor}
            animated={animated}
            thinking={thinking}
        />
        <D
            points={d(stripUnit(size))}
            color={dColor}
            animated={animated}
            thinking={thinking}
        />
    </svg>
);

export const Logo: React.FC<LogoProps> = styled(SVGLogo)<LogoProps>`
    ${relative()};

    display: block;
    overflow: hidden;
    width: ${(props): string => props.size || '60px'};
    height: ${(props): string => props.size || '60px'};
`;

Logo.displayName = 'Logo';

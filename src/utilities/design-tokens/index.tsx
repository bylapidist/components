import { defaultTheme } from '../../components/theme-provider';
import {
    css,
    DefaultTheme,
    FlattenInterpolation,
    FlattenSimpleInterpolation,
    keyframes,
    ThemeProps
} from 'styled-components';

export type Position =
    | 'top-right'
    | 'bottom-right'
    | 'top-left'
    | 'bottom-left';

export type Device =
    | 'mobile-small'
    | 'mobile-medium'
    | 'mobile-large'
    | 'tablet-small'
    | 'tablet-medium'
    | 'tablet-large'
    | 'laptop-small'
    | 'laptop-medium'
    | 'laptop-large';

const r = (color: string): number => parseInt(color.slice(1, 3), 16);

const g = (color: string): number => parseInt(color.slice(3, 5), 16);

const b = (color: string): number => parseInt(color.slice(5, 7), 16);

export const opacity = (color: string, opacity: number): string =>
    `rgba(${r(color)}, ${g(color)}, ${b(color)}, ${opacity})`;

export const stripUnit = (value: string): number =>
    parseFloat(value.split('px')[0]);

export const boxShadow = (
    xOffset: string | number,
    yOffset: string | number,
    blurRadius: string | number,
    color: string
): string => `${xOffset} ${yOffset} ${blurRadius} ${color}`;

export const breakpoint = (device: Device = 'laptop-large'): string => {
    switch (device) {
        case 'mobile-small':
            return `(min-width: ${defaultTheme.breakpoints.mobile.s})`;
        case 'mobile-medium':
            return `(min-width: ${defaultTheme.breakpoints.mobile.m})`;
        case 'mobile-large':
            return `(min-width: ${defaultTheme.breakpoints.mobile.l})`;
        case 'tablet-small':
            return `(min-width: ${defaultTheme.breakpoints.tablet.s})`;
        case 'tablet-medium':
            return `(min-width: ${defaultTheme.breakpoints.tablet.m})`;
        case 'tablet-large':
            return `(min-width: ${defaultTheme.breakpoints.tablet.l})`;
        case 'laptop-small':
            return `(min-width: ${defaultTheme.breakpoints.laptop.s})`;
        case 'laptop-medium':
            return `(min-width: ${defaultTheme.breakpoints.laptop.m})`;
        case 'laptop-large':
        default:
            return `(min-width: ${defaultTheme.breakpoints.laptop.l})`;
    }
};

export const defaultAnimationDuration = (): string =>
    'animation-duration: 0.8s';

export const defaultBoxShadow = (): FlattenSimpleInterpolation => css`
    box-shadow: ${boxShadow(
            '0',
            defaultTheme.sizing.xxxs,
            defaultTheme.sizing.xs,
            opacity(defaultTheme.colors.greys.light, 0.025)
        )},
        ${boxShadow(
            '0',
            defaultTheme.sizing.xxxs,
            defaultTheme.sizing.xs,
            opacity(defaultTheme.colors.greys.light, 0.035)
        )};
`;

export const defaultBorderRadius = (): string => `border-radius: 0`;

export const defaultEasing = (): string => `cubic-bezier(0.6, 0.04, 0.98, 0.7)`;

export const defaultTransition = (): FlattenSimpleInterpolation =>
    css`
        transition: all 0.12s ${defaultEasing()};
    `;

const thinkingKeyframes = keyframes`
    0% { opacity: 1 }
    50% { opacity: 0.6 }
    100% { opacity: 1 }
`;

const thinkingAnimation = css`
    ${thinkingKeyframes};
    ${defaultAnimationDuration};
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
`;

export const thinking = (): FlattenInterpolation<
    ThemeProps<DefaultTheme>
> => css`
    animation: ${thinkingAnimation};
`;

const slideRightKeyframes = keyframes`
    0% { transform: translate3d(-100%,0,0) }
    80% { transform: translateZ(0) }
    90% { transform: translate3d(-5%,0,0) }
    to { transform: translateZ(0) }
`;

const slideRightAnimation = css`
    ${slideRightKeyframes};
    ${defaultAnimationDuration};
    animation-iteration-count: 1;
    animation-timing-function: linear;
`;

export const slideRight = (): FlattenInterpolation<
    ThemeProps<DefaultTheme>
> => css`
    animation: ${slideRightAnimation};
`;

const slideUpLeftKeyframes = keyframes`
    0% { transform: translate3d(100%,100%,0) }
    80% { transform: translateZ(0) }
    90% { transform: translate3d(5%,5%,0) }
    to { transform: translateZ(0) }
`;

const slideUpLeftAnimation = css`
    ${slideUpLeftKeyframes};
    ${defaultAnimationDuration};
    animation-iteration-count: 1;
    animation-timing-function: linear;
`;

export const slideUpLeft = (): FlattenInterpolation<
    ThemeProps<DefaultTheme>
> => css`
    animation: ${slideUpLeftAnimation};
`;

const slideDownKeyframes = keyframes`
    0% { transform: translate3d(0,-100%,0) }
    80% { transform: translateZ(0) }
    90% { transform: translate3d(0,-5%,0) }
    to { transform: translateZ(0) }
`;

const slideDownAnimation = css`
    ${slideDownKeyframes};
    animation-iteration-count: 1;
    animation-timing-function: linear;
    animation-duration: 0.4s;
`;

export const slideDown = (): FlattenInterpolation<
    ThemeProps<DefaultTheme>
> => css`
    animation: ${slideDownAnimation};
`;

export const focus = (): FlattenSimpleInterpolation => css`
    outline: ${defaultTheme.sizing.xxxs} transparent;
    outline-offset: ${defaultTheme.sizing.xxxs};

    :focus {
        outline: ${defaultTheme.sizing.xxxs} solid
            ${defaultTheme.colors.yellows.base};
    }
`;

export const relative = (): string => `position: relative`;

export const absolute = (): string => `position: absolute`;

export const position = (position: Position | 'fill-parent'): string => {
    switch (position) {
        case 'top-right':
            return `${absolute()}; top: 0; right: 0`;
        case 'bottom-right':
            return `${absolute()}; bottom: 0; right: 0`;
        case 'top-left':
            return `${absolute()}; top: 0; left: 0`;
        case 'bottom-left':
            return `${absolute()}; bottom: 0; left: 0`;
        case 'fill-parent':
        default:
            return `${absolute()}; top: 0; right: 0; bottom: 0; left: 0`;
    }
};

export const fontFamilyRegular = (): string =>
    `font-family: 'Montserrat', sans-serif`;

export const fontFamilyMedium = (): string =>
    `font-family: 'Montserrat', sans-serif`;

export const fontFamilyBold = (): string =>
    `font-family: 'Montserrat', sans-serif`;

export const fontSizeExtraSmall = (): string =>
    `font-size: ${defaultTheme.sizing.xs}`;

export const fontSizeSmall = (): string =>
    `font-size: ${defaultTheme.sizing.s}`;

export const fontSizeMedium = (): string =>
    `font-size: ${defaultTheme.sizing.m}`;

export const fontSizeLarge = (): string =>
    `font-size: ${defaultTheme.sizing.l}`;

export const fontSizeExtraLarge = (): string =>
    `font-size: ${defaultTheme.sizing.xl}`;

export const fontSizeGigantic = (): string =>
    `font-size: ${defaultTheme.sizing.xxl}`;

export const centeredHorizontal = (): string => `margin: 0 auto`;

export const fillParent = (): FlattenSimpleInterpolation => css`
    ${absolute()};
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
`;

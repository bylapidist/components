import { defaultTheme } from '@lapidist/theme-provider';

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
    `animation-duration: 0.8s`;

export const defaultBoxShadow = (): string => `
    box-shadow: ${boxShadow(
        '0',
        defaultTheme.sizing.xxxs,
        defaultTheme.sizing.xs,
        opacity(defaultTheme.colors.greys.light, 0.025)
    )}, ${boxShadow(
    '0',
    defaultTheme.sizing.xxxs,
    defaultTheme.sizing.xs,
    opacity(defaultTheme.colors.greys.light, 0.035)
)};
`;

export const defaultBorderRadius = (): string => `border-radius: 0`;

export const defaultEasing = (): string => `cubic-bezier(0.6, 0.04, 0.98, 0.7)`;

export const defaultTransition = (): string =>
    `transition: all 0.12s ${defaultEasing()}`;

export const slideRight = (): string => `
    ${defaultAnimationDuration()}
    
    animation-name: slide-right;
    animation-iteration-count: 1;
    animation-timing-function: linear;
    
    @keyframes slide-right {
        0% { transform: translate3d(-100%,0,0) }
        80% { transform: translateZ(0) }
        90% { transform: translate3d(-5%,0,0) }
        to { transform: translateZ(0) }
    }
`;

export const thinking = (): string => `
    ${defaultAnimationDuration()}
        
    animation-name: thinking;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    
    @keyframes thinking {
        0% { opacity: 1 }
        50% { opacity: 0.6 }
        100% { opacity: 1 }
    }
`;

export const slideUpLeft = (): string => `
    ${defaultAnimationDuration()}
    
    animation-name: slide-up-left;
    animation-iteration-count: 1;
    animation-timing-function: linear;
    
    @keyframes slide-up-left {
        0% { transform: translate3d(100%,100%,0) }
        80% { transform: translateZ(0) }
        90% { transform: translate3d(5%,5%,0) }
        to { transform: translateZ(0) }
    }
`;

export const slideDown = (): string => `
    ${defaultAnimationDuration()}
    
    animation-name: slide-down;
    animation-iteration-count: 1;
    animation-timing-function: linear;
    animation-duration: 0.4s;
    
    @keyframes slide-down {
        0% { transform: translate3d(0,-100%,0) }
        80% { transform: translateZ(0) }
        90% { transform: translate3d(0,-5%,0) }
        to { transform: translateZ(0) }
    }
`;

export const rotate = (): string => `
    ${defaultAnimationDuration()}
    
    animation-name: rotate-flip;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-fill-mode: both;
    
    @keyframes rotate-flip {
        0% { transform: scale(1) rotate(0) }
        50% { transform: scale(1.2) rotateZ(180deg) }
        100% { transform: scale(1) rotateZ(360deg) }
    }
`;

export const focus = (): string => `
    outline: ${defaultTheme.sizing.xxxs} transparent;
    outline-offset: ${defaultTheme.sizing.xxxs};
    
    :focus {
        outline: ${defaultTheme.sizing.xxxs} solid ${defaultTheme.colors.yellows.base};
    }
`;

export const relative = (): string => `position: relative`;

export const absolute = (): string => `position: absolute`;

export const position = (position: Position | 'fill-parent'): string => {
    switch (position) {
        case 'top-right':
            return `${absolute()} top: 0; right: 0`;
        case 'bottom-right':
            return `${absolute()} bottom: 0; right: 0`;
        case 'top-left':
            return `${absolute()} top: 0; left: 0`;
        case 'bottom-left':
            return `${absolute()} bottom: 0; left: 0`;
        case 'fill-parent':
        default:
            return `${absolute()} top: 0; right: 0; bottom: 0; left: 0`;
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

export const fillParent = (): string => `
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%
`;

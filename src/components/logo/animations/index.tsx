import {
    css,
    DefaultTheme,
    FlattenInterpolation,
    keyframes,
    ThemeProps
} from 'styled-components';

export const defaultAnimationDuration = (): string =>
    'animation-duration: 0.8s';

const fadeInKeyframes = keyframes`
    0% { opacity: 0 }
    50% { opacity: 0 }
    100% { opacity: 1 }
`;

const fadeInAnimation = css`
    ${fadeInKeyframes};
    animation-duration: 0.5s;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
`;

export const fadeIn = (): FlattenInterpolation<
    ThemeProps<DefaultTheme>
> => css`
    animation: ${fadeInAnimation};
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

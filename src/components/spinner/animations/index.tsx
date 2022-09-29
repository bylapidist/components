import {
    css,
    DefaultTheme,
    FlattenInterpolation,
    keyframes,
    ThemeProps
} from 'styled-components';

const pingPongKeyframes = keyframes`
  0% {
    left: -1%;
    transform: translateX(-1%);
  }
  100% {
    left: 101%;
    transform: translateX(-99%);
  }
`;

const pingPongAnimation = css`
    ${pingPongKeyframes};
    transform: translateX(50%);
    left: -50%;
    animation-iteration-count: infinite;
    animation-duration: 0.6s;
    animation-direction: alternate;
    animation-timing-function: cubic-bezier(0.68, -0.9, 0.32, 1.9);
`;

export const pingPong = (): FlattenInterpolation<
    ThemeProps<DefaultTheme>
> => css`
    animation: ${pingPongAnimation};
`;

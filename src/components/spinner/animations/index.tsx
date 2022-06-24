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
    animation-duration: 0.4s;
    animation-direction: alternate;
    animation-timing-function: ease-in-out;
`;

export const pingPong = (): FlattenInterpolation<
    ThemeProps<DefaultTheme>
> => css`
    animation: ${pingPongAnimation};
`;

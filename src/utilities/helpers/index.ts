import { css, FlattenSimpleInterpolation } from 'styled-components';

export type Position =
    | 'top-right'
    | 'bottom-right'
    | 'top-left'
    | 'bottom-left';

export const r = (color: string): number => parseInt(color.slice(1, 3), 16);

export const g = (color: string): number => parseInt(color.slice(3, 5), 16);

export const b = (color: string): number => parseInt(color.slice(5, 7), 16);

export const opacity = (color: string, opacity: number): string =>
    `rgba(${r(color)}, ${g(color)}, ${b(color)}, ${opacity})`;

export const stripUnit = (value: string): number =>
    parseFloat(value.split('px')[0]);

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

export const centeredHorizontal = (): string => `
    margin-left: auto;
    margin-right: auto;
`;

export const fillParent = (): FlattenSimpleInterpolation => css`
    ${absolute()};
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
`;

export const defaultEasing = (): string => `cubic-bezier(0.6, 0.04, 0.98, 0.7)`;

export const defaultAnimationDuration = (): string =>
    'animation-duration: 0.8s';

export const defaultTransition = (): FlattenSimpleInterpolation =>
    css`
        transition: all 0.12s ${defaultEasing()};
    `;

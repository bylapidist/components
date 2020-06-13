export const stripUnit = (value: string): number =>
    parseFloat(value.split('px')[0]);

export const defaultEasing = (): string => `cubic-bezier(0.6, 0.04, 0.98, 0.7)`;

export const defaultAnimationDuration = (): string =>
    'animation-duration: 0.8s';

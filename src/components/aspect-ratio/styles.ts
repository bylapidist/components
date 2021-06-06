import { Styles } from '@lapidist/styles';
import { AspectRatioProps, Ratio } from './index';

const splitRatio = (ratioProp: string): Ratio => ({
    x: ratioProp.split('/')[0],
    y: ratioProp.split('/')[1] || 1
});

const ratio = (ratioProp: string | Ratio): Ratio =>
    Object.prototype.hasOwnProperty.call(ratioProp, 'x') &&
    Object.prototype.hasOwnProperty.call(ratioProp, 'y')
        ? (ratioProp as Ratio)
        : splitRatio(`${ratioProp}`);

const calculatePaddingBottom = (ratioProp: string | Ratio): string =>
    `calc(100% / (${ratio(ratioProp).x} / ${ratio(ratioProp).y}))`;

export const aspectRatioStyles = ({ ratio }: AspectRatioProps): Styles => ({
    position: 'relative',
    overflow: 'hidden',
    height: 'full',
    pseudo: {
        ':before': {
            display: 'block',
            content: "''",
            paddingBottom: calculatePaddingBottom(ratio || '16/9')
        },
        '> :first-child': {
            position: 'absolute',
            objectFit: 'scale-down',
            objectPosition: '50% 50%',
            top: '0',
            bottom: '0',
            left: '0',
            width: '100%'
        },
        '> img': {
            height: 'auto'
        }
    }
});

import { Styles } from '@lapidist/styles';
import { HeadingProps } from './index';

interface HeadingMapper {
    readonly [level: string]: {
        readonly as: keyof JSX.IntrinsicElements;
        readonly fontSize: string;
    };
}

export const headings: HeadingMapper = {
    1: { as: 'h1', fontSize: '7' },
    2: { as: 'h2', fontSize: '6' },
    3: { as: 'h3', fontSize: '5' },
    4: { as: 'h4', fontSize: '4' },
    5: { as: 'h5', fontSize: '3' },
    6: { as: 'h6', fontSize: '3' }
};

export const headingStyles = (props: HeadingProps): Styles => ({
    fontSize: headings[props.size || '1'].fontSize,
    lineHeight: 'tight'
});

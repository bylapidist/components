import { Styles } from '@lapidist/styles';
import { HeadingProps } from './index';

interface HeadingMapper {
    readonly [level: string]: {
        readonly as: keyof JSX.IntrinsicElements;
        readonly fontSize: string;
    };
}

export const headings: HeadingMapper = {
    1: { as: 'h1', fontSize: '9' },
    2: { as: 'h2', fontSize: '8' },
    3: { as: 'h3', fontSize: '7' },
    4: { as: 'h4', fontSize: '6' },
    5: { as: 'h5', fontSize: '5' },
    6: { as: 'h6', fontSize: '4' }
};

export const headingStyles = (props: HeadingProps): Styles => ({
    fontSize: headings[props.size || '1'].fontSize,
    lineHeight: 'tight'
});

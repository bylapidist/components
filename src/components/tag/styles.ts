import { ColorGroup, getProperty, Styles } from '@lapidist/styles';
import { TagProps } from './index';

interface TagVariantStyles {
    borderColor: ColorGroup | string;
    backgroundColor: ColorGroup | string;
    paddingY: string;
    fontSize: string;
    textColor: ColorGroup | string;
}

const TagColors = (dark: string, base: string) => ({
    borderColor: dark,
    backgroundColor: base,
    textColor: { group: 'base', shade: 'light' }
});

const TagVariants = ({ kind, theme }: TagProps): TagVariantStyles => {
    const { dark, base } = getProperty<{
        [K: string]: string;
    }>(theme, 'colors', kind);

    return {
        fontSize: '1',
        paddingY: '1',
        ...TagColors(dark, base)
    };
};

const TagBaseStyles: Styles = {
    borderWidth: 'px',
    boxShadow: '1',
    textAlign: 'center',
    paddingX: '2',
    borderRadius: '2',
    borderStyle: 'solid'
};

const TagVariantStyles = ({
    borderColor,
    backgroundColor,
    textColor,
    paddingY,
    fontSize
}: TagVariantStyles): Styles => ({
    ...TagBaseStyles,
    borderColor,
    backgroundColor,
    textColor,
    paddingY,
    fontSize
});

export const TagStyles = (props: TagProps): Styles =>
    TagVariantStyles(TagVariants(props));

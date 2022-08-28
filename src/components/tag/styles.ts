import { ColorGroup, getProperty, Styles } from '@lapidist/styles';
import { TagProps } from './index';

interface TagVariantStyles {
    borderColor: ColorGroup | string;
    backgroundColor: ColorGroup | string;
    fontSize: string;
    textColor: ColorGroup | string;
}

const tagColors = (base: string) => ({
    borderColor: { group: 'grey', shade: 'dark' },
    backgroundColor: base,
    textColor: { group: 'base', shade: 'light' }
});

const tagVariants = ({ kind, theme }: TagProps): TagVariantStyles => {
    const { base } = getProperty<{
        [K: string]: string;
    }>(theme, 'colors', kind);

    return {
        fontSize: '1',
        ...tagColors(base)
    };
};

const tagBaseStyles: Styles = {
    borderWidth: '0',
    boxShadow: '1',
    textAlign: 'center',
    fontWeight: '700',
    borderRadius: '3',
    borderStyle: 'solid',
    paddingY: '1'
};

const tagVariantStyles = ({
    borderColor,
    backgroundColor,
    textColor,
    fontSize
}: TagVariantStyles): Styles => ({
    ...tagBaseStyles,
    borderColor,
    backgroundColor,
    textColor,
    fontSize
});

export const tagStyles = (props: TagProps): Styles =>
    tagVariantStyles(tagVariants(props));

export const tagChildrenStyles = (): Styles => ({
    paddingX: '2',
    paddingY: '1'
});

export const tagNamespaceStyles = (): Styles => ({
    fontSize: '1',
    paddingX: '2',
    paddingY: '1',
    textColor: { group: 'base', shade: 'light' },
    backgroundColor: { group: 'grey', shade: 'dark' }
});

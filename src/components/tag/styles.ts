import { ColorGroup, getProperty, Styles } from '@lapidist/styles';
import { TagProps } from './index';

interface TagVariantStyles {
    borderColor: ColorGroup | string;
    backgroundColor: ColorGroup | string;
    fontSize: string;
    textColor: ColorGroup | string;
}

const tagColors = (backgroundColor: string) => ({
    backgroundColor,
    borderColor: { group: 'grey', shade: 'dark' },
    textColor: { group: 'base', shade: 'light' }
});

const tagVariants = ({ kind, theme }: TagProps): TagVariantStyles => {
    const { dark } = getProperty<{
        [K: string]: string;
    }>(theme, 'colors', kind);

    return {
        fontSize: '1',
        ...tagColors(dark)
    };
};

const tagBaseStyles: Styles = {
    borderWidth: '0',
    boxShadow: '1',
    textAlign: 'center',
    fontWeight: '500',
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

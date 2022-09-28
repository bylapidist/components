import { Styles } from '@lapidist/styles';
import { ElevatedProps } from './index';

export const elevatedStyles = ({ elevation }: ElevatedProps): Styles => ({
    boxShadow: elevation
});

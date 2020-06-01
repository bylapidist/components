import React from 'react';
import styled from 'styled-components';
import * as CSS from 'csstype';
import { PropsWithIdAndClassname, PropsWithStyle } from '../../utilities';
import {
    Color,
    getBorderRadius,
    getBorderWidth,
    getColor,
    getSize,
    NumberOrString
} from '../theme-provider/theme';

export interface BoxProps extends PropsWithIdAndClassname, PropsWithStyle {
    readonly backgroundColor?: Color;
    readonly borderColor?: Color;
    readonly borderTopColor?: Color;
    readonly borderRightColor?: Color;
    readonly borderBottomColor?: Color;
    readonly borderLeftColor?: Color;
    readonly borderRadius?: NumberOrString;
    readonly borderWidth?: NumberOrString;
    readonly margin?: NumberOrString;
    readonly padding?: NumberOrString;
}

export const Box: React.FC<BoxProps> = styled.div<BoxProps>`
    ${(props): string =>
        props.backgroundColor
            ? `background-color: ${getColor(
                  props.theme,
                  props.backgroundColor.colorGroup,
                  props.backgroundColor.colorShade
              )}`
            : ''};

    ${(props): string =>
        props.borderColor
            ? `border-color: ${getColor(
                  props.theme,
                  props.borderColor.colorGroup,
                  props.borderColor.colorShade
              )}`
            : ''};

    ${(props): string =>
        props.borderTopColor
            ? `border-top-color: ${getColor(
                  props.theme,
                  props.borderTopColor.colorGroup,
                  props.borderTopColor.colorShade
              )}`
            : ''};

    ${(props): string =>
        props.borderRightColor
            ? `border-right-color: ${getColor(
                  props.theme,
                  props.borderRightColor.colorGroup,
                  props.borderRightColor.colorShade
              )}`
            : ''};

    ${(props): string =>
        props.borderBottomColor
            ? `border-bottom-color: ${getColor(
                  props.theme,
                  props.borderBottomColor.colorGroup,
                  props.borderBottomColor.colorShade
              )}`
            : ''};

    ${(props): string =>
        props.borderLeftColor
            ? `border-left-color: ${getColor(
                  props.theme,
                  props.borderLeftColor.colorGroup,
                  props.borderLeftColor.colorShade
              )}`
            : ''};

    border-radius: ${(props): CSS.BorderRadiusProperty<NumberOrString> =>
        getBorderRadius(props.theme, props.borderRadius || 0)};

    border-width: ${(props): CSS.BorderWidthProperty<NumberOrString> =>
        getBorderWidth(props.theme, props.borderWidth || 0)};

    margin: ${(props): CSS.MarginProperty<NumberOrString> =>
        getSize(props.theme, props.margin || 0)};

    padding: ${(props): CSS.PaddingProperty<NumberOrString> =>
        getSize(props.theme, props.padding || 0)};
`;

Box.displayName = 'Box';

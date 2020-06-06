import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { PropsWithIdAndClassname } from '../../utilities';
import {
    Color,
    getColor,
    getFontFamily,
    getFontSize,
    getFontWeight,
    getLetterSpacing,
    getLineHeight,
    NumberOrString
} from '../theme-provider/theme';

export interface TextProps
    extends PropsWithIdAndClassname,
        PropsWithChildren<{}> {
    readonly fontFamily?: NumberOrString;
    readonly fontWeight?: NumberOrString;
    readonly fontSize?: NumberOrString;
    readonly textColor?: Color;
    readonly lineHeight?: NumberOrString;
    readonly letterSpacing?: NumberOrString;
    readonly textAlign?: 'left' | 'right' | 'center';
}

export const Text: React.FC<TextProps> = styled.div<TextProps>`
    ${(props): string =>
        props.fontFamily
            ? `font-family: ${getFontFamily(props.theme, props.fontFamily)}`
            : `font-family: ${getFontFamily(props.theme, 'sans')}`};

    ${(props): string =>
        props.fontWeight
            ? `font-weight: ${getFontWeight(props.theme, props.fontWeight)}`
            : `font-weight: ${getFontWeight(props.theme, 'normal')}`};

    ${(props): string =>
        props.fontSize
            ? `font-size: ${getFontSize(props.theme, props.fontSize)}`
            : `font-size: ${getFontSize(props.theme, 3)}`};

    ${(props): string =>
        props.textColor
            ? `color: ${getColor(
                  props.theme,
                  props.textColor.colorGroup,
                  props.textColor.colorShade
              )}`
            : `color: ${getColor(props.theme, 'base', 'black')}`};

    ${(props): string =>
        props.lineHeight
            ? `line-height: ${getLineHeight(props.theme, props.lineHeight)}`
            : `line-height: ${getLineHeight(props.theme, 'normal')}`};

    ${(props): string =>
        props.textAlign
            ? `text-align: ${props.textAlign}`
            : `text-align: left`};

    ${(props): string =>
        props.letterSpacing
            ? `letter-spacing: ${getLetterSpacing(
                  props.theme,
                  props.letterSpacing
              )}`
            : `letter-spacing: ${getLetterSpacing(props.theme, 'normal')}`};
`;

Text.displayName = 'Text';

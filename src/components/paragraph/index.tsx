import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import {
    fontFamilyBold,
    fontFamilyRegular,
    fontSizeExtraSmall,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    fontSizeExtraLarge,
    fontSizeGigantic
} from '../design-tokens';
import { defaultTheme } from '../theme-provider';
import { PropsWithIdAndClassname } from '../../utilities';

export type ParagraphWeight = 'regular' | 'bold';

export type ParagraphSize =
    | 'extra-small'
    | 'small'
    | 'medium'
    | 'large'
    | 'extra-large'
    | 'gigantic';

export interface ParagraphProps
    extends PropsWithIdAndClassname,
        PropsWithChildren<{}> {
    /** The Paragraph's font weight. */
    readonly weight?: ParagraphWeight;
    /** The Paragraph's font size. */
    readonly size?: ParagraphSize;
}

export const Paragraph: React.FC<ParagraphProps> = styled.div<ParagraphProps>`
    ${({ weight = 'regular' }): string => {
        switch (weight) {
            case 'bold':
                return `
                    ${fontFamilyBold()};
                    font-weight: 600;
                `;
            case 'regular':
            default:
                return `
                    ${fontFamilyRegular()};
                    font-weight: 400;
                `;
        }
    }};
    ${({ size = 'medium' }): string => {
        switch (size) {
            case 'extra-small':
                return fontSizeExtraSmall();
            case 'small':
                return fontSizeSmall();
            case 'large':
                return fontSizeLarge();
            case 'extra-large':
                return fontSizeExtraLarge();
            case 'gigantic':
                return fontSizeGigantic();
            case 'medium':
            default:
                return fontSizeMedium();
        }
    }};
    color: ${defaultTheme.colors.greys.base};
    margin: 0 0 ${defaultTheme.sizing.m};
    line-height: 1.8;
    letter-spacing: 0.8px;
`;

Paragraph.displayName = 'Paragraph';

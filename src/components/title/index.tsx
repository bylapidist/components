import React from 'react';
import styled from 'styled-components';
import {
    fontFamilyBold,
    fontSizeExtraLarge,
    fontSizeLarge,
    fontSizeMedium,
    fontSizeSmall
} from '../design-tokens';
import { defaultTheme } from '../theme-provider';

export type TitleSize = 1 | 2 | 3 | 4 | 5 | 6;

export interface TitleProps {
    /** The Title's id. */
    readonly id?: string;
    /** The Title's classname. */
    readonly className?: string;
    /** The Title's size. */
    readonly size?: TitleSize;
}

const H1Title: React.FC<TitleProps> = styled.h1`
    ${fontSizeExtraLarge()};
`;
const H2Title: React.FC<TitleProps> = styled.h2`
    ${fontSizeLarge()};
`;
const H3Title: React.FC<TitleProps> = styled.h3`
    ${fontSizeMedium()};
`;
const H4Title: React.FC<TitleProps> = styled.h4`
    ${fontSizeSmall()};
`;
const H5Title: React.FC<TitleProps> = styled.h5`
    ${fontSizeSmall()};
`;
const H6Title: React.FC<TitleProps> = styled.h6`
    ${fontSizeSmall()};
`;

const TitleBySize: React.FC<TitleProps> = ({ id, className, children, size }) =>
    size === 2 ? (
        <H2Title id={id} className={className}>
            {children}
        </H2Title>
    ) : size === 3 ? (
        <H3Title id={id} className={className}>
            {children}
        </H3Title>
    ) : size === 4 ? (
        <H4Title id={id} className={className}>
            {children}
        </H4Title>
    ) : size === 5 ? (
        <H5Title id={id} className={className}>
            {children}
        </H5Title>
    ) : size === 6 ? (
        <H6Title id={id} className={className}>
            {children}
        </H6Title>
    ) : (
        <H1Title id={id} className={className}>
            {children}
        </H1Title>
    );

const Title: React.FC<TitleProps> = styled(TitleBySize)<TitleProps>`
    ${fontFamilyBold()};

    display: block;
    width: 100%;
    margin: 0 0 ${defaultTheme.sizing.xxs};
    color: ${defaultTheme.colors.greys.dark};
    line-height: 1.6;
    letter-spacing: 0.8px;
`;

export default Title;

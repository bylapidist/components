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
import { PropsWithIdAndClassname } from '../../utilities';

export type TitleSize = 1 | 2 | 3 | 4 | 5 | 6;

export interface TitleProps extends PropsWithIdAndClassname {
    /** The Title's size. */
    readonly size?: TitleSize;
}

interface TitleMapper {
    [level: number]: React.FC<TitleProps>;
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

const titles: TitleMapper = {
    1: H1Title,
    2: H2Title,
    3: H3Title,
    4: H4Title,
    5: H5Title,
    6: H6Title
};

export const TitleBySize: React.FC<TitleProps> = ({
    id,
    className,
    children,
    size = 1
}) => {
    const TitleToUse = titles[size];
    return (
        <TitleToUse id={id} className={className}>
            {children}
        </TitleToUse>
    );
};

export const Title: React.FC<TitleProps> = styled(TitleBySize)<TitleProps>`
    ${fontFamilyBold()};

    display: block;
    width: 100%;
    margin: 0 0 ${defaultTheme.sizing.xxs};
    color: ${defaultTheme.colors.greys.dark};
    line-height: 1.6;
    letter-spacing: 0.8px;
`;

Title.displayName = 'Title';

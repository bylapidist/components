import React from 'react';
import styled from 'styled-components';
import { fontFamilyRegular, focus, defaultEasing } from '../design-tokens';
import { defaultTheme } from '../theme-provider';
import { PropsWithIdAndClassname } from '../../utilities';

export interface LinkProps extends PropsWithIdAndClassname {
    /** The Link's title. */
    readonly title: string;
    /** The Link's href. */
    readonly href: string;
}

const LinkContainer: React.FC<LinkProps> = ({ id, className, title, href }) => (
    <a id={id} className={className} href={href}>
        {title}
    </a>
);

export const Link: React.FC<LinkProps> = styled(LinkContainer)<LinkProps>`
    ${fontFamilyRegular()};
    ${focus()};

    display: inline;
    font-size: inherit;
    line-height: inherit;
    letter-spacing: inherit;
    text-decoration: none;
    color: ${defaultTheme.colors.blues.base};
    margin: 0 0 ${defaultTheme.sizing.m};
    transition: color ${defaultEasing()}, border ${defaultEasing()};
    border-bottom: ${defaultTheme.sizing.xxxs} solid
        ${defaultTheme.colors.blues.light};

    :hover {
        color: ${defaultTheme.colors.blues.dark};
        border-bottom: ${defaultTheme.sizing.xxxs} solid
            ${defaultTheme.colors.blues.base};
    }
`;

Link.displayName = 'Link';

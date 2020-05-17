import React from 'react';
import styled from 'styled-components';
import { fontFamilyRegular, focus, defaultEasing } from '../design-tokens';
import { defaultTheme } from '../theme-provider';

export interface LinkProps {
    /** The Link's id. */
    readonly id?: string;
    /** The Link's classname. */
    readonly className?: string;
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

const Link: React.FC<LinkProps> = styled(LinkContainer)<LinkProps>`
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

export default Link;

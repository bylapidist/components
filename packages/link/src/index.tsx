import React from 'react';
import styled from 'styled-components';
import {
    absolute,
    fontFamilyRegular,
    relative,
    focus,
    defaultEasing
} from '@lapidist/design-tokens';
import { defaultTheme } from '@lapidist/theme-provider';

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
    ${relative()};
    ${fontFamilyRegular()};
    ${focus()};

    display: inline;
    font-size: inherit;
    line-height: inherit;
    letter-spacing: inherit;
    text-decoration: none;
    color: ${defaultTheme.colors.blues.base};
    margin: 0 0 ${defaultTheme.sizing.m};
    transition: background-color ${defaultEasing()}, color ${defaultEasing()};

    :after {
        ${absolute()};

        width: 100%;
        height: ${defaultTheme.sizing.xxxs};
        top: 90%;
        left: 0;
        right: 0;
        background: ${defaultTheme.colors.blues.light};
        content: '';
    }

    :hover {
        color: ${defaultTheme.colors.blues.dark};

        :after {
            background: ${defaultTheme.colors.blues.base};
        }
    }
`;

export default Link;

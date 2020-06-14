import React from 'react';
import styled from 'styled-components';
import { defaultEasing } from '../../utilities';
import { Text, TextProps } from '../text';
import { getBorderWidth, getColor } from '../../theme';

export interface LinkProps extends TextProps {
    readonly href: string;
    readonly children: string;
    readonly target?: string;
    readonly rel?: string;
}

const BaseLink: React.FC<LinkProps> = styled.a<LinkProps>`
    text-decoration: none;
    transition: color ${defaultEasing()}, border ${defaultEasing()};

    ${(props): string =>
        `border-bottom: ${getBorderWidth(props.theme, 1)} solid ${getColor(
            props.theme,
            'primary',
            'light'
        )}`};

    ${(props): string =>
        `outline: ${getBorderWidth(props.theme, 1)} solid ${getColor(
            props.theme,
            'base',
            'transparent'
        )}`};

    ${(props): string => `outline-offset: ${getBorderWidth(props.theme, 1)}`};

    ${(props): string =>
        props.textColor
            ? `color: ${getColor(
                  props.theme,
                  props.textColor.colorGroup,
                  props.textColor.colorShade
              )}`
            : `color: ${getColor(props.theme, 'primary', 'base')}`};

    :hover {
        ${(props): string =>
            `border-bottom: ${getBorderWidth(props.theme, 1)} solid ${getColor(
                props.theme,
                'primary',
                'dark'
            )}`};

        ${(props): string =>
            `color: ${getColor(props.theme, 'primary', 'dark')}`};
    }

    :focus {
        ${(props): string =>
            `outline: ${getBorderWidth(props.theme, 1)} solid ${getColor(
                props.theme,
                'secondary',
                'base'
            )}`};
    }
`;

const TextWrapper: React.FC<TextProps> = styled(Text)<TextProps>`
    display: inline;
`;

export const Link: React.FC<LinkProps> = ({
    children,
    href,
    target,
    rel,
    ...restProps
}) => (
    <TextWrapper {...restProps}>
        <BaseLink
            href={href}
            target={target}
            rel={rel}
            fontSize={restProps.fontSize}
            fontWeight={restProps.fontWeight}
        >
            {children}
        </BaseLink>
    </TextWrapper>
);

Link.displayName = 'Link';

import * as React from 'react';
import styled, { ThemeProps } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { StyledElevated, StyledElevatedProps } from '../elevated';
import { Spinner } from '../spinner';
import { StyledText, StyledTextProps } from '../text';
import { Box } from '../box';
import { BaseProps, KindType, Theme } from '../types';
import { backgroundColour, borderColour, textColour } from '../helpers';

export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
    readonly kind: KindType;
    readonly variant: ButtonSize;
    readonly loading?: boolean;
    readonly icon?: IconProp;
}

export type StyledButtonProps = BaseProps & ButtonProps & ThemeProps<Theme>;

const scale = (variant: ButtonSize = 'medium', start = 1): string => {
    switch (variant) {
        case 'small':
            return (start - 1).toString(10);
        case 'medium':
            return start.toString(10);
        case 'large':
        default:
            return (start + 1).toString(10);
    }
};

const Container = styled.div<StyledButtonProps>`
    ${({ theme, loading = false }) => `
        display: flex;
        align-items: center;
        opacity: ${loading ? '0' : '1'};
        border-radius: ${theme.borderRadii['2']};
    `}
`;

const Icon = styled(StyledText)<StyledButtonProps & StyledTextProps>`
    ${({ theme, variant }) => `
        display: flex;
        margin-right: ${theme.sizes['2']};
        font-size: ${theme.fontSizes[scale(variant, 2)]};
    `}
`;

const Children = styled(StyledText)<StyledButtonProps & StyledTextProps>`
    ${({ theme, variant }) => `
        display: flex;
        text-align: center;
        font-weight: ${theme.fontWeights['500']};
        font-size: ${theme.fontSizes[scale(variant, 2)]};
    `}
`;

const Inner = styled(StyledElevated)<StyledButtonProps & StyledElevatedProps>`
    ${({ theme, variant }) => `
        padding: ${theme.sizes[scale(variant, 2)]};
        border-radius: ${theme.borderRadii['2']};
    `}
`;

export const StyledButton = styled.button<StyledButtonProps>`
    ${({ theme, kind }) => `
        display: inline-block;
        position: relative;
        border-style: solid;
        background-color: ${theme.colors.base.light};
        border-width: ${theme.borderWidths['1']};
        border-radius: ${theme.borderRadii['2']};
        color: ${theme.colors[kind].base};
        border-color: ${theme.colors[kind].dark};
        ${textColour(kind === 'primary', theme.colors.base.light)}
        ${textColour(kind === 'secondary', theme.colors.primary.base)}
        ${textColour(kind === 'tertiary', theme.colors.grey.base)}
        ${backgroundColour(kind === 'primary', theme.colors.primary.base)}
        ${borderColour(kind === 'primary', theme.colors.primary.base)}
        ${borderColour(kind === 'secondary', theme.colors.grey.light)}
        ${borderColour(kind === 'tertiary', theme.colors.grey.lightest)}

        :hover {
            cursor: pointer;
            background-color: ${theme.colors.grey.lightest};
            color: ${theme.colors[kind].dark};
            ${textColour(kind === 'primary', theme.colors.base.light)}
            ${textColour(kind === 'secondary', theme.colors.primary.dark)}
            ${textColour(kind === 'tertiary', theme.colors.grey.dark)}
            ${backgroundColour(kind === 'primary', theme.colors.primary.dark)}
        }

        :hover:disabled {
            cursor: not-allowed;
        }

        :disabled {
            opacity: 0.7;
            color: ${theme.colors.grey.dark};
            background-color: ${theme.colors.grey.lightest};
            ${textColour(kind === 'primary', theme.colors.base.light)}
            ${backgroundColour(kind === 'primary', theme.colors.primary.dark)}
        }
    `}
`;

const Loading = styled.div`
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    top: calc(50% - 0.35rem);
`;

export const Button = (props: BaseProps & ButtonProps) => (
    <StyledButton
        {...props}
        data-testid={props.testId}
        as={props.as || 'button'}
    >
        <Inner kind={props.kind} variant={props.variant} elevation={2}>
            <Box gutterX={2}>
                <Container
                    kind={props.kind}
                    variant={props.variant}
                    loading={props.loading}
                >
                    {props.icon && (
                        <Icon kind={props.kind} variant={props.variant}>
                            <FontAwesomeIcon icon={props.icon} />
                        </Icon>
                    )}
                    {props.children && (
                        <Children kind={props.kind} variant={props.variant}>
                            {props.children}
                        </Children>
                    )}
                </Container>
                {props.loading && (
                    <Loading>
                        <Spinner />
                    </Loading>
                )}
            </Box>
        </Inner>
    </StyledButton>
);

Button.displayName = 'Button';

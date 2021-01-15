import React from 'react';
import deepMerge from 'lodash.merge';
import { Text } from '../text';
import { BoxProps } from '../box';
import { getProperty, Styles, Theme } from '@lapidist/styles';
import { withTheme } from 'styled-components';

export type ButtonPropType = BoxProps &
    React.ButtonHTMLAttributes<HTMLButtonElement> &
    React.HTMLProps<HTMLButtonElement>;

export interface ButtonProps {
    readonly kind: string;
    readonly small?: boolean;
    readonly ghost?: boolean;
    readonly theme: Theme;
}

export const buttonStyles = (props: ButtonProps): Styles => {
    const { kind, small, ghost, theme } = props;

    const colorByKind: { [K: string]: string } = getProperty<{
        [K: string]: string;
    }>(theme, 'colors', kind);

    return {
        borderWidth: '1',
        borderRadius: '2',
        borderStyle: 'solid',
        borderColor: colorByKind['dark'],
        backgroundColor: ghost ? 'transparent' : colorByKind['base'],
        textColor: ghost
            ? { group: 'grey', shade: 'dark' }
            : { group: 'base', shade: 'light' },
        textAlign: 'center',
        paddingX: '4',
        paddingY: small ? '1' : '2',
        fontSize: small ? '2' : '3',
        pseudo: {
            ':hover': {
                cursor: 'pointer',
                backgroundColor: colorByKind['dark'],
                textColor: { group: 'base', shade: 'light' }
            },
            ':hover:disabled': {
                cursor: 'not-allowed',
                backgroundColor: ghost
                    ? { group: 'grey', shade: 'lightest' }
                    : colorByKind['dark']
            },
            ':disabled': {
                opacity: '0.7',
                textColor: ghost
                    ? { group: 'grey', shade: 'dark' }
                    : { group: 'base', shade: 'light' },
                backgroundColor: ghost
                    ? { group: 'grey', shade: 'lightest' }
                    : colorByKind['dark']
            }
        }
    };
};

const BaseButton: React.FC<ButtonPropType & ButtonProps> = ({
    as = 'button',
    styles,
    ...restProps
}) => {
    return (
        <Text
            as={as}
            styles={deepMerge(buttonStyles(restProps), styles)}
            {...restProps}
        />
    );
};

export const Button = withTheme(BaseButton);

Button.displayName = 'Button';

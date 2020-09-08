import React from 'react';
import deepMerge from 'lodash.merge';
import { Text } from '../text';
import { BoxProps } from '../box';
import { getProperty, Theme } from '@lapidist/styles';
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

const BaseButton: React.FC<ButtonPropType & ButtonProps> = ({
    as = 'button',
    styles,
    theme,
    small,
    ghost,
    kind,
    ...restProps
}) => {
    const color: { [K: string]: string } = getProperty<{
        [K: string]: string;
    }>(theme, 'colors', kind);

    return (
        <Text
            as={as}
            styles={deepMerge(
                {
                    borderWidth: '1',
                    borderRadius: '2',
                    borderStyle: 'solid',
                    borderColor: color['dark'],
                    backgroundColor: ghost ? 'transparent' : color['base'],
                    textColor: ghost
                        ? { group: 'grey', shade: 'dark' }
                        : { group: 'base', shade: 'light' },
                    textAlign: 'center',
                    paddingX: '2',
                    paddingY: small ? '1' : '2',
                    fontSize: small ? '2' : '3',
                    pseudo: {
                        ':hover': {
                            cursor: 'pointer',
                            backgroundColor: color['dark'],
                            textColor: { group: 'base', shade: 'light' }
                        },
                        ':hover:disabled': {
                            cursor: 'not-allowed',
                            backgroundColor: ghost
                                ? { group: 'grey', shade: 'lightest' }
                                : color['dark']
                        },
                        ':disabled': {
                            opacity: '0.7',
                            textColor: ghost
                                ? { group: 'grey', shade: 'dark' }
                                : { group: 'base', shade: 'light' },
                            backgroundColor: ghost
                                ? { group: 'grey', shade: 'lightest' }
                                : color['dark']
                        }
                    }
                },
                styles
            )}
            {...restProps}
        />
    );
};

export const Button = withTheme(BaseButton);

Button.displayName = 'Button';

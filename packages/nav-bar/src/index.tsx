import React from 'react';
import styled from 'styled-components';
import Panel from '@lapidist/panel';
import { defaultTheme } from '@lapidist/theme-provider';

export type NavBarPosition =
    | 'fixed'
    | 'absolute'
    | 'sticky'
    | 'static'
    | 'relative';

export interface NavBarProps {
    /** The NavBar's id. */
    readonly id?: string;
    /** The NavBar's classname. */
    readonly className?: string;
    /** The NavBar's children. */
    readonly children?: React.ReactNode;
    /** The NavBar's color. */
    readonly color?: string;
    /** The NavBar's position state. */
    readonly position?: NavBarPosition;
}

const navBarPosition = (position: NavBarPosition): string => {
    switch (position) {
        case 'absolute':
        case 'fixed':
        case 'sticky':
            return `
                position: ${position};
                top: 0;
                left: auto;
                right: 0;
            `;
        case 'relative':
            return `position: relative`;
        case 'static':
            return `
                position: static;
                transform: translateZ(0);
            `;
    }
};

const NavBar: React.FC<NavBarProps> = styled.div<NavBarProps>`
    display: flex;
    flex-direction: column;
    width: 100%;
    z-index: 1000;
    flex-shrink: 0;
    ${({ position = 'fixed' }): string => navBarPosition(position)}
`;

export const PrimaryNavBar: React.FC<NavBarProps> = (props) => (
    <NavBar {...props}>
        <Panel color={defaultTheme.colors.blues.base}>{props.children}</Panel>
    </NavBar>
);

export const SecondaryNavBar: React.FC<NavBarProps> = (props) => (
    <NavBar {...props}>
        <Panel color={defaultTheme.colors.greens.base}>{props.children}</Panel>
    </NavBar>
);

export const TertiaryNavBar: React.FC<NavBarProps> = (props) => (
    <NavBar {...props}>
        <Panel color={defaultTheme.colors.yellows.base}>{props.children}</Panel>
    </NavBar>
);

export default PrimaryNavBar;

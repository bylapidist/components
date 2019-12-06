import React from 'react';
import styled from 'styled-components';
import { absolute, fillParent } from '@lapidist/design-tokens';
import { defaultTheme } from '@lapidist/theme-provider';
import Logo, { LogoProps } from '@lapidist/logo';

export interface LoadingProps {
    /** The Loading's id. */
    readonly id?: string;
    /** The Loading's classname. */
    readonly className?: string;
    /** The Loading's size. */
    readonly size?: string;
    /** The Loading's color. */
    readonly color?: string;
}

const LoadingLogo: React.FC<LogoProps> = styled(Logo)`
    ${absolute()};
    ${fillParent()};

    margin: auto;
    opacity: 0.9;
    width: ${(props): string => props.size};
`;

const LoadingContainer: React.FC<LoadingProps> = ({
    id,
    className,
    size = defaultTheme.sizing.xl,
    color
}) => (
    <div id={id} className={className}>
        <LoadingLogo
            bUpColor={color}
            bDownColor={color}
            dColor={color}
            size={size}
            animated={false}
            thinking={true}
        />
    </div>
);

const Loading: React.FC<LoadingProps> = styled(LoadingContainer)<
    LoadingProps
>`
    ${absolute()};
    ${fillParent()};
`;

export default Loading;

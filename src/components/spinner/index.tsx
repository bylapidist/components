import * as React from 'react';
import styled, { css, keyframes, ThemeProps } from 'styled-components';
import { Theme } from '@lapidist/styles';
import { BaseProps } from '../shared-types';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SpinnerProps extends React.HTMLProps<HTMLDivElement> {}

export type StyledSpinnerProps = BaseProps & SpinnerProps & ThemeProps<Theme>;

const pingPongKeyframes = keyframes`
    0% {
        left: -1%;
        transform: translateX(-1%);
    }
    100% {
        left: 101%;
        transform: translateX(-99%);
    }
`;

const pingPongAnimation = css`
    ${pingPongKeyframes};
    transform: translateX(50%);
    left: -50%;
    animation-iteration-count: infinite;
    animation-duration: 0.6s;
    animation-direction: alternate;
    animation-timing-function: cubic-bezier(0.68, -0.9, 0.32, 1.9);
`;

const PingPongAnimation = styled.div<StyledSpinnerProps>`
    animation: ${pingPongAnimation};
    ${({ theme }) => `
        position: relative;
        top: -1px;
        left: 0;
        width: ${theme.sizes['6']};
        height: ${theme.sizes['3']};
        background-color: ${theme.colors.grey.light};
        border: ${theme.sizes.px} solid ${theme.colors.grey.light};
        border-radius: ${theme.borderRadii['3']};
    `}
`;

const SpinnerInner = styled.div<StyledSpinnerProps>`
    ${({ theme }) => `
        width: ${theme.widths.full};
        height: ${theme.sizes['3']};
        background-color: ${theme.colors.grey.lightest};
        border: ${theme.sizes.px} solid ${theme.colors.grey.light};
        border-radius: ${theme.borderRadii['3']};
    `}
`;

const SpinnerOuter = styled.div<StyledSpinnerProps>`
    ${({ theme }) => `
        display: flex;
        position: relative;
        overflow: hidden;
        align-items: center;
        width: ${theme.widths.full};
        border-radius: ${theme.borderRadii['3']};
        box-shadow: ${theme.boxShadows['1']};
    `}
`;

export const StyledSpinner = styled.div<StyledSpinnerProps>``;

export const Spinner = (props: BaseProps & SpinnerProps) => (
    <StyledSpinner {...props} data-testid={props.testId} as={props.as || 'div'}>
        <SpinnerOuter>
            <SpinnerInner>
                <PingPongAnimation />
            </SpinnerInner>
        </SpinnerOuter>
    </StyledSpinner>
);

Spinner.displayName = 'Spinner';

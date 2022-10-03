import * as React from 'react';
import styled from 'styled-components';
// import { mergeStyles } from '@lapidist/styles';
import { Box, BoxProps } from '../box';
import { pingPong } from './animations';
// import {
//     spinnerBoxStyles,
//     spinnerInnerStyles,
//     spinnerPingPongStyles
// } from './styles';

export type SpinnerPropType = BoxProps & React.HTMLProps<HTMLDivElement>;

const PingPong: React.FC<
    BoxProps & SpinnerPropType & React.HTMLProps<HTMLDivElement>
> = styled(Box)<BoxProps & SpinnerPropType>`
    ${pingPong()}
`;

export const Spinner: React.FC<SpinnerPropType> = ({
    as = 'div',
    // styles,
    ...restProps
}) => (
    <>
        <Box
            as={as}
            // styles={mergeStyles({}, styles)}
            {...restProps}
        >
            <Box
            // styles={spinnerBoxStyles()}
            >
                <Box
                // styles={spinnerInnerStyles()}
                >
                    <PingPong
                    // styles={spinnerPingPongStyles()}
                    />
                </Box>
            </Box>
        </Box>
    </>
);

Spinner.displayName = 'Spinner';

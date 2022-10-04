import * as React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from '../theme-provider';
import { StyledBox, StyledBoxProps } from '../box';
import { BaseProps } from '../shared-types';
import { Spinner, SpinnerProps } from './index';

export default {
    title: 'Components/Spinner',
    component: Spinner,
    decorators: [(getStory) => <ThemeProvider>{getStory()}</ThemeProvider>]
};

const defaultArgs: BaseProps & SpinnerProps = {};

const Container = styled(StyledBox)<StyledBoxProps>`
    ${({ theme }) => `
        width: ${theme.sizes['16']};
    `}
`;

const DefaultTemplate = (args) => (
    <Container>
        <Spinner {...args} />
    </Container>
);

export const Default = DefaultTemplate.bind({});
Default.args = {
    ...defaultArgs
};

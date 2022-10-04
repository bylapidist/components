import * as React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from '../theme-provider';
import { BaseProps } from '../shared-types';
import { StyledBox, StyledBoxProps } from '../box';
import { Logo, LogoProps } from './index';

export default {
    title: 'Components/Logo',
    component: Logo,
    decorators: [(getStory) => <ThemeProvider>{getStory()}</ThemeProvider>]
};

const defaultArgs: BaseProps & LogoProps = {
    as: 'div',
    testId: 'Logo'
};

const Container = styled(StyledBox)<StyledBoxProps>`
    ${({ theme }) => `
        width: ${theme.sizes['16']};
    `}
`;

const DefaultTemplate = (args) => (
    <Container>
        <Logo {...args} />
    </Container>
);

export const Default = DefaultTemplate.bind({});
Default.args = {
    ...defaultArgs
};

export const Animated = DefaultTemplate.bind({});
Animated.args = {
    ...defaultArgs,
    animated: true
};

export const Thinking = DefaultTemplate.bind({});
Thinking.args = {
    ...defaultArgs,
    thinking: true
};

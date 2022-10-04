import * as React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from '../theme-provider';
import { WithParagraphs } from '../text/Text.stories';
import { StyledTextProps } from '../text';
import { BaseProps } from '../types';
import { Heading, HeadingProps } from './index';

export default {
    title: 'Components/Heading',
    component: Heading,
    decorators: [(getStory) => <ThemeProvider>{getStory()}</ThemeProvider>]
};

const DefaultTemplate = (args) => (
    <Heading {...args}>Heading {args?.size}</Heading>
);

const defaultArgs: BaseProps & HeadingProps = {
    as: 'h1',
    testId: 'Heading',
    size: 1
};

const MockText = styled(WithParagraphs)<StyledTextProps>`
    ${({ theme }) => `
        margin-bottom: ${theme.sizes['4']};
    `}
`;

export const Default = () => {
    return (
        <>
            <DefaultTemplate size={1} />
            <MockText />
            <DefaultTemplate size={2} />
            <MockText />
            <DefaultTemplate size={3} />
            <MockText />
            <DefaultTemplate size={4} />
            <MockText />
            <DefaultTemplate size={5} />
            <MockText />
            <DefaultTemplate size={6} />
            <MockText />
        </>
    );
};
Default.args = {};

export const Level1 = DefaultTemplate.bind({});
Level1.args = {
    ...defaultArgs
};

export const Level2 = DefaultTemplate.bind({});
Level2.args = {
    ...defaultArgs,
    as: 'h2',
    size: 2
};

export const Level3 = DefaultTemplate.bind({});
Level3.args = {
    ...defaultArgs,
    as: 'h3',
    size: 3
};

export const Level4 = DefaultTemplate.bind({});
Level4.args = {
    ...defaultArgs,
    as: 'h4',
    size: 4
};

export const Level5 = DefaultTemplate.bind({});
Level5.args = {
    ...defaultArgs,
    as: 'h5',
    size: 5
};

export const Level6 = DefaultTemplate.bind({});
Level6.args = {
    ...defaultArgs,
    as: 'h6',
    size: 6
};

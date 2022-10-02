import * as React from 'react';
import { ThemeProvider } from '../theme-provider';
import { Heading, HeadingProps, BaseProps } from './index';

export default {
    title: 'Components/Heading',
    component: Heading,
    decorators: [(getStory) => <ThemeProvider>{getStory()}</ThemeProvider>]
};

const DefaultTemplate = (args) => (
    <Heading {...args}>Heading {args?.size}</Heading>
);

const defaultArgs: HeadingProps & BaseProps = {
    as: 'h1',
    testId: 'Heading',
    size: 1
};

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

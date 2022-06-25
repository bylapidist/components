import * as React from 'react';
import { ThemeProvider } from '../theme-provider';
import { Heading } from './index';

export default {
    title: 'Components/Heading',
    component: Heading,
    decorators: [(getStory) => <ThemeProvider>{getStory()}</ThemeProvider>]
};

const templateStyles = {};

const DefaultTemplate = (args) => (
    <Heading {...args}>Heading {args?.size}</Heading>
);

export const Level1 = DefaultTemplate.bind({});
Level1.args = {
    size: 1,
    styles: templateStyles
};

export const Level2 = DefaultTemplate.bind({});
Level2.args = {
    size: 2,
    styles: templateStyles
};

export const Level3 = DefaultTemplate.bind({});
Level3.args = {
    size: 3,
    styles: templateStyles
};

export const Level4 = DefaultTemplate.bind({});
Level4.args = {
    size: 4,
    styles: templateStyles
};

export const Level5 = DefaultTemplate.bind({});
Level5.args = {
    size: 5,
    styles: templateStyles
};

export const Level6 = DefaultTemplate.bind({});
Level6.args = {
    size: 6,
    styles: templateStyles
};

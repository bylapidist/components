import * as React from 'react';
import type { Meta, StoryObj, StoryFn } from '@storybook/react-vite';
import { BaseProps } from '../types';
import ThemeProvider from '../ThemeProvider';
import Text, { TextProps } from './index';

export default {
    title: 'Components/Text',
    component: Text,
    decorators: [(getStory) => <ThemeProvider>{getStory()}</ThemeProvider>]
} as Meta;

const defaultArgs: BaseProps & TextProps = {
    as: 'div',
    testId: 'Text'
};

const DefaultTemplate: StoryFn<BaseProps & TextProps> = (args) => (
    <Text {...args}>
        Nunc porttitor lectus ex, eu pharetra elit placerat non. Suspendisse nec
        ultrices augue, et varius velit. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae; Morbi
        sollicitudin sed turpis et vulputate. Nam consequat porttitor
        scelerisque. Nulla ultricies enim at eros accumsan interdum. Aenean
        egestas enim mi, nec tincidunt libero gravida et.
    </Text>
);

const ParagraphTemplate: StoryFn<BaseProps & TextProps> = (args) => (
    <Text {...args}>
        <p>
            Nunc porttitor lectus ex, eu pharetra elit placerat non. Suspendisse
            nec ultrices augue, et varius velit. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae.
        </p>
        <p>
            Morbi sollicitudin sed turpis et vulputate. Nam consequat porttitor
            scelerisque. Nulla ultricies enim at eros accumsan interdum. Aenean
            egestas enim mi, nec tincidunt libero gravida et.
        </p>
    </Text>
);

export const Default: StoryObj<BaseProps & TextProps> = DefaultTemplate.bind(
    {}
);
Default.args = {
    ...defaultArgs
};

export const WithParagraphs: StoryObj<BaseProps & TextProps> =
    ParagraphTemplate.bind({});
WithParagraphs.args = {
    ...defaultArgs
};

import React from 'react';
import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { BaseProps } from '../types';
import ThemeProvider from '../ThemeProvider';
import Text, { TextProps } from './index';

export default {
    title: 'Typography/Text',
    component: Text,
    decorators: [(getStory) => <ThemeProvider>{getStory()}</ThemeProvider>]
} as Meta<typeof Text>;

const defaultArgs: BaseProps & TextProps = {
    as: 'p',
    testId: 'Text',
    size: 'medium',
    weight: 'regular',
    family: 'body'
};

const DefaultTemplate: StoryFn<BaseProps & TextProps> = (args) => (
    <Text {...args}>
        Nunc porttitor lectus ex, eu pharetra elit placerat non. Suspendisse nec
        ultrices augue, et varius velit. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae.
    </Text>
);

export const SmallSize: StoryObj<BaseProps & TextProps> = {
    render: DefaultTemplate,

    args: {
        ...defaultArgs,
        size: 'small'
    }
};

export const MediumSize: StoryObj<BaseProps & TextProps> = {
    render: DefaultTemplate,

    args: {
        ...defaultArgs,
        size: 'medium'
    }
};

export const LargeSize: StoryObj<BaseProps & TextProps> = {
    render: DefaultTemplate,

    args: {
        ...defaultArgs,
        size: 'large'
    }
};

export const RegularWeight: StoryObj<BaseProps & TextProps> = {
    render: DefaultTemplate,

    args: {
        ...defaultArgs,
        weight: 'regular'
    }
};

export const MediumWeight: StoryObj<BaseProps & TextProps> = {
    render: DefaultTemplate,

    args: {
        ...defaultArgs,
        weight: 'medium'
    }
};

export const BoldWeight: StoryObj<BaseProps & TextProps> = {
    render: DefaultTemplate,

    args: {
        ...defaultArgs,
        weight: 'bold'
    }
};

export const BodyFamily: StoryObj<BaseProps & TextProps> = {
    render: DefaultTemplate,

    args: {
        ...defaultArgs,
        family: 'body'
    }
};

export const HeadingFamily: StoryObj<BaseProps & TextProps> = {
    render: DefaultTemplate,

    args: {
        ...defaultArgs,
        family: 'heading'
    }
};

export const SerifFamily: StoryObj<BaseProps & TextProps> = {
    render: DefaultTemplate,

    args: {
        ...defaultArgs,
        family: 'serif'
    }
};

export const MonoFamily: StoryObj<BaseProps & TextProps> = {
    render: DefaultTemplate,

    args: {
        ...defaultArgs,
        family: 'mono'
    }
};

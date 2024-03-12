import React from 'react';
import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { BaseProps } from '../types';
import ThemeProvider from '../ThemeProvider';
import Heading, { HeadingProps } from './index';

export default {
    title: 'Typography/Heading',
    component: Heading,
    decorators: [(getStory) => <ThemeProvider>{getStory()}</ThemeProvider>]
} as Meta<typeof Heading>;

const defaultArgs: BaseProps & HeadingProps = {
    as: 'h1',
    testId: 'Heading',
    size: 'large',
    family: 'heading',
    weight: 'regular'
};

const DefaultTemplate: StoryFn<BaseProps & HeadingProps> = (args) => (
    <Heading {...args}>Heading {args?.size}</Heading>
);

export const LargeSize: StoryObj<BaseProps & HeadingProps> = {
    render: DefaultTemplate,

    args: {
        ...defaultArgs
    }
};

export const MediumSize: StoryObj<BaseProps & HeadingProps> = {
    render: DefaultTemplate,

    args: {
        ...defaultArgs,
        size: 'medium'
    }
};

export const SmallSize: StoryObj<BaseProps & HeadingProps> = {
    render: DefaultTemplate,

    args: {
        ...defaultArgs,
        size: 'small'
    }
};

export const RegularWeight: StoryObj<BaseProps & HeadingProps> = {
    render: DefaultTemplate,

    args: {
        ...defaultArgs,
        weight: 'regular'
    }
};

export const MediumWeight: StoryObj<BaseProps & HeadingProps> = {
    render: DefaultTemplate,

    args: {
        ...defaultArgs,
        weight: 'medium'
    }
};

export const BoldWeight: StoryObj<BaseProps & HeadingProps> = {
    render: DefaultTemplate,

    args: {
        ...defaultArgs,
        weight: 'bold'
    }
};

export const BodyFamily: StoryObj<BaseProps & HeadingProps> = {
    render: DefaultTemplate,

    args: {
        ...defaultArgs,
        family: 'body'
    }
};

export const HeadingFamily: StoryObj<BaseProps & HeadingProps> = {
    render: DefaultTemplate,

    args: {
        ...defaultArgs,
        family: 'heading'
    }
};

export const SerifFamily: StoryObj<BaseProps & HeadingProps> = {
    render: DefaultTemplate,

    args: {
        ...defaultArgs,
        family: 'serif'
    }
};

export const MonoFamily: StoryObj<BaseProps & HeadingProps> = {
    render: DefaultTemplate,

    args: {
        ...defaultArgs,
        family: 'mono'
    }
};

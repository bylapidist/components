import React from 'react';
import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { BaseProps } from '../types';
import ThemeProvider from '../ThemeProvider';
import Text from '../Text';
import Box, { BoxProps } from './index';

export default {
    title: 'Primitives/Box',
    component: Box,
    decorators: [(getStory) => <ThemeProvider>{getStory()}</ThemeProvider>]
} as Meta<typeof Box>;

const defaultArgs: BaseProps & BoxProps = {
    as: 'div',
    testId: 'Box',
    gutter: undefined,
    gutterX: undefined,
    gutterY: undefined,
    elevation: undefined,
    roundness: undefined
};

const DefaultTemplate: StoryFn<BaseProps & BoxProps> = (args) => (
    <Box {...args}>
        <Text>
            Nunc porttitor lectus ex, eu pharetra elit placerat non. Suspendisse
            nec ultrices augue, et varius velit. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae.
        </Text>
    </Box>
);

export const NoGutter: StoryObj<BaseProps & BoxProps> = {
    render: DefaultTemplate,

    args: {
        ...defaultArgs,
        elevation: 'small'
    }
};

export const SmallGutter: StoryObj<BaseProps & BoxProps> = {
    render: DefaultTemplate,

    args: {
        ...defaultArgs,
        gutter: 'small',
        elevation: 'small'
    }
};

export const MediumGutter: StoryObj<BaseProps & BoxProps> = {
    render: DefaultTemplate,

    args: {
        ...defaultArgs,
        gutter: 'medium',
        elevation: 'small'
    }
};

export const LargeGutter: StoryObj<BaseProps & BoxProps> = {
    render: DefaultTemplate,

    args: {
        ...defaultArgs,
        gutter: 'large',
        elevation: 'small'
    }
};

export const NoElevation: StoryObj<BaseProps & BoxProps> = {
    render: DefaultTemplate,

    args: {
        ...defaultArgs,
        gutter: 'medium',
        elevation: 'small'
    }
};

export const SmallElevation: StoryObj<BaseProps & BoxProps> = {
    render: DefaultTemplate,

    args: {
        ...defaultArgs,
        elevation: 'small',
        gutter: 'medium'
    }
};

export const MediumElevation: StoryObj<BaseProps & BoxProps> = {
    render: DefaultTemplate,

    args: {
        ...defaultArgs,
        elevation: 'medium',
        gutter: 'medium'
    }
};

export const LargeElevation: StoryObj<BaseProps & BoxProps> = {
    render: DefaultTemplate,

    args: {
        ...defaultArgs,
        elevation: 'large',
        gutter: 'medium'
    }
};

export const NoRoundness: StoryObj<BaseProps & BoxProps> = {
    render: DefaultTemplate,

    args: {
        ...defaultArgs,
        gutter: 'medium',
        elevation: 'medium',
        roundness: 'none'
    }
};

export const SmallRoundness: StoryObj<BaseProps & BoxProps> = {
    render: DefaultTemplate,

    args: {
        ...defaultArgs,
        gutter: 'medium',
        elevation: 'medium',
        roundness: 'small'
    }
};

export const MediumRoundness: StoryObj<BaseProps & BoxProps> = {
    render: DefaultTemplate,

    args: {
        ...defaultArgs,
        gutter: 'medium',
        elevation: 'medium',
        roundness: 'medium'
    }
};

export const LargeRoundness: StoryObj<BaseProps & BoxProps> = {
    render: DefaultTemplate,

    args: {
        ...defaultArgs,
        gutter: 'medium',
        elevation: 'medium',
        roundness: 'large'
    }
};

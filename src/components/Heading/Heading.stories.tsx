import * as React from 'react';
import type { Meta, StoryObj, StoryFn } from '@storybook/react-vite';
import { BaseProps } from '../types';
import Heading, { HeadingProps } from './index';

export default {
    title: 'Components/Heading',
    component: Heading
} as Meta;

const defaultArgs: BaseProps & HeadingProps = {
    as: 'h1',
    testId: 'Heading',
    size: 1
};

const DefaultTemplate: StoryFn<BaseProps & HeadingProps> = (args) => (
    <Heading {...args}>Heading {args?.size}</Heading>
);

export const Level1: StoryObj<BaseProps & HeadingProps> = DefaultTemplate.bind(
    {}
);
Level1.args = {
    ...defaultArgs
};

export const Level2: StoryObj<BaseProps & HeadingProps> = DefaultTemplate.bind(
    {}
);
Level2.args = {
    ...defaultArgs,
    as: 'h2',
    size: 2
};

export const Level3: StoryObj<BaseProps & HeadingProps> = DefaultTemplate.bind(
    {}
);
Level3.args = {
    ...defaultArgs,
    as: 'h3',
    size: 3
};

export const Level4: StoryObj<BaseProps & HeadingProps> = DefaultTemplate.bind(
    {}
);
Level4.args = {
    ...defaultArgs,
    as: 'h4',
    size: 4
};

export const Level5: StoryObj<BaseProps & HeadingProps> = DefaultTemplate.bind(
    {}
);
Level5.args = {
    ...defaultArgs,
    as: 'h5',
    size: 5
};

export const Level6: StoryObj<BaseProps & HeadingProps> = DefaultTemplate.bind(
    {}
);
Level6.args = {
    ...defaultArgs,
    as: 'h6',
    size: 6
};

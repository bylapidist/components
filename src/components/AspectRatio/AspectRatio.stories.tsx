import * as React from 'react';
import type { Meta, StoryObj, StoryFn } from '@storybook/react-vite';
import { BaseProps } from '../types';
import AspectRatio, { AspectRatioProps } from './index';

export default {
    title: 'Components/AspectRatio',
    component: AspectRatio
} as Meta;

const defaultArgs: BaseProps & AspectRatioProps = {
    as: 'div',
    testId: 'AspectRatio',
    ratio: '1/1'
};

const DefaultTemplate: StoryFn<BaseProps & AspectRatioProps> = (args) => (
    <AspectRatio {...args}>Hello world</AspectRatio>
);

const ImageTemplate: StoryFn<BaseProps & AspectRatioProps> = (args) => (
    <AspectRatio {...args}>
        <img src="https://placekitten.com/800/800" alt="A pretty cat" />
    </AspectRatio>
);

export const Default: StoryObj<BaseProps & AspectRatioProps> =
    DefaultTemplate.bind({});
Default.args = {
    ...defaultArgs
};

export const WithImage: StoryObj<BaseProps & AspectRatioProps> =
    ImageTemplate.bind({});
WithImage.args = {
    ...defaultArgs,
    ratio: '16/9'
};

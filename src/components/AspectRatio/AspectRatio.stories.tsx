import * as React from 'react';
import { BaseProps } from '../types';
import AspectRatio, { AspectRatioProps } from './index';

export default {
    title: 'Components/AspectRatio',
    component: AspectRatio
};

const defaultArgs: BaseProps & AspectRatioProps = {
    as: 'div',
    testId: 'AspectRatio',
    ratio: '1/1'
};

const DefaultTemplate = (args: BaseProps & AspectRatioProps) => (
    <AspectRatio {...args}>Hello world</AspectRatio>
);

const ImageTemplate = (args: BaseProps & AspectRatioProps) => (
    <AspectRatio {...args}>
        <img src="https://placekitten.com/800/800" alt="A pretty cat" />
    </AspectRatio>
);

export const Default = DefaultTemplate.bind({});
Default.args = {
    ...defaultArgs
};

export const WithImage = ImageTemplate.bind({});
WithImage.args = {
    ...defaultArgs,
    ratio: '16/9'
};

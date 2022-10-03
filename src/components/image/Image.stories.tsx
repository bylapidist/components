import * as React from 'react';
import { BaseProps } from '../shared-types';
import { ThemeProvider } from '../theme-provider';
import { Image, ImageProps } from './index';

export default {
    title: 'Components/Image',
    component: Image,
    decorators: [(getStory) => <ThemeProvider>{getStory()}</ThemeProvider>]
};

const defaultArgs: BaseProps & ImageProps = {
    as: 'img',
    src: 'https://placekitten.com/800/450',
    alt: 'A pretty cat'
};

const DefaultTemplate = (args) => <Image {...args} />;

export const Default = DefaultTemplate.bind({});
Default.args = {
    ...defaultArgs
};

import * as React from 'react';
import { ThemeProvider } from '../theme-provider';
import { Image } from './index';

export default {
    title: 'Components/Image',
    component: Image,
    decorators: [(getStory) => <ThemeProvider>{getStory()}</ThemeProvider>]
};

const templateStyles = {};

const DefaultTemplate = (args) => <Image {...args} />;

export const Default = DefaultTemplate.bind({});
Default.args = {
    src: 'https://placekitten.com/800/450',
    alt: 'A pretty cat',
    styles: templateStyles
};

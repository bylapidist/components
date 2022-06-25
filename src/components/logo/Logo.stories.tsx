import * as React from 'react';
import { ThemeProvider } from '../theme-provider';
import { Logo } from './index';

export default {
    title: 'Components/Logo',
    component: Logo,
    decorators: [(getStory) => <ThemeProvider>{getStory()}</ThemeProvider>]
};

const templateStyles = {
    sizeWidth: '16'
};

const DefaultTemplate = (args) => <Logo {...args} />;

export const Default = DefaultTemplate.bind({});
Default.args = {
    styles: templateStyles
};

export const Animated = DefaultTemplate.bind({});
Animated.args = {
    animated: true,
    styles: templateStyles
};

export const Thinking = DefaultTemplate.bind({});
Thinking.args = {
    thinking: true,
    styles: templateStyles
};

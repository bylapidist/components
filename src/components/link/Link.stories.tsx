import * as React from 'react';
import { ThemeProvider } from '../theme-provider';
import { Link } from './index';

export default {
    title: 'Components/Link',
    component: Link,
    decorators: [(getStory) => <ThemeProvider>{getStory()}</ThemeProvider>]
};

const templateStyles = {};

const DefaultTemplate = (args) => <Link {...args}>Click Me</Link>;

export const Default = DefaultTemplate.bind({});
Default.args = {
    href: '#',
    styles: templateStyles
};

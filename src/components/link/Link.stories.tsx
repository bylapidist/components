import * as React from 'react';
import { ThemeProvider } from '../theme-provider';
import { BaseProps } from '../types';
import { Link, LinkProps } from './index';

export default {
    title: 'Components/Link',
    component: Link,
    decorators: [(getStory) => <ThemeProvider>{getStory()}</ThemeProvider>]
};

const defaultArgs: BaseProps & LinkProps = {
    as: 'a',
    testId: 'Link',
    href: '#'
};

const DefaultTemplate = (args) => <Link {...args}>Click Me</Link>;

export const Default = DefaultTemplate.bind({});
Default.args = {
    ...defaultArgs
};

import * as React from 'react';
import type { Meta, StoryObj, StoryFn } from '@storybook/react-vite';
import { BaseProps } from '../types';
import Link, { LinkProps } from './index';

export default {
    title: 'Components/Link',
    component: Link
} as Meta;

const defaultArgs: BaseProps & LinkProps = {
    as: 'a',
    testId: 'Link',
    href: 'javascript:void(0)'
};

const DefaultTemplate: StoryFn<BaseProps & LinkProps> = (args) => (
    <Link {...args}>Hello world</Link>
);

export const Default: StoryObj<BaseProps & LinkProps> = DefaultTemplate.bind(
    {}
);
Default.args = {
    ...defaultArgs
};

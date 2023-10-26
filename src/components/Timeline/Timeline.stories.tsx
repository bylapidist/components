import React from 'react';
import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { BaseProps } from '../types';
import ThemeProvider from '../ThemeProvider';
import Timeline, { TimelineProps } from './index';

export default {
    title: 'Primitives/Timeline',
    component: Timeline,
    decorators: [(getStory) => <ThemeProvider>{getStory()}</ThemeProvider>]
} as Meta;

const defaultArgs: BaseProps & TimelineProps = {
    items: [
        {
            urlTitle: 'LendInvest',
            title: 'Senior Software Engineer',
            from: 'Apr 2021',
            to: 'Present',
            url: 'https://www.lendinvest.com/'
        },
        {
            urlTitle: 'Golden Charter',
            title: 'Frontend Software Developer',
            from: 'Feb 2020',
            to: 'Apr 2021',
            url: 'https://www.goldencharter.co.uk/'
        }
    ],
    testId: 'Timeline',
    size: 'medium'
};

const DefaultTemplate: StoryFn<BaseProps & TimelineProps> = (args) => (
    <Timeline {...args} />
);

export const SmallSize: StoryObj<BaseProps & TimelineProps> =
    DefaultTemplate.bind({});
SmallSize.args = {
    ...defaultArgs,
    size: 'small'
};
export const MediumSize: StoryObj<BaseProps & TimelineProps> =
    DefaultTemplate.bind({});
MediumSize.args = {
    ...defaultArgs,
    size: 'medium'
};

export const LargeSize: StoryObj<BaseProps & TimelineProps> =
    DefaultTemplate.bind({});
LargeSize.args = {
    ...defaultArgs,
    size: 'large'
};

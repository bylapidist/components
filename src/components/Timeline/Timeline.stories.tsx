import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { BaseProps } from '../types';
import ThemeProvider from '../ThemeProvider';
import Timeline, { TimelineProps } from './index';

export default {
    title: 'Primitives/Timeline',
    component: Timeline,
    decorators: [(getStory) => <ThemeProvider>{getStory()}</ThemeProvider>]
} as Meta<typeof Timeline>;

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

export const SmallSize: StoryObj<BaseProps & TimelineProps> = {
    args: {
        ...defaultArgs,
        size: 'small'
    }
};

export const MediumSize: StoryObj<BaseProps & TimelineProps> = {
    args: {
        ...defaultArgs,
        size: 'medium'
    }
};

export const LargeSize: StoryObj<BaseProps & TimelineProps> = {
    args: {
        ...defaultArgs,
        size: 'large'
    }
};

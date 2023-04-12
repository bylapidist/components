import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import ThemeProvider from '../../utility/ThemeProvider';
import Button from './index';

export default {
    component: Button,
    tags: ['autodocs'],
    decorators: [(getStory) => <ThemeProvider>{getStory()}</ThemeProvider>]
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

/**
 * The primary level should be used as the main call to action within a page or button group.
 */
export const Primary: Story = {
    args: {
        as: 'button',
        testId: 'Button',
        level: 'primary',
        size: 'medium',
        disabled: false,
        block: false,
        children: 'Click Me'
    }
};

/**
 * The secondary level should be used as a secondary call to action within a page or button group.
 */
export const Secondary: Story = {
    args: {
        ...Primary.args,
        level: 'secondary'
    }
};

/**
 * The tertiary level should be used as any button that is not a call to action or destructive.
 */
export const Tertiary: Story = {
    args: {
        ...Primary.args,
        level: 'tertiary'
    }
};

/**
 * The danger level should be used for triggering any destructive action.
 */
export const Danger: Story = {
    args: {
        ...Primary.args,
        level: 'danger'
    }
};

/**
 * We use the `@fortawesome/fontawesome-svg-core` library for icon support.
 */
export const WithIcon: Story = {
    args: {
        ...Primary.args,
        level: 'danger',
        icon: faXmark
    }
};

/**
 * The button is by default set to `inline-flex` and will be sized according to its contents. On small screens or where
 * only one option is available to the user, e.g. within a modal, then we may use the block prop to set it to full width.
 */
export const Block: Story = {
    args: {
        ...Primary.args,
        level: 'primary',
        block: true
    }
};

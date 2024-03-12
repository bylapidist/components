import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { BaseProps } from '../types';
import ThemeProvider from '../ThemeProvider';
import Button, { ButtonProps } from './index';

export default {
    title: 'Inputs/Button',
    component: Button,
    decorators: [(getStory) => <ThemeProvider>{getStory()}</ThemeProvider>]
} as Meta<typeof Button>;

const defaultArgs: BaseProps & ButtonProps = {
    as: 'button',
    testId: 'Button',
    level: 'primary',
    size: 'medium',
    disabled: false,
    block: false,
    children: 'Click Me'
};

export const PrimarySmall: StoryObj<BaseProps & ButtonProps> = {
    args: {
        ...defaultArgs,
        size: 'small'
    }
};

export const PrimaryMedium: StoryObj<BaseProps & ButtonProps> = {
    args: {
        ...defaultArgs,
        size: 'medium'
    }
};

export const PrimaryLarge: StoryObj<BaseProps & ButtonProps> = {
    args: {
        ...defaultArgs,
        size: 'large'
    }
};

export const PrimaryDisabled: StoryObj<BaseProps & ButtonProps> = {
    args: {
        ...defaultArgs,
        disabled: true
    }
};

export const SecondarySmall: StoryObj<BaseProps & ButtonProps> = {
    args: {
        ...defaultArgs,
        level: 'secondary',
        size: 'small'
    }
};

export const SecondaryMedium: StoryObj<BaseProps & ButtonProps> = {
    args: {
        ...defaultArgs,
        level: 'secondary',
        size: 'medium'
    }
};

export const SecondaryLarge: StoryObj<BaseProps & ButtonProps> = {
    args: {
        ...defaultArgs,
        level: 'secondary',
        size: 'large'
    }
};

export const SecondaryDisabled: StoryObj<BaseProps & ButtonProps> = {
    args: {
        ...defaultArgs,
        level: 'secondary',
        disabled: true
    }
};

export const TertiarySmall: StoryObj<BaseProps & ButtonProps> = {
    args: {
        ...defaultArgs,
        level: 'tertiary',
        size: 'small'
    }
};

export const TertiaryMedium: StoryObj<BaseProps & ButtonProps> = {
    args: {
        ...defaultArgs,
        level: 'tertiary',
        size: 'medium'
    }
};

export const TertiaryLarge: StoryObj<BaseProps & ButtonProps> = {
    args: {
        ...defaultArgs,
        level: 'tertiary',
        size: 'large'
    }
};

export const TertiaryDisabled: StoryObj<BaseProps & ButtonProps> = {
    args: {
        ...defaultArgs,
        level: 'tertiary',
        disabled: true
    }
};

export const DangerSmall: StoryObj<BaseProps & ButtonProps> = {
    args: {
        ...defaultArgs,
        level: 'danger',
        size: 'small'
    }
};

export const DangerMedium: StoryObj<BaseProps & ButtonProps> = {
    args: {
        ...defaultArgs,
        level: 'danger',
        size: 'medium'
    }
};

export const DangerLarge: StoryObj<BaseProps & ButtonProps> = {
    args: {
        ...defaultArgs,
        level: 'danger',
        size: 'large'
    }
};

export const DangerDisabled: StoryObj<BaseProps & ButtonProps> = {
    args: {
        ...defaultArgs,
        level: 'danger',
        disabled: true
    }
};

export const WithIcon: StoryObj<BaseProps & ButtonProps> = {
    args: {
        ...defaultArgs,
        level: 'danger',
        icon: faXmark
    }
};

export const Block: StoryObj<BaseProps & ButtonProps> = {
    args: {
        ...defaultArgs,
        level: 'primary',
        block: true
    }
};

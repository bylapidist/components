import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { BaseProps } from '../types';
import ThemeProvider from '../ThemeProvider';
import Toggle, { ToggleProps } from './index';

export default {
    title: 'Inputs/Toggle',
    component: Toggle,
    decorators: [(getStory) => <ThemeProvider>{getStory()}</ThemeProvider>]
} as Meta<typeof Toggle>;

const defaultArgs: BaseProps & ToggleProps = {
    as: 'label',
    testId: 'Toggle',
    level: 'primary',
    size: 'medium',
    disabled: false,
    children: 'Toggle Me'
};

export const PrimarySmall: StoryObj<BaseProps & ToggleProps> = {
    args: {
        ...defaultArgs,
        size: 'small'
    }
};

export const PrimaryMedium: StoryObj<BaseProps & ToggleProps> = {
    args: {
        ...defaultArgs,
        size: 'medium'
    }
};

export const PrimaryLarge: StoryObj<BaseProps & ToggleProps> = {
    args: {
        ...defaultArgs,
        size: 'large'
    }
};

export const PrimaryDisabled: StoryObj<BaseProps & ToggleProps> = {
    args: {
        ...defaultArgs,
        disabled: true
    }
};

export const SecondarySmall: StoryObj<BaseProps & ToggleProps> = {
    args: {
        ...defaultArgs,
        level: 'secondary',
        size: 'small'
    }
};

export const SecondaryMedium: StoryObj<BaseProps & ToggleProps> = {
    args: {
        ...defaultArgs,
        level: 'secondary',
        size: 'medium'
    }
};

export const SecondaryLarge: StoryObj<BaseProps & ToggleProps> = {
    args: {
        ...defaultArgs,
        level: 'secondary',
        size: 'large'
    }
};

export const SecondaryDisabled: StoryObj<BaseProps & ToggleProps> = {
    args: {
        ...defaultArgs,
        level: 'secondary',
        disabled: true
    }
};

export const TertiarySmall: StoryObj<BaseProps & ToggleProps> = {
    args: {
        ...defaultArgs,
        level: 'tertiary',
        size: 'small'
    }
};

export const TertiaryMedium: StoryObj<BaseProps & ToggleProps> = {
    args: {
        ...defaultArgs,
        level: 'tertiary',
        size: 'medium'
    }
};

export const TertiaryLarge: StoryObj<BaseProps & ToggleProps> = {
    args: {
        ...defaultArgs,
        level: 'tertiary',
        size: 'large'
    }
};

export const TertiaryDisabled: StoryObj<BaseProps & ToggleProps> = {
    args: {
        ...defaultArgs,
        level: 'tertiary',
        disabled: true
    }
};

export const DangerSmall: StoryObj<BaseProps & ToggleProps> = {
    args: {
        ...defaultArgs,
        level: 'danger',
        size: 'small'
    }
};

export const DangerMedium: StoryObj<BaseProps & ToggleProps> = {
    args: {
        ...defaultArgs,
        level: 'danger',
        size: 'medium'
    }
};

export const DangerLarge: StoryObj<BaseProps & ToggleProps> = {
    args: {
        ...defaultArgs,
        level: 'danger',
        size: 'large'
    }
};

export const DangerDisabled: StoryObj<BaseProps & ToggleProps> = {
    args: {
        ...defaultArgs,
        level: 'danger',
        disabled: true
    }
};

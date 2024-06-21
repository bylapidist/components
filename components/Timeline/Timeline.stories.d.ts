import { Meta, StoryObj } from '@storybook/react';
import { BaseProps } from '../types';
import { default as Timeline, TimelineProps } from './index';

declare const _default: Meta<typeof Timeline>;
export default _default;
export declare const SmallSize: StoryObj<BaseProps & TimelineProps>;
export declare const MediumSize: StoryObj<BaseProps & TimelineProps>;
export declare const LargeSize: StoryObj<BaseProps & TimelineProps>;

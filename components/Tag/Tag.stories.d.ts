import { Meta, StoryObj } from '@storybook/react';
import { BaseProps } from '../types';
import { default as Tag, TagProps } from './index';

declare const _default: Meta<typeof Tag>;
export default _default;
export declare const Primary: StoryObj<BaseProps & TagProps>;
export declare const Secondary: StoryObj<BaseProps & TagProps>;
export declare const Tertiary: StoryObj<BaseProps & TagProps>;
export declare const Danger: StoryObj<BaseProps & TagProps>;

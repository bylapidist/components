import { Meta, StoryObj } from '@storybook/react';
import { BaseProps } from '../types';
import { default as Link, LinkProps } from './index';

declare const _default: Meta<typeof Link>;
export default _default;
export declare const Small: StoryObj<BaseProps & LinkProps>;
export declare const Medium: StoryObj<BaseProps & LinkProps>;
export declare const Large: StoryObj<BaseProps & LinkProps>;
export declare const WithIcon: StoryObj<BaseProps & LinkProps>;

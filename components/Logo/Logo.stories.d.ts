import { Meta, StoryObj } from '@storybook/react';
import { BaseProps } from '../types';
import { default as Logo, LogoProps } from './index';

declare const _default: Meta<typeof Logo>;
export default _default;
export declare const FadeAnimation: StoryObj<BaseProps & LogoProps>;
export declare const SlideAnimation: StoryObj<BaseProps & LogoProps>;

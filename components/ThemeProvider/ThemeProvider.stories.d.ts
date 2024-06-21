import { Meta, StoryObj } from '@storybook/react';
import { BaseProps } from '../types';
import { default as ThemeProvider, ThemeProviderProps } from './index';

declare const _default: Meta<typeof ThemeProvider>;
export default _default;
export declare const Light: StoryObj<BaseProps & ThemeProviderProps>;
export declare const Dark: StoryObj<BaseProps & ThemeProviderProps>;

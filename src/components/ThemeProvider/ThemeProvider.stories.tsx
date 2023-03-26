import * as React from 'react';
import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { BaseProps } from '../types';
import Text from '../Text';
import Box from '../Box';
import Heading from '../Heading';
import ThemeProvider, { ThemeProviderProps } from './index';
import Button from '../Button';

export default {
    title: 'Utility/ThemeProvider',
    component: Text,
    argTypes: {
        theme: { control: 'select', options: ['light', 'dark'] }
    }
} as Meta;

const defaultArgs: BaseProps & ThemeProviderProps = {
    as: 'div',
    testId: 'ThemeProvider',
    theme: 'light'
};

const DefaultTemplate: StoryFn<BaseProps & ThemeProviderProps> = (args) => (
    <ThemeProvider
        style={{
            backgroundColor: 'var(--color-grey__lightest)'
        }}
        {...args}
    >
        <Box gutter="large">
            <Box elevation="large" gutter="large">
                <Heading>Heading</Heading>
                <Text>
                    Nunc porttitor lectus ex, eu pharetra elit placerat non.
                    Suspendisse nec ultrices augue, et varius velit. Vestibulum
                    ante ipsum primis in faucibus orci luctus et ultrices
                    posuere cubilia curae; Morbi sollicitudin sed turpis et
                    vulputate. Nam consequat porttitor scelerisque. Nulla
                    ultricies enim at eros accumsan interdum. Aenean egestas
                    enim mi, nec tincidunt libero gravida et.
                </Text>
                <Box gutterY="large">
                    <Button level="primary">Click Me</Button>
                </Box>
            </Box>
        </Box>
    </ThemeProvider>
);

export const Light: StoryObj<BaseProps & ThemeProviderProps> =
    DefaultTemplate.bind({});
Light.args = {
    ...defaultArgs
};

export const Dark: StoryObj<BaseProps & ThemeProviderProps> =
    DefaultTemplate.bind({});
Dark.args = {
    ...defaultArgs,
    theme: 'dark'
};

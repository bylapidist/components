import * as React from 'react';
import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { BaseProps } from '../types';
import Text from '../Text';
import Box from '../Box';
import Elevated from '../Elevated';
import Heading from '../Heading';
import ThemeProvider, { ThemeProviderProps } from './index';

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
        <Box gutter={4}>
            <Elevated elevation={4}>
                <Box gutter={4}>
                    <Heading size={1}>Heading</Heading>
                    <Text>
                        Nunc porttitor lectus ex, eu pharetra elit placerat non.
                        Suspendisse nec ultrices augue, et varius velit.
                        Vestibulum ante ipsum primis in faucibus orci luctus et
                        ultrices posuere cubilia curae; Morbi sollicitudin sed
                        turpis et vulputate. Nam consequat porttitor
                        scelerisque. Nulla ultricies enim at eros accumsan
                        interdum. Aenean egestas enim mi, nec tincidunt libero
                        gravida et.
                    </Text>
                </Box>
            </Elevated>
        </Box>
    </ThemeProvider>
);

export const Default: StoryObj<BaseProps & ThemeProviderProps> =
    DefaultTemplate.bind({});
Default.args = {
    ...defaultArgs
};

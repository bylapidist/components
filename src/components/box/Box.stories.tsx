import * as React from 'react';
import { ThemeProvider } from '../theme-provider';
import { BaseProps } from '../shared-types';
import { WithParagraphs } from '../text/Text.stories';
import { Box, BoxProps } from './index';

export default {
    title: 'Components/Box',
    component: Box,
    decorators: [(getStory) => <ThemeProvider>{getStory()}</ThemeProvider>]
};

const defaultArgs: BaseProps & BoxProps = {
    as: 'div',
    testId: 'Box'
};

const DefaultTemplate = (args) => (
    <Box {...args}>
        <WithParagraphs />
    </Box>
);

export const Default = DefaultTemplate.bind({});
Default.args = {
    ...defaultArgs
};

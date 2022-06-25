import * as React from 'react';
import { ThemeProvider } from '../theme-provider';
import { Box } from './index';
import { Text } from '../text';

export default {
    title: 'Components/Box',
    component: Box,
    decorators: [(getStory) => <ThemeProvider>{getStory()}</ThemeProvider>]
};

const templateStyles = {
    padding: 4,
    backgroundColor: { group: 'primary', shade: 'base' }
};

const DefaultTemplate = (args) => (
    <Box {...args}>
        <Text styles={{ textColor: { group: 'base', shade: 'light' } }}>
            Nunc porttitor lectus ex, eu pharetra elit placerat non. Suspendisse
            nec ultrices augue, et varius velit. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Morbi
            sollicitudin sed turpis et vulputate. Nam consequat porttitor
            scelerisque. Nulla ultricies enim at eros accumsan interdum. Aenean
            egestas enim mi, nec tincidunt libero gravida et.
        </Text>
    </Box>
);

export const Default = DefaultTemplate.bind({});
Default.args = {
    styles: templateStyles
};

import * as React from 'react';
import { ThemeProvider } from '../index';
import { Text } from '../text';

export default {
    title: 'Components/ThemeProvider',
    component: ThemeProvider
};

const templateStyles = {
    padding: '4',
    backgroundColor: { group: 'base', shade: 'light' }
};

const DefaultTemplate = (args) => (
    <ThemeProvider {...args}>
        <Text styles={templateStyles}>
            Nunc porttitor lectus ex, eu pharetra elit placerat non. Suspendisse
            nec ultrices augue, et varius velit. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Morbi
            sollicitudin sed turpis et vulputate. Nam consequat porttitor
            scelerisque. Nulla ultricies enim at eros accumsan interdum. Aenean
            egestas enim mi, nec tincidunt libero gravida et.
        </Text>
    </ThemeProvider>
);

export const Default = DefaultTemplate.bind({});
Default.args = {};

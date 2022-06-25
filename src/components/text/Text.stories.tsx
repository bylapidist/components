import * as React from 'react';
import { ThemeProvider } from '../theme-provider';
import { Text } from './index';

export default {
    title: 'Components/Text',
    component: Text,
    decorators: [(getStory) => <ThemeProvider>{getStory()}</ThemeProvider>]
};

const templateStyles = {};

const DefaultTemplate = (args) => (
    <Text {...args}>
        Nunc porttitor lectus ex, eu pharetra elit placerat non. Suspendisse nec
        ultrices augue, et varius velit. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae; Morbi
        sollicitudin sed turpis et vulputate. Nam consequat porttitor
        scelerisque. Nulla ultricies enim at eros accumsan interdum. Aenean
        egestas enim mi, nec tincidunt libero gravida et.
    </Text>
);

export const Default = DefaultTemplate.bind({});
Default.args = {
    styles: templateStyles
};

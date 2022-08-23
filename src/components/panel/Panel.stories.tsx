import * as React from 'react';
import { ThemeProvider } from '../theme-provider';
import { Panel } from './index';
import { Text } from '../text';

export default {
    title: 'Components/Panel',
    component: Panel,
    decorators: [(getStory) => <ThemeProvider>{getStory()}</ThemeProvider>]
};

const templateStyles = {};

const DefaultTemplate = (args) => (
    <Panel {...args}>
        <Text>
            Nunc porttitor lectus ex, eu pharetra elit placerat non. Suspendisse
            nec ultrices augue, et varius velit. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Morbi
            sollicitudin sed turpis et vulputate. Nam consequat porttitor
            scelerisque. Nulla ultricies enim at eros accumsan interdum. Aenean
            egestas enim mi, nec tincidunt libero gravida et.
        </Text>
    </Panel>
);

export const Default = DefaultTemplate.bind({});
Default.args = {
    styles: templateStyles
};

export const WithHeading = DefaultTemplate.bind({});
WithHeading.args = {
    heading: 'Hello world!',
    styles: templateStyles
};

export const WithHeadingSizes = DefaultTemplate.bind({});
WithHeadingSizes.args = {
    heading: 'Hello world!',
    headingSize: 2,
    styles: templateStyles
};

export const WithLoading = DefaultTemplate.bind({});
WithLoading.args = {
    loading: true,
    styles: templateStyles
};

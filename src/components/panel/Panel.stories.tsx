import * as React from 'react';
import { ThemeProvider } from '../theme-provider';
import { Panel } from './index';

export default {
    title: 'Components/Panel',
    component: Panel,
    decorators: [(getStory) => <ThemeProvider>{getStory()}</ThemeProvider>]
};

const templateStyles = {};

const DefaultTemplate = (args) => (
    <Panel {...args}>
        Nunc porttitor lectus ex, eu pharetra elit placerat non. Suspendisse nec
        ultrices augue, et varius velit. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae; Morbi
        sollicitudin sed turpis et vulputate. Nam consequat porttitor
        scelerisque. Nulla ultricies enim at eros accumsan interdum. Aenean
        egestas enim mi, nec tincidunt libero gravida et.
    </Panel>
);

export const Default = DefaultTemplate.bind({});
Default.args = {
    styles: templateStyles
};

export const WithHeading = DefaultTemplate.bind({});
WithHeading.args = {
    heading: {
        title: 'Hello world!',
        props: {
            as: 'h2',
            size: '4'
        }
    },
    styles: templateStyles
};

export const WithLoading = DefaultTemplate.bind({});
WithLoading.args = {
    loading: true,
    styles: templateStyles
};

export const WithTag = DefaultTemplate.bind({});
WithTag.args = {
    tag: {
        title: 'v1.0.0',
        props: {
            kind: 'primary'
        }
    },
    styles: templateStyles
};

export const CompleteImplementation = DefaultTemplate.bind({});
CompleteImplementation.args = {
    heading: {
        title: '@lapidist/components',
        props: {
            as: 'h2',
            size: '4'
        }
    },
    tag: {
        title: 'v1.0.0',
        props: {
            kind: 'tertiary'
        }
    },
    styles: templateStyles
};

import * as React from 'react';
import { ThemeProvider } from '../theme-provider';
import { Panel } from './index';
import { Text } from '../text';
import { PanelHeading } from '../panel-heading';

export default {
    title: 'Components/Panel',
    component: Panel,
    decorators: [(getStory) => <ThemeProvider>{getStory()}</ThemeProvider>],
    subcomponents: { PanelHeading }
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

const HeadingTemplate = (args) => (
    <Panel {...args}>
        <PanelHeading kind={args?.kind}>Heading</PanelHeading>
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

export const Primary = DefaultTemplate.bind({});
Primary.args = {
    kind: 'primary',
    styles: templateStyles
};

export const Secondary = DefaultTemplate.bind({});
Secondary.args = {
    kind: 'secondary',
    styles: templateStyles
};

export const Tertiary = DefaultTemplate.bind({});
Tertiary.args = {
    kind: 'tertiary',
    styles: templateStyles
};

export const Danger = DefaultTemplate.bind({});
Danger.args = {
    kind: 'danger',
    styles: templateStyles
};

export const Grey = DefaultTemplate.bind({});
Grey.args = {
    kind: 'grey',
    styles: templateStyles
};

export const PrimaryWithHeading = HeadingTemplate.bind({});
PrimaryWithHeading.args = {
    kind: 'primary',
    styles: templateStyles
};

export const SecondaryWithHeading = HeadingTemplate.bind({});
SecondaryWithHeading.args = {
    kind: 'secondary',
    styles: templateStyles
};

export const TertiaryWithHeading = HeadingTemplate.bind({});
TertiaryWithHeading.args = {
    kind: 'tertiary',
    styles: templateStyles
};

export const DangerWithHeading = HeadingTemplate.bind({});
DangerWithHeading.args = {
    kind: 'danger',
    styles: templateStyles
};

export const GreyWithHeading = HeadingTemplate.bind({});
GreyWithHeading.args = {
    kind: 'grey',
    styles: templateStyles
};

export const PrimaryLoading = HeadingTemplate.bind({});
PrimaryLoading.args = {
    kind: 'primary',
    loading: true,
    styles: templateStyles
};

export const SecondaryLoading = HeadingTemplate.bind({});
SecondaryLoading.args = {
    kind: 'secondary',
    loading: true,
    styles: templateStyles
};

export const TertiaryLoading = HeadingTemplate.bind({});
TertiaryLoading.args = {
    kind: 'tertiary',
    loading: true,
    styles: templateStyles
};

export const DangerLoading = HeadingTemplate.bind({});
DangerLoading.args = {
    kind: 'danger',
    loading: true,
    styles: templateStyles
};

export const GreyLoading = HeadingTemplate.bind({});
GreyLoading.args = {
    kind: 'grey',
    loading: true,
    styles: templateStyles
};

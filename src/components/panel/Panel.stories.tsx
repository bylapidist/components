import * as React from 'react';
import { ThemeProvider } from '../theme-provider';
import { Panel } from './index';

export default {
    title: 'Components/Panel',
    component: Panel,
    decorators: [(getStory) => <ThemeProvider>{getStory()}</ThemeProvider>]
};

const templateStyles = {};

const headingProp = {
    title: 'Hello world!',
    props: {
        as: 'h2',
        size: '4'
    }
};
const tagProp = {
    title: 'v1.0.0',
    props: {
        kind: 'primary'
    }
};
const imageProp = {
    src: 'https://placekitten.com/800/450',
    alt: 'A pretty cat'
};
const websiteButtonsProp = [
    {
        title: 'GitHub',
        props: {
            as: 'a',
            kind: 'primary',
            variant: 'small',
            href: 'https://google.com',
            target: '_blank',
            rel: 'noopener'
        }
    },
    {
        title: 'npm',
        props: {
            as: 'a',
            kind: 'secondary',
            variant: 'small',
            href: 'https://google.com',
            target: '_blank',
            rel: 'noopener'
        }
    },
    {
        title: 'Docs',
        props: {
            as: 'a',
            kind: 'secondary',
            variant: 'small',
            href: 'https://google.com',
            target: '_blank',
            rel: 'noopener'
        }
    }
];
const buttonsProp = [
    {
        title: 'Primary',
        props: {
            kind: 'primary',
            variant: 'medium'
        }
    },
    {
        title: 'Secondary',
        props: {
            kind: 'secondary',
            variant: 'medium'
        }
    },
    {
        title: 'Tertiary',
        props: {
            kind: 'tertiary',
            variant: 'medium'
        }
    },
    {
        title: 'Dangerous',
        props: {
            kind: 'danger',
            variant: 'medium'
        }
    }
];

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
    heading: headingProp,
    styles: templateStyles
};

export const WithLoading = DefaultTemplate.bind({});
WithLoading.args = {
    loading: true,
    styles: templateStyles
};

export const WithTag = DefaultTemplate.bind({});
WithTag.args = {
    tag: tagProp,
    styles: templateStyles
};

export const WithButtons = DefaultTemplate.bind({});
WithButtons.args = {
    buttons: buttonsProp,
    styles: templateStyles
};

export const WithDismissable = DefaultTemplate.bind({});
WithDismissable.args = {
    dismissable: true,
    styles: templateStyles
};

export const WithStatus = DefaultTemplate.bind({});
WithStatus.args = {
    dismissable: true,
    status: 'error',
    styles: templateStyles
};

export const Website = DefaultTemplate.bind({});
Website.args = {
    heading: headingProp,
    tag: tagProp,
    buttons: websiteButtonsProp
};

export const CompleteImplementation = DefaultTemplate.bind({});
CompleteImplementation.args = {
    dismissable: true,
    status: 'success',
    heading: headingProp,
    tag: tagProp,
    buttons: buttonsProp,
    image: imageProp,
    styles: templateStyles
};

import * as React from "react";
import { Meta, StoryFn } from '@storybook/react';
import { BaseProps } from '../components/types';
import ThemeProvider from '../components/ThemeProvider';
import Box from '../components/Box';
import Elevated from '../components/Elevated';
import Text from '../components/Text';
import Heading from '../components/Heading';
import Link from '../components/Link';

export default {
    title: 'Patterns/Website',
    component: Text,
    decorators: [(getStory) => <ThemeProvider>{getStory()}</ThemeProvider>],
    parameters: {
        options: {
            showToolbar: false,
            showPanel: false,
            showAddonPanel: false,
        },
        actions: { disable: true },
    }
} as Meta;

export const WebsiteCard: StoryFn<BaseProps> = () => (
    <Elevated elevation={2}>
        <Box gutter={4} style={{ display: 'flex', flexDirection: 'column', gridGap: 'var(--size__2)' }}>
            <Heading as="h2" size={3}>@lapidist/components</Heading>
            <Text variant="medium">
                Nunc porttitor lectus ex, eu pharetra elit placerat non. Suspendisse nec
                ultrices augue, et varius velit. Vestibulum ante ipsum primis in
                faucibus orci luctus et ultrices posuere cubilia curae.
            </Text>
            <div style={{ display: 'flex', justifyContent: 'end', gridGap: 'var(--size__2)' }}>
                <Link href="javascript:void()">github</Link>
                <Link href="javascript:void()">npm</Link>
                <Link href="javascript:void()">docs</Link>
            </div>
        </Box>
    </Elevated>
);

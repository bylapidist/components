import * as React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { BaseProps } from '../components/types';
import ThemeProvider from '../components/ThemeProvider';
import Box from '../components/Box';
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
            showAddonPanel: false
        },
        actions: { disable: true }
    }
} as Meta;

export const WebsiteCard: StoryFn<BaseProps> = () => (
    <Box
        elevation="medium"
        gutter="large"
        style={{
            display: 'flex',
            flexDirection: 'column',
            gridGap: 'var(--size__2)'
        }}
    >
        <Heading size="medium">@lapidist/components</Heading>
        <Text size="medium">
            Opinionated React UI library, built with @lapidist/styles and
            TypeScript.
        </Text>
        <div
            style={{
                display: 'flex',
                justifyContent: 'end',
                gridGap: 'var(--size__2)'
            }}
        >
            <Link href="javascript:void()">github</Link>
            <Link href="javascript:void()">npm</Link>
            <Link href="javascript:void()">docs</Link>
        </div>
    </Box>
);

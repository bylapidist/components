import React from 'react';
import { ThemeProvider, Text, Box } from '../../src';
import { HomePage } from './HomePage';

export interface StyleGuideRendererProps {
    readonly title: string;
    readonly version: string;
    readonly homepageUrl: string;
    readonly toc: React.ReactNode;
}

const StyleGuideRenderer: React.FC<StyleGuideRendererProps> = ({
    children,
    ...restProps
}) => (
    <ThemeProvider>
        <Box
            styles={{
                padding: '6',
                marginX: 'auto',
                containerMaxWidth: 'xxl',
                breakpoints: {
                    md: {
                        padding: '12'
                    }
                }
            }}
        >
            <Text
                as="main"
                styles={{
                    marginX: 'auto',
                    breakpoints: { md: { width: '3/5' } }
                }}
            >
                {!window.location.hash ? <HomePage {...restProps} /> : children}
            </Text>
        </Box>
    </ThemeProvider>
);

export default StyleGuideRenderer;

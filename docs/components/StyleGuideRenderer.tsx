import React from 'react';
import { ThemeProvider } from '../../src/components/theme-provider';
import { Text } from '../../src/components/text';
import { Box } from '../../src/components/box';
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
                padding: 6,
                marginX: 'auto',
                containerWidth: 'xxl',
                breakpoints: {
                    md: {
                        padding: 12
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

import * as React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from '../theme-provider';
import { AspectRatio, StyledAspectRatioProps } from './index';
import { Image } from '../image';
import { WithParagraphs } from '../text/Text.stories';
import { StyledTextProps } from '../text';

export default {
    title: 'Components/AspectRatio',
    component: AspectRatio,
    decorators: [(getStory) => <ThemeProvider>{getStory()}</ThemeProvider>]
};

const CenteredAspectRatio = styled(AspectRatio)<StyledAspectRatioProps>`
    ${({ theme }) => `
        margin: auto;
        width: calc(${theme.sizes['128']});
        border: ${theme.borderWidths['1']} solid ${theme.colors.grey.lightest};
    `}
`;

const MockText = styled(WithParagraphs)<StyledTextProps>`
    ${({ theme }) => `
        padding: ${theme.sizes['4']};
    `}
`;

const DefaultTemplate = (args) => (
    <CenteredAspectRatio {...args}>
        <MockText />
    </CenteredAspectRatio>
);

const ImageTemplate = (args) => (
    <CenteredAspectRatio {...args}>
        <Image src="https://placekitten.com/800/450" alt="A pretty cat" />
    </CenteredAspectRatio>
);

export const Default = DefaultTemplate.bind({});
Default.args = {
    ratio: '1/1'
};

export const WithImage = ImageTemplate.bind({});
WithImage.args = {
    ratio: { x: 16, y: 9 }
};

import * as React from 'react';
import { ThemeProvider } from '../theme-provider';
import { AspectRatio } from './index';
import { Text } from '../text';
import { Image } from '../image';

export default {
    title: 'Components/AspectRatio',
    component: AspectRatio,
    decorators: [(getStory) => <ThemeProvider>{getStory()}</ThemeProvider>]
};

const templateStyles = {
    borderStyle: 'solid',
    borderWidth: 'px',
    borderColor: { group: 'grey', shade: 'lightest' },
    width: 'full',
    marginX: 'auto',
    breakpoints: {
        md: {
            width: '1/2'
        }
    },
    pseudo: {
        ':hover': {
            borderColor: { group: 'grey', shade: 'light' },
            cursor: 'pointer'
        }
    }
};

const DefaultTemplate = (args) => (
    <AspectRatio {...args}>
        <Text styles={{ padding: 4, lineHeight: 'loose' }}>
            Nunc porttitor lectus ex, eu pharetra elit placerat non. Suspendisse
            nec ultrices augue, et varius velit. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Morbi
            sollicitudin sed turpis et vulputate. Nam consequat porttitor
            scelerisque. Nulla ultricies enim at eros accumsan interdum. Aenean
            egestas enim mi, nec tincidunt libero gravida et.
        </Text>
    </AspectRatio>
);

const ImageTemplate = (args) => (
    <AspectRatio {...args}>
        <Image src="https://placekitten.com/800/450" alt="A pretty cat" />
    </AspectRatio>
);

export const Default = DefaultTemplate.bind({});
Default.args = {
    ratio: '1/1',
    styles: templateStyles
};

export const WithImage = ImageTemplate.bind({});
WithImage.args = {
    ratio: { x: 16, y: 9 },
    styles: templateStyles
};

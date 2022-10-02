import * as React from 'react';
import { PanelProps, PanelPropType } from '../../index';
import { Image } from '../../../image';
import { Box } from '../../../box';
import { Heading } from '../../../heading';
import { Text } from '../../../text';
import { panelImageStyles } from './styles';

export const PanelBody = ({
    image,
    heading,
    children
}: Pick<PanelProps & PanelPropType, 'image' | 'heading' | 'children'>) => {
    return (
        <>
            {image && <Image styles={panelImageStyles()} {...image} />}

            <Box styles={{ position: 'relative' }}>
                {heading?.title && (
                    <Heading {...heading?.props}>{heading.title}</Heading>
                )}
                {children && <Text>{children}</Text>}
            </Box>
        </>
    );
};

PanelBody.displayName = 'PanelBody';

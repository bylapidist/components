import React from 'react';
import { Heading, HeadingSize } from '../../src';

export interface SectionHeadingRendererProps {
    readonly children?: React.ReactNode;
    readonly toolbar?: React.ReactNode;
    readonly id: string;
    readonly href: string;
    readonly depth: HeadingSize;
    readonly deprecated?: boolean;
}

const SectionHeadingRenderer: React.FC<SectionHeadingRendererProps> = ({
    children,
    depth,
    id
}) => (
    <Heading size={depth} id={id}>
        {children}
    </Heading>
);

export default SectionHeadingRenderer;

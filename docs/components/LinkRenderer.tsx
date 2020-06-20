import React from 'react';
import { Link } from '../../src/components/link';

export interface LinkRendererProps {
    readonly children?: React.ReactNode;
}

const LinkRenderer: React.FC<LinkRendererProps> = ({
    children,
    ...restProps
}) => <Link {...restProps}>{children}</Link>;

export default LinkRenderer;

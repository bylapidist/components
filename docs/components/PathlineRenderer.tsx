import React from 'react';
import copy from 'clipboard-copy';
import { Link, Text } from '../../src';

export interface PathlineRendererProps {
    readonly children?: React.ReactNode;
}

const PathlineRenderer: React.FC<PathlineRendererProps> = ({ children }) => (
    <>
        <Text as="span" styles={{ marginRight: '1' }}>
            📋
        </Text>
        <Link
            href="/"
            onClick={(): unknown => children && copy(children.toString())}
            title="Copy to clipboard"
            styles={{
                fontSize: '2',
                textColor: { group: 'grey', shade: 'base' },
                borderBottomColor: { group: 'grey', shade: 'light' },
                pseudo: {
                    ':hover': {
                        borderBottomColor: { group: 'primary', shade: 'base' }
                    }
                },
                breakpoints: {
                    md: {
                        fontSize: 'inherit'
                    }
                }
            }}
        >
            {children}
        </Link>
    </>
);

export default PathlineRenderer;

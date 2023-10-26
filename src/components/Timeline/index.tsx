import React from 'react';
import type { BaseProps, SizeType } from '../types';
import Box from '../Box';
import Link from '../Link';
import Text from '../Text';
import styles from './Timeline.module.scss';

export interface TimelineItem {
    readonly from: string;
    readonly to: string;
    readonly urlTitle: string;
    readonly url: string;
    readonly title: string;
}

export interface TimelineProps {
    readonly size?: SizeType;
    readonly items: TimelineItem[];
}

const Timeline = ({
    className,
    testId = 'Timeline',
    size = 'medium',
    items,
    ...restProps
}: BaseProps & TimelineProps) => (
    <Text
        as="ol"
        size={size}
        className={className}
        data-testid={testId}
        {...restProps}
    >
        {items.map((item) => (
            <Box
                as="li"
                key={`${item.urlTitle}-${item.title}`}
                className={styles.item}
                gutter={size}
            >
                <Box gutterY={size}>
                    {item.from} &ndash; {item.to}
                </Box>
                <Box className={styles.meta} gutterY={size}>
                    <Box>{item.title}</Box>
                    <Box>
                        <Link
                            className={styles.urlTitle}
                            href={item.url}
                            size={size}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {item.urlTitle}
                        </Link>
                    </Box>
                </Box>
            </Box>
        ))}
    </Text>
);

Timeline.displayName = 'Timeline';
export default Timeline;

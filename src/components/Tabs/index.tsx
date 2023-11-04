import React from 'react';
import cx from 'classnames';
import type { BaseProps, SizeType } from '../types';
import Box from '../Box';
import Text from '../Text';
import Link, { LinkProps } from '../Link';
import styles from './Tabs.module.scss';

export interface TabsProps {
    readonly size?: SizeType;
    readonly links?: (LinkProps & BaseProps)[];
    readonly onChangeTab?: (activeTab: number) => void;
}

const Tabs = ({
    className,
    as = 'div',
    testId = 'Tabs',
    size = 'medium',
    links = [],
    onChangeTab,
    ...restProps
}: BaseProps & TabsProps) => {
    const [activeTab, setActiveTab] = React.useState<number | undefined>(
        undefined
    );

    const handleSetActiveTab = (selectedIndex: number) => {
        if (typeof onChangeTab === 'function') {
            setActiveTab(selectedIndex);
            onChangeTab(selectedIndex);
        }
    };

    return (
        <Text
            as={as}
            data-testid={testId}
            size={size}
            weight="medium"
            className={cx(styles.this, className)}
            {...restProps}
        >
            <Box
                as="ul"
                gutter="medium"
                elevation="large"
                roundness="small"
                data-testid={`${testId}-list`}
                className={cx(styles.inner)}
            >
                {links.map((linkProps, index) => (
                    <Box
                        data-testid={`${testId}-item`}
                        as="li"
                        roundness="small"
                        key={index}
                        className={cx({
                            [styles.active]: index === activeTab
                        })}
                    >
                        <Link
                            data-testid={`${testId}-link`}
                            size={size}
                            onClick={() => handleSetActiveTab(index)}
                            className={cx(styles.link)}
                            {...linkProps}
                        >
                            <Box gutter="medium">{linkProps.children}</Box>
                        </Link>
                    </Box>
                ))}
            </Box>
        </Text>
    );
};

Tabs.displayName = 'Tabs';
export default Tabs;

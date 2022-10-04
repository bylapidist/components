import * as React from 'react';
import { BaseProps } from '../types';
import { ThemeProvider } from '../theme-provider';
import { List, ListProps } from './index';

export default {
    title: 'Components/List',
    component: List,
    decorators: [(getStory) => <ThemeProvider>{getStory()}</ThemeProvider>]
};

const defaultArgs: BaseProps & ListProps = {
    as: 'ul',
    testId: 'List',
    items: [
        { item: 'hello', key: 'test1' },
        { item: 'world', key: 'test2' }
    ]
};

const DefaultTemplate = (args) => <List {...args} />;

export const Ordered = DefaultTemplate.bind({});
Ordered.args = {
    ...defaultArgs,
    type: 'ol'
};

export const UnOrdered = DefaultTemplate.bind({});
UnOrdered.args = {
    ...defaultArgs,
    type: 'ul'
};

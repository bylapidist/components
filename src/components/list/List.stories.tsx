import * as React from 'react';
import { BaseProps } from '../shared-types';
import { ThemeProvider } from '../theme-provider';
import { List, ListProps } from './index';

export default {
    title: 'Components/List',
    component: List,
    decorators: [(getStory) => <ThemeProvider>{getStory()}</ThemeProvider>]
};

const defaultArgs: BaseProps & ListProps = {
    as: 'ul',
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

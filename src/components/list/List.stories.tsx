import * as React from 'react';
import { ThemeProvider } from '../theme-provider';
import { List } from './index';

export default {
    title: 'Components/List',
    component: List,
    decorators: [(getStory) => <ThemeProvider>{getStory()}</ThemeProvider>]
};

const templateStyles = {};

const DefaultTemplate = (args) => <List {...args} />;

export const Ordered = DefaultTemplate.bind({});
Ordered.args = {
    type: 'ol',
    items: [
        { item: 'hello', key: 'test1' },
        { item: 'world', key: 'test2' }
    ],
    styles: templateStyles
};

export const UnOrdered = DefaultTemplate.bind({});
UnOrdered.args = {
    type: 'ul',
    items: [
        { item: 'hello', key: 'test1' },
        { item: 'world', key: 'test2' }
    ],
    styles: templateStyles
};

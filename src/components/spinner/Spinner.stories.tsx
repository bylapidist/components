import * as React from 'react';
import { ThemeProvider } from '../theme-provider';
import { Spinner } from './index';

export default {
    title: 'Components/Spinner',
    component: Spinner,
    decorators: [(getStory) => <ThemeProvider>{getStory()}</ThemeProvider>]
};

const templateStyles = {
    sizeWidth: '16'
};

const DefaultTemplate = (args) => <Spinner {...args} />;

export const Default = DefaultTemplate.bind({});
Default.args = {
    styles: templateStyles
};

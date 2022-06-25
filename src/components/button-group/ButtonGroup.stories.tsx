import * as React from 'react';
import { ThemeProvider } from '../theme-provider';
import { ButtonGroup } from './index';
import { Button } from '../button';

export default {
    title: 'Components/ButtonGroup',
    component: ButtonGroup,
    decorators: [(getStory) => <ThemeProvider>{getStory()}</ThemeProvider>],
    subcomponents: { Button }
};

const templateStyles = {};

const DefaultTemplate = (args) => (
    <ButtonGroup {...args}>
        <Button type="button" kind="primary" variant="small" ghost>
            Button 1
        </Button>
        <Button type="button" kind="primary" variant="small">
            Button 2
        </Button>
        <Button type="button" kind="primary" variant="small">
            Button 3
        </Button>
    </ButtonGroup>
);

export const Default = DefaultTemplate.bind({});
Default.args = {
    styles: templateStyles
};

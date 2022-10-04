import * as React from 'react';
import { ThemeProvider } from '../theme-provider';
import { Toggle, ToggleProps } from './index';
import { BaseProps } from '../types';
import styled from 'styled-components';

export default {
    title: 'Components/Toggle',
    component: Toggle,
    decorators: [(getStory) => <ThemeProvider>{getStory()}</ThemeProvider>]
};

const defaultArgs: BaseProps & ToggleProps = {
    as: 'button',
    testId: 'Toggle',
    kind: 'primary',
    variant: 'medium',
    checked: false,
    disabled: false,
    loading: false
};

const DefaultTemplate = (args) => {
    const [checked, setChecked] = React.useState(false);
    return (
        <Toggle
            {...args}
            checked={checked}
            onClick={() => setChecked(!checked)}
        />
    );
};

export const SingleToggle = (args) => (
    <DefaultTemplate {...args}>Toggle</DefaultTemplate>
);
SingleToggle.args = {
    ...defaultArgs
};

const ButtonRow = styled.div`
    display: flex;
    grid-gap: ${(props) => props.theme.sizes['2']};
`;

export const MultiToggle = (args) => {
    const [option1Checked, setOption1Checked] = React.useState(false);
    const [option2Checked, setOption2Checked] = React.useState(false);

    return (
        <ButtonRow>
            <DefaultTemplate
                {...args}
                checked={option1Checked}
                onClick={() => setOption1Checked(!option1Checked)}
            >
                Option 1
            </DefaultTemplate>
            <DefaultTemplate
                {...args}
                checked={option2Checked}
                onClick={() => setOption2Checked(!option2Checked)}
            >
                Option 2
            </DefaultTemplate>
        </ButtonRow>
    );
};
MultiToggle.args = {
    ...defaultArgs
};
